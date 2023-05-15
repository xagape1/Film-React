import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <p>Preguntas? Llama al 1-800-123-4567</p>
      <div>
        <a href="#">Preguntas frecuentes</a>
        <a href="#">Centro de ayuda</a>
        <a href="#">Términos de uso</a>
        <a href="#">Privacidad</a>
      </div>
    </div>
  );
};

export default Footer;
