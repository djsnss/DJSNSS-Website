import { motion } from 'framer-motion';
import '../css/About.css';
import Team from '../components/Team';
import Image1 from '../assets/Events/Yaarana/IMG_1628.jpg';
import Faculty from '../components/Faculty';
import UniversityEventsCarousel from '../components/aboutUs/AboutUsCarousel';
import LocalEventsCarousel from '../components/aboutUs/AboutUsCarousel2';

const About = () => {

  const coCommRoles = [
    { title: '🖋 Editorial Department', description: 'The Editorial team ensures that all written communication for NSS, from articles to reports, is clear, engaging, and well-crafted. They play a key role in shaping the public narrative of NSS and ensuring that every story is told effectively. Their work is as vital as any other, contributing significantly to the overall communication and reputation of the committee.' },
    { title: '🎨 Creative Department', description: "Creatives are the imaginative minds behind NSS's visual identity. Whether it's designing posters or creating engaging social media content, their artistic contributions bring every project to life. Their efforts, like those of the other departments, are crucial in making sure NSS stands out in every aspect." },
    { title: '📢 Publicity Department', description: "The Publicity team works to ensure that all NSS events and initiatives reach the maximum audience. Their efforts in promotion and outreach help NSS build a strong presence. As with every department, their role is integral to the committee's success." },
    { title: '🎉 Events Department', description: "The Events team is responsible for planning and executing all NSS events, making sure everything runs smoothly. From logistics to coordination, they ensure that every initiative is impactful. Like the other departments, their work is fundamental in achieving NSS's goals." },
    { title: '💻 Technical Department', description: "The Technical team manages the digital and tech needs of NSS along with coveted outhouses software and hardware projects to shine on your resume, ensuring that all platforms run efficiently. Whether it's handling the website or tech setups for events, their contribution is as critical as any other, enabling NSS to operate seamlessly." }
  ];

  return (
    <div className='flex flex-col bg-gradient-to-r pt-12 from-pink-200 to-blue-300 text-gray-800'>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6"
        >
          About Us
        </motion.h1>

        {/* Mission and Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-lg mb-10"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center mb-4 font-cursive">
            Our Mission and Vision
          </h2>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
                DJS NSS, the NSS unit of Dwarkadas J. Sanghvi College of Engineering, started in 2005. Our mission is to foster the all-round development of society, addressing socio-economic problems and sustainability crises caused by global warming. We aim to transform individuals into resilient and capable citizens, encouraging both technical advancements and societal contributions.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl hidden lg:block mb-4">
                Our activities include regular meetings, organizing events, and forging lifelong connections among volunteers. We strive to connect with nature and rural areas, providing holistic development and opportunities for personal growth.
              </p>
            </div>
            <img src={Image1} alt="NSS Event" className="w-full lg:w-1/2 h-64 object-cover rounded-lg mb-4 lg:mb-0" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl block lg:hidden mb-4">
              Our activities include regular meetings, organizing events, and forging lifelong connections among volunteers. We strive to connect with nature and rural areas, providing holistic development and opportunities for personal growth.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex flex-col lg:flex-row flex-wrap'
        >
          {
            coCommRoles.map((role, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md my-4 lg:w-[48%] mx-auto'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-4 font-cursive'>{role.title}</h3>
                <p className='text-black text-sm sm:text-base md:text-lg lg:text-xl'>{role.description}</p>
              </div>
            ))
          }
        </motion.div>

        <Faculty />

        {/* Core Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-lg mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
            Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Core Team Members */}
            {['Core Team Member 1', 'Core Team Member 2', 'Core Team Member 3'].map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-200 rounded-full mb-4">
                  <img src="https://via.placeholder.com/150" alt={member} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{member}</h3>
                <p className="text-base text-center">
                  {member}&apos;s Role
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Faculty Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-lg mb-10"
        >
          <Team />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
