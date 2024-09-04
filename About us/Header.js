import React from 'react';
import headerBg from '../assets/logo.jpg';

const Header = () => {
  return (
    <header className="fade-in" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', color: 'white' }}>
      <h1 className="header-title">About Us</h1>
      <p>NSS DJ Sanghvi is the DJ Sanghvi College chapter of the National Service Scheme, under the Ministry of Youth Affairs & Sports, Govt. of India. Our main goal is to encourage students at DJ Sanghvi College to participate in nation-building activities. Through various events and projects, we focus on helping people in and around our college. We believe that these activities bring great satisfaction and happiness.</p>
    </header>
  );
};

export default Header;
