import React from 'react';
import '../styles/infra.css';

import infra1 from '../resources/img/infra1.webp';
import infra2 from '../resources/img/infra2.webp';
import infra3 from '../resources/img/infra3.webp';

export const Infra = () => {
  return (
    <div className="infra-container">
      <h2>Viví la Experiencia Bengalí: tecnología de primer nivel y la mejor infraestructura.</h2>
      <div className='infra-content'>
        <div className='infra-item'>
          <img src={infra1} alt="imagen 1" />
          <p>Zona de musculación y cardio</p>
        </div>
        <div className='infra-item'>
          <img src={infra2} alt="imagen 2" />
          <p>Equipamiento de primer nivel</p>
        </div>
        <div className='infra-item'>
          <img src={infra3} alt="imagen 3" />
          <p>Sala de clases grupales</p>
        </div>
      </div>
    </div>
  );
}
