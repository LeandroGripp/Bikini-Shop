import React from "react";

import "./App.css";
import { Routes } from "./Routes";

function App() {
  const produtos = JSON.parse(sessionStorage.getItem("produtos")) || [];
  const cadastros = JSON.parse(sessionStorage.getItem("cadastros")) || []; //

  function addProduto(produto) {
    produtos.push(produto);
    sessionStorage.setItem("produtos", JSON.stringify(produtos));
  }

  function addCadastro(cadastro){ //
    cadastro.push(cadastro); //
    sessionStorage.setItem("cadastros", JSON.stringify(cadastros)); //
  } //

  return (
    <div className="App">
      <Routes
        className="mainContainer"
        produtos={produtos}
        addProduto={addProduto}

        cadastro={cadastros}      //
        addCadastro={addCadastro} //
      />
    </div>
  );
}

export default App;
