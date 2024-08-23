import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  return (
    <div className='flex flex-col'>
      <div className="container mx-auto p-4 mt-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event._id} className="bg-white shadow-md rounded-lg p-6 mb-6">
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
      </div>
    </div>
  );
};

export default Events;
