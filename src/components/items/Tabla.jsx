import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Tabla = ({ items }) => {
  return (
    <div>
      <DataTable value={items}>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="descripcion" header="Descripcion"></Column>
        <Column field="precio" header="Precio"></Column>
        <Column field="id" header="Id"></Column>
      </DataTable>
    </div>
  );
};

export default Tabla;
