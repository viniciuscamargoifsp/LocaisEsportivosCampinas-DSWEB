import React from "react";
import FormDialog from "../dialog/dialogForm";

export default function CardInicio(props){

  const [open, setOpen] = React.useState(false);

  const handleClickCard = () =>{
    setOpen(true);
  }

    return (
      <>
      <FormDialog open= {open} setOpen={setOpen}
      nomelocal = {props.nomelocal}
      urlimagem = {props.urlimagem}
      descricao = {props.descricao}
      endereco = {props.endereco}
      ano = {props.ano}
      id = {props.id}
      />
      <div className="card--container">
      <h3 className="card--local" onClick={()=>handleClickCard()}>{props.nomelocal}</h3>
      <img className="card--imagem" width="600" height="400" src={props.urlimagem} alt={props.nomelocal}></img>
      <p className="card--descricao"><b>Descrição: </b>{props.descricao}</p>
      <p className="card--endereco"><b>Endereço: </b>{props.endereco}</p>
      <p className="card--ano"><b>Fundação: </b>{props.ano}</p><br></br><br></br>
      </div>
      </>
    );

}