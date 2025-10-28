import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Contacto() {
  return (
    <div className="contacto-wrapper">
        <h1 className="contacto-titulo">   Contacto</h1>
        <p  style={{textAlign:'right', color: "gray"}}>Cuentanos tu proyecto y agenda una asesoria.</p>
      <div className="contacto-container">
        <div className="contacto-content">
          
          <div className="contacto-listas">
            {/* Nombre y Correo electrónico en la misma fila */}
            <div className="fila-horizontal">
              <div className="lista-seccion mitad">
                <h2 className="seccion-titulo">Nombre</h2>
                <ListGroup>
                  <ListGroup.Item className="lista-item">
                    Tu nombre
                  </ListGroup.Item>
                </ListGroup>
              </div>

              <div className="lista-seccion mitad">
                <h2 className="seccion-titulo">Correo electrónico</h2>
                <ListGroup>
                  <ListGroup.Item className="lista-item">
                    <a href="https://www.tucorreo.com" className="email-link">
                      tucorreo@dominio.com
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>

            {/* Mensaje abajo, ocupando todo el ancho */}
            <div className="lista-seccion">
              <h2 className="seccion-titulo">Mensaje</h2>
              <ListGroup>
                <ListGroup.Item className="lista-item">
                  Describe brevemente tu necesidad
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>

          <div className="separador"></div>

          <div className="botones-container" >
            <button className="boton-enviar" >
              Enviar
            </button>
            <button className="boton-limpiar">
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;