import { Link } from 'react-router-dom'
import checkHoursBg from '../assets/checkHoursBg.jpg'

const checkHours = () => {
    return (
        <div className="pt-16">
            {/* Background section with overlay */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${checkHoursBg})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-4xl sm:text-6xl text-white font-bold pt-28 sm:pt-32 text-center">Section Under Development!</h1>
            </div>
            
            {/* Information Section */}
            <div className="max-w-4xl mx-auto text-center py-8 px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Important Information</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    <strong className='text-red-500'>This section is under development. Stay tuned for updates. <br /></strong>
                    If you are a volunteer, please visit our <Link to="/about" className="text-blue-500 hover:underline">About Us</Link> page or explore 
                    <Link to="/events" className="text-blue-500 hover:underline ml-1">Our Events</Link> to discover volunteer opportunities.
                </p>
            </div>
        </div>
    )
}

export default checkHours
