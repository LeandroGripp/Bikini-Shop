import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation(props) {
  const extension = window.location.href.substring(
    window.location.href.indexOf("/", 7) + 1
  );
  const [active, setActive] = useState({
    Login: extension === "Login",
    Estoque: extension === "Estoque",
    CadastroUsuario: extension === "CadastroUsuario",
    CadastroProduto: extension === "CadastroProduto",
  });
  const [navExpanded, setNavExpanded] = useState(false);

  function chooseActive(event) {
    let buffer = {
      Login: false,
      Estoque: false,
      CadastroUsuario: false,
      CadastroProduto: false,
    };
    const substIndex = event.target.href.lastIndexOf("/") + 1;
    const newActive = event.target.href.substring(substIndex);
    buffer[newActive] = true;
    setActive(buffer);
    setNavExpanded(false);
  }

  function toggleNavbar() {
    setNavExpanded(!navExpanded);
  }
  function renderLoginMessage() {
    /* {props.loggedIn? "Você está logado como ":"Você não está logado"}
            <strong>{props.loggedIn && props.loginName}</strong> */
    if (props.loggedIn) {
      return (
        <div className="d-flex align-items-center justify-content-center">
          <p className="m-0">Você está logado como <strong>{props.loginName}</strong></p>
          <span className="material-icons exit-btn" onClick={props.logout}>exit_to_app</span>
        </div>
      );
    } else {
      return "Você não está logado";
    }
  }

  return (
    <Navbar
      className="navigationBar"
      collapseOnSelect
      expand="lg"
      expanded={navExpanded}
    >
      <Link className="NavTitle" to="/">
        <img className="navbrand-logo" src="./icone.png" alt="logo" />
        Bali Swimwear
      </Link>
      <Navbar.Toggle
        className="toggle-btn"
        aria-controls="responsive-navbar-nav"
        onClick={toggleNavbar}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link
            to="/Login"
            onClick={chooseActive}
            className={"navlink p-2 " + (active.Login && "active")}
          >
            Login
          </Link>
          <Link
            to="/CadastroUsuario"
            onClick={chooseActive}
            className={"navlink p-2 " + (active.CadastroUsuario && "active")}
          >
            Cadastro Usuário
          </Link>
          <Link
            to="/CadastroProduto"
            onClick={chooseActive}
            className={"navlink p-2 " + (active.CadastroProduto && "active")}
          >
            Cadastro Produto
          </Link>
          <Link
            to="/Estoque"
            onClick={chooseActive}
            className={"navlink p-2 " + (active.Estoque && "active")}
          >
            Estoque
          </Link>
        </Nav>
        <Nav>
          <Nav.Item className="loginStatus" href="#">
            {renderLoginMessage()}
            {/* {props.loggedIn? "Você está logado como ":"Você não está logado"}
            <strong>{props.loggedIn && props.loginName}</strong> */}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
