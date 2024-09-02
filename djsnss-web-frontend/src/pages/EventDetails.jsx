import { useParams } from 'react-router-dom';
import { featuresData } from '../data/index';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const { slug } = useParams();
  const eventDetail = featuresData.find((feature) => feature.slug === slug);

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="mx-auto p-4">
        {eventDetail ? (
          <motion.div
            className={`max-w-full lg:max-w-4xl w-full p-6 rounded-lg shadow-lg ${eventDetail.background} text-white`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
              src={eventDetail.imageURL}
              alt={eventDetail.title}
              className="w-full h-72 object-cover rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{eventDetail.title}</h1>
              <p className="text-lg lg:text-xl mb-2">{eventDetail.description}</p>
              <p className="text-sm lg:text-base mb-4 opacity-90">{eventDetail.longDescription}</p>
              <div className="mt-4 space-y-2">
                  <p className="text-base lg:text-lg"><strong>Scale:</strong> {eventDetail.scale}</p>
                  <p className="text-base lg:text-lg"><strong>Duration:</strong> {eventDetail.duration}</p>
                  <p className="text-base lg:text-lg"><strong>Location:</strong> {eventDetail.location}</p>
                  <p className="text-base lg:text-lg"><strong>Date:</strong> {eventDetail.date}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <h1 className="text-3xl font-bold text-gray-800">Event not found</h1>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
