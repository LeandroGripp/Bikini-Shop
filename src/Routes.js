import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Estoque } from './Components/Estoque/Estoque';
import { CadastroProduto } from './Components/CadastroProduto/CadastroProduto';
import { CadastroUsuario } from './Components/CadastroUsuario/CadastroUsuario';


export function Routes (props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Estoque" exact component={Estoque}/>
        <Route path="/CadastroProduto" exact component={CadastroProduto}/>
        <Route path="/CadastroUsuario" exact component={CadastroUsuario}/>
      </Switch>
    </BrowserRouter>
  );
}