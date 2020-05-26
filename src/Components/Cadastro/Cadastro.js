import React from "react";
import "./Cadastro.css";

export function Cadastro(props) {
  const uname = (props.cadastros.username);
  const email = (props.cadastros.email);
  const cargo = (props.cadastros.cargo);

    return (
      <div className="d-flex align-items-center justify-content-between">
        <div className="row cadastr-header cadastr-container py-3 px-0 my-1 ">
          <div className="col-1 px-15">{uname}</div>
          <div className="col-2 px-15">{email}</div>
          <div className="col-3 px-15">{cargo}</div>
        </div>
      </div>
    );
}