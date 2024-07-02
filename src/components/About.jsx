import React from 'react';
import formal from '../assets/formal.jpg';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className='py-10 md:py-20 text-white bg-[#232325] relative' id='about'> 
      <div className='flex sm:flex-row flex-col items-center md:gap-6 gap-10 px-4 sm:px-12 max-w-6xl mx-auto'>

        <div className="animate-fade-in">
          <div className="w-full h-full">
            <img
              src={formal}
              alt=""
              className="object-cover bg-gray-700 rounded-xl w-full h-full"
              style={{ maxHeight: '400px' }} 
            />
          </div>
        </div>


        <div className="flex-1 mt-6 md:mt-0"> 
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <h3 className='text-3xl md:text-4xl font-semibold mb-5'><span className='primary-text'>About</span> Me</h3> {/* Adjusted heading size */}
              <div className="text-justify leading-7">
                <TypeAnimation
                sequence={[
                  "I am a dedicated Bachelor of Science in Information Technology (BSIT) student with aspirations to excel in web design, graphic design, and programming. With a strong foundation in IT, I am committed to honing skills in creating visually appealing and user-friendly web interfaces, compelling graphic designs, and efficient programming solutions. Driven by a passion for technology and creativity, my goal is to contribute innovative and effective designs to the digital world.",
                  1000, 
                ]}
                wrapper="p"
                speed={70} 
                repeat={Infinity} 
                />
              </div>

              <div className='flex flex-wrap mt-10 gap-4 justify-center'> 
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className='bg-[#333333]/40 p-5 rounded-lg flex-shrink-0'
                  style={{ minWidth: '120px', maxWidth: '200px', width: '100%' }} 
                >
                  <div className='backface-hidden text-center'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-white'>
                      3<span className='primary-text'>+</span>
                    </h3>
                    <p>proposed</p>
                    <p>
                      <span className='text-xs'> projects</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className='bg-[#333333]/40 p-5 rounded-lg flex-shrink-0'
                  style={{ minWidth: '120px', maxWidth: '200px', width: '100%' }} 
                >
                  <div className='backface-hidden text-center'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-white'>
                      4<span className='primary-text'>+</span>
                    </h3>
                    <p>years</p>
                    <p>
                      <span className='text-xs'> experience</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className='bg-[#333333]/40 p-5 rounded-lg flex-shrink-0'
                  style={{ minWidth: '120px', maxWidth: '200px', width: '100%' }} 
                >
                  <div className='backface-hidden text-center'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-white'>
                      20<span className='primary-text'>+</span>
                    </h3>
                    <p>happy</p>
                    <p>
                      <span className='text-xs'> clients</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About