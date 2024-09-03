import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import logo from '../assets/DJSLogo.png';
import ImageCarousel from '../components/ImageCarousel';
import SneakPeek from '../components/SneakPeek';
import Faculty_Team from '../components/Faculty_Team';
import BandraBC from '../assets/Events/BandraBC.png';
import CyberSavvy from '../assets/Events/CyberSavvy.png';
import AntiDowry from '../assets/Events/AntiDowry.png';
import yarana1 from '../assets/Events/Yaarana/yarana1.jpg';
import Features from '../components/Features';

const images = [BandraBC, yarana1, CyberSavvy, AntiDowry];
const captions = [
  'Bandra Beach Cleanup',
  'Friendship Day with Kids',
  'CyberSavvy: CyberSecurity Teaching to Kids',
  'Anti Dowry Awareness Event',
];

const Home = () => {
  const treeRef = useRef(null);

  useEffect(() => {
    // GSAP blooming tree animation
    gsap.fromTo(treeRef.current, 
      { scale: 0.5, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Parallax background with GSAP animated tree */}
      <div
        className="relative w-full h-screen overflow-hidden bg-white"
        style={{ background: 'url(/path/to/your/tree_background.png) no-repeat center/cover' }}
      >
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="NSS IIT Delhi" className="h-20 w-20 mb-5" />

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            NSS Dwarkadas J. Sanghvi College of Engineering
          </motion.h1>

          <motion.p
            className="text-md md:text-2xl text-center text-gray-600 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            FOR YOU, WITH YOU, ALWAYS!
          </motion.p>

          {/* GSAP Tree Animation */}
          <div ref={treeRef} className="tree-animation mt-10">
            <img src="/path/to/tree_image.png" alt="Blooming Tree" className="max-w-xs sm:max-w-sm" />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Additional Sections */}
      <SneakPeek />
      <Faculty_Team />
      <ImageCarousel images={images} captions={captions} />
    </div>
  );
};

export default Home;
