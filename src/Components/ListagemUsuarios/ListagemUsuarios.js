import React, {useState} from 'react';
import "./ListagemUsuarios.css";
import { Cadastro } from "../Cadastro/Cadastro";

export function ListagemUsuarios(props) {
    
      if (!props.loggedIn) {
        return (
          <div className="not-logged-in-error">
            Você deve estar logado para acessar essa página
          </div>
        );
      } else {
        return (
            <div className="container flex-column">
              <div className="row cadastr-header my-3">
                <div className="col-3 px-15">Username</div>
                <div className="col-6 px-15">Email</div>
                <div className="col-3 px-15">Cargo</div>
              </div>
              {props.cadastros.length > 0
                ? props.cadastros.map((cadastros, index) => (
                    <Cadastro
                      key={"cad-" + (index + 1)}
                      cadastros={cadastros}
                    />
                  ))
                : "No products"}
            </div> 
        );
}
}
