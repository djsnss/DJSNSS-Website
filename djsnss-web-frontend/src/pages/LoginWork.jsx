import React, { useState } from 'react';
import axios from 'axios';

const LoginWork = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
    photo: null, 
  });
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('designation', formData.designation);
    form.append('description', formData.description);
    if (formData.photo) {
      form.append('photo', formData.photo);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login-work', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('LoginWork Response:', response.data);
      setMessage("Data saved successfully!");

    } catch (error) {
      if (error.response) {
        console.error("Error saving data:", error.response.data);
        setMessage(`Save failed: ${error.response.data.message || "Please try again."}`);
      } else if (error.request) {
        console.error("Error saving data:", error.request);
        setMessage("No response from server. Please try again.");
      } else {
        console.error("Error saving data:", error.message);
        setMessage("Save failed due to an unexpected error. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Submit Your Work</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              rows="4"
              required
            />
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default LoginWork;
