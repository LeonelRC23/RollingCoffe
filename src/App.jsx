import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Error404 from './components/pages/Error404';
import Administrador from './components/pages/Administrador';
import Inicio from './components/pages/Inicio';
import { Fragment } from 'react';

function App() {
  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Menu></Menu>
        <Inicio></Inicio>
        {/* <Administrador></Administrador> */}
        {/* <Error404></Error404> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
