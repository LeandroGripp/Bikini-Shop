import React from "react";
import "./Home.css";
import { Link,  } from "react-router-dom";

export function Home(props) {

  return (
    <div className="background d-flex ">
      <div className="d-flex flex-column">
        <div className="imgcontainer d-flex flex-column">
          <img className="logo" alt="logo" src="/homelogo.jpg" />
        </div>
          <Link to="/login">
            <button className="logar mx-auto" >Entrar</button>
          </Link>
          {/* <Link to="/CadastroUsuario">
            <button className="cadastrar mx-auto">Cadastrar</button>
          </Link> */}
      </div>
    </div>
  );
}
