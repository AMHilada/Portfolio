import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className="z-10 text-gray-500 fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 h-20 flex justify-between items-center px-4 md:px-8 text-lg shadow-lg">
      <h1 className="text-3xl font-bold primary-color ml-4">A. HILADA</h1>
      <ul className="hidden md:flex space-x-4 primary-color">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
        <li><a href="#experience" className="nav-link">Experience</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>

      <div onClick={toggleNav} className="block md:hidden">
        {navOpen ? <AiOutlineClose size={24} color="#fff" /> : <AiOutlineMenu size={24} color="#fff" />}
      </div>

      {/* Mobile Navigation Menu */}
      {navOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold primary-color mb-8">A. HILADA</h1>
            <ul className="flex flex-col items-center space-y-4 text-xl primary-color">
              <li><a href="#home" className="nav-link" onClick={closeNav}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={closeNav}>About</a></li>
              <li><a href="#portfolio" className="nav-link" onClick={closeNav}>Portfolio</a></li>
              <li><a href="#experience" className="nav-link" onClick={closeNav}>Experience</a></li>
              <li><a href="#contact" className="nav-link" onClick={closeNav}>Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar
