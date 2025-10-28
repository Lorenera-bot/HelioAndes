import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Planes() {
 const planes = [
    {
      titulo: "Basico",
      potencia: "3–5 kW",
      caracteristicas: [
        "Estudio energético",
        "Instalación estándar", 
        "Monitoreo básico"
      ],
      boton: "Solicitar evaluación"
    },
    {
      titulo: "Optimizado", 
      potencia: "10–15 kW",
      caracteristicas: [
        "Estudio avanzado",
        "Instalación optimizada",
        "Monitoreo avanzado"
      ],
      boton: "Solicitar evaluación"
    },
    {
      titulo: "Autónomo",
      potencia: "Híbrido + baterias", 
      caracteristicas: [
        "Diseño off-grid",
        "Almacenamiento", 
        "Soporte preferente"
      ],
      boton: "Solicitar evaluación"
    }
  ];

  return (
     <section className="planes-section">
      <div className="container" id="planes">
        <h1 className="planes-title">Planes</h1>
        <p style={{textAlign:'right', color: "gray"}}>
          Elige el plan que se adjuste a tu proyecto.
        </p>
    <div className="planes-grid-container">
      <div className="planes-grid">
        {planes.map((plan, index) => (
          <Card className="plan-card h-100" key={index}>
            <Card.Body className="d-flex flex-column">
              <div className="text-center mb-3">
                <Button 
                  variant="info" 
                  size="sm" 
                  className="plan-titulo-btn rounded-pill"
                >
                  {plan.titulo}
                </Button>
              </div>
              <Card.Subtitle className="plan-potencia text-center mb-3">
                {plan.potencia}
              </Card.Subtitle>
              
              <div className="plan-caracteristicas flex-grow-1">
                {plan.caracteristicas.map((caracteristica, idx) => (
                  <div key={idx} className="caracteristica">
                    {caracteristica}
                  </div>
                ))}
              </div>
              <br></br>
              
              <Button variant="primary" className="plan-boton mt-auto">
                {plan.boton}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
}

export default Planes;