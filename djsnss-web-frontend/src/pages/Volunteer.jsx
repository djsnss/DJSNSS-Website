import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Volunteer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-20 mx-auto p-6 lg:p-12 max-w-6xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 mb-6">
            Volunteer with Us
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200">
            Join our team of dedicated volunteers and make a lasting impact in the community. Contribute your time and skills to drive meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Why Volunteer?</h2>
            <p className="text-gray-600 mb-4">
              Volunteering provides an opportunity to enhance your skills, build networks, and give back to the community. Make a tangible difference and grow personally and professionally.
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Enhance personal and professional skills</li>
              <li>Build meaningful connections</li>
              <li>Gain valuable experience</li>
              <li>Receive recognition for your efforts</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">How to Get Involved</h2>
            <p className="text-gray-600 mb-4">
              Explore ways to contribute, from signing up for programs to participating in community events and special projects tailored to your interests and skills.
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Sign up for volunteer programs</li>
              <li>Participate in community outreach</li>
              <li>Join special projects and initiatives</li>
              <li>Attend orientation and training sessions</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 mb-4">
              Join our upcoming events and make an impact. Participate in clean-ups, charity runs, food drives, and more!
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Community Clean Up Day - Oct 15, 2024</li>
                <li>Community Clean-Up Day - Oct 15, 2024</li>
                <li>Annual Charity Run - Nov 10, 2024</li>
                <li>Food Drive - Dec 5, 2024</li>
                <li>Winter Festival Volunteering - Dec 20, 2024</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <Link
            to="/volunteer-policy"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-lg"
          >
            View Volunteer Policy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">Volunteer Benefits</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 text-center">
            Discover the numerous benefits of volunteering with us, from personal growth to professional development.
          </p>
          <ul className="list-disc ml-6 sm:ml-8 lg:ml-10 text-gray-600">
            <li>Develop leadership and teamwork skills</li>
            <li>Gain hands-on experience in various fields</li>
            <li>Enhance your resume and career prospects</li>
            <li>Build a network of like-minded individuals</li>
            <li>Receive certificates and awards for your contributions</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">Success Stories</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Jane Doe’s Journey</h3>
              <p className="text-gray-600">
                Jane Doe began her journey as a volunteer and now leads our community outreach programs. Her dedication and hard work have significantly impacted our initiatives and inspired many others to join our cause.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">John Smith’s Transformation</h3>
              <p className="text-gray-600">
                John Smith utilized his skills in event management to organize several successful charity events. His involvement has helped raise significant funds and awareness for our causes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Volunteer;
