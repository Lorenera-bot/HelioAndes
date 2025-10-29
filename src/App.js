import logo from './logo.svg';
import './App.css';




import NavbarPrincipal from './components/navbar';
import Hero from './components/hero.js';
import Footer from './components/footer';
import Servicios from './components/servicios';
import Soluciones from './components/Soluciones';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import Faq from './components/FAQ';
import Contacto from './components/Contacto';



function App() {
  return (
    <div className="App">
      <NavbarPrincipal />
      <div className="App">
        <div className='container'>

          <Hero />
          <Servicios />
          <Soluciones />
          <CalculadoraIntegral />
          <Planes />
          <Testimonios />
          <Faq />
          <Contacto />

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
