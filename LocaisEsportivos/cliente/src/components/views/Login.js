import React from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const Login = () => {

  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      senha: values.senha
    }).then((response)=>{
      alert(response.data.msg);
    });
  }
  

  const validacaoLogin = yup.object().shape({
    email: yup
    .string().email("Email inválido").required("Campo email é obrigatório"),
    senha: yup
    .string().min(6, "A senha deve ter ao menos 6 caracteres").max(12, "A senha deve ter no máximo 12 caracteres").required("Campo senha é obrigatório"),
  });


  function TelaInicio() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/inicio");
    }
    return (
      <input type="submit" value="Logar" onClick={handleClick}></input>
    );
  }


  return (
  <div>

    <nav>
        <ul>
        <li><NavLink to="/" exact>Fotos</NavLink></li>
        <li><NavLink to="/sugestoes" exact>Sugestões</NavLink></li>
        <li><NavLink to="/cadastro" exact>Cadastro</NavLink></li>
        <li><NavLink to="/login" exact><b>Login</b></NavLink></li>
        </ul>
    </nav>

    <main>

      <article>
        <h2>Login</h2>
        
        <Formik initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validacaoLogin}>
        <Form>
          
          <div id="centralizar">

          <label><b>Email:</b></label>
          <Field name="email" placeholder="Example@gmail.com" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="email"/>
          <br></br><br></br>

          <label><b>Senha:</b></label>
          <Field name="senha" type="password" placeholder="Senha" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="senha"/>
          <br></br><br></br>
          
          <TelaInicio/>
           
          </div>

        </Form>
        </Formik>

      </article>

    </main>

  </div>

  );
}

export default Login;