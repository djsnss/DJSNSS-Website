import React from 'react';
import educationImg from '../assets/education.jpg';
import healthImg from '../assets/health.jpg';
import innovationImg from '../assets/innovation.jpg';
import societyImg from '../assets/society.jpg';
import environmentImg from '../assets/environment.jpg';
import './Domains.css';

const Domains = () => {
  return (
    <section className="domains fade-in">
      <h2>Our Domains</h2>
      <div className="grid-container">
        <div className="domain-item">
          <img src={educationImg} alt="Education" className="domain-img" />
          <h3>Education</h3>
          <p>Brief details about the education domain...</p>
        </div>
        <div className="domain-item">
          <img src={healthImg} alt="Health" className="domain-img" />
          <h3>Health</h3>
          <p>Brief details about the health domain...</p>
        </div>
        <div className="domain-item">
          <img src={innovationImg} alt="Innovation" className="domain-img" />
          <h3>Innovation</h3>
          <p>Brief details about the innovation domain...</p>
        </div>
        <div className="domain-item">
          <img src={societyImg} alt="Society" className="domain-img" />
          <h3>Society</h3>
          <p>Brief details about the society domain...</p>
        </div>
        <div className="domain-item">
          <img src={environmentImg} alt="Environment" className="domain-img" />
          <h3>Environment</h3>
          <p>Brief details about the environment domain...</p>
        </div>
      </div>
    </section>
  );
};

export default Domains;
