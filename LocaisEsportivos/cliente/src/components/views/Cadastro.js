import React, { useState } from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";

const Cadastro = () => {

  const[values, setValues] = useState();

  const handleChangeValues = (value) =>{
       setValues((prevValue) => ({
         ...prevValue,
         [value.target.name]: value.target.value,

       }));
  };

  const handleClickButton = () =>{
    Axios.post("http://localhost:3001/cadastro", {
      name: values.name,
      email: values.email,
      senha: values.senha
    }).then((response)=>{
      console.log(response);
    });
  };

  return (
  <div>
  
      <nav>
          <ul>
          <li><NavLink to="/" exact>Início</NavLink></li>
          <li><NavLink to="/galeriafotos" exact>Fotos</NavLink></li>
          <li><NavLink to="/sugestoes" exact>Sugestões</NavLink></li>
          <li><NavLink to="/cadastro" exact><b>Cadastro</b></NavLink></li>
          <li><NavLink to="/login" exact>Login</NavLink></li>
          </ul>
      </nav>
  
      <main>
  
        <article>
          <h2>Cadastro</h2>
          
          <div id="centralizar">

  
          <label for="nomeCadastroId"><b>Nome:</b></label>
          <input type="text" id="nomeCadastroId" name="name" placeholder="Nome completo" onChange={handleChangeValues} required></input><br></br><br></br>
          <label for="emailCadastroId"><b>Email:</b></label>
          <input type="email" id="emailCadastroId" placeholder="Example@gmail.com" name="email" onChange={handleChangeValues} required></input><br></br><br></br>
          <label for="senhaId"><b>Senha:</b></label>
          <input type="password" id="senhaId" minLength="6" placeholder="Senha" name="senha" onChange={handleChangeValues} required></input><br></br><br></br>
          
  
          <br></br>
          <input type="submit" id="btnCadastroId" onClick={()=>handleClickButton()} value="Cadastrar"></input> 
          </div>
   
        </article>
  
      </main>
  
  </div>

    );
}

export default Cadastro;