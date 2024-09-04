import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const AdminWorkPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventImg, setEventImg] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const newEvent = { eventName, eventImg, eventDesc, eventDate };

    axios.post('http://localhost:5000/api/events/create', newEvent)
      .then(response => {
        setEvents([...events, response.data]);
        setEventName('');
        setEventImg('');
        setEventDesc('');
        setEventDate('');
        setIsCreating(false);
      })
      .catch(error => console.error('Error creating event:', error));
  };

  const handleDelete = () => {
    if (eventToDelete) {
      axios.delete(`http://localhost:5000/api/events/${eventToDelete}`)
        .then(() => {
          setEvents(events.filter(event => event._id !== eventToDelete));
          setShowDeleteConfirm(false);
        })
        .catch(error => console.error('Error deleting event:', error));
    }
  };

  const handleEdit = (id) => {
    const event = events.find(event => event._id === id);
    setEditEvent(event);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/events/${editEvent._id}`, editEvent)
      .then(response => {
        setEvents(events.map(event => event._id === editEvent._id ? response.data : event));
        setEditEvent(null);
      })
      .catch(error => console.error('Error updating event:', error));
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
            <div className="mb-4">
              <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
              <input
                type="text"
                id="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eventImg" className="block text-gray-700 text-sm font-bold mb-2">Event Image URL</label>
              <input
                type="text"
                id="eventImg"
                value={eventImg}
                onChange={(e) => setEventImg(e.target.value)}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eventDesc" className="block text-gray-700 text-sm font-bold mb-2">Event Description</label>
              <textarea
                id="eventDesc"
                value={eventDesc}
                onChange={(e) => setEventDesc(e.target.value)}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eventDate" className="block text-gray-700 text-sm font-bold mb-2">Event Date</label>
              <input
                type="date"
                id="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Create Event
            </button>
          </form>
        )}

        {editEvent && (
          <form onSubmit={handleUpdate} className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="mb-4">
              <label htmlFor="editEventName" className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
              <input
                type="text"
                id="editEventName"
                value={editEvent.eventName}
                onChange={(e) => setEditEvent({ ...editEvent, eventName: e.target.value })}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="editEventImg" className="block text-gray-700 text-sm font-bold mb-2">Event Image URL</label>
              <input
                type="text"
                id="editEventImg"
                value={editEvent.eventImg}
                onChange={(e) => setEditEvent({ ...editEvent, eventImg: e.target.value })}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="editEventDesc" className="block text-gray-700 text-sm font-bold mb-2">Event Description</label>
              <textarea
                id="editEventDesc"
                value={editEvent.eventDesc}
                onChange={(e) => setEditEvent({ ...editEvent, eventDesc: e.target.value })}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="editEventDate" className="block text-gray-700 text-sm font-bold mb-2">Event Date</label>
              <input
                type="date"
                id="editEventDate"
                value={editEvent.eventDate}
                onChange={(e) => setEditEvent({ ...editEvent, eventDate: e.target.value })}
                required
                className="border rounded-lg py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Update Event
            </button>
            <button
              type="button"
              onClick={() => setEditEvent(null)}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 ml-4"
            >
              Cancel
            </button>
          </form>
        )}

        {showDeleteConfirm && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <p className="text-gray-700 text-lg mb-4">Are you sure you want to delete this event?</p>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 ml-4"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event._id} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <img src={event.eventImg} alt={event.eventName} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
              <p className="text-gray-700 mb-4">{event.eventDesc}</p>
              <p className="text-gray-500 mb-4">{new Date(event.eventDate).toLocaleDateString()}</p>
              <button
                onClick={() => handleEdit(event._id)}
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setEventToDelete(event._id);
                  setShowDeleteConfirm(true);
                }}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminWorkPage;
