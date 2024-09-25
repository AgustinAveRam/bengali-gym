import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='footer-container' id='footer'>
      <div className='footer-content'>
        <div className='footer-section contact-info'>
          <h3>Contacto</h3>
          <p><FaMapMarkerAlt /> Av. Siempre Viva 123, Springfield</p>
          <p><FaPhone /> (+598) 555-5555</p>
          <p><FaEnvelope /> info@bengali.com</p>
        </div>
        <div className='footer-section quick-links'>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#services">Gimnasios</a></li>
            <li><a href="#plans">Planes</a></li>
            <li><a href="#contact">Clases</a></li>
            <li><a href="#contact">Merch</a></li>
          </ul>
        </div>
        <div className='footer-section social-media'>
          <h3>Síguenos</h3>
          <div className='social-icons'>
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Designed by Agustina Ferro. Powered by Agustín Avelino.</p>
        <p>Copyright© 2024 Bengalí.</p>
      </div>
    </footer>
  );
};
