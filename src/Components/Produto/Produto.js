import React, { useState } from "react";
import "./Produto.css";

export function Produto(props) {
  const [editing, setEditing] = useState(false);
  const codigo = props.produto.ref;
  const [nome, setNome] = useState(props.produto.name);
  const [descricao, setDescricao] = useState(props.produto.description);
  const [tamanho, setTamanho] = useState(props.produto.size);
  const [preco, setPreco] = useState(props.produto.price);
  const [tipo, setTipo] = useState(props.produto.type);
  const [unidades, setUnidades] = useState(props.produto.units);

  function handleChangeTamanho(event) {
    setTamanho(event.target.value);
  }
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
          <div
            className="col-1 px-0"
            value={tamanho}
            onChange={handleChangeTamanho}
          >
            <select>
              <option>PP</option>
              <option>P</option>
              <option>M</option>
              <option>G</option>
              <option>GG</option>
            </select>
          </div>
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
        <span className="product-btn material-icons" onClick={handleEditClick}>
          save_alt
        </span>
        
      </div>
    );
  } else {
    return (
      <div className="d-flex align-items-center justify-content-between">
        <div className="row product-header product-container py-3 px-0 my-1 ">
          <div className="col-1 px-0">{props.produto.ref}</div>
          <div className="col-2 px-0">{props.produto.name}</div>
          <div className="col-3 px-0">{props.produto.description}</div>
          <div className="col-2 px-0">{props.produto.type}</div>
          <div className="col-1 px-0">{props.produto.size}</div>
          <div className="col-2 px-0">{props.produto.price}</div>
          <div className="col-1 px-0">{props.produto.units}</div>
        </div>
        <span className="product-btn material-icons" onClick={handleEditClick}>
          edit
        </span>
        <span class="material-icons">delete</span>
      </div>
    );
  }
}
