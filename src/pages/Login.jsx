import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginWork from './LoginWork'; // Import the LoginWork component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        setIsLoggedIn(true); // Set logged-in state to true
      } else {
        setError(result.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred');
    }
  };

  if (isLoggedIn) {
    return <LoginWork />; // Render LoginWork component if logged in
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className="container mx-auto p-4 mt-20 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
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
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
