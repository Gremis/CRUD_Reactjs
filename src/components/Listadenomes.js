import React, { useState } from "react";
import uniqid from "uniqid";

const Listadenomes = () => {
  const [nome, setNome] = useState("");
  const [listanomes, setListanomes] = useState([]);
  const [modoEditar, setModoEditar] = useState(false)
  const [id, setId] = useState('')
  const addNome = (e) => {
    e.preventDefault();
    const novoNome = {
      id: uniqid(),
      tituloNome: nome,
    };
    setListanomes([...listanomes, novoNome]);
    setNome("");
  };
  const deleteNome = (id) => {
    const novoArray = listanomes.filter((item) => item.id !== id);
    setListanomes(novoArray);
  };
  const editar = (item) => {
    setModoEditar(true)
    setNome(item.tituloNome)
    setId(item.id)
  }
  const editarNome = (e) => {
    e.preventDefault()
    const novoArray = listanomes.map(item => item.id === id ? {id:id, tituloNome:nome}: item)
    setListanomes(novoArray)
  }
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
                <button
                  onClick={() => {
                    deleteNome(item.id);
                  }}
                  className="btn btn-danger float-right"
                >
                  APAGAR
                </button>
                <button
                  onClick={() => {
                    editar(item);
                  }}
                  className="btn btn-info float-right"
                >
                  EDITAR
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Formulário para adicionar nomes</h2>
          <form onSubmit={modoEditar ? editarNome : addNome} className="form-group">
            <input
              onChange={(e) => {
                setNome(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placeholder="Insira um nome"
              value={nome}
            />
            <input
              className="btn btn-info btn-block"
              type="submit"
              value={modoEditar ? "Editar Nome": "Registrar Nome"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Listadenomes;
