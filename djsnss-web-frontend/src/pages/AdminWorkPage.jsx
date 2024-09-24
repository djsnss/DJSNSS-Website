import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const AdminWorkPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventImg, setEventImg] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [whyAttend, setWhyAttend] = useState('');
  const [events, setEvents] = useState([]);
  const [editEventIndex, setEditEventIndex] = useState(null);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const newEvent = { eventName, eventImg, eventDesc, eventDate, whyAttend };
    const updatedEvents = [...events];

    if (editEventIndex !== null) {
      updatedEvents[editEventIndex] = newEvent; // Update existing event
      setEditEventIndex(null); // Reset editing state
    } else {
      updatedEvents.push(newEvent); // Create new event
    }

    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    resetForm();
  };

  const handleEdit = (index) => {
    const eventToEdit = events[index];
    setEventName(eventToEdit.eventName);
    setEventImg(eventToEdit.eventImg);
    setEventDesc(eventToEdit.eventDesc);
    setEventDate(eventToEdit.eventDate);
    setWhyAttend(eventToEdit.whyAttend);
    setEditEventIndex(index); // Set the index of the event to edit
    setIsCreating(true); // Show the form
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const resetForm = () => {
    setEventName('');
    setEventImg('');
    setEventDesc('');
    setEventDate('');
    setWhyAttend('');
    setIsCreating(false);
  };

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className="container p-auto mt-20 mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Work Page</h1>
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mb-6"
        >
          {isCreating ? 'Cancel' : 'Create Event'}
        </button>

        {isCreating && (
          <form onSubmit={handleCreateSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Event Name"
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <input
              type="text"
              value={eventImg}
              onChange={(e) => setEventImg(e.target.value)}
              placeholder="Event Image URL"
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <textarea
              value={eventDesc}
              onChange={(e) => setEventDesc(e.target.value)}
              placeholder="Event Description"
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <textarea
              value={whyAttend}
              onChange={(e) => setWhyAttend(e.target.value)}
              placeholder="Why do you want to attend this event?"
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              {editEventIndex !== null ? 'Update Event' : 'Create Event'}
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <img src={event.eventImg} alt={event.eventName} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
              <p className="text-gray-700 mb-4">{event.eventDesc}</p>
              <p className="text-gray-500 mb-4">{new Date(event.eventDate).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-4"><strong>Why Attend:</strong> {event.whyAttend}</p>
              <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 mr-4">Edit</button>
              <button onClick={() => handleDelete(index)} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminWorkPage;
