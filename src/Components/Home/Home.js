import React from "react";
import "./Home.css";
import { Link, Redirect } from "react-router-dom";

export function Home(props) {
  function handleLogin(){
    return console.log("testando");
  }
  return (
    <div className="background d-flex ">
      <div className="d-flex flex-column">
        <div className="imgcontainer d-flex flex-column">
          <img className="logo" alt="logo" src="/homelogo.jpg" />
        </div>
          <button onClick={handleLogin}className="logar mx-auto" >Entrar</button>
          <button className="cadastrar mx-auto">Cadastrar</button>
      </div>
    </div>
  );
}
