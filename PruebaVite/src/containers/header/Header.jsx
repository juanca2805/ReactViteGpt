import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Conoce el mejor ChatBot del mercado</h1>
      <p>GPT-3 el mejor ChatBot del mercado actualizado todos los dias con
        una gran capacidad de usuarios.</p>
  
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
