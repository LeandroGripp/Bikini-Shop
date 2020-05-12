import React from 'react';
import './Produto.css';

export function Produto (props) {
  return (
    <div className="d-flex product-container">
      <p>{props.produto.ref}</p>
      <p>{props.produto.name}</p>
      <p>{props.produto.type}</p>
      <p>{props.produto.size}</p>
      <p>{props.produto.price}</p>
      <p>{props.produto.units}</p>
    </div>
  )
}