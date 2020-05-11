import React, {useState} from "react";

import "./App.css";
import { Routes } from "./Routes";
import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  const [produtos, setProdutos] = useState([]);
  function addProduto(produto) {
    let buffer = [...produtos];
    buffer.push(produto);
    setProdutos(buffer);
  }

  console.log(produtos);

  return (
  <div className="App">
    <Navigation />
    <div className="routesContainer">
      <Routes className="mainContainer" produtos={produtos} addProduto={addProduto} />
    </div>
  </div>
  );
}

export default App;
