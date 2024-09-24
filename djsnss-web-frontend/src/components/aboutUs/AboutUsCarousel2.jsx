import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { localEventsData } from '../../data/localEvents';

const LocalEvents = () => {
  const constraintsRef = useRef(null);

  const cardVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (

    <div className='w-[74vw] sm:w-[78vw] md:w-[84vw] lg:w-[90vw] xl:w-full'>
      <div className="text-center text-xl font-semibold text-white md:text-2xl">
        <h1 className="font-bold text-gray-800">Local Level Events</h1>
      </div>
      <div
        className="relative bg-transparent py-8 rounded-xl overflow-x-hidden"
        ref={constraintsRef}
      >

        {/* Container for the cards */}
        <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
          <motion.div
            className="flex gap-3"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0}
            style={{ cursor: 'grab' }}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {localEventsData.map((event) => (
              <motion.div
                key={event.id}
                className="flex-shrink-0 snap-x w-52 sm:w-80 md:w-96 h-64 sm:h-72 md:h-80 lg:h-96 p-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg relative"
                variants={cardVariants}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg opacity-70"
                  style={{
                    backgroundImage: `url(${event.imageURL})`,
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 text-center p-4 bg-opacity-75 bg-white rounded-lg">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
                    {event.title}
                  </h2>
                  <p className="mb-4 text-xs sm:text-sm md:text-base">
                    {event.description}
                  </p>
                  <Link
                    to={event.link}
                    className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LocalEvents;
