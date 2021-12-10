import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    nomelocal: props.nomelocal,
    endereco: props.endereco,
    descricao: props.descricao,
    ano: props.ano,
    urlimagem: props.urlimagem,
  });

  const handleEditarValores = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditarLocal = () => {
    Axios.put("http://localhost:3001/editarLocal", {
      id: editValues.id,
      nomelocal: editValues.nomelocal,
      endereco: editValues.endereco,
      descricao: editValues.descricao,
      ano: editValues.ano,
      urlimagem: editValues.urlimagem,
    });

    handleClose();
  };

  const handleApagarLocal = () => {
    Axios.delete(`http://localhost:3001/deletarLocal/${editValues.id}`);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
      >
        <DialogTitle>Editar o Local esportivo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomelocal"
            label="Nome do local"
            defaultValue={props.nomelocal}
            type="text"
            onChange={handleEditarValores}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="endereco"
            label="Endereço do local"
            defaultValue={props.endereco}
            type="text"
            onChange={handleEditarValores}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="descricao"
            label="Descrição do local"
            defaultValue={props.descricao}
            type="text"
            onChange={handleEditarValores}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="ano"
            label="Ano de fundação do local"
            defaultValue={props.ano}
            type="number"
            onChange={handleEditarValores}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="urlimagem"
            label="URL da foto do local"
            defaultValue={props.urlimagem}
            type="url"
            onChange={handleEditarValores}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={() => handleApagarLocal()}>
            Apagar
          </Button>
          <Button onClick={() => handleEditarLocal()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}