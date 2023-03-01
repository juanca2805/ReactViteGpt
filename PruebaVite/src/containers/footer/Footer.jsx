import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text"></h1>
    </div>

    
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
    
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        
        <p>Redes sociales</p>
        
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compañia</h4>
        <p>Terminos y condiciones </p>
        <p>Politica de privacidad</p>
        <p>Contacto</p>
      </div>

    </div>
  </div>
);

export default Footer;
