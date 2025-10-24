import logo from './logo.svg';
import './App.css';




import NavbarPrincipal from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import Servicios from './components/servicios';
import Soluciones from './components/Soluciones';
import CalculadoraIntegral from './components/CalculadoraIntegral';

function App() {
  return (
    <div className="App">

      <div className="App">
        <NavbarPrincipal />
        <div className='container'>

          <Hero />
          <Servicios />
          <Soluciones />
    <CalculadoraIntegral />



        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
