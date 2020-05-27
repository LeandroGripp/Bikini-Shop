import React, {useRef} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";

import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Estoque } from "./Components/Estoque/Estoque";
import { CadastroProduto } from "./Components/CadastroProduto/CadastroProduto";
import { CadastroUsuario } from "./Components/CadastroUsuario/CadastroUsuario";
import { ListagemUsuarios } from "./Components/ListagemUsuarios/ListagemUsuarios"

export function Routes(props) {
  const addProduto = props.addProduto;
  const produtos = props.produtos;
  const editProduto = props.editProduto;
  const removeProduto = props.removeProduto;

  const addCadastro = props.addCadastro; 
  const cadastros = props.cadastros;

  const loggedIn = props.loggedIn;
  const loginName = props.loginName;
  const doLogin = props.doLogin;
  const logout = props.logout;

  const changeActiveFunction = useRef();

  return (
    <BrowserRouter>
      <Navigation loggedIn={loggedIn} loginName={loginName} logout={logout} changeActiveFunction={changeActiveFunction}/>
      <div className="routesContainer fill background">
        <Switch>
          <Route path="/" exact render={(props) => <Home changeActiveFunction={changeActiveFunction} loggedIn={loggedIn}/>} />
          <Route path="/Login" exact render={(props) => <Login cadastros={cadastros} doLogin={doLogin} changeActiveFunction={changeActiveFunction} />} />
          <Route
            path="/Estoque"
            exact
            render={(props) => (
              <Estoque produtos={produtos} editProduto={editProduto} removeProduto={removeProduto} loggedIn={loggedIn} />
            )}
          />
          <Route
            path="/CadastroProduto"
            exact
            render={(props) => <CadastroProduto addProduto={addProduto} loggedIn={loggedIn} />}
          />

          <Route 
            path="/CadastroUsuario" 
            exact 
            render={(props) => <CadastroUsuario addCadastro={addCadastro} loggedIn={loggedIn} />} //
          />

          <Route 
            path="/ListagemUsuarios" 
            exact 
            render={(props) => <ListagemUsuarios cadastros={cadastros} loggedIn={loggedIn} />} //
          /> 

        </Switch>
      </div>
    </BrowserRouter>
  );
}
