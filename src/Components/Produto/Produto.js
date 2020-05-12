import React from "react";
import "./Produto.css";

export function Produto(props) {
  return (
    <div className="row product-header product-container py-3 justify-content-center">
      <div className="col-1">{props.produto.ref}</div>
      <div className="col-5">{props.produto.name}</div>
      <div className="col-2">{props.produto.type}</div>
      <div className="col-1">{props.produto.size}</div>
      <div className="col-2">{props.produto.price}</div>
      <div className="col-1">{props.produto.units}</div>
    </div>
  );
}

