import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        navigate('/admin-work');
      } else {
        setError(result.message || 'An error occurred');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred');
    }
  };

  return (
    <div className='flex flex-col h-[80vh] bg-gradient-to-br from-blue-400 to-green-300'>
      <div className="container mx-auto p-4 mt-20 max-w-md">
        <motion.h1
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Admin Login
        </motion.h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg py-2 px-3 text-gray-700 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded-lg py-2 px-3 text-gray-700 w-full"
            />
          </div>
          <motion.button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default AdminLogin;
