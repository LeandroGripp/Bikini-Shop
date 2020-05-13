import React, {useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Navigation.css'
import {Link} from 'react-router-dom';

export function Navigation(props) {
  const [active, setActive]= useState({
    Login:false,
    Estoque:false,
    CadastroUsuario:false,
    CadastroProduto:false
  });
  function chooseActive(event) {
    let buffer = {
      Login:false,
      Estoque:false,
      CadastroUsuario:false,
      CadastroProduto:false
    };
    const substIndex = event.target.href.indexOf('/', 7) + 1;
    const newActive = event.target.href.substring(substIndex);
    buffer[newActive] = true;
    setActive(buffer);
  }
  return (
      <Navbar className="navigationBar" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Bikini shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/Login" onClick={chooseActive} className={"navlink p-2 " + (active.Login&&"active")}>Login</Link>
            <Link to="/Estoque" onClick={chooseActive} className={"navlink p-2 " + (active.Estoque&&"active")}>Estoque</Link>
            <Link to="/CadastroUsuario" onClick={chooseActive} className={"navlink p-2 " + (active.CadastroUsuario&&"active")}>Cadastro Usuário</Link>
            <Link to="/CadastroProduto" onClick={chooseActive} className={"navlink p-2 " + (active.CadastroProduto&&"active")}>Cadastro Produto</Link>
          </Nav>
          <Nav>
            <Nav.Item className="loginStatus" href="#">You are not logged in</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
