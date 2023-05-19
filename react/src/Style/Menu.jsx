import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import './Menu.css';

const Menu = () => {
  return (
    <body>
      <div>
        <Header></Header>
        <div className="menu-container">
        <img  className="film" src="/images/logosinfilm.png" alt="Film Logo" />
          <h1 className="logo">Film Company</h1>
          <nav className="navigation">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/series" className="nav-link">Series</Link>
            <Link to="/peliculas" className="nav-link">Películas</Link>
            <Link to="/mi-lista" className="nav-link">Mi Lista</Link>
          </nav>
        </div>
        <div className="movie-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/popular">Populares</Link>
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
};

export default Menu;
