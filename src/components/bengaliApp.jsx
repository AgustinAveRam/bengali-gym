import React from 'react'
import '../styles/bengaliApp.css'
import appImg from '../resources/img/app.webp'
import qrcode from '../resources/img/qrcode.png'

export const BengaliApp = () => {
  return (
    <div className='bengaliApp-container' id='app'>
        <div className='bengaliApp-desc'>
            <h2><span style={{ color: '#1D1D1B' }}>Bengalí App:</span> una experiencia de entrenamiento completa, dentro y fuera del gimnasio</h2>
            <p>No importa si ya tienes experiencia o si recién estás comenzando a practicar actividad física, una cosa es segura: ¡al descargar gratis la aplicación <span style={{ color: '#1D1D1B' }}>Bengalí App</span> , obtienes el mejor aliado para tu rutina de entrenamiento! Exclusivo para clientes.</p>
            <p style={{ color: '#1D1D1B' }}>Escanea el código QR para descargarla gratis.</p>
            <img src={qrcode} alt="BengalíApp" />
        </div>
        <div className='bengaliApp-img'>
            <img src={appImg} alt="BengalíApp" />
        </div>

    </div>

)
}
