import React, { useState } from "react";
import "./CadastroUsuario.css";
import Swal from "sweetalert2";
//import { Form } from 'react-bootstrap';

/* 
TO DO:
  - Deixar bonito (Sweetalert/inclusoes no .css -> BootStrap/MaterialUI)
  - Melhorar validações (Regex no password )
  - Responsividade -> Bootstrap
*/

export function CadastroUsuario(props) {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [cargo, setCargo] = useState("cargo1");

  function handleUname(event) {
    setUname(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePwd(event) {
    setPassword(event.target.value);
  }
  function handlePwd2(event) {
    setPassword2(event.target.value);
  }
  function handleCargo(event) {
    setCargo(event.target.value);
  }

  function handleSubmit() {
    let cond = false;

    console.log(email);
    console.log(email.indexOf('@'))

    if (uname === "") {
      Swal.fire("Erro!", "Submeta um NOME!", "error");
      cond = false;
    } else if (email === "" || email.indexOf('@') === -1) {
      Swal.fire("Erro!", "Submeta um EMAIL!", "error");
      cond = false;
    } else if (password === "") {
      Swal.fire("Erro!", "Submeta uma SENHA!", "error");
      cond = false;
    } else if (password2 === "") {
      Swal.fire("Erro!", "Submeta a CONFIRMAÇÃO DE SENHA", "error");
      cond = false;
    } else {
      if (password !== password2) {
        Swal.fire("Erro!", "Senhas não coincidem", "error");
        cond = false;
      } else {
        cond = true;
        buttomSubmit();
        Swal.fire("Sucesso!", "CADASTRO FEITO COM SUCESSO!", "success");
      }
    }
  }

  function buttomSubmit() {
    var cadastro = {
      username: uname,
      password: password,
      email: email,
      cargo: cargo,
    };
    props.addCadastro(cadastro);
  }
  if(!props.loggedIn) {
    return (
      <div className="not-logged-in-error">Você deve estar logado para acessar essa página</div>
    )
  } else {
    return (
    <div className="d-flex flex-column align-items-center bggggg">
      <form className="formback d-flex flex-column">
        <h1 className="titulo">Cadastro de Usuários</h1>
        <div>
          <input
            id="nome"
            className="input"
            type="text"
            placeholder="INSIRA O NOME"
            onChange={handleUname}
            value={uname}
            required
          />
        </div>

        <div>
          <input
            id="email"
            className="input"
            type="email"
            placeholder="INSIRA O EMAIL"
            onChange={handleEmail}
            value={email}
            required
          />
        </div>

        <div>
          <input
            id="senha"
            className="input"
            type="password"
            placeholder="CRIE UMA SENHA"
            onChange={handlePwd}
            value={password}
            required
          />
        </div>

        <div>
          <input
            id="confirm senha"
            className="input"
            type="password"
            placeholder="CONFIRME SUA SENHA"
            onChange={handlePwd2}
            value={password2}
            required
          />
        </div>

        <div>
          <select
            id="cargo"
            className="input"
            required
            onChange={handleCargo}
            value={cargo}
            placeholder="SELECIONE O CARGO"
          >
            <option>cargo1</option>
            <option>cargo2</option>
            <option>cargo3</option>
          </select>
        </div>
        <div>
          <button className="btn" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
  }
  
}
