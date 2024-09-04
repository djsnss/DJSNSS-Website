import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import WhatWeAre from './components/WhatWeAre';
import WhatWeDo from './components/WhatWeDo';
import Domains from './components/Domains';
import Collaborations from './components/Collaborations';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import logo from './assets/logo.jpg'; 

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const logo = document.querySelector('.logo-container');
    ScrollTrigger.create({
      trigger: '.content-container',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        logo.style.opacity = 1 - self.progress * 1.5; // Adjust fading effect
      },
    });

    gsap.utils.toArray('.fade-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="content-container">
        <Header />
        <WhatWeAre />
        <WhatWeDo />
        <Domains />
        <Collaborations />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
