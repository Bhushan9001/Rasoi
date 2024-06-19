import React, { useState } from 'react';
import boy from '../assets/boy.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-3 py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
        <img className="w-24 h-16 md:w-32 md:h-20" src={logo} alt="Logo" />
        {/* Rasoi */}
        </div>
        <div className="md:hidden flex justify-center items-center space-x-4">
          <button
            onClick={toggleNavbar}
            type="button"
            className="hover:text-gray-500 focus:outline-none focus:text-gray-500"
          >
            <svg
              className="h-8 w-8 mx-3 text-[#489c46] border-2 border-[#489c46] rounded"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8 font-poppins font-normal text-xl">
          <a href="/" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857]">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857]">
            Recipes
          </a>
          <a href="/services" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857]">
            About us
          </a>
          <a href="/contact" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857]">
            Contact
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-5 font-poppins font-normal text-xl">
          <a href="/login" className="">
            Login
          </a>
          <div>
            <img className="w-10 h-10" src={boy} alt="Landing" />
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <div className="flex flex-col items-center space-y-4 font-poppins font-normal text-xl">
          <a href="/" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            Recipes
          </a>
          <a href="/services" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            About us
          </a>
          <a href="/contact" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            Contact
          </a>
          <a href="/login" className="block px-4 py-2">
            Login
          </a>
          <div>
            <img className="w-10 h-10" src={boy} alt="Landing" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
