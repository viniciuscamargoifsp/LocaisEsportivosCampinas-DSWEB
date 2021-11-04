import React from 'react';
import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';

const CadastrarLocais = () => {
  return (
  <div>

    <nav>
        <ul>
        <li><NavLink to="/" exact>Início</NavLink></li>
        <li><NavLink to="/cadastrarlocais" exact><b>Cadastrar</b></NavLink></li>
        <li><NavLink to="/galeriafotos" exact>Fotos</NavLink></li>
        <li><NavLink to="/logout" exact>Logout</NavLink></li>
        </ul>
    </nav>

    <main>

      <article>
        <h2>Cadastrar Locais</h2>
        
        <div id="centralizar">

        
        <label for="nomeLocalId"><b>Nome:</b></label>
        <input class="alinhar" type="text" id="nomeLocalId" placeholder="Nome do local" required></input><br></br><br></br>
        <label for="enderecoLocalId"><b>Endereço:</b></label>
        <input type="text" id="enderecoLocalId" placeholder="Endereço do local" required></input><br></br><br></br>
        <label for="descricaoLocalId"><b>Descrição:</b></label>
        <textarea rows="8" cols="54" id="descricaoLocalId" placeholder="Descrição do local" required></textarea><br></br><br></br>
        <label for="fotoLocalId"><b>Foto:</b></label>
        <input class="alinhar" type="file" id="fotoLocalId" required></input><br></br><br></br>
        
        <br></br>
        <input type="submit" id="btnCadastrarLocalId" onClick="" value="Cadastrar"></input> 
        </div>
 
      </article>

    </main>
  
  </div>

    );
}

export default CadastrarLocais;