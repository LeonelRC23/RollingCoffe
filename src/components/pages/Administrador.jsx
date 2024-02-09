import React from "react";
import { Table } from "react-bootstrap";
import Tabla from "../items/Tabla";
import items from "../../mocks/items.json";

const Administrador = () => {
  return (
    <div className="container">
      <h2 className="tituloPrincipal">Productos disponibles</h2>
      <div>
        <Tabla items={items.cafe} />
      </div>
    </div>
  );
};

export default Administrador;
