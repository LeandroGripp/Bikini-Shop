import React, {useState} from "react";
import "./CadastroProduto.css";



export function CadastroProduto(props) {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [tamanho, setTamanho] = useState('PP');
  const [preco, setPreco] = useState(0);
  const [tipo, setTipo] = useState('');
  const [unidades, setUnidades] = useState(0);
  
  function handleChangeTamanho(event){
    setTamanho(event.target.value); 
  }
  function handleChangePreco(event){
    setPreco(event.target.value);
  }
  function handleChangeNome(event){
    setNome(event.target.value);
  }
  function handleChangeCodigo(event){
    setCodigo(event.target.value);
  }
  function handleChangeTipo(event) {
    setTipo(event.target.value);
  }
  function handleChangeUnidades(event) {
    setUnidades(event.target.value);
  }
  
  function handleButtonClick() {
    let produto = {
      name: nome,      
      ref: codigo,
      size: tamanho,
      price: preco,
      type: tipo,
      units: unidades
    };
    props.addProduto(produto);
  }
  
  return (
    <div className="h-100 d-flex flex-column align-items-center">
      <h1>Novo Produto</h1>
      <div className="d-flex">
        <div className="d-flex flex-column left">
          <label className="text">Nome do produto</label>
          <label className="text">Código de referência</label>
          <label className="text">Tamanho</label>
          <label className="text">Preço</label>
          <label className="text">Tipo de produto</label>
          <label className="text">Unidades</label>
        </div>

        <div className="d-flex flex-column right">
          <ul>
            <input className="mx-3 box" type="text" onChange={handleChangeNome} value={nome}></input>
            <input className="mx-3 box" type="number" onChange={handleChangeCodigo} value={codigo}></input>
            <select className="mx-3 box" onChange={handleChangeTamanho} value={tamanho}>
              {/* <option selected disabled>Selecione o tamanho</option> */}
              <option>PP</option>
              <option>P</option>
              <option>M</option>
              <option>G</option>
              <option>GG</option>
            </select>
            <input className="mx-3 box" type="number" onChange={handleChangePreco} value={preco}></input>
            <input className="mx-3 box" type="text" onChange={handleChangeTipo} value={tipo}></input>
            <input className="mx-3 box" type="number" onChange={handleChangeUnidades} value={unidades}></input>
          </ul>
        </div>
      </div>

      <button className="mbtn btn" onClick={handleButtonClick}>Enviar</button>
    </div>
  );
}
