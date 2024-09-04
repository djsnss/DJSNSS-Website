import React from 'react';
import whatWeAreImg from '../assets/what-we-are.jpg';

const WhatWeAre = () => {
  return (
    <section className="what-we-are fade-in">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <h2>What We Are</h2>
          <p>Our mission, vision, and core values...</p>
        </div>
        <img src={whatWeAreImg} alt="What We Are" style={{ width: '50%', borderRadius: '10px' }} />
      </div>
    </section>
  );
};

export default WhatWeAre;
