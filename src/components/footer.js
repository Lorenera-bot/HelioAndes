import React from "react";
import Navbar from "react-bootstrap";
import Nav from "react-bootstrap"; 
import Container from "react-bootstrap"; 

function Footer() {
  return (
    <footer className="bg-dark text-center py-4">
      <div className="container-fluid">
        <nav className="mb-3">
          <a href="#" className="text-light text-decoration-none mx-2">
            Privacidad -
          </a>
          <a href="#" className="text-light text-decoration-none mx-2">
            Términos
          </a>
    
        </nav>
        <p className="text-light mb-0">
          © 2025 HelioAndes - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;