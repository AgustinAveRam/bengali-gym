import React from 'react'
import logoNaranja from '../resources/logos/logo-naranja.png'
import '../styles/navbar.css';

export const Navbar = () => {
  return (
    <nav>
    <ul>
        <li>
            <img src={logoNaranja} id='navLogo'></img>
        </li>
      <li>
        <a href="#">Gimnasios</a>
      </li>
      <li>
        <a href="#">Planes</a>
      </li>
      <li>
        <a href="#">Cursos</a>
      </li>
      <li>
        <a href="#">Merch</a>
      </li>
      <li>
        <a href="#">Contacto</a>
      </li>
    </ul>
  </nav>
  )
}
