import { Link } from 'react-router-dom';
import { featuresData } from '../data/index';
import logo from '../assets/DJSLogo.png';
import College from '../assets/College.avif';
import CorePic from '../assets/Core.jpg';
import ImageCarousel from '../components/ImageCarousel';
import SneakPeek from '../components/SneakPeek';
import Faculty_Team from '../components/Faculty_Team';

import BandraBC from '../assets/Events/BandraBC.png'
import CyberSavvy from '../assets/Events/CyberSavvy.png'
import AntiDowry from '../assets/Events/AntiDowry.png'
import yarana1 from '../assets/Events/Yaarana/yarana1.jpg'
const images = [BandraBC, yarana1, CyberSavvy, AntiDowry];
const captions = ['Bandra Beach Cleanup', 'Friendship Day with Kids', 'CyberSavvy: CyberSecurity Teaching to Kids', 'Anti Dowry Awareness Event'];

const Home = () => {
  const getWidthClasses = (index, length) => {
    if (index === length - 1 && length % 2 !== 0) {
      return 'w-full';
    }
    return index % 4 === 0 || index % 4 === 3 ? 'w-full md:w-2/3' : 'w-full md:w-1/3';
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${CorePic})` }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <img src={logo} alt="NSS IIT Delhi" className="h-20 w-20 mb-10" />
          <h1 className="text-xl md:text-5xl sm:text-3xl font-bold mb-10 mx-2 text-center text-white">
            NSS Dwarkadas J. Sanghvi College of Engineering
          </h1>
          <p className="text-md md:text-2xl text-center text-white">
            <div className="w-full border-white mb-5 border-b-4"></div>
            FOR YOU, WITH YOU, ALWAYS!
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 w-full">
        <div className="flex flex-wrap">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={`${getWidthClasses(index, featuresData.length)} relative py-24 flex flex-col justify-center items-center transition-all duration-500 ease-in-out group`}
            >
              {/* Background image with dark overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${feature.imageURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              ></div>

              <div
                className={`absolute inset-0 ${feature.background} opacity-50 group-hover:opacity-0 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <div className="w-full mx-auto border-white mb-2 border-b-4"></div>
                <p className="mb-1">{feature.description}</p>
                <Link to={feature.link} className="hover:text-blue-500 font-semibold">
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <SneakPeek />
      <Faculty_Team />
      <ImageCarousel images={images} captions={captions} />
    </div>
  );
};

export default Home;
