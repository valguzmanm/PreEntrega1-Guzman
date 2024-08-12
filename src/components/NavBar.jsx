import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="nav-link">Inicio</Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to="/productos/pollo" className="dropdown-item">Pollo</Link>
              <Link to="/productos/salmon" className="dropdown-item">Salmón</Link>
            </NavDropdown>
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
            <Link to="/contacto" className="nav-link">Contáctanos</Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}