import React, {useEffect, useState} from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import CardGaleria from '../card/CardGaleria';

const GaleriaFotos = () => {
  const [listarFotos, setListarFotos] = useState();

  useEffect(()=>{
    Axios.get("http://localhost:3001/").then((response)=>{
  
      setListarFotos(response.data);
    });
  
  }, []);

  return (
  <div>

    <nav>
      <ul>
      <li><NavLink to="/" exact><b>Fotos</b></NavLink></li>
      <li><NavLink to="/sugestoes" exact>Sugestões</NavLink></li>
      <li><NavLink to="/cadastro" exact>Cadastro</NavLink></li>
      <li><NavLink to="/login" exact>Login</NavLink></li>
      </ul>
    </nav>

    <main>

      <article>
        <h2>Fotos de Locais Esportivos de Campinas e região</h2>

        {typeof listarFotos !== "undefined" && listarFotos.map((value)=>{
         return <CardGaleria 
         key={value.id}
         listCard={listarFotos}
         setListCard={setListarFotos}
         id={value.id}
         local={value.local}
         cidade={value.cidade}
         urlfoto1={value.urlfoto1}
         urlfoto2={value.urlfoto2}
         ></CardGaleria>;
        })}
      </article>

      <aside>
 
      </aside>

    </main>

</div>

);
}

export default GaleriaFotos;