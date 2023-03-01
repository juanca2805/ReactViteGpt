import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility"  />
    </div>
    <div className="gpt3__possibility-content">
      <h4>La humanidad en los bots</h4>
      <h1 className="gradient__text">Convivir con los bots <br /> no es imposible</h1>
      <p>Nuestro Chat-bot puede tener conversaciones muy naturales con las personas
        que parece que una persona les respondiera es capaz de comprender muchas cosas
        y utilizarlas en otro momento.</p>
      <h4>Conversa con nuestro chatbot</h4>
    </div>
  </div>
);

export default Possibility;
