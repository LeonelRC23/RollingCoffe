import React from 'react';
import { Table } from 'react-bootstrap';
import Tabla from '../items/Tabla';
import items from '../../mocks/items.json';

const Administrador = ({ localStorageProductos }) => {
  const eliminar = (objeto) => {};
  return (
    <div className='container'>
      <h2 className='tituloPrincipal my-4'>Productos disponibles</h2>
      <div>
        <Tabla items={localStorageProductos} />
      </div>
    </div>
  );
};

export default Administrador;
