import React from 'react';
import { Link } from 'react-router-dom';

const Volunteer = () => {
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="mt-20 mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Volunteer with Us
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Join our team of dedicated volunteers and make a lasting impact in the community. By contributing your time and skills, you will help us drive meaningful change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Volunteer?</h2>
            <p className="text-gray-600">
              Volunteering with us provides you with an opportunity to enhance your skills, build networks, and give back to the community. Together, we can make a difference!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Get Involved</h2>
            <p className="text-gray-600">
              Sign up for our programs, participate in community events, or join our special projects. There’s always an opportunity to contribute!
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link 
            to="/volunteer-policy" 
            className="inline-block px-4 sm:px-8 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            View Volunteer Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
