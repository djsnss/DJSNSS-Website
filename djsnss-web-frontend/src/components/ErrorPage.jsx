import React from 'react';
import { Link } from 'react-router-dom';
import errorBg from '../assets/error.jpg'; // Replace with your background image

const ErrorPage = () => {
  return (
    <div className="pt-16">
      {/* Background section with overlay */}
      <div
        className="relative w-full h-[4s0vh] sm:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${errorBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Information Section */}
      <div className="max-w-4xl mx-auto text-center py-8 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Oops! Something went wrong.</h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          The page you're looking for doesn't exist. Please return to the{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            homepage
          </Link>{' '}
          or explore our{' '}
          <Link to="/events" className="text-blue-500 hover:underline">
            Events
          </Link>{' '}
          and{' '}
          <Link to="/about" className="text-blue-500 hover:underline">
            About Us
          </Link>{' '}
          pages.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
