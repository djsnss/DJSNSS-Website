import React from 'react';
import { motion } from 'framer-motion'; // For animation

const VolunteerPolicy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }}
      className="volunteer-policy-container p-8 pt-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
    >
      <motion.h1 
        className="text-5xl font-bold mb-6" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        NSS Volunteer Policy
      </motion.h1>

      <motion.p 
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        The National Service Scheme (NSS) aims to develop the personality and leadership qualities of students through community service. Volunteers are required to dedicate their time to meaningful work that directly impacts local communities.
      </motion.p>

      <motion.h2 
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Hours Allotment
      </motion.h2>
      <motion.ul 
        className="list-disc ml-8 mb-6 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <li>Each NSS volunteer is required to complete a minimum of <strong>120 hours</strong> of community service per year for two years, amounting to a total of <strong>240 hours</strong>.</li>
        <li>Volunteers participate in regular NSS activities, including work in villages or slums, after study hours or during weekends.</li>
        <li>Participation in a <strong>7-day Special Camp</strong> is mandatory once during the two-year period.</li>
      </motion.ul>

      <motion.h2 
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        Key Responsibilities
      </motion.h2>
      <motion.ul 
        className="list-disc ml-8 mb-6 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <li>Conduct surveys in adopted villages/slums to identify local issues.</li>
        <li>Work on programs related to literacy, health, nutrition, environment conservation, and social service.</li>
        <li>Assist in disaster relief and rescue operations during national calamities.</li>
      </motion.ul>

      <motion.p 
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        NSS volunteers play an essential role in community-building, aligning with the motto: <strong>"Not Me, But You"</strong>. Their work has a lasting impact on society, while also enhancing their own personal and professional growth.
      </motion.p>
    </motion.div>
  );
};

export default VolunteerPolicy;
