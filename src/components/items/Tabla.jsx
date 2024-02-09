import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../../style/Tabla.css';
import { Button } from 'react-bootstrap';

const Tabla = ({ items }) => {
  const imageBodyTemplate = (item) => {
    return (
      <img src={item.img} alt={'Imagen de un cafe'} className='imgAdmin' />
    );
  };
  const opcionesBotones = (item) => {
    return (
      <div>
        <Button className='m-2' onClick={() => {}}>
          Eliminar
        </Button>
        <Button className='m-2'>Editar</Button>
      </div>
    );
  };
  return (
    <div>
      <DataTable value={items.cafe} stripedRows>
        <Column field='id' header='Cod'></Column>
        <Column field='nombre' header='Producto'></Column>
        <Column field='precio' header='Precio'></Column>
        <Column header='Imagen del producto' body={imageBodyTemplate}></Column>
        <Column field='categoria' header='Categoria'></Column>
        <Column header='Opciones' body={opcionesBotones}></Column>
      </DataTable>
    </div>
  );
};

export default Tabla;
