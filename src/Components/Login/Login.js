import React, {useState} from "react";
import "./Login.css";
import {
  InputGroup,
  FormControl,
  Button,
  FormGroup,
  FormCheck,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleLoginClick(event) {
    
    let userExists = props.cadastros.some(registeredUser => {
      return (registeredUser.username === username && registeredUser.password === password);
    });
    if(userExists) {
      props.doLogin(username);
      setUsername('');
      setPassword('');
      history.push('/');
    }
    else {
      Swal.fire("Erro!!", "Usuário ou senha incorreto", "error");
      setUsername('');
      setPassword('');
    }
    props.changeActiveFunction.current({target:{href: 'site/'}})
  }

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
              value={username}
              onChange={handleUsernameChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              className="input"
              placeholder="SENHA"
              aria-label="SENHA"
              aria-describedby="basic-addon1"
              type="password"
              value={password}
              onChange={handlePasswordChange}
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
          <Link to="/"> 
            <Button variant="outline-success" className="lbutton mx-auto" onClick={handleLoginClick}>
              Login
            </Button>
          </Link> 
          <Link to="/CadastroUsuario">
            <button  className="button mbutton mx-auto">CRIAR CONTA</button>
          </Link> 
        </div>
      </div>
    </div>
  );
}
