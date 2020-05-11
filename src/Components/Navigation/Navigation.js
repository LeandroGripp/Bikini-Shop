import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Navigation.css'

export function Navigation(props) {
  
  return (
      <Navbar className="navigationBar" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Bikini shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Estoque">Estoque</Nav.Link>
            <Nav.Link href="/CadastroUsuario">Cadastro Usuário</Nav.Link>
            <Nav.Link href="/CadastroProduto">Cadastro Produto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item className="loginStatus" href="#">You are not logged in</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
