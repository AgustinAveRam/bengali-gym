import { useEffect } from 'react';
import IsotipoNegro from './resources/logos/isotipo-negro.png';
import { Navbar } from './components/navbar.jsx'; 
import { ImageCarousel } from './components/imageCarousel.jsx';
import { MainBtn } from './components/mainBtn.jsx';
import { PlansGrid } from './components/plansGrid.jsx';
import { Infra } from './components/infra.jsx';
import './styles/app.css';

function App() {
  
  useEffect(() => {
    // Cambia el título de la pestaña
    document.title = "Be Bengalí, Be Better";
    
    // Cambia el favicon dinámicamente
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = {IsotipoNegro};
    document.head.appendChild(link);

    // Limpiar el efecto al desmontar el componente (opcional)
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <section className="averam-home">
        <ImageCarousel /> 
        <MainBtn label="Be Bengalí" />
      </section>
      <section className='averam-plans'>
        <PlansGrid />
      </section>
      <section className='averam-infra'>
        <Infra />
      </section>
    </main>
  );
}

export default App;
