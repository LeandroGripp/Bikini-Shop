import React from "react";

import "./App.css";
import { Routes } from "./Routes";

function App() {
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  function addProduto(produto) {
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  function editProduto(produto) {
    console.log(produto);
    let indexToEdit;
    produtos.forEach((item, index) => {
      if(item.ref === produto.ref && item.size === produto.size) {
        indexToEdit = index;
      }
    });
    console.log(indexToEdit);
    produtos[indexToEdit] = produto;
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  return (
    <div className="App">
      <Routes
        className="mainContainer"
        produtos={produtos}
        addProduto={addProduto}
        editProduto={editProduto}
      />
    </div>
  );
}

export default App;
