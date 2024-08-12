// Events.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className="container p-auto mt-20 mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={event.eventImg} alt={event.eventName} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
                <p className="text-gray-700 mb-2">{event.eventDesc}</p>
                <p className="text-gray-500">{new Date(event.eventDate).toLocaleDateString()}</p>
                <Link to="/event-registration" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-center">
                  Registration for Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
