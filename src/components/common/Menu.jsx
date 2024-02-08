import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/coffee_Logo.png';
import '../../style/Menu.css'

const Menu = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            alt='Logo de RollingCoffee'
            className='img-fluid'
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href='#home'>Inicio</Nav.Link>
            <Nav.Link href='#link'>Administrador</Nav.Link>
            <Nav.Link href='#link'>Registro</Nav.Link>
            <Nav.Link href='#link'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
