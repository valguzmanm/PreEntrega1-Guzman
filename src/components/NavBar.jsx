import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { LogoReal } from './Logoreal';

export const NavBar = () => {
    return (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <LogoReal />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Productos</Nav.Link>
          <Nav.Link href="#">Nosotros</Nav.Link>
          <Nav.Link href="#">Contáctanos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget/> 
    </Container>
  </Navbar>
    );
}