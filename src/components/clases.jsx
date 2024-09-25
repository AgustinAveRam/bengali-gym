import React from 'react';
import '../styles/clases.css';

import clase1 from '../resources/img/clase1.webp';
import clase2 from '../resources/img/clase2.webp';
import clase3 from '../resources/img/clase3.webp';
import clase4 from '../resources/img/clase4.webp';

export const Clases = () => {
  return (
    <div className="clases-section" id='clases'>
      <div className="clases-head">
        <h2>Conocé nuestras <span style={{ color: '#FF8C00' }}>clases grupales.</span></h2>
      </div>
      <div className="clases-container">
        <div className="clases-content">
          <div className="clases-item">
            <img src={clase1} alt="BengalDance" />
            <h3>Bengal Danece</h3>
            <p>Clase grupal, donde se combinan distintos estilos de baile, mediante la cual entrenas la coordinación, resistencia y flexibilidad. Pensada para todo tipo de público que tenga ganas de estar en movimiento. Dura 45 minutos/1 Hora y está 100% guiado por un instructor.</p>
          </div>
          <div className="clases-item">
            <img src={clase2} alt="Abdominales" />
            <h3>Abdominales</h3>
            <p>Entrenamiento focalizado en la zona media del cuerpo, que tiene como objetivo prevenir lesiones, reducir dolores y mejorar nuestra postura a la hora de entrenar y en el día a día. Dura 30 minutos y está guiada 100% por un profesor. (Si te cuesta introducir este tipo de ejercicios en tu rutina, súmate a la clase y problema resuelto</p>
          </div>
          <div className="clases-item">
            <img src={clase1} alt="Bengal Cross" />
            <h3>Bengal Cross</h3>
            <p>Entrenamiento funcional, dividido por estaciones, donde utilizamos distintos elementos con peso, focalizándose en la técnica correcta de los movimientos, para lograr: mejorar la fuerza, prevenir lesiones y facilitar el descenso de peso. Duración 30 minutos, guiados 100% por un profesor.</p>
          </div>
          <div className="clases-item">
            <img src={clase2} alt="Estiramiento" />
            <h3>Estiramiento</h3>
            <p>Es una práctica deportiva que consiste en estirar zonas concretas del cuerpo. El objetivo principal del entrenamiento es la flexibilidad, y se debe entrenar casi a diario. También ayudan a rebajar las tensiones musculares y volver a un estado de calma post ejercicio. Duración 30 minutos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
