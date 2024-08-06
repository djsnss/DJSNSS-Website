import { Link } from 'react-router-dom';
import logo from '../assets/DJSLogo.png'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: {  } }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <img src={logo} alt="NSS IIT Delhi" className="h-20 w-20 mb-10" />
          <h1 className="text-xl md:text-5xl sm:text-3xl font-bold mb-10">NSS Dwarkadas J. Sanghvi College of Engineering</h1>
          <hr />
          <p className="text-xl md:text-2xl">FOR YOU, WITH YOU, ALWAYS!</p>
        </div>
      </div>

      {/* Features Section */}
      <div className=" bg-gray-100">
        <div className="">
          <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row w-full h-1/3">
              {/* Feature 1 */}
              <div className="bg-green-200 w-full sm:w-2/3 p-24 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">Educational Outreach</h2>
                <p className="mb-4">Shaping Indias futures</p>
                <Link to="/details" className="hover:text-blue-500">
                  View Details `{'>>'}`
                </Link>
              </div>
              {/* Feature 2 */}
              <div className="bg-yellow-200 w-full sm:w-1/3 p-24 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">Collection Drive</h2>
                <p className="mb-4">Our small actions, others' huge aid</p>
                <Link to="/details" className="hover:text-blue-500">
                  View Details `{'>>'}`
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full h-1/3">
              {/* Feature 1 */}
              <div className="bg-blue-200 w-full sm:w-1/3 p-24 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">Educational Outreach</h2>
                <p className="mb-4">Shaping Indias futures</p>
                <Link to="/details" className="hover:text-blue-500">
                  View Details `{'>>'}`
                </Link>
              </div>
              {/* Feature 2 */}
              <div className="bg-pink-200 w-full sm:w-2/3 p-24 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">Collection Drive</h2>
                <p className="mb-4">Our small actions, others' huge aid</p>
                <Link to="/details" className="hover:text-blue-500">
                  View Details `{'>>'}`
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
