import React from 'react';
import '../styles/plansGrid.css';
import { SecondBtn } from './secondBtn.jsx';
import IsotipoNegro from '../resources/logos/isotipo-negro.png';

export const PlansGrid = () => {
    return (
    <div className="plans-container">
      <h2>Elegí tu plan</h2>
      <p>Entrená con nosotros eligiendo un plan. Todos incluyen áreas de cardio, pase libre y más.</p>

      <table className="plans-table">
        <thead>
          <tr>
            <th></th>
            <th>Bengal
                <img id='isotipoNegro' src={IsotipoNegro} alt="" />
            </th>
            <th>Core</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Área de pase libre, cardio y clases grupales</td>
            <td><span className="check">&#10003;</span></td>
            <td><span className="check">&#10003;</span></td>
          </tr>
          <tr>
            <td>Acceso ilimitado a todas las sedes del país</td>
            <td><span className="check">&#10003;</span></td>
            <td><span className="check">&#10003;</span></td>
          </tr>
          <tr>
            <td>App Bengalí Go: Entrená desde donde estés</td>
            <td><span className="check">&#10003;</span></td>
            <td><span className="cross">&#10005;</span></td>
          </tr>
          <tr>
            <td>Invitá a tus amigos a entrenar (5 pases mensuales)</td>
            <td><span className="check">&#10003;</span></td>
            <td><span className="cross">&#10005;</span></td>
          </tr>
          <tr>
            <td>Acceso a sillones de masaje</td>
            <td><span className="check">&#10003;</span></td>
            <td><span className="cross">&#10005;</span></td>
          </tr>
          <tr>
            <td>Costo mensual</td>
            <td>$1.690</td>
            <td>$1.390</td>
          </tr>
        </tbody>
      </table>
      <SecondBtn label="¡Inscríbete ya!" />
    </div>
  );
};
