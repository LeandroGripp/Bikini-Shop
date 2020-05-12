import React, { useState } from "react";

import "./App.css";
import { Routes } from "./Routes";
import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  const [produtos, setProdutos] = useState(
    JSON.parse(sessionStorage.getItem("produtos"))
  );
  if(produtos === null) setProdutos([]);
  function addProduto(produto) {
    let buffer;
    if (produtos !== null) buffer = [...produtos];
    else buffer = [];
    buffer.push(produto);
    sessionStorage.setItem("produtos", JSON.stringify(buffer));
    setProdutos(buffer);
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
