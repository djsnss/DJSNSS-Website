import { Link } from 'react-router-dom';
import { featuresData } from '../data/index';
import logo from '../assets/DJSLogo.png';
import College from '../assets/College.avif';
import CorePic from '../assets/Core.jpg';
import ImageCarousel from '../components/ImageCarousel';
import SneakPeek from '../components/SneakPeek';
import Faculty_Team from '../components/Faculty_Team';
const images = [CorePic, College, CorePic, College];
const captions = ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'];

const Home = () => {
  const getWidthClasses = (index, length) => {
    if (index === length - 1 && length % 2 !== 0) {
      return 'w-full';
    }
    return index % 4 === 0 || index % 4 === 3 ? 'w-full md:w-2/3' : 'w-full md:w-1/3';
  };

  return (
    <div className='flex flex-col'>
      <div className="w-full h-screen max-h-[100vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${CorePic})`, backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <img src={logo} alt="NSS IIT Delhi" className="h-20 w-20 mb-10" />
          <h1 className="text-xl md:text-5xl sm:text-3xl font-bold mb-10 mx-2 text-center">NSS Dwarkadas J. Sanghvi College of Engineering</h1>
          <p className="text-md md:text-2xl text-center">
            <div className="w-full border-white mb-5 border-b-4"></div>
            FOR YOU, WITH YOU, ALWAYS!</p>
        </div>
      </div>
      <div className="bg-gray-100 w-full">
        <div className="flex flex-wrap">
          {featuresData.map((feature, index) => (
            <div key={feature.id} className={`${feature.background} relative py-24 flex flex-col justify-center items-center transition-colors duration-500 ease-in-out hover:bg-transparent ${getWidthClasses(index, featuresData.length)}`}>
              <div className="absolute inset-0" style={{ backgroundImage: `url(${CorePic})`, opacity: 0.7 }}></div>
              <div className="relative z-10 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <div className="w-full mx-auto border-white mb-2 border-b-4"></div>
                <div className='flex flex-col justify-start items-start'>
                  <p className="mb-1">{feature.description}</p>
                  <Link to={feature.link} className="hover:text-blue-500 font-semibold">
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SneakPeek />
      <Faculty_Team />
      <ImageCarousel images={images} captions={captions} />
    </div>
  );
};

export default Home;
