import React from "react";
import "./Home.css";
import { Link,  } from "react-router-dom";

export function Home(props) {
  function goToLogin() {
    props.changeActiveFunction.current({target:{href:'site/Login'}});
  }
  return (
    <div className="background d-flex ">
      <div className="d-flex flex-column">
        <div className="imgcontainer d-flex flex-column">
          <img className="logo" alt="logo" src="/homelogo.jpg" />
        </div>

          {!props.loggedIn && <Link to="/Login" onClick={goToLogin}>
            <button className="logar mx-auto" >Entrar</button>
          </Link>}
      </div>
    </div>
  );
}
