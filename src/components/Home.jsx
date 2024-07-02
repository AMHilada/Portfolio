import React, { useState } from 'react';
import toga1 from '../assets/toga1.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [imgRef, inView] = useInView({ triggerOnce: true });
  const [animated, setAnimated] = useState(false);

  if (inView && !animated) {
    setAnimated(true);
  }

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="my-7 sm:my-0 max-w-[1200px] mx-auto flex flex-col-reverse sm:flex-row justify-center items-center" id="home">
        <div className="flex flex-col my-auto mx-auto text-center sm:text-left">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">Hi, I am Arianne Hilada</p>
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold py-6">
            <TypeAnimation
              sequence={[
                "BSIT Student",
                1000,
                "Encoder",
                1000,
                "Web Designer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">with 4 years experience</p>
          <div className="text-5xl flex justify-start gap-10 my-7 text-purple-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillFacebook />
          </div>
          <div className="relative inline-flex group my-3">
            <a href='/' title='Download CV' type='button'
              className="relative inline-flex items-center justify-center w-[190px] h-[60px] px-6 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 before:absolute before:inset-0 before:transition-all before:duration-1000 before:opacity-70 before:bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] before:rounded-xl before:blur-lg before:-z-10 before:group-hover:opacity-100 before:group-hover:inset-1 before:group-hover:duration-200 before:animate-tilt">
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto">
          <img
            ref={imgRef}
            className={`w-[300px] sm:w-[300px] mx-auto h-auto rounded-full ${animated ? 'animate-fadeInZoom' : ''}`}
            src={toga1}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home
