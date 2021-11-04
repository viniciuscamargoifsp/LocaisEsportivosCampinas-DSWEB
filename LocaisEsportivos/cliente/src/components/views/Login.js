import React from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";



const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const loginUser = data => console.log(data);

  return (
  <div>

    <nav>
        <ul>
        <li><NavLink to="/" exact>Início</NavLink></li>
        <li><NavLink to="/galeriafotos" exact>Fotos</NavLink></li>
        <li><NavLink to="/sugestoes" exact>Sugestões</NavLink></li>
        <li><NavLink to="/cadastro" exact>Cadastro</NavLink></li>
        <li><NavLink to="/login" exact><b>Login</b></NavLink></li>
        </ul>
    </nav>

    <main>

      <article>
        <h2>Login</h2>
        
        <div id="centralizar">
        <form onSubmit = { handleSubmit(loginUser) } >
        
        <label><b>Email:</b></label>
        <input type="email" id="emailLoginId" placeholder="Example@gmail.com" {...register("emailLogin", { required: true })}/><br></br><br></br>

        <label><b>Senha:</b></label>
        <input type="password" id="senhaLoginId" name="senhaLogin" placeholder="Senha" { ... register("senha", {required: "A senha precisa ter no mínimo 6 caracteres", minLength: 6 
        })} /><br></br><br></br>


        

        <br></br>
        <input type="submit" value="Logar"></input>
        </form>
        </div>

      </article>

    </main>

  </div>

  );
}

export default Login;