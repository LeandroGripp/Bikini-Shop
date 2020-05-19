import React, { useState } from 'react';
import './CadastroUsuario.css';

/* 
TO DO:
  - Deixar bonito (SweetAlert/inclusoes no .css -> BootStrap/MaterialUI)
  - Passar dados para serem usados no form de login (Ver sessionStorage/localStorage -> ver addProdutos())
  - Melhorar validações (Regex no password )
  - Resposividade -> Bootstrap
*/

export function CadastroUsuario (props) {   
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("cargo1");

  function handleUname(event){
    setUname(event.target.value);
  }
  function handleEmail(event){
    setEmail(event.target.value);
  }
  function handlePwd(event){
    setPassword(event.target.value);
  }
  function handleCargo(event){
    setCargo(event.target.value);
  }

  function onSubmit(){
    if (uname === ""){
      alert("Submeta um nome");
    }else if (email === ""){
      alert("Submeta um email");
    }else if (password === ""){
      alert("Submeta uma senha");
    }else{
      alert("Cadastro realizado");
    }
  }

  return(
      <div className="align-items-center">
        <form className="formback">
        <h2>Cadastro de Usuários</h2> 
          <ul>
          
          <div>
          <label className="text">Nome: </label>
            <input
              type="text"
              placeholder="Insira o nome"
              onChange={handleUname}
              value={uname}
              required
            />
          </div>

          <div>
          <label className="text">E-Mail: </label>
            <input
              type="email"
              placeholder="Insira o email"
              onChange={handleEmail}
              value={email}
              required
            />
          </div>

          <div>
          <label className="text">Senha: </label>
            <input
            type="password"
            placeholder="Insira a senha"
            onChange={handlePwd}
            value={password}          
            required />
          </div>

          <div>
          <label className="text">Cargo: </label>
            <select
              required
              onChange={handleCargo}
              value={cargo}
              placeholder="Selecione o cargo"
            >
              <option>cargo1</option>
              <option>cargo2</option>
              <option>cargo3</option>
            </select>
          </div>
          </ul>

      <input className="btn" type="submit" onClick={onSubmit} value="Enviar" />
      
      </form> 
    </div>
  )
}

