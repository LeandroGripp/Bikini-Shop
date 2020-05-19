import React, { useState } from "react";
import "./Produto.css";

export function Produto(props) {
  const [editing, setEditing] = useState(false);
  if (editing) {
    return (
      <div className="row product-header product-container py-3 px-0 my-1 "></div>
    );
  } else {
    return (
      <div className="d-flex align-items-center justify-content-between">
        <div className="row product-header product-container py-3 px-0 my-1 ">
          <div className="col-1 px-0">{props.produto.ref}</div>
          <div className="col-2 px-0">{props.produto.name}</div>
          <div className="col-3 px-0">{props.produto.description}</div>
          <div className="col-2 px-0">{props.produto.type}</div>
          <div className="col-1 px-0">{props.produto.size}</div>
          <div className="col-2 px-0">{props.produto.price}</div>
          <div className="col-1 px-0">{props.produto.units}</div>
        </div>
        <span className="material-icons">edit</span>
        <span class="material-icons">delete</span>
      </div>
    );
  }
}
