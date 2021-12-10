const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
let port = 3001;


const db= mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'locaisEsportivos'
});

app.use(cors());
app.use(express.json());

app.post("/cadastro", (req,res)=>{
	const nome = req.body.nome;
	const email = req.body.email;
	const senha = req.body.senha;

	db.query("select * from usuario where email = ?", [email], 
	(err, result)=>{
		if(err){
			res.send(err);
		}
		if (result.length == 0){
			db.query("insert into usuario (nomeusuario, email, senha) values (?, ?, ?)", [nome, email, senha],
			(err, response)=>{
				if(err){
					res.send(err);
				}
				
				res.send({msg: "Cadastro realizado com sucesso!"});
			});
		}else{
			res.send({msg: "Esse email já foi cadastrado! Tente cadastrar com outro email."});
		}
	})
});

app.post("/cadastrarlocais", (req,res)=>{
	const nomelocal = req.body.nomelocal;
	const endereco = req.body.endereco;
	const descricao = req.body.descricao;
	const ano = req.body.ano;
	const urlimagem = req.body.urlimagem;

	db.query("insert into locais (nomelocal, endereco, descricao, ano, urlimagem) values (?, ?, ?, ?, ?)", [nomelocal, endereco, descricao, ano, urlimagem],
	(err, response)=>{
				if(err){
					res.send(err);
				}else{
				    res.send({msg: "Cadastro do local realizado com sucesso!"});
			}
    })
});

app.post("/login", (req,res)=>{
	const email = req.body.email;
	const senha = req.body.senha;

	db.query("select * from usuario where email = ? and senha = ?", [email,senha], (err, result)=>{
		if(err){
			res.send(err);
		}
		if(result.length > 0){
			res.send({msg: "Login realizado com sucesso!"});
		}else{
			res.send({msg: "A conta informada não foi encontrada! Verifique o email e a senha."});
		}
	})
	
});

app.get("/inicio", (req,res)=>{
    let sql = "select * from locais";
	db.query(sql, (err, result)=>{
          if(err) console.log(err);
		  else res.send(result);
	})
});

app.get("/", (req,res)=>{
    let sql = "select * from galeriafotos";
	db.query(sql, (err, result)=>{
          if(err) console.log(err);
		  else res.send(result);
	})
});

app.put("/editarLocal", (req, res)=>{
	const {id} = req.body;
	const {nomelocal} = req.body;
	const {endereco} = req.body;
	const {descricao} = req.body;
	const {ano} = req.body;
	const {urlimagem} = req.body;

	let sql = "update locais set nomelocal = ?, endereco = ?, descricao = ?, ano = ?, urlimagem = ? where idlocal = ?";

	db.query(sql, [nomelocal, endereco, descricao, ano, urlimagem, id], (err, result)=>{
		if(err) console.log(err);
		else res.send(result);
  });
});

app.delete("/deletarLocal/:id", (req, res)=>{
	const {id} = req.params;

	let sql = "delete from locais where idlocal = ?";

	db.query(sql, [id], (err, result)=>{
		if(err) console.log(err);
		else res.send(result);
	});
});

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});