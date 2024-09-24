import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import LargeEvents from '../components/events/LargeEvents';
import UniversityEvents from '../components/events/UniversityEvents';
import LocalEvents from '../components/events/LocalEvents';
import GenerateCertificate from '../components/events/generateCertificate';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleClick = (eventId) => {
    localStorage.setItem('selectedEventId', eventId);
  };

  const renderEventCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(event => (
        <div key={event._id} className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
          <img src={event.eventImg} alt={event.eventName} className="w-full h-40 object-cover rounded-t-lg mb-4" />
          <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
          <p className="text-gray-700 mb-4">{event.eventDesc}</p>
          <p className="text-gray-500 mb-4">{new Date(event.eventDate).toLocaleDateString()}</p>
          <Link to="/event-registration">
            <button
              onClick={() => handleClick(event._id)}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Registration for Event
            </button>
          </Link>
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
        {renderEventCards()}
      </div>

      {/* Informational Section 1: Why Volunteer? */}
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

        {/* Informational Section 2: How to Get Involved */}
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

        {/* Informational Section 3: Benefits of Volunteering */}
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

        {/* Informational Section 5: Event Highlights */}
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

        {/* Informational Section 6: Testimonials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-gray-600 mb-4">
            Hear from individuals who have participated in our past events and volunteered their time to make a difference. Their stories of impact and growth will inspire you to get involved.
          </p>
          <ul className="list-disc ml-5 text-gray-600">
            <li>&quot;Volunteering has been a life-changing experience. I&apos;ve met incredible people and learned valuable skills.&quot;</li>
            <li>&quot;Participating in the community events has helped me give back and grow personally.&quot;</li>
            <li>&quot;The opportunities provided have been both rewarding and fulfilling.&quot;</li>
            <li>&quot;Being a part of these events has boosted my confidence and leadership abilities.&quot;</li>
          </ul>
        </motion.div>
      </div>

      <div className="mx-auto p-6">
        <GenerateCertificate />
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
