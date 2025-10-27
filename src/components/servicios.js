import React from "react";

function Servicios() {
  const servicios = [
    {
      icono: <i class="fa-solid fa-bolt"></i>,
      titulo: "Estudio energético",
      descripcion: "Análisis de consumo y propuesta ajustada a tu perfil."
    },
    {
      icono: <i class="fa-solid fa-bolt"></i>,
      titulo: "Instalación certificada",
      descripcion: "Ejecutada por personal acreditado y normativa vigente."
    },
    {
      icono:<i class="fa-solid fa-bolt"></i>,
      titulo: "Monitoreo",
      descripcion: "Seguimiento de rendimiento y alertas preventivas."
    },
    {
      icono: <i class="fa-solid fa-bolt"></i>,
      titulo: "Mantención",
      descripcion: "Planes periódicos para extender la vida útil del sistema."
    }
  ];

  return (
    <section className="servicios-section">
      <div className="container" id="servicios">
        <h1 className="servicios-title">Servicios</h1>
        <p className style={{textAlign:'right',color: "gray"}}>Estudio energetico, instalacion certificada, monitoreo y mantencion.</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col">
              <div className="card servicio-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;