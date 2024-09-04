import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuLinks } from '../data/index';
import logo from '../assets/logo.png';
import DJSLogo from '../assets/DJSLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 800) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-white shadow-md shadow-opacity-50 shadow-black' : 'bg-white'} transition duration-300`}>
      <div className="container mx-auto flex lg:justify-evenly justify-between items-center p-3">
        <div className='flex justify-start items-center '>
          <Link to="/" className="text-xl font-bold text-gray-800 items-center flex">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            DJSNSS
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6 items-center">
          {MenuLinks.map((link) => (
            <Link key={link.id} to={`/${link.link}`} className="text-gray-600 text-md hover:text-black font-semibold">
              {link.name}
            </Link>
          ))}
          <Link to="/check-hours" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Check Hours
          </Link>
          <Link to="/hours-complaint" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Hours Complaint
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className={`text-gray-800 focus:outline-none ${!isOpen ? 'block justify-between' : 'hidden'}`}>
            <svg
              className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'} duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed inset-y-0 left-0 w-full bg-white p-4 transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="Logo" className="h-16 w-16 mb-4 self-center" />
          {MenuLinks.map((link) => (
            <Link
              key={link.id}
              to={`/${link.link}`}
              className="text-gray-800 text-lg hover:bg-gray-100 p-2 rounded"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/check-hours"
            className="bg-blue-500 text-white max-w-[200px] py-2 px-4 rounded-full text-center"
            onClick={toggleMenu}
          >
            Check Hours
          </Link>
          <Link
            to="/hours-complaint"
            className="bg-blue-500 text-white py-2 max-w-[200px] px-4 rounded-full text-center"
            onClick={toggleMenu}
          >
            Hours Complaint
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
