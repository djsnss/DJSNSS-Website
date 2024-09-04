import React from 'react'
import { Link } from 'react-router-dom'
import adminBg from '../assets/adminBg.jpg'
const Admin = () => {
    return (
        <div className="pt-16">
            {/* Background section with overlay */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${adminBg})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <h1 className="relative text-4xl sm:text-6xl text-white font-bold pt-28 sm:pt-32 text-center">Admin Panel</h1>
            </div>
            
            {/* Information Section */}
            <div className="max-w-4xl mx-auto text-center py-8 px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Admin Panel Only</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    This section is exclusively for administrators to manage and streamline social service processes.
                    If you are a volunteer, please visit our <Link to="/about" className="text-blue-500 hover:underline">About Us</Link> page or explore 
                    <Link to="/events" className="text-blue-500 hover:underline ml-1">Our Events</Link> to discover volunteer opportunities.
                </p>
                
                {/* Hours Complaint Button */}
                <div className="mt-6 sm:mt-8">
                    <Link to="/admin-login" className="inline-block px-4 sm:px-8 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                        Admin Work
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Admin
