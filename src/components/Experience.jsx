import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    { title: 'Elementary', years: '(2008-2014)', place: 'Kabankalan Catholic College' },
    { title: 'Junior High School', years: '(2014-2018)', place: 'Kabankalan Catholic College' },
    { title: 'Senior High School', years: '(2014-2020)', place: 'Kabankalan Catholic College' },
    { title: 'Work Immersion', years: '(2019-2020)', place: 'Department of Public Works and Highways' },
    { title: 'College', years: '(2020-2024)', place: 'Central Philippines State University' },
    { title: 'On-the-Job Training', years: '(2023-2024)', place: 'Philsigns Creative Advertising' },
  ];

  return (
    <div className="py-10 bg-[#232325]" id="experience">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experiences</span>
      </h2>

      {experiences.map((exp, index) => (
        <React.Fragment key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: '#2d2d2d' }}
            className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto"
          >
            <p>{exp.title}</p>
            <p className="text-gray-400">{exp.years}</p>
            <p className="text-gray-500">{exp.place}</p>
          </motion.div>

          {index < experiences.length - 1 && (
            <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Experience
