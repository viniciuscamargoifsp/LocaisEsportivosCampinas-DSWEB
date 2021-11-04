import React, {useEffect, useState} from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import CardInicio from '../card/CardInicio';

const Inicio = () => {
  const [listarLocais, setListarLocais] = useState();

  useEffect(()=>{
    Axios.get("http://localhost:3001/").then((response)=>{
  
      setListarLocais(response.data);
    });
  
  }, []);


  return (
  <div>
        <nav>
            <ul>
              <li><NavLink to="/" exact><b>Início</b></NavLink></li>
              <li><NavLink to="/galeriafotos" exact>Fotos</NavLink></li>
              <li><NavLink to="/sugestoes" exact>Sugestões</NavLink></li>
              <li><NavLink to="/cadastro" exact>Cadastro</NavLink></li>
              <li><NavLink to="/login" exact>Login</NavLink></li>
            </ul>

            <form>
             <input type="search" name="busca" placeholder="Buscar um local"></input>
             <input type="submit" onClick="" value="Buscar"></input>
            </form>

        </nav>

    <main>  

      <article>
        <h2>Locais Esportivos de Campinas</h2>

        {typeof listarLocais !== "undefined" && listarLocais.map((value)=>{
         return <CardInicio 
         key={value.id}
         listCard={listarLocais}
         setListCard={setListarLocais}
         id={value.id}
         nomelocal={value.nomelocal}
         endereco={value.endereco}
         descricao={value.descricao}
         ano={value.ano}
         urlimagem={value.urlimagem}></CardInicio>;
        })}
        
      </article>

      <aside>
 
      </aside>

    </main>

  </div>
  );
}

export default Inicio;