import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";

import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Estoque } from "./Components/Estoque/Estoque";
import { CadastroProduto } from "./Components/CadastroProduto/CadastroProduto";
import { CadastroUsuario } from "./Components/CadastroUsuario/CadastroUsuario";

export function Routes(props) {
  const addProduto = props.addProduto;
  const produtos = props.produtos;
  return (
    <BrowserRouter>
      <Navigation />
      <div className="routesContainer">
        <Switch>
          <Route path="/" exact render={(props) => <Home />} />
          <Route path="/Login" exact render={(props) => <Login />} />
          <Route
            path="/Estoque"
            exact
            render={(props) => <Estoque produtos={produtos} />}
          />
          <Route
            path="/CadastroProduto"
            exact
            render={(props) => <CadastroProduto addProduto={addProduto} />}
          />

          <Route
            path="/CadastroUsuario"
            exact
            render={(props) => <CadastroUsuario />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
