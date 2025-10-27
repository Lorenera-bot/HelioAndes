import React from "react";
import Button from 'react-bootstrap/Button';

function Planes() {
  const planes = [
    {
      titulo: "3-5 kW",
      descripcion: "Estudio energetico instalacion estandar Monitoreo basico.",
    boton: <Button variant="success" className="success-btn">Solicitar evaluacion</Button>
    },
    {
      titulo: "10-15 kW",
      descripcion: "Estudio avanzado instalacion optimizada Monitoreo avanzado.",
      boton: <Button variant="success" className="success-btn">Solicitar evaluacion</Button>
    },
    {
      titulo: "Hibrido + baterias",
      descripcion: "Diselo off-grid Almacenamiento Soporte preferente.",
      boton: <Button variant="success" className="success-btn">Solicitar evaluacion</Button>
    }
  ];


   return (
    <section className="planes-section">
      <div className="container" id="planes">
        <h1 className="planes-title">Planes</h1>
        <p style={{textAlign:'right', color: "gray"}}>Elige el plan que se ajuste a tu proyecto.</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {planes.map((plan, index) => (
            <div key={index} className="col">
              <div className="card planes-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{plan.titulo}</h5>
                  <p className="card-text">{plan.descripcion}</p>
                  {plan.boton && <div className="plan-button mt-3">{plan.boton}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planes;