import React, { useState, useEffect } from "react";
import "./Produto.css";
import Swal from "sweetalert2";

export function Produto(props) {
  const [editing, setEditing] = useState(false);
  const codigo = (props.produto.ref);
  const [nome, setNome] = useState(props.produto.name);
  const [descricao, setDescricao] = useState(props.produto.description);
  const tamanho = (props.produto.size);
  const [preco, setPreco] = useState(props.produto.price);
  const [tipo, setTipo] = useState(props.produto.type);
  const [unidades, setUnidades] = useState(props.produto.units);


  //LÓGICA DE INICIALIZAÇÃO PARA ATUALIZAR OS STATES EM CASO DE EXCLUSÃO DE UM ELEMENTO
  useEffect(() => {
    setNome(props.produto.name);
    return; 
  },[props.produto.name]);
  useEffect(() => {
    setDescricao(props.produto.description);
    return; 
  },[props.produto.description]);
  useEffect(() => {
    setPreco(props.produto.price);
    return; 
  },[props.produto.price]);
  useEffect(() => {
    setTipo(props.produto.type);
    return; 
  },[props.produto.type]);
  useEffect(() => {
    setUnidades(props.produto.units);
    return; 
  },[props.produto.units]);
  //FIM DA LÓGICA DE INICIALIZAÇÃO PARA ATUALIZAR OS STATES EM CASO DE EXCLUSÃO DE UM ELEMENTO

  function handleChangePreco(event) {
    setPreco(event.target.value);
  }
  function handleChangeNome(event) {
    setNome(event.target.value);
  }
  function handleChangeDescricao(event) {
    setDescricao(event.target.value);
  }
  function handleChangeTipo(event) {
    setTipo(event.target.value);
  }
  function handleChangeUnidades(event) {
    setUnidades(event.target.value);
  }

  function handleEditClick() {
    setEditing(true);
  }
  function handleDeleteClick() {
    const customDialog = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    customDialog.fire({
      title: 'Tem certeza que deseja apagar esse produto?',
      text: "Essa ação não pode ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, apague!',
      cancelButtonText: 'Não, cancele!',
      reverseButtons: true
    }).then((result) => {
      if(result.value) {
        deleteItem();
      } else {
        console.log('not deleted');
      } 
    })
  }
  function deleteItem() {
    const produtoARemover = {
      name: nome,
      description: descricao,
      ref: codigo,
      size: tamanho,
      price: preco,
      type: tipo,
      units: unidades
    };
    props.removeProduto(produtoARemover);
    props.update();
  }
  function handleSaveClick() {
    const produtoAEditar = {
      name: nome,
      description: descricao,
      ref: codigo,
      size: tamanho,
      price: preco,
      type: tipo,
      units: unidades
    };
    props.editProduto(produtoAEditar);
    setEditing(false);
  }

  if (editing) {
    return (
      <div className="d-flex align-items-center justify-content-between">
        <div className="row product-header product-container py-3 px-0 my-1 ">
          <div className="col-1 px-0">{codigo}</div>
          <div className="col-2 px-0">
            <input value={nome} type="text" onChange={handleChangeNome}></input>
          </div>
          <div className="col-3 px-0">
            <input
              value={descricao}
              type="text"
              onChange={handleChangeDescricao}
            ></input>
          </div>
          <div className="col-2 px-0">
            <select value={tipo} onChange={handleChangeTipo}>
              <option>Biquini</option>
              <option>Maiô</option>
              <option>Canga</option>
              <option>Saia de Praia</option>
              <option>Promoção</option>
            </select>
          </div>
          <div className="col-1 px-0">{tamanho}</div>
          <div className="col-2 px-0">
            <input
              value={preco}
              type="number"
              onChange={handleChangePreco}
            ></input>
          </div>
          <div className="col-1 px-0">
            <input
              value={unidades}
              type="number"
              onChange={handleChangeUnidades}
            ></input>
          </div>
        </div>
        <span className="product-btn material-icons" onClick={handleSaveClick}>
          save_alt
        </span>
      </div>
    );
  } else {
    return (
      <div className="d-flex align-items-center justify-content-between">
        <div className="row product-header product-container py-3 px-0 my-1 ">
          <div className="col-1 px-0">{codigo}</div>
          <div className="col-2 px-0">{nome}</div>
          <div className="col-3 px-0">{descricao}</div>
          <div className="col-2 px-0">{tipo}</div>
          <div className="col-1 px-0">{tamanho}</div>
          <div className="col-2 px-0">{preco}</div>
          <div className="col-1 px-0">{unidades}</div>
        </div>
        <span className="product-btn material-icons" onClick={handleEditClick}>
          edit
        </span>
        <span className="product-btn material-icons" onClick={handleDeleteClick}>delete</span>
      </div>
    );
  }
}
