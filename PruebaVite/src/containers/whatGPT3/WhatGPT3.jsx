import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Que es GPT-3" text="GPT-3 es un chatbot con las ultimas tecnologias
       es el chadbot mas util en el mercado y con mayor capacidad de usuario"/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Utilidad</h1>
      <p>Chatbot multifuncional</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Operaciones aricmeticas" text="nuestro chat cuenta con la funcion de hacer
      operaciones matematicas dando una explicacion de su procedimiento." />
      <Feature title="Codigo" text="Nuestro chat tiene una funcion que puede darte informacion de
      como funciona codigos en casi cualquier lenguaje" />
      <Feature title="Bot-amigo" text="Nuestro bot puede tener una conversacion racional con las
      personas y puede ayudarse si te sientes solo y no tienes con quien hablar" />
    </div>
  </div>
);

export default WhatGPT3;
