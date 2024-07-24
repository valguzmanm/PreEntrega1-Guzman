import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { BonitaLogo } from './BonitaLogo';

export const NavBar = () => {
    return (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <BonitaLogo/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#Maquillaje">Maquillaje</Nav.Link>
          <Nav.Link href="#Skincare">Skincare</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget/> 
    </Container>
  </Navbar>
    );
}