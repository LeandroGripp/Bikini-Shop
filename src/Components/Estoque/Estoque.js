import React from "react";
import "./Estoque.css";
import { Produto } from "../Produto/Produto";

export function Estoque(props) {
  return (
    <div className="container">
      <div className="row product-header">
        <div className="col-1">Ref</div>
        <div className="col-5">Name</div>
        <div className="col-2">Type</div>
        <div className="col-1">Size</div>
        <div className="col-2">Price</div>
        <div className="col-1">Units</div>
      </div>
      {(props.produtos.length > 0) ? props.produtos.map((produto, index) => (
        <Produto key={"prod-" + (index + 1)} produto={produto} />
      )): "No products"}
    </div>
  );
}
