import { useEffect } from 'react';
import IsotipoNegro from './resources/logos/isotipo-negro.png';
import { Navbar } from './components/navbar.jsx'; 
import { ImageCarousel } from './components/imageCarousel.jsx';
import { MainBtn } from './components/mainBtn.jsx';
import { PlansGrid } from './components/plansGrid.jsx';
import { Infra } from './components/infra.jsx';
import { GymsSerch } from './components/gymsSerch.jsx';
import { Clases } from './components/clases.jsx';
import { BengaliApp } from './components/bengaliApp.jsx';
import { Footer } from './components/footer.jsx';

import './styles/app.css';

function App() {
  
  useEffect(() => {
  // Cambia el título de la pestaña
  document.title = "Be Better, Be Bengalí";
  
  }, []);

  return (
    <main>
      <Navbar />
      <section className="averam-home">
  <ImageCarousel /> 
  <MainBtn 
    label={
      <>
        <span style={{ color: '#1D1D1B' }}>#BeBetter</span>BeBengalí
      </>
    }
  />
</section>
      <section className='averam-plans'>
        <PlansGrid />
      </section>
      <section className='averam-infra'>
        <Infra />
      </section>
      <section className='averam-gyms'>
        <GymsSerch />
      </section>
      <section className='averam-clases'>
        <Clases />
      </section>
      <section className='averam-bengali-app'>
        <BengaliApp />
      </section>
      <section className='averam-footer'>
        <Footer />
      </section>
    </main>
  );
}

export default App;
