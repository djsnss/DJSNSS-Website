import React from 'react'
import Navbar from '../components/Navbar'
const Events = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className="container p-auto mt-20 mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">Events</h1>
      </div>
    </div>
  )
}

export default Events