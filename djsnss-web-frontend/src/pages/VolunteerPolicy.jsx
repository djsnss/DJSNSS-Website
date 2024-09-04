import React from 'react';
import { motion } from 'framer-motion';

const VolunteerPolicy = () => {
  return (
    <div className=' bg-gradient-to-r from-blue-400 to-purple-400 flex justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className=" p-6 sm:p-8 lg:p-12 pt-20 lg:pt-24 max-w-6xl text-white"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          NSS Volunteer Policy
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          The National Service Scheme (NSS) is a program designed to develop the personality and leadership qualities of students through community service. Volunteers are expected to dedicate their time to meaningful work that impacts local communities directly, fostering a sense of social responsibility.
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Hours Allotment
        </motion.h2>
        <motion.ul
          className="list-disc ml-6 sm:ml-8 lg:ml-10 mb-6 sm:mb-8 lg:mb-10 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <li>Each NSS volunteer is required to complete a minimum of <strong>120 hours</strong> of community service per year for two years, totaling <strong>240 hours</strong>.</li>
          <li>Volunteers engage in regular NSS activities, including work in villages or slums, either after study hours or during weekends.</li>
          <li>Participation in a <strong>7-day Special Camp</strong> is mandatory once during the two-year period.</li>
          <li>Volunteers may be required to assist in additional community-driven events or emergency response situations as needed.</li>
        </motion.ul>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          Key Responsibilities
        </motion.h2>
        <motion.ul
          className="list-disc ml-6 sm:ml-8 lg:ml-10 mb-6 sm:mb-8 lg:mb-10 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <li>Conduct surveys in adopted villages/slums to identify and address local issues.</li>
          <li>Implement programs related to literacy, health, nutrition, environmental conservation, and social service.</li>
          <li>Support disaster relief and rescue operations during national calamities.</li>
          <li>Promote and organize community engagement activities to enhance public awareness and involvement.</li>
        </motion.ul>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Volunteer Benefits
        </motion.h2>
        <motion.ul
          className="list-disc ml-6 sm:ml-8 lg:ml-10 mb-6 sm:mb-8 lg:mb-10 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <li>Gain valuable leadership and teamwork skills through hands-on community service.</li>
          <li>Enhance personal and professional growth by addressing real-world issues and solutions.</li>
          <li>Build strong connections with community members and fellow volunteers.</li>
          <li>Receive recognition and certificates for outstanding service and contributions.</li>
        </motion.ul>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          Volunteer Impact
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          NSS volunteers have a profound impact on the communities they serve. Their efforts contribute to improved living conditions, enhanced public health, and increased awareness on critical issues. Volunteers also witness personal growth and gain a sense of achievement from their contributions to society.
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          Application Process
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          Interested candidates can apply online through our website or visit the NSS office at their respective institutions. The application process includes filling out a form, attending an orientation session, and undergoing a brief interview to assess suitability.
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
        >
          Frequently Asked Questions (FAQs)
        </motion.h2>
        <motion.ul
          className="list-disc ml-6 sm:ml-8 lg:ml-10 mb-6 sm:mb-8 lg:mb-10 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
        >
          <li><strong>What are the eligibility criteria for volunteers?</strong> - Students must be enrolled in an educational institution and demonstrate a commitment to community service.</li>
          <li><strong>How can I track my service hours?</strong> - Volunteers are provided with a logbook and digital tracking system to record their hours.</li>
          <li><strong>Can I join NSS if I am already involved in other activities?</strong> - Yes, NSS encourages participation alongside other activities, as long as you meet the required hours.</li>
          <li><strong>What support is available for volunteers?</strong> - NSS provides training, mentorship, and resources to support volunteers throughout their service period.</li>
        </motion.ul>

        <motion.p
          className="text-base sm:text-lg lg:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1 }}
        >
          NSS volunteers embody the motto: <strong>"Not Me, But You"</strong>. Their dedication has a lasting impact on the community, fostering both social change and personal development.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default VolunteerPolicy;
