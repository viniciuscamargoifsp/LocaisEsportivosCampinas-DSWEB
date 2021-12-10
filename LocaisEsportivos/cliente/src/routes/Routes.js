import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Inicio from "../components/views/Inicio";
import GaleriaFotos from "../components/views/GaleriaFotos";
import Sugestoes from "../components/views/Sugestoes";
import Cadastro from "../components/views/Cadastro";
import Login from "../components/views/Login";
import CadastrarLocais from "../components/views/CadastrarLocais";
import Logout from "../components/views/Logout";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { GaleriaFotos }  path="/" exact />
           <Route component = { Inicio }  path="/inicio" exact />
           <Route component = { Sugestoes }  path="/sugestoes" exact />
           <Route component = { Cadastro }  path="/cadastro" exact />
           <Route component = { Login }  path="/login" exact />
           <Route component = { CadastrarLocais }  path="/cadastrarlocais" exact />
           <Route component = { Logout }  path="/logout" exact />
       </BrowserRouter>
   )
}

export default Routes;