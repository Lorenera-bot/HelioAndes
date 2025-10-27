import React from "react";

function Testimonios() {
  const testimonios = [
    {
      icono: <i className="fa-light fa-user"></i>,
      titulo: "Alejandra,Ñuñoa",
      descripcion: "'Instalacion rapida y ahorro visble en la primera boleta.'"
    },
    {
      icono: <i className="fa-light fa-user"></i>,
      titulo: "Diego,Valdivia",
      descripcion: "'El monitoreo me permite proyectar bien los consumos.'"
    },
    {
      icono: <i className="fa-light fa-user"></i>,
      titulo: "Carla,Copiapo",
      descripcion: "'Excelente asesoria y postventa. 100% recomendado.'"
    }
  ];

  return (
    <section className="testimonios-section">
      <div className="container" id="testimonios">
        <h1 className="testimonios-title">Testimonios</h1>
        <p className style={{textAlign:'right',color: "gray"}}>Clientes que ya confian en HelioAndes.</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="col">
              <div className="card testimonio-card h-100">
                <div className="card-body">
                    <div className="testimonio-icono mb-3">
                    {testimonio.icono}
                  </div>
                  <h5 className="card-title">{testimonio.titulo}</h5>
                  <p className="card-text">{testimonio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;