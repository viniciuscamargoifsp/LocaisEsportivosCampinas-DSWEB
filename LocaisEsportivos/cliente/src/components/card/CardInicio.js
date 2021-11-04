import React from "react";

export default function CardInicio(props){
    return (
      <div className="card--container">
      <h3 className="card--local">{props.nomelocal}</h3>
      <img className="card--imagem" src={props.urlimagem} alt={props.nomelocal}></img>
      <p className="card--descricao"><b>Descrição: </b>{props.descricao}</p>
      <p className="card--endereco"><b>Endereço: </b>{props.endereco}</p>
      <p className="card--ano"><b>Fundação: </b>{props.ano}</p><br></br><br></br>
      </div>
    );

}