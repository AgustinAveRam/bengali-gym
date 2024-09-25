import React, { useState } from 'react';
import logoNaranja from '../resources/logos/logo-naranja.png';
import '../styles/navbar.css';

export const Navbar = () => {
  // Estado para manejar el colapso del menú
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Icono de hamburguesa */}
      </div>
      <ul className={isOpen ? 'navMenu open' : 'navMenu'}>
        <li>
          <img src={logoNaranja} id='navLogo' alt="logo" />
        </li>
        <li><a href="#plans">Planes</a></li>
        <li><a href="#gyms">Gimnasios</a></li>
        <li><a href="#clases">Clases</a></li>
        <li><a href="#">Merch</a></li>
        <li><a href="#footer">Contacto</a></li>
        <li id='liApp'><a href="#app">App</a></li>
      </ul>
    </nav>
  );
}
