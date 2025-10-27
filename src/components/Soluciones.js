import React from "react";

function Soluciones() {
  const soluciones = [
    {
      icono: <i className="fa-regular fa-house"></i>,
      titulo: "Hogar 3-5 kW",
      descripcion: "Balance ideal entre costo y ahorro mensual."
    },
    {
      icono: <i className="fa-solid fa-shop"></i>,
      titulo: "PyME 10-20 kW",
      descripcion: "Para operacion diurna con buena irradiacion."
    },
    {
      icono: <i className="fa-solid fa-toolbox"></i>,
      titulo: "Off-grid con baterias",
      descripcion: "Autonomia en zonas sin red electrica."
    }
  ];

  return (
    <section className="soluciones-section">
      <div className="container" id="soluciones">
        <h1 className="soluciones-title">Soluciones</h1>
        <p className style={{textAlign:'right',color: "gray"}}>Kits residenciales,PyME, off-grid con baterias e hibridos.</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
          {soluciones.map((solucion, index) => (
            <div key={index} className="col">
              <div className="card solucion-card h-100">
                <div className="card-body">
                     <div className="solucion-icono mb-3">
                    {solucion.icono}
                  </div>
                  <h5 className="card-title">{solucion.titulo}</h5>
                  <p className="card-text">{solucion.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Soluciones;