import React from 'react';
import '../styles/infra.css';

import infra1 from '../resources/img/infra1.webp';
import infra2 from '../resources/img/infra2.webp';
import infra3 from '../resources/img/infra3.webp';

export const Infra = () => {
  return (
    <div className="infra-section">
      <div className="infra-head">
        <h2><span style={{ color: '#FF8C00' }}>Viví la Experiencia Bengalí:</span> tecnología de primer nivel y la mejor infraestructura.</h2>
        <p>Un gimnasio inteligente, donde la tecnología de primer nivel se combina con la mejor infraestructura para transformar tu rutina de entrenamiento. Controla todo desde una app personalizada: desde el acceso automático al gimnasio hasta la planificación de entrenamientos con equipos conectados. Monitorea tu progreso en tiempo real, reserva clases con instructores virtuales y ajusta las condiciones de los espacios, como la iluminación y el clima, para maximizar tu rendimiento. Todo al alcance de tu mano, sin interrupciones, sin esperas, solo resultados.</p>
      </div>
      <div className="infra-container">
        <div className="infra-content">
          <div className="infra-item">
            <img src={infra1} alt="Zona de musculación y cardio" />
            <p>Zona de musculación y cardio</p>
          </div>
          <div className="infra-item">
            <img src={infra2} alt="Equipamiento de primer nivel" />
            <p>Equipamiento de primer nivel</p>
          </div>
          <div className="infra-item">
            <img src={infra3} alt="Sala de clases grupales" />
            <p>Sala de clases grupales</p>
          </div>
        </div>
      </div>
    </div>
  );
};
