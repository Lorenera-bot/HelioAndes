import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarPrincipal() {
    return (
        <div className='row'>
            <div className='col-lg-12'>
                <Navbar className="navbar-custom" expand="lg" data-bs-theme="dark">
                    <Container >
                        <Navbar.Brand href="#home"><img src='/assets/images/LogoHA.jpg' style={{ width: "30px", height: "30px" }}></img> Helio Andes</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Inicio</Nav.Link>
                                <Nav.Link href="#link">Servicios</Nav.Link>
                                <Nav.Link href="#link">Soluciones</Nav.Link>
                                <Nav.Link href="#link">DEMO</Nav.Link>
                                <Nav.Link href="#link">Planes</Nav.Link>
                                <Nav.Link href="#link">Testimonios</Nav.Link>
                                <Nav.Link href="#link">FAQ</Nav.Link>
                                <Nav.Link href="#link">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default NavbarPrincipal;