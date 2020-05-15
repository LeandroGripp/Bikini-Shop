import React, { useState } from "react";
import "./CadastroProduto.css";
import Swal from "sweetalert2";
import { Form, Col } from "react-bootstrap";

export function CadastroProduto(props) {
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [tamanho, setTamanho] = useState("PP");
  const [preco, setPreco] = useState(0);
  const [tipo, setTipo] = useState("Bikini");
  const [unidades, setUnidades] = useState(0);

  function clearSubmit() {
    setNome("");
    setCodigo("");
    setPreco(0);
    setUnidades(0);
  }

  function handleSubmit() {
    if (nome === "") {
      Swal.fire("Erro!!", "Campo NOME não foi preenchido.", "error");
    } else if (codigo === "") {
      Swal.fire(
        "Erro!!",
        "Campo CÓDIGO DE REFERÊNCIA não foi preenchido.",
        "error"
      );
    } else if (preco === 0 || preco === "0") {
      Swal.fire("Erro!!", "Campo PREÇO não foi preenchido.", "error");
    } else if (unidades === 0 || unidades === "0") {
      Swal.fire("Erro!!", "Campo UNIDADES não foi preenchido.", "error");
    } else {
      handleButtonClick();
      clearSubmit();
      Swal.fire(
        "Sucesso!!",
        "Seu produto foi adicionado ao estoque.",
        "success"
      );
    }
  }

  function handleChangeTamanho(event) {
    setTamanho(event.target.value);
  }
  function handleChangePreco(event) {
    setPreco(event.target.value);
  }
  function handleChangeNome(event) {
    setNome(event.target.value);
  }
  function handleChangeCodigo(event) {
    setCodigo(event.target.value);
  }
  function handleChangeTipo(event) {
    setTipo(event.target.value);
  }
  function handleChangeUnidades(event) {
    setUnidades(event.target.value);
  }

  function handleButtonClick() {
    let produto = {
      name: nome,
      ref: codigo,
      size: tamanho,
      price: preco,
      type: tipo,
      units: unidades,
    };
    props.addProduto(produto);
  }

  return (
    <div className="h-100 d-flex flex-column align-items-center">
      <div className="d-flex caixa flex-column">
        <h1 className="title">Novo Produto</h1>
        <div className="d-flex flex-column">
          <Form className= "d-flex flex-column">
            <Form.Group as={Form.Row} controlId="Nome do Produto">
              <Form.Label column sm={5} className="text">
                Nome do Produto
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="text"
                  onChange={handleChangeNome}
                  value={nome}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Form.Row} controlId="Codigo">
              <Form.Label column sm={5} className="text">
                Código de referência
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="number"
                  onChange={handleChangeCodigo}
                  value={codigo}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Form.Row} controlId="Tamanho">
              <Form.Label column sm={5} className="text">
                Tamanho
              </Form.Label>
              <Col sm={7}>
                <Form.Control as={"select"}>
                  <option>PP</option>
                  <option>P</option>
                  <option>M</option>
                  <option>G</option>
                  <option>GG</option>
                  onChange={handleChangeTamanho}
                  value={tamanho}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Form.Row} controlId="Preco">
              <Form.Label column sm={5} className="text">
                Preço
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="number"
                  onChange={handleChangePreco}
                  value={preco}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Form.Row} controlId="Tipo">
              <Form.Label column sm={5} className="text">
                Tipo de Produto
              </Form.Label>
              <Col sm={7}>
                <Form.Control as={"select"}>
                  <option>Biquini</option>
                  <option>Maiô</option>
                  <option>Canga</option>
                  <option>Saia de Praia</option>
                  <option>Promoção</option>
                  onChange={handleChangeTipo}
                  value={tipo}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Form.Row} controlId="Unidades">
              <Form.Label column sm={5} className="text">
                Unidades
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="number"
                  onChange={handleChangeUnidades}
                  value={unidades}
                />
              </Col>
            </Form.Group>
          </Form>
          <button className="mbtn btn mx-auto" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
