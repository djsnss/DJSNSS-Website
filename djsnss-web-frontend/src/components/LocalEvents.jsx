import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { localEventsData } from '../data/localEvents';

const Features = () => {
  const cardVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const cardWidth = 320; // Adjust card width to match the actual width
  const gap = 16; // Gap between cards

  // Calculate drag constraint based on the number of cards and gaps
  const totalWidth = (localEventsData.length * (cardWidth + gap));
  const dragConstraint = -(totalWidth - window.innerWidth + gap);

  return (
    <div className="relative w-full bg-gradient-to-tl to-blue-400 from-emerald-400 py-12 overflow-hidden">
      <div className="flex overflow-x-scroll snap-end snap-mandatory space-x-4 px-4 md:px-8 scrollbar-hide">
        <motion.div
          className="flex space-x-4"
          drag="x"
          dragConstraints={{ right: 0, left: dragConstraint }}
          style={{ cursor: 'grab' }}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {localEventsData.map((event) => (
            <motion.div
              key={event.id}
              className="snap-start ml-4 flex-shrink-0 w-64 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 p-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg relative"
              variants={cardVariants}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg opacity-70"
                style={{
                  backgroundImage: `url(${event.imageURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center p-4 bg-opacity-75 bg-white rounded-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{event.title}</h2>
                <p className="mb-4 text-sm sm:text-base">{event.description}</p>
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
  );
};

export default Features;
