import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EventDetails = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className="container p-auto mt-20 mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">EventDetails</h1>
      </div>
      <Footer />
    </div>
  )
}

export default EventDetails