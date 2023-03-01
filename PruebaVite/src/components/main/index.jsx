import React from 'react';

import { Footer, Blog, Possibility,WhatGPT3, Header } from '../../containers';
import { Navbar } from '../../components';

import './App.css';

const Index2 = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
   
    <WhatGPT3 />
 
    <Possibility />
   
    <Blog />
    <Footer />
  </div>
);

export default Index2;
