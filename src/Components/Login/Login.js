import React from "react";
import "./Login.css";
import {
  InputGroup,
  FormControl,
  Button,
  FormGroup,
  FormCheck,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export function Login(props) {
  return (
    <div className="d-flex flex-column align-items-center background">
      <div className="login d-flex flex-column">
        <h1 className="texto">Iniciar sessão</h1>
        <div className="d-flex flex-column">
          <InputGroup className="mb-3">
            <FormControl
              className="input"
              placeholder="NOME DE USUÁRIO"
              aria-label="NOME DE USUÁRIO"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              className="input"
              placeholder="SENHA"
              aria-label="SENHA"
              aria-describedby="basic-addon1"
              type="password"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormGroup controlId="formBasicCheckbox">
              <FormCheck
                className="checkinput"
                type="checkbox"
                label="Manter Login"
              />
            </FormGroup>
          </InputGroup>
          <Link to="/CadastroProduto">
            <Button variant="outline-success" className="lbutton mx-auto">
              Login
            </Button>
          </Link>
          <Link to="/CadastroUsuario">
            <button className="button mbutton mx-auto">CRIAR CONTA</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
