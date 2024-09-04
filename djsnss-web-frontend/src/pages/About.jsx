import React from 'react';
import { motion } from 'framer-motion';
import '../css/About.css';
import Faculty_Team from '../components/Faculty_Team';
const About = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r pt-12 from-pink-200 to-blue-300 text-gray-800'>
      <div className="max-w-7xl mx-auto p-6 lg:p-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl lg:text-5xl font-semibold text-center mb-8"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-6 font-cursive">
            Our Mission and Vision
          </h2>
          <p className="text-lg lg:text-xl mb-4">
            DJS NSS, the NSS unit of Dwarkadas J. Sanghvi College of Engineering, commenced their journey in 2005. Our mission is to foster the all-round development of society, addressing socio-economic problems and sustainability crises caused by global warming. We aim to transform individuals into resilient and capable citizens, encouraging both technical advancements and societal contributions.
          </p>
          <p className="text-lg lg:text-xl mb-4">
            Our activities include regular meetings, organizing events, and forging lifelong connections among volunteers. We strive to connect with nature and rural areas, providing holistic development and opportunities for personal growth.
          </p>
        </motion.div>

        {/* Principal's Desk */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12 flex flex-col lg:flex-row items-start gap-8"
        >
          <div className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded-full mb-4 lg:mb-0">
            {/* Placeholder for Principal's Image */}
            <img src="https://via.placeholder.com/150" alt="Principal" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 font-cursive">
              From Principal's Desk
            </h2>
            <p className="text-lg lg:text-xl mb-4">
              <strong>DR. HARI VASUDEVAN</strong>, PRINCIPAL DJSCE
            </p>
            <p className="text-lg lg:text-xl">
              DJS NSS, the NSS unit of Dwarkadas J. Sanghvi College of Engineering commenced their journey in the year 2005 towards making each member of the unit a better citizen and therefore making India a better nation. The unit works for the all-round development of society, wherein they try to solve various issues ranging from socio-economic problems to the sustainability crisis caused by global warming that ails Mother Nature. We, at D.J. Sanghvi College of Engineering, believe that for every individual to be strong enough to face the challenges of today's world, they have to see and experience for themselves the problems and predicaments faced by society and work towards its betterment one step at a time. At DJS NSS, we nurture and encourage this process of self-transformation, which will help the students become resilient and unfaltering in the face of life, ultimately transforming them from the "Arjuna Syndrome" to being successful individuals. It also inspires the team's journey towards becoming a strong unit, contributing to the progress and development of our nation. Social growth aside, DJS NSS also encourages the students to bring about various technical advancements, wherever necessary and possible. We encourage the unit to mesh technology with the daily lives of the needy, thereby inculcating in them a sense of oneness with society as a whole. In all our efforts, we seek the Lord's Grace to keep us on the path of virtue, courage, and wisdom. May thy grace and blessings flow through us to the world around us in all our efforts to make better people, in addition to being quality engineers who can make a positive impact in our society and help build our nation in these ever-changing and challenging times. Warm regards and good wishes!
            </p>
          </div>
        </motion.div>

        {/* Program Officer's Desk - Vyankatesh Bagal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12 flex flex-col lg:flex-row items-start gap-8"
        >
          <div className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded-full mb-4 lg:mb-0">
            {/* Placeholder for Vyankatesh Bagal's Image */}
            <img src="https://via.placeholder.com/150" alt="Program Officer Vyankatesh Bagal" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 font-cursive">
              From Program Officer's Desk
            </h2>
            <p className="text-lg lg:text-xl mb-4">
              <strong>PROF. VYANKATESH BAGAL</strong>, PROGRAM OFFICER DJS NSS
            </p>
            <p className="text-lg lg:text-xl mb-4">
              Dear Students, As the Program Officer of the NSS unit at Dwarkadas J. Sanghvi College of Engineering, I am honored to address the profound ethos encapsulated in our motto: "Not Me But You." This simple yet powerful statement resonates deeply with the values of democratic living and selfless service that we hold dear. The essence of "Not Me But You" extends far beyond individual actions; it embodies a collective commitment to the betterment of society as a whole. Through NSS, we aim to cultivate in our students a profound appreciation for diverse perspectives and a genuine concern for the well-being of others, including all living beings. Our philosophy, deeply rooted in this motto, emphasizes the interconnectedness of individual welfare with the welfare of the broader community. It serves as a guiding principle, reminding us that our actions should always be driven by a desire to contribute positively to society. As NSS volunteers, it is our responsibility to translate this ethos into action, to strive tirelessly for the welfare of our society. Let us continue to uphold the spirit of "Not Me But You" in all that we do, making meaningful contributions to our community and fostering a culture of empathy, inclusivity, and service. Together, let us embark on this journey of selfless dedication, knowing that by prioritizing the needs of others, we ultimately enrich our own lives and the world around us. With warm regards,
            </p>
          </div>
        </motion.div>

        {/* Program Officer's Desk - Rahul Taware */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12 flex flex-col lg:flex-row items-start gap-8"
        >
          <div className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded-full mb-4 lg:mb-0">
            {/* Placeholder for Rahul Taware's Image */}
            <img src="https://via.placeholder.com/150" alt="Program Officer Rahul Taware" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 font-cursive">
              From Program Officer's Desk
            </h2>
            <p className="text-lg lg:text-xl mb-4">
              <strong>PROF. RAHUL TAWARE</strong>, PROGRAM OFFICER DJS NSS
            </p>
            <p className="text-lg lg:text-xl mb-4">
              At DJS NSS, we believe in the power of collective action to bring about positive change in our society. Through a variety of events and initiatives, such as Blood Donation Drives, Grain Distribution programs, Voter Registration Drives, and our NSS Regular Camp at Narpad Dahanu, we strive to make a meaningful impact on the lives of those around us. Our commitment to service extends beyond the confines of our campus, as we actively seek opportunities to engage with and support communities in need. Whether it's providing essential resources to those facing food insecurity, advocating for civic participation through voter registration, or contributing to the critical need for blood donations, each initiative is driven by our shared values of empathy, compassion, and service. As Program Officer, I am proud to work alongside our dedicated team of volunteers, who embody the spirit of selfless service and demonstrate a deep commitment to making a positive difference in the world. Together, we will continue to uphold the values of NSS and strive to create a more just, equitable, and compassionate society for all. With warm regards,
            </p>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12 flex flex-col lg:flex-row items-start gap-8"
        >
          <div className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded-full mb-4 lg:mb-0">
            {/* Placeholder for Rahul Taware's Image */}
            <img src="https://via.placeholder.com/150" alt="Program Officer Alisha Banz" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 font-cursive">
              From Program Officer's Desk
            </h2>
            <p className="text-lg lg:text-xl mb-4">
              <strong>PROF. ALISHA BANZ</strong>, PROGRAM OFFICER DJS NSS
            </p>
            <p className="text-lg lg:text-xl mb-4">
            It gives me immense pleasure to be a part of the National Service Scheme (NSS) wing of our institute. DJS NSS has been an integral part of our institution's commitment to community service and social responsibility. Over the years, our NSS volunteers have actively participated in various community development programs, environmental initiatives, and social welfare activities like the solar lights installation at Narpad and the Blood Donation drive in DJSCE. Their dedication and enthusiasm have not only benefited the communities around us but have also enriched their own lives with valuable experiences and life lessons of living at a campsite with bare essentials and thriving. I encourage all students to actively engage with the NSS and contribute to making a positive difference in society. I extend my heartfelt appreciation to all NSS volunteers, past and present, for their unwavering commitment to the service of others.
            </p>
          </div>
        </motion.div>
        
        {/* Core Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-6 font-cursive">
            Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4">
                {/* Placeholder for Core Team Member's Image */}
                <img src="https://via.placeholder.com/150" alt="Core Team Member" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Core Team Member 1</h3>
              <p className="text-lg lg:text-xl text-center">
                Core Team Member 1's Role
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4">
                {/* Placeholder for Core Team Member's Image */}
                <img src="https://via.placeholder.com/150" alt="Core Team Member" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Core Team Member 2</h3>
              <p className="text-lg lg:text-xl text-center">
                Core Team Member 2's Role
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4">
                {/* Placeholder for Core Team Member's Image */}
                <img src="https://via.placeholder.com/150" alt="Core Team Member" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Core Team Member 3</h3>
              <p className="text-lg lg:text-xl text-center">
                Core Team Member 3's Role
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <Faculty_Team />
        </motion.div>
      </div>
    </div>
  );
}

export default About;