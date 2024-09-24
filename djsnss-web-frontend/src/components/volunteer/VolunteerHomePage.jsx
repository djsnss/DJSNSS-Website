import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image1 from '../../assets/Events/TreePlantation.png';

const Volunteer = () => {
  return (
    <div className="bg-gradient-to-r w-full from-blue-300 to-gray-300 text-white flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto p-6 lg:p-12 max-w-6xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
            D. J. Sanghvi NSS
          </h1>
          <div className='flex flex-col justify-around items-center'>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-800">
              Join our dedicated team of volunteers and be a driving force for meaningful transformation. By offering your time, skills, and unwavering passion, you can make a profound impact on our community, inspire positive change, and help build a legacy of compassion and progress that will echo through generations. Together, we can forge a brighter future and create lasting differences that uplift and empower those around us.
            </p>
            <img
              src={Image1}
              alt="Volunteers"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">What is NSS?</h2>
            <p className="text-gray-600 mb-4">
              The National Service Scheme (NSS) is a government-sponsored public service program that aims to inculcate social welfare in students by providing opportunities for community service. It is a voluntary association of young people who are motivated to serve society and contribute to national development.
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Government-sponsored program</li>
              <li>Encourages community service</li>
              <li>Voluntary association of students</li>
              <li>Focuses on social welfare and development</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Why Volunteer?</h2>
            <p className="text-gray-600 mb-4">
              Volunteering is a rewarding experience that allows you to give back to society, make a positive impact, and develop new skills. By volunteering, you can help create a better world, build strong communities, and foster personal growth and development.
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Give back to society</li>
              <li>Make a positive impact</li>
              <li>Build strong communities</li>
              <li>Foster personal growth</li>
              <li>Create a better world</li>
              <li>A sense of fulfillment and purpose</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Not Me, But You!</h2>
            <p className="text-gray-600 mb-4">
              The NSS motto, &quot;Not Me, But You,&quot; reflects the spirit of selfless service and community engagement. It emphasizes the importance of putting others before oneself and working together to create a better world for all.
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Selfless service</li>
              <li>Working together for a common cause</li>
              <li>Community engagement</li>
              <li>Putting others before oneself</li>
              <li>Creating a better world for all</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">NSS Events & Activities</h2>
          <p className="text-gray-600 text-lg mb-4">
            NSS frequently organizes events such as rural development projects, cleanliness drives, health awareness programs, and environmental conservation campaigns. These events are perfect opportunities for volunteers to give back to society while learning new skills.
          </p>
          <p className="text-gray-600 text-lg">
            From regular meetups to special camps, NSS events bring together people from diverse backgrounds with a common goal of community service. Volunteers often form lasting bonds, build teamwork, and foster lifelong friendships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-md mb-12"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Build Lifelong Friendships</h3>
          <p className="text-gray-600">
            The NSS experience fosters deep friendships and connections with like-minded individuals. By working together on projects, volunteers not only grow as individuals but also form a network of lifelong companions.
          </p>
          <p className="text-gray-600">
            Frequent meetups, discussions, and group activities create an environment where volunteers share their passion for social service while developing strong relationships that last a lifetime.
          </p>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <Link
            to="/volunteer-policy"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-xs md:text-lg"
          >
            View Volunteer Policy
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Volunteer;
