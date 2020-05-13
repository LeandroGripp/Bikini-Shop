import React from "react";

import "./App.css";
import { Routes } from "./Routes";

function App() {
  const produtos = (JSON.parse(sessionStorage.getItem("produtos")) || []);

  function addProduto(produto) {
    produtos.push(produto);
    sessionStorage.setItem("produtos", JSON.stringify(produtos));
  }
  return (
    <div className="App">
        <Routes
          className="mainContainer"
          produtos={produtos}
          addProduto={addProduto}
        />
    </div>
  );
}

export default App;
