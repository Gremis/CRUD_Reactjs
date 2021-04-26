import React, { useState } from "react";
import uniqid from "uniqid";

const Listadenomes = () => {
  const [nome, setNome] = useState("");
  const [listanomes, setListanomes] = useState([]);
  const addNome = (e) => {
    e.preventDefault();
    const novoNome = {
      id: uniqid(),
      tituloNome: nome,
    };
    setListanomes([...listanomes, novoNome]);
    setNome("");
  };
  return (
    <div>
      <h2>Sistema CRUD Básico</h2>
      <div className="row">
        <div className="col">
          <h2>Lista de Nomes</h2>
          <ul className="list-group">
            {listanomes.map((item) => (
              <li key="{item.id}" className="list-group-item">
                {item.tituloNome}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Formulário para adicionar nomes</h2>
          <form onSubmit={(e) => addNome(e)} className="form-group">
            <input
              onChange={(e) => {
                setNome(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placeholder="Insira um nome"
              value = {nome}
            />
            <input
              className="btn btn-info btn-block"
              type="submit"
              value="Registrar Nome"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Listadenomes;
