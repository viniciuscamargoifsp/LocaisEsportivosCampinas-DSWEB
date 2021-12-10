import React from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from "yup";

const CadastrarLocais = () => {

  const handleClickCadastroLocais = (values) => {
    Axios.post("http://localhost:3001/cadastrarlocais", {
      nomelocal: values.nomelocal,
      endereco: values.endereco,
      descricao: values.descricao,
      ano: values.ano,
      urlimagem: values.urlimagem
    }).then((response)=>{
      alert(response.data.msg);
      console.log(response);
    });
  }

  const validacaoCadastroLocais = yup.object().shape({
    nomelocal: yup
    .string().min(3, "O nome do local deve ter ao menos 3 caracteres").required("Campo nome do local é obrigatório"),
    endereco: yup
    .string().min(5, "O endereço deve ter ao menos 5 caracteres").required("Campo endereço é obrigatório"),
    descricao: yup
    .string().required("Campo descrição é obrigatório"),
    ano: yup
    .number().required("Campo ano é obrigatório"),
    urlimagem: yup
    .string().required("Campo URL da foto é obrigatório"),
  });

  return (
  <div>

    <nav>
        <ul>
        <li><NavLink to="/inicio" exact>Início</NavLink></li>
        <li><NavLink to="/cadastrarlocais" exact><b>Cadastrar</b></NavLink></li>
        <li><NavLink to="/logout" exact>Logout</NavLink></li>
        </ul>
    </nav>

    <main>

      <article>
        <h2>Cadastrar Locais</h2>

        <Formik initialValues={{}}
        onSubmit={handleClickCadastroLocais}
        validationSchema={validacaoCadastroLocais}>
        <Form>
          
          <div id="centralizar">

          <label><b>Nome:</b></label>
          <Field name="nomelocal" placeholder="Nome do local" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="nomelocal"/>
          <br></br><br></br>

          <label><b>Endereço:</b></label>
          <Field name="endereco" placeholder="Endereço do local" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="endereco"/>
          <br></br><br></br>

          <label><b>Descrição:</b></label>
          <Field name="descricao" placeholder="Descrição do local" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="descricao"/>
          <br></br><br></br>

          <label><b>Ano:</b></label>
          <Field name="ano" placeholder="Ano de fundação do local" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="ano"/>
          <br></br><br></br>

          <label><b>Foto:</b></label>
          <Field name="urlimagem" placeholder="URL da foto do local" className="camposCadastro"/><br></br>
          <ErrorMessage component="span" name="urlimagem"/>
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

export default CadastrarLocais;