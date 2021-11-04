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
	const {name} = req.body;
	const {email} = req.body;
	const {senha} = req.body;

	let sql = "insert into usuario (nomeusuario, email, senha) values (?, ?, ?)";
	db.query(sql, [name,email,senha], (err,result)=>{
		console.log(err);
	});
});

app.get("/", (req,res)=>{
    let sql = "select * from locais";
	db.query(sql, (err, result)=>{
          if(err) console.log(err);
		  else res.send(result);
	})
});

app.get("/galeriafotos", (req,res)=>{
    let sql = "select * from galeriafotos";
	db.query(sql, (err, result)=>{
          if(err) console.log(err);
		  else res.send(result);
	})
});

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});