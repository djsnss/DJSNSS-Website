import React from 'react';
import { Link } from 'react-router-dom';
import { featuresData } from '../data/index';
import logo from '../assets/DJSLogo.png';
import College from '../assets/College.avif';
import CorePic from '../assets/Core.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '../components/ImageCarousel';

const images = [CorePic, College, CorePic, College];
const captions = ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'];

const Home = () => {
  const getWidthClasses = (index, length) => {
    // If it's the last item and an odd number of items, make it full width
    if (index === length - 1 && length % 2 !== 0) {
      return 'w-full';
    }
    // Alternate 2/3 and 1/3 widths
    return index % 4 === 0 || index % 4 === 3 ? 'w-full md:w-2/3' : 'w-full md:w-1/3';
  };

  return (
    <div className='flex flex-col'>
      <Navbar />
      {/* Hero Section */}
      <div className="w-full h-screen max-h-[600px] bg-cover bg-center relative" style={{ backgroundImage: `url(${CorePic})`, backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <img src={logo} alt="NSS IIT Delhi" className="h-20 w-20 mb-10" />
          <h1 className="text-xl md:text-5xl sm:text-3xl font-bold mb-10 text-center">NSS Dwarkadas J. Sanghvi College of Engineering</h1>
          <p className="text-xl md:text-2xl text-center">FOR YOU, WITH YOU, ALWAYS!</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 w-full">
        <div className="flex flex-wrap">
          {featuresData.map((feature, index) => (
            <div key={feature.id} className={`${feature.background} p-24 flex flex-col justify-center items-center ${getWidthClasses(index, featuresData.length)}`}>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="mb-4">{feature.description}</p>
              <Link to={feature.link} className="hover:text-blue-500 flex justify-evenly items-center gap-2 font-semibold">
                View Details <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ImageCarousel images={images} captions={captions} />
      <Footer />
    </div>
  );
};

export default Home;
