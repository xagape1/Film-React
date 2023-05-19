import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Header from '../Layout/Header';

const Menu = () => {
  const shouldShowHeader = false; // Aquí define tu condición para mostrar o no el Header

  return (
    <div>
      {shouldShowHeader && <Header />}
      <div className="container">
        <h1 className="logo">FilmCompany</h1>
        <nav className="navigation">
          <Link to="/">Inicio</Link>
          <Link to="/series">Series</Link>
          <Link to="/peliculas">Películas</Link>
          <Link to="/mi-lista">Mi Lista</Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
