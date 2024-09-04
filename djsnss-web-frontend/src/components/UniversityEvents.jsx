import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { universityEventsData } from '../data/universityEvents';
const Features = () => {
  const cardWidth = 384; // Approximate width in pixels for each card (96 * 4)
  const dragConstraintsLeft = -(universityEventsData.length - 1) * cardWidth;

  const cardVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="relative w-full bg-gray-100 py-12">
      <motion.div
        className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 px-8 scrollbar-hide"
        drag="x"
        dragConstraints={{ right: 0, left: dragConstraintsLeft }}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        style={{ cursor: 'grab' }}
      >
        {universityEventsData.map((event, index) => (
          <motion.div
            key={event.id}
            className="snap-center flex-shrink-0 w-64 sm:w-80 md:w-96 h-80 md:h-96 p-4 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg relative"
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
  );
};

export default Features;
