import React, { useState } from 'react';
import axios from 'axios';

const EventRegistration = () => {
  const [user, setUser] = useState({
    name: "",
    sapId: "",
    branch: "",
    year: "",
    gender: "",
    email: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', user);
    try {
      const response = await axios.post('http://localhost:5000/api/register', user, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Registration Response:', response.data);
      setMessage("Registration successful!");

    } catch (error) {
      if (error.response) {
   
        console.error("Error registering for the event:", error.response.data);
        setMessage(`Registration failed: ${error.response.data.message || "Please try again."}`);
      } else if (error.request) {
      
        console.error("Error registering for the event:", error.request);
        setMessage("No response from server. Please try again.");
      } else {
       
        console.error("Error registering for the event:", error.message);
        setMessage("Registration failed due to an unexpected error. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register for Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="sapId" className="block text-sm font-medium text-gray-700">SAP ID</label>
            <input
              type="text"
              id="sapId"
              name="sapId"
              value={user.sapId}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={user.branch}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              value={user.year}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={user.gender}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Why do you want to be a part of this event?</label>
            <textarea
              id="description"
              name="description"
              value={user.description}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default EventRegistration;
