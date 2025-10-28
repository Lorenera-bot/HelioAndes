import React from "react";

function Hero() {
  return (
    <section className="bg-light py-5" id="inicio">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="titulo">
              Energía solar accesible y confiable para tu hogar o pyme
            </h1>
            <p className="sub-titulo">
              Descubre cómo la energía solar puede ayudarte a ahorrar y cuidar el medioambiente,
              con soluciones adaptadas a tu necesidad y ubicación.
            </p>

            {/* Botones de acción */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#demo-calculadora" className="btn btn-info btn-lg">
                Ver DEMO
              </a>
              <a href="./assets/catalogo.pdf" className="btn btn-light btn-lg btn-catalogo" target="_blank" rel="noopener noreferrer">
                Descargar Catálogo
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="/assets/images/paneles.jpg"
              alt="Paneles solares en casa"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
