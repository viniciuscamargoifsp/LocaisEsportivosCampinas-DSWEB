import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Inicio from "../components/views/Inicio";
import GaleriaFotos from "../components/views/GaleriaFotos";
import Sugestoes from "../components/views/Sugestoes";
import Cadastro from "../components/views/Cadastro";
import Login from "../components/views/Login";
import CadastrarLocais from "../components/views/CadastrarLocais";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Inicio }  path="/" exact />
           <Route component = { GaleriaFotos }  path="/galeriafotos" exact />
           <Route component = { Sugestoes }  path="/sugestoes" exact />
           <Route component = { Cadastro }  path="/cadastro" exact />
           <Route component = { Login }  path="/login" exact />
           <Route component = { CadastrarLocais }  path="/cadastrarlocais" exact />
       </BrowserRouter>
   )
}

export default Routes;