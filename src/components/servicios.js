function Servicios() {
  const servicios = [
    {
      titulo: "Estudio energético",
      descripcion: "Análisis de consumo y propuesta ajustada a tu perfil."
    },
    {
      titulo: "Instalación certificada",
      descripcion: "Ejecutada por personal acreditado y normativa vigente."
    },
    {
      titulo: "Monitoreo",
      descripcion: "Seguimiento de rendimiento y alertas preventivas."
    },
    {
      titulo: "Mantención",
      descripcion: "Planes periódicos para extender la vida útil del sistema."
    }
  ];

  return (
    <section className="servicios-section">
      <div className="container">
        <h1 className="servicios-title">Servicios</h1>
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