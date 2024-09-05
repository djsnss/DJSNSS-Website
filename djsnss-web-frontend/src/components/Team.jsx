import { useParams } from 'react-router-dom';
import { TeamYearLinks } from '../data/teamlinks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Faculty_Team = () => {
  const { year } = useParams();  // Get the year from the URL parameter
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true });
  const { ref: legacyRef, inView: legacyInView } = useInView({ triggerOnce: true });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="mb-8 flex flex-col items-center justify-center text-gray-900 px-4 sm:px-6 lg:px-8">
      {/* OUR TEAM Section */}
      <motion.div
        className="mb-8 p-4 sm:p-6 flex items-center justify-center"
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? 'visible' : 'hidden'}
        variants={fadeInVariants}s
      >
        <h2 className="relative rounded-xl text-zinc-700 text-lg sm:text-2xl md:text-3xl font-medium sm:font-semibold bg-gray-200 px-3 sm:px-4 py-1 shadow-gray-600 tracking-wide shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-gray-600 border-gray-200 border-1 z-10 hover:rounded-2xl">
          <div className="relative z-10">OUR TEAM {year}</div> {/* Display the current year */}
        </h2>
      </motion.div>

      {/* Team Description */}
      <div className="flex flex-col items-center max-w-4xl">
        <p className="text-center text-sm sm:text-md md:text-lg font-normal mb-4">
          DJS NSS, the NSS unit of Dwarkadas J. Sanghvi College of Engineering, commenced their journey in 2005. Our mission is to foster the all-round development of society, addressing socio-economic problems and sustainability crises caused by global warming. We aim to transform individuals into resilient and capable citizens, encouraging both technical advancements and societal contributions. <br /><br />
          Our activities include regular meetings, organizing events, and forging lifelong connections among volunteers. We strive to connect with nature and rural areas, providing holistic development and opportunities for personal growth.
        </p>
      </div>

      {/* OUR LEGACY Section */}
      <motion.div
        className="flex flex-col justify-center items-center text-gray-800"
        ref={legacyRef}
        initial="hidden"
        animate={legacyInView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
      >
        <div className="mb-8 p-4 sm:p-6 flex items-center justify-center">
          <h2 className="relative rounded-xl text-zinc-700 text-lg sm:text-2xl md:text-3xl font-medium sm:font-semibold bg-gray-200 px-3 sm:px-4 py-1 shadow-gray-600 tracking-wide shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-gray-600 border-gray-200 border-1 z-10 hover:rounded-2xl">
            <div className="relative z-10">OUR LEGACY</div>
          </h2>
        </div>

        {/* Legacy Buttons */}
        <div className="flex flex-wrap gap-4 max-w-3xl items-center justify-center">
          {TeamYearLinks.map((teamYearLink) => (
            <motion.div
              key={teamYearLink.name}
              className="m-2"
              whileHover={{ scale: 1.05 }} // Button hover animation
              whileTap={{ scale: 0.95 }}   // Button tap effect
            >
              <Link
                to={`/${teamYearLink.link}`} // Navigate to the correct link based on year
                className="bg-blue-500 text-sm sm:text-md md:text-lg text-white py-2 px-4 sm:px-6 md:px-10 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                {teamYearLink.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Faculty_Team;
