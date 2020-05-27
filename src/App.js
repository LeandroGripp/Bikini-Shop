import React, { useState } from "react";
import "./App.css";
import { Routes } from "./Routes";
import {Footer} from "./Components/Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn"))||false);
  const [loginName, setLoginName] = useState(localStorage.getItem("loginName")||"");
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [
    {
      username: "master",
      password: "master",
      email: "master@bailswimwear.com.br",
      cargo: "Presidente",
    },
  ]; //

  function addProduto(produto) {
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  function editProduto(produto) {
    let indexToEdit;
    produtos.forEach((item, index) => {
      if (item.ref === produto.ref && item.size === produto.size) {
        indexToEdit = index;
      }
    });
    produtos[indexToEdit] = produto;
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  function removeProduto(produto) {
    let indexToEdit;
    produtos.forEach((item, index) => {
      if (item.ref === produto.ref && item.size === produto.size) {
        indexToEdit = index;
      }
    });
    produtos.splice(indexToEdit, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  function addCadastro(cadastro) {
    
    cadastros.push(cadastro); 
    localStorage.setItem("cadastros", JSON.stringify(cadastros)); 
  } 

  function doLogin(username) {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", JSON.stringify(true));
    setLoginName(username);
    localStorage.setItem("loginName", username);
  }
  function logout() {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setLoginName("");
    localStorage.setItem("loginName", "");
  }

  return (
    <div className="App">
      <Routes
        className="mainContainer"
        produtos={produtos}
        addProduto={addProduto}
        editProduto={editProduto}
        removeProduto={removeProduto}
        cadastros={cadastros}
        addCadastro={addCadastro}
        loggedIn={loggedIn}
        loginName={loginName}
        doLogin={doLogin}
        logout={logout}
      />
      <Footer/>
    </div>
  );
}

export default App;
