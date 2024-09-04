import React from 'react';
import whatWeDoImg from '../assets/what-we-do.jpg';

const WhatWeDo = () => {
  return (
    <section className="what-we-do fade-in">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={whatWeDoImg} alt="What We Do" style={{ width: '50%', borderRadius: '10px' }} />
        <div>
          <h2>What We Do</h2>
          <p>Services and initiatives we are involved in...</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
