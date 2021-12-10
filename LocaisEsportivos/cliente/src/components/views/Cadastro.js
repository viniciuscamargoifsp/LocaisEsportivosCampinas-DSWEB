import React from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from "yup";

const Cadastro = () => {

  const handleClickCadastro = (values) => {
    Axios.post("http://localhost:3001/cadastro", {
      nome: values.nome,
      email: values.email,
      senha: values.senha
    }).then((response)=>{
      alert(response.data.msg);
      console.log(response);
    });
  }

  const validacaoCadastro = yup.object().shape({
    nome: yup
    .string().min(3, "O nome deve ter ao menos 3 caracteres").required("Campo nome é obrigatório"),
    email: yup
    .string().email("Email inválido").required("Campo email é obrigatório"),
    senha: yup
    .string().min(6, "A senha deve ter ao menos 6 caracteres").max(12, "A senha deve ter no máximo 12 caracteres").required("Campo senha é obrigatório"),
  });

  return (
  <div>
  
      <nav>
          <ul>
          <li><NavLink to="/" exact>Fotos</NavLink></li>
          <li><NavLink to="/sugestoes" exact>Sugestões</NavLink></li>
          <li><NavLink to="/cadastro" exact><b>Cadastro</b></NavLink></li>
          <li><NavLink to="/login" exact>Login</NavLink></li>
          </ul>
      </nav>
  
      <main>
  
        <article>
        <h2>Cadastro</h2>

        <Formik initialValues={{}}
        onSubmit={handleClickCadastro}
        validationSchema={validacaoCadastro}>
        <Form>
          
          <div id="centralizar">

          <label><b>Nome:</b></label>
          <Field name="nome" placeholder="Nome" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="nome"/>
          <br></br><br></br>

          <label><b>Email:</b></label>
          <Field name="email" placeholder="Example@gmail.com" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="email"/>
          <br></br><br></br>

          <label><b>Senha:</b></label>
          <Field name="senha" type="password" placeholder="Senha" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="senha"/>
          <br></br><br></br>

          <input type="submit" value="Cadastrar"></input>
           
          </div>

        </Form>
        </Formik>
          
        </article>
  
      </main>
  
  </div>

  );
}

export default Cadastro;