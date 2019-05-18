import React from 'react';
import './App.css';

import Header from './header'
import Home from "./home"
import Skills from "./skills"
import Experience from "./experience"
import Extrac from "./extracurricular"
import Contact from "./contact"
import Footer from "./footer"



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Extrac />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
