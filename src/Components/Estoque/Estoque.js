import React, { useState } from "react";
import "./Estoque.css";
import { Produto } from "../Produto/Produto";

export function Estoque(props) {
  const [stateToUpdate, setStateToUpdate] = useState(true);

  function update() {
    setStateToUpdate(!stateToUpdate);
  }
  if (!props.loggedIn) {
    return (
      <div className="not-logged-in-error">
        Você deve estar logado para acessar essa página
      </div>
    );
  } else {
    return (
      
        <div className="container flex-column ">
          <div className="row product-header my-3">
            <div className="col-1 px-0">Ref</div>
            <div className="col-2 px-0">Nome</div>
            <div className="col-3 px-0">Descrição</div>
            <div className="col-2 px-0">Tipo</div>
            <div className="col-1 px-0">Tamanho</div>
            <div className="col-2 px-0">Preço</div>
            <div className="col-1 px-0">Unid</div>
          </div>
          {props.produtos.length > 0
            ? props.produtos.map((produto, index) => (
                <Produto
                  key={"prod-" + (index + 1)}
                  produto={produto}
                  editProduto={props.editProduto}
                  removeProduto={props.removeProduto}
                  update={update}
                  stateToUpdate={stateToUpdate}
                />
              ))
            : "No products"}
        </div>
      
    );
  }
}
