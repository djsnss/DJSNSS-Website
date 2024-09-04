import React from 'react';
import collaborationsImg from '../assets/collaborations.png';

const Collaborations = () => {
  return (
    <section className="collaborations fade-in">
      <h2>Our Collaborations</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>Key partnerships and alliances...</p>
        <img src={collaborationsImg} alt="Collaborations" style={{ width: '50%', borderRadius: '10px' }} />
      </div>
    </section>
  );
};

export default Collaborations;
