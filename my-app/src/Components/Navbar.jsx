import React from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"
import Logo from '../images/logo.png';

const Navbar = () => {
 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <nav className="relative container mx-auto p-6 bg-slate-300 max-w-full">
    <div className="flex items-center justify-between">
      <img src={Logo} alt="Logo" />

      <div className="space-x-8 font-bold lg:flex items-center">
        {/* First Link in Navigation Bar */}
        <div className="relative group">
          <button 
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none hover:text-cyan-500 transition-all duration-300">
            <span className="mr-1">Who We Are</span>
            <FiChevronDown />
          </button>
          
          <div className={`absolute z-10 mt-2 space-y-2 bg-white text-black opacity-0 transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0 h-0'}`}>
              <a href="#" className={`block px-4 py-2 transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`}>Our History</a>
              <a href="#" className={`block px-4 py-2 transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`}>Our Mission</a>
              <a href="#" className={`block px-4 py-2 transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'}`}>Our Impact</a>
          </div>
        </div>

        <a href="#" className="hover:text-cyan-500">What We Do</a>
        <a href="#" className="hover:text-cyan-500">Get Involved</a>
        <a href="#" className="hover:text-cyan-500">Out There</a>
        <a href="#" className="hover:text-cyan-500">Donate</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;