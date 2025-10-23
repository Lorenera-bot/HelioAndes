import logo from './logo.svg';
import './App.css';




import NavbarPrincipal from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import Servicios from './components/servicios';


function App() {
  return (
 <div className="App">     
    <NavbarPrincipal/>
      
      <div className="App">
        
        <div className='container'>    

          <Hero/>  
          <Servicios/>



              
          
        </div>
        
      </div>
      <Footer/>  
    </div>
  );
}

export default App;
