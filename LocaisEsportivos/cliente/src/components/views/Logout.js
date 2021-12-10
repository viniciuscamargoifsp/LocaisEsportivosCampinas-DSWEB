import React from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Logout = () => {

  function Sair() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }
    return (
      <input type="submit" value="Sair" onClick={handleClick}></input>
    );
  }


  return (
  <div>

    <nav>
        <ul>
        <li><NavLink to="/inicio" exact>Início</NavLink></li>
        <li><NavLink to="/cadastrarlocais" exact>Cadastrar</NavLink></li>
        <li><NavLink to="/logout" exact><b>Logout</b></NavLink></li>
        </ul>
    </nav>

    <main>

      <article>
        <h2>Fazer Logout</h2>
        
        <div id="centralizar">
        
        <br></br>
        <Sair/> 
        </div>
        
 
      </article>

    </main>
  
  </div>

    );
}

export default Logout;