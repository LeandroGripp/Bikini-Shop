import React, { useState } from "react";

import "./App.css";
import { Routes } from "./Routes";
import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  const produtos = (JSON.parse(sessionStorage.getItem("produtos")) || []);

  function addProduto(produto) {
    produtos.push(produto);
    sessionStorage.setItem("produtos", JSON.stringify(produtos));
  }
  return (
    <div className="App">
      <Navigation />
      <div className="routesContainer">
        <Routes
          className="mainContainer"
          produtos={produtos}
          addProduto={addProduto}
        />
      </div>
    </div>
  );
}

export default App;
