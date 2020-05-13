import React from "react";
import "./Produto.css";

export function Produto(props) {
  return (
    <div className="row product-header product-container py-3 px-0 my-1 ">
      <div className="col-1 px-0">{props.produto.ref}</div>
      <div className="col-5 px-0">{props.produto.name}</div>
      <div className="col-2 px-0">{props.produto.type}</div>
      <div className="col-1 px-0">{props.produto.size}</div>
      <div className="col-2 px-0">{props.produto.price}</div>
      <div className="col-1 px-0">{props.produto.units}</div>
    </div>
  );
}

