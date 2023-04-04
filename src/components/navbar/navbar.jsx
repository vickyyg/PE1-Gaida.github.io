import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Green GrowShop</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Inicio</Nav.Link>
                  <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets"></Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                  <CartWidget />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
    
  
