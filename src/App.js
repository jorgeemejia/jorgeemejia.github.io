import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import can from './images/can_2.png';
// import { HashLink as Link } from 'react-router-hash-link';

//fonts
import "./fonts/BOMBFONT TRIAL.ttf";
import "./fonts/Minecraft.ttf";
import "./fonts/VCR.ttf";

function App() {

  const [animationEnded, setAnimationHasEnded] = useState(false);

  function animationHandler(){
      console.log('Animation Ended');
      setAnimationHasEnded(true);
  }
  return (
    <div className='page'>
      {!animationEnded ? <img className='can' src={can} alt ='can' onAnimationEnd={animationHandler}/> :
                        <div className='site'>
                              <Navbar/>
                              <Hero/>
                              <Project/>
                              <About/>
                              <Footer/>
                              <Routes>
                                <Route path='/' exact />
                                <Route path='/products'/>
                                <Route path='/services'/>
                              </Routes>
                        </div>
    }
    </div>
  );
}

export default App;
