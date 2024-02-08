import { Card, Button } from 'react-bootstrap';
import banner from '../../assets/bannerInicio.jpg';
import '../../style/Inicio.css';
import { cafe } from '../../mocks/items.json';
import { useState } from 'react';

const Inicio = () => {
  const [productos, setProductos] = useState(cafe);
  return (
    <div>
      <div className='contenedorImg'>
        <img src={banner} alt='' className='bannerInicio' />
      </div>
      <div className='container'>
        <h2 className='tituloPrincipal mt-3'>Nuestros productos</h2>
        <hr />
        <div className='row m-0'>
          {productos.map((obj) => (
            <div className='d-flex col-lg-4 col-12 my-4'>
              <Card className='productoCard h-100'>
                <Card.Img
                  variant='top'
                  src='https://as01.epimg.net/deporteyvida/imagenes/2018/06/19/portada/1529402043_039778_1529402207_noticia_normal_recorte1.jpg'
                />
                <Card.Body>
                  <Card.Title>{obj.nombre}</Card.Title>
                  <Card.Text>{obj.descripcion}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className='d-flex justify-content-end my-2'>
                    <Button variant='success'>Ver más</Button>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
