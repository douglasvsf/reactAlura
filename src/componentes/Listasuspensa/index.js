import React from "react";
import "./index.css";

const Listasuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
        <option value="">- Selecione -</option>
        {props.itens.map((item, index) => 
          <option key={index}>{item}</option>
        )}
      </select>
    </div>
  );
};

export default Listasuspensa;