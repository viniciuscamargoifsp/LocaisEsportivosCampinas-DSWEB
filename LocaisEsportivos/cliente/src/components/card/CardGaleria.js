import React from "react";

export default function CardGaleria(props){
    return (
      <div className="card--container">
      <h3 className="card--local">{props.local}</h3>
      <p className="card--cidade"><b>Cidade: </b>{props.cidade}</p>
      <img className="card--imagem1" src={props.urlfoto1} alt={props.local} width="600" height="400"></img><br></br><br></br>
      <img className="card--imagem2" src={props.urlfoto2} alt={props.local} width="600" height="400"></img><br></br><br></br>
      
      </div>
    );

}