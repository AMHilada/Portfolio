import React from 'react';
import { FaFacebook, FaGithub, FaFacebookMessenger } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative">
      <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center relative z-10">
        <p className="my-5 text-white-500">A.Hilada <br/> All Rights Reserved.</p>
        <div className="inline-flex text-white-500 gap-4 text-3xl">
          <FaFacebook />
          <FaGithub />
          <FaFacebookMessenger />
        </div>
      </div>

      {/* Wave animation element */}
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Footer
