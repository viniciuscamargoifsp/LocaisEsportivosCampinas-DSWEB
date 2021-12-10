import React, {useEffect, useState} from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import CardInicio from '../card/CardInicio';

const Inicio = () => {

  const [listarLocais, setListarLocais] = useState();

  useEffect(()=>{
    Axios.get("http://localhost:3001/inicio").then((response)=>{
  
      setListarLocais(response.data);
    });
  
  }, []);


  return (
  <div>
        <nav>
            <ul>
              <li><NavLink to="/inicio" exact><b>Início</b></NavLink></li>
              <li><NavLink to="/cadastrarlocais" exact>Cadastrar</NavLink></li>
              <li><NavLink to="/logout" exact>Logout</NavLink></li>
            </ul>

        </nav>

    <main>  

      <article>
        <h2>Locais Esportivos de Campinas</h2>

        {console.log(listarLocais)}
        {typeof listarLocais !== "undefined" && listarLocais.map((value)=>{
         return <CardInicio 
         key={value.idlocal}
         listCard={listarLocais}
         setListCard={setListarLocais}
         id={value.idlocal}
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