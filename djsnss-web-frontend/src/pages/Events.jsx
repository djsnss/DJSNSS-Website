import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LargeEvents from '../components/events/LargeEvents';
import UniversityEvents from '../components/events/UniversityEvents';
import LocalEvents from '../components/events/LocalEvents';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Retrieve events from local storage
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleClick = (eventId) => {
    localStorage.setItem('selectedEventId', eventId);
  };
  const renderEventCards = () => (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {events.map(event => (
        <div key={event._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 w-full sm:w-64 md:w-72 lg:w-80">
          <img src={event.eventImg} alt={event.eventName} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.eventName}</h2>
            <p className="text-gray-600 mb-2">{event.eventDesc}</p>
            <p className="text-gray-500 mb-4">{new Date(event.eventDate).toLocaleDateString()}</p>
            <Link to="/event-registration">
              <button
                onClick={() => handleClick(event._id)}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Registration for Event
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
  

  const renderMotionSection = (title, Component) => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-lg sm:text-xl md:text-3xl text-center font-bold text-gray-800 m-6">{title}</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Component />
      </motion.div>
    </>
  );

  return (
    <div className="bg-blue-200 flex flex-col">
      {/* Main Events Section */}
      <div className="mx-auto p-6 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6"
        >
          Events
        </motion.h1>

        {/* Render Event Cards at the top */}
        {renderEventCards()}
      </div>

      {/* Informational Sections */}
      <div className="max-w-6xl mx-2 md:mx-0 text-justify self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4">Why Volunteer?</h2>
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
          <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4">How to Get Involved</h2>
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
          <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4">Benefits of Volunteering</h2>
          <p className="text-gray-600 mb-4">
            Volunteering offers a unique set of benefits for both personal growth and career development. Discover the impact it can have on your life and community.
          </p>
          <ul className="list-disc ml-5 text-gray-600">
            <li>Develop leadership and teamwork skills</li>
            <li>Improve communication abilities</li>
            <li>Boost mental and emotional well-being</li>
            <li>Make lasting contributions to society</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4">Upcoming Opportunities</h2>
          <p className="text-gray-600 mb-4">
            Stay informed about upcoming volunteer opportunities and events that align with your interests. Don&apos;t miss out on your chance to make a difference.
          </p>
          <ul className="list-disc ml-5 text-gray-600">
            <li>Community clean-ups and outreach</li>
            <li>Fundraisers and charity events</li>
            <li>Skill-building workshops and trainings</li>
            <li>Networking opportunities</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4">Event Highlights</h2>
          <p className="text-gray-600 mb-4">
            Here are some of the key events happening this season. Check out these events to engage with the community, learn something new, and meet inspiring people.
          </p>
          <ul className="list-disc ml-5 text-gray-600">
            <li>Annual charity marathon</li>
            <li>Fundraising gala dinner</li>
            <li>Community service day</li>
            <li>Leadership and personal growth seminar</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-gray-600 mb-4">
            Hear from previous volunteers about their experiences and the positive impact volunteering has had on their lives.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
            “Volunteering has opened my eyes to the needs of my community and helped me grow in ways I never expected.”
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
            “I met amazing people while volunteering and gained invaluable skills that have helped my career.”
          </blockquote>
        </motion.div>
      </div>

      {/* Sub-Sections with Motion Animations */}
      <div className="w-full">
        {renderMotionSection('Large Scale Events', LargeEvents)}
        {renderMotionSection('University Level Events', UniversityEvents)}
        {renderMotionSection('Local Area Level Events', LocalEvents)}
      </div>
    </div>
  );
};

export default Events;
