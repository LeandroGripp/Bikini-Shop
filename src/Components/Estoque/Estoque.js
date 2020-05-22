import React, {useState} from "react";
import "./Estoque.css";
import { Produto } from "../Produto/Produto";

export function Estoque(props) {
  const [stateToUpdate, setStateToUpdate] = useState(true);

  function update() {
    setStateToUpdate(!stateToUpdate);
  }
  return (
    <div className="background">
    <div className="container d-flex flex-column px-0 mx-1">
      <div className="row product-header my-3">
        <div className="col-1 px-0">Ref</div>
        <div className="col-2 px-0">Name</div>
        <div className="col-3 px-0">Description</div>
        <div className="col-2 px-0">Type</div>
        <div className="col-1 px-0">Size</div>
        <div className="col-2 px-0">Price</div>
        <div className="col-1 px-0">Units</div>
      </div>
      {props.produtos.length > 0
        ? props.produtos.map((produto, index) => (
            <Produto key={"prod-" + (index + 1)} produto={produto} editProduto={props.editProduto} removeProduto={props.removeProduto} update={update} stateToUpdate={stateToUpdate}/>
          ))
        : "No products"}
    </div>
    </div>
  );
}
