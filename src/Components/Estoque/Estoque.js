import React from "react";
import "./Estoque.css";
import { Produto } from "../Produto/Produto";

export function Estoque(props) {
  return (
    <div className="container d-flex flex-column px-0 mx-1">
      <div className="row product-header my-3">
        <div className="col-1 px-0">Ref</div>
        <div className="col-5 px-0">Name</div>
        <div className="col-2 px-0">Type</div>
        <div className="col-1 px-0">Size</div>
        <div className="col-2 px-0">Price</div>
        <div className="col-1 px-0">Units</div>
      </div>
      {(props.produtos.length > 0) ? props.produtos.map((produto, index) => (
        <Produto key={"prod-" + (index + 1)} produto={produto} />
      )): "No products"}
    </div>
  );
}
