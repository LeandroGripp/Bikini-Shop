import React from "react";

import "./App.css";
import { Routes } from "./Routes";

function App() {

  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []; //

  function addProduto(produto) {
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  function editProduto(produto) {
    let indexToEdit;
    produtos.forEach((item, index) => {
      if(item.ref === produto.ref && item.size === produto.size) {
        indexToEdit = index;
      }
    });
    produtos[indexToEdit] = produto;
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  function removeProduto(produto) {
    let indexToEdit;
    produtos.forEach((item, index) => {
      if(item.ref === produto.ref && item.size === produto.size) {
        indexToEdit = index;
      }
    });
    produtos.splice(indexToEdit, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  function addCadastro(cadastro){ //
    cadastro.push(cadastro); //
    localStorage.setItem("cadastros", JSON.stringify(cadastros)); //
  } //

  return (
    <div className="App">
      <Routes
        className="mainContainer"
        produtos={produtos}
        addProduto={addProduto}
        editProduto={editProduto}
        removeProduto={removeProduto}
    
        cadastro={cadastros}      
        addCadastro={addCadastro} 



      />
    </div>
  );
}

export default App;
