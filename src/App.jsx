import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Error404 from './components/pages/Error404';
import Administrador from './components/pages/Administrador';
import Inicio from './components/pages/Inicio';
import { Fragment, useEffect, useState } from 'react';
import items from './mocks/items.json';

function App() {
  const [localStorageProductos, setLocalStorageProductos] = useState(
    JSON.parse(localStorage.getItem('listaProductos')) || []
  );
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('listaProductos'))) {
      localStorage.setItem('listaProductos', JSON.stringify(items));
      setLocalStorageProductos(
        JSON.parse(localStorage.getItem('listaProductos'))
      );
    }
  }, []);
  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Menu />
        {/* <Inicio></Inicio> */}
        <Administrador
          localStorageProductos={localStorageProductos}
        ></Administrador>
        {/* <Error404></Error404> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
