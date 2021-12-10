import '../../style/Estilo.css';
import { NavLink } from 'react-router-dom';

const Sugestoes = () => {

  return (
   <div>

    <nav>
        <ul>
        <li><NavLink to="/" exact>Fotos</NavLink></li>
        <li><NavLink to="/sugestoes" exact><b>Sugestões</b></NavLink></li>
        <li><NavLink to="/cadastro" exact>Cadastro</NavLink></li>
        <li><NavLink to="/login" exact>Login</NavLink></li>
        </ul>
    </nav>

    <main>

      <article>
        <h2>Sugestões</h2>
        
        <div id="centralizar">

        <form action="http://formmail.kinghost.net/formmail.cgi" method="POST"> 
        <input type="hidden" name="recipient" value="guilherme.fer.moro@gmail.com"/>  
        <input type="hidden" name="subject" value="Mensagem de sugestão"/>  
        <input type="hidden" name="email" value="projetowebif@gmail.com"/>
        <input type="hidden" name="redirect" value="http://localhost:3000/"/>

        <label for="nomeId"><b>Nome:</b></label>
        <input type="text" minLength="3" maxLength="60" name="nome" id="nomeId" placeholder="Nome" required></input><br></br><br></br>

        <label for="emailId"><b>Email:</b></label>
        <input type="email" name="replyto" id="emailId" placeholder="Example@gmail.com" required></input><br></br><br></br>

        <label for="comentarioId"><b>Texto:</b></label>
        <textarea rows="8" cols="54" maxLength="100" name="comentario" id="comentarioId" placeholder="Escreva as suas sugestões aqui..." required></textarea><br></br>

        <br></br>
        <input type="submit" name="btEnviar" value="Enviar"></input>

        </form>
         
        </div>
 
      </article>

    </main>

  </div>

);
}

export default Sugestoes;