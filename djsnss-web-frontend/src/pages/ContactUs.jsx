import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="pt-16">
      {/* Background section with overlay */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?auto=format&fit=crop&w=1350&q=80)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h1 className="relative text-4xl sm:text-6xl text-white font-bold pt-28 sm:pt-32 text-center">
          Contact Us
        </h1>
      </div>

      {/* Information Section */}
      <div className="max-w-4xl mx-auto text-center py-8 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          We’re here to assist you. For any queries or information, reach out to us at{' '}
          <a href="mailto:djnss.official@gmail.com" className="text-blue-500 hover:underline">
            djnss.official@gmail.com
          </a>
          . Visit our{' '}
          <a href="https://djsce.ac.in" className="text-blue-500 hover:underline">
            official college website
          </a>{' '}
          for more details. You can also explore our{' '}
          <Link to="/events" className="text-blue-500 hover:underline">
            Events
          </Link>{' '}
          or learn more{' '}
          <Link to="/about" className="text-blue-500 hover:underline">
            About Us
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
