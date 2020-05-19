import React, { useState } from 'react';
import './CadastroUsuario.css';
import Swal from "sweetalert2";

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

  function handleSubmit(){
    if (uname === ""){
      Swal.fire("Submeta um NOME!");
    }else if (email === ""){
      Swal.fire("Submeta um EMAIL");
    }else if (password === ""){
      Swal.fire("Submeta uma SENHA");
    }else{
      buttomSubmit();
      Swal.fire("CADASTRO FEITO COM SUCESSO");
    }
  }

  function buttomSubmit(){
    var cadastro = {
      name: uname,
      pwd: password,
    };
    props.addCadastro(cadastro);
  }

  return(
    <div className="d-flex flex-column align-items-center background">
      <form className="formback d-flex flex-column">
        <h1 className="titulo">Cadastro de Usuários</h1>           
          <div>
            <label className="text">Nome: </label>
              <input
                className="input"
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
                className="input"
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
                className="input"
                type="password"
                placeholder="Insira a senha"
                onChange={handlePwd}
                value={password}          
                required />
          </div>

          <div>
            <label className="text">Cargo: </label>
              <select
                className="input"
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
          <input 
            className="btn" 
            type="submit" 
            onClick={handleSubmit} 
            value="Enviar"
          />  
      </form> 
    </div>
  )
}

