import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Volunteer = () => {
  return (
    <div className="bg-gradient-to-r w-full from-blue-300 to-purple-300 text-white flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-20 mx-auto p-6 lg:p-12 max-w-6xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Volunteer with Us
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-800">
            Join our dedicated team of volunteers and be a driving force for meaningful transformation. By offering your time, skills, and unwavering passion, you can make a profound impact on our community, inspire positive change, and help build a legacy of compassion and progress that will echo through generations. Together, we can forge a brighter future and create lasting differences that uplift and empower those around us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Why Volunteer?</h2>
            <p className="text-gray-600 mb-4">
              Volunteering provides an opportunity to enhance your skills, build networks, and give back to the community. Make a tangible difference and grow personally and professionally.
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Enhance personal and professional skills</li>
              <li>Build meaningful connections</li>
              <li>Gain valuable experience</li>
              <li>Receive recognition for your efforts</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">How to Get Involved</h2>
            <p className="text-gray-600 mb-4">
              Explore ways to contribute, from signing up for programs to participating in community events and special projects tailored to your interests and skills.
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Sign up for volunteer programs</li>
              <li>Participate in community outreach</li>
              <li>Join special projects and initiatives</li>
              <li>Attend orientation and training sessions</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 mb-4">
              Join our upcoming events and make an impact. Participate in clean-ups, charity runs, food drives, and more!
            </p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Community Clean-Up Day - Oct 15, 2024</li>
              <li>Annual Charity Run - Nov 10, 2024</li>
              <li>Food Drive - Dec 5, 2024</li>
              <li>Winter Festival Volunteering - Dec 20, 2024</li>
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
          className="text-center mb-12"
        >
          <Link
            to="/volunteer-policy"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-lg"
          >
            View Volunteer Policy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">Volunteer Benefits</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 text-center">
            Discover the numerous benefits of volunteering with us, from personal growth to professional development.
          </p>
          <ul className="list-disc ml-6 sm:ml-8 lg:ml-10 text-gray-600">
            <li>Develop leadership and teamwork skills</li>
            <li>Gain hands-on experience in various fields</li>
            <li>Enhance your resume and career prospects</li>
            <li>Build a network of like-minded individuals</li>
            <li>Receive certificates and awards for your contributions</li>
          </ul>
        </motion.div>

        {/* Notable People & Inspirational Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">Notable Volunteers & Inspirational Stories</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Mother Teresa&apos;s Legacy</h3>
              <p className="text-gray-600">
                Mother Teresa devoted her life to serving the poor and destitute around the world. Her selfless work through the Missionaries of Charity continues to inspire volunteers across the globe.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Dr. APJ Abdul Kalam&apos;s Vision</h3>
              <p className="text-gray-600">
                Dr. APJ Abdul Kalam, the &apos;People&apos;s President,&apos; emphasized giving back to society through education and social service. His contributions continue to motivate young volunteers to take up social causes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">NSS Alumni Achievements</h3>
              <p className="text-gray-600">
                National Service Scheme (NSS) alumni have achieved remarkable success, including K. Radhakrishnan, former ISRO chairman, who actively volunteered during his college days, instilling a lifelong spirit of service.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Connecting with Nature & Rural India Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">Connecting with Nature & Rural India</h2>
          <p className="text-gray-600 text-lg mb-4">
            NSS brings you closer to nature and rural communities, offering a wholesome experience that promotes both environmental awareness and rural development. Through hands-on involvement in projects like tree plantations, village development, and clean energy initiatives, volunteers learn the importance of preserving natural resources.
          </p>
          <p className="text-gray-600 text-lg">
            Volunteering in rural areas exposes you to different cultures, traditions, and the beauty of simplicity, fostering personal growth and a deeper understanding of India’s diversity.
          </p>
        </motion.div>


        {/* Government Schemes Promoting Social Work */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">Government Schemes Supporting Volunteering</h2>
          <ul className="list-disc ml-6 sm:ml-8 lg:ml-10 text-gray-600">
            <li>
              <strong>National Service Scheme (NSS):</strong> A nationwide youth program encouraging students to engage in community service and social welfare activities.
            </li>
            <li>
              <strong>Swachh Bharat Abhiyan:</strong> A national campaign launched by the Government of India to clean streets, roads, and infrastructure across India, promoting volunteer-driven cleanliness drives.
            </li>
            <li>
              <strong>Atal Innovation Mission (AIM):</strong> Encourages youth to volunteer in developing innovative solutions for social challenges through grassroots initiatives.
            </li>
            <li>
              <strong>Pradhan Mantri Kaushal Vikas Yojana (PMKVY):</strong> Volunteers are encouraged to join skill development programs aimed at empowering disadvantaged communities with vocational training.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Volunteer;
