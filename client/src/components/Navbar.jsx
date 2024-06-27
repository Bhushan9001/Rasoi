import React, { useState , useEffect } from 'react';
import boy from '../assets/boy.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atoms/userAtom';
import LetteredAvatar from 'react-lettered-avatar';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn , setLoggedIn] = useState(false);
  const user = useRecoilValue(userAtom);
  const defaultColors = [
    "#2ecc71",
    "#3498db",
    "#8e44ad",
    "#e67e22",
    "#e74c3c",
    "#1abc9c",
    "#2c3e50"
  ];
  
  useEffect(()=>{
      const token = localStorage.getItem("token");
      if(token) setLoggedIn(true)
      else setLoggedIn(false)
  },[])
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-3 py-4 bg-white shadow-md w-full top-0 fixed z-50">
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
          <Scroll to="Home" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857] hover:cursor-pointer" smooth duration={500}>
            Home
          </Scroll>
          <Link to="/recipes" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857] hover:cursor-pointer">
            Recipes
          </Link>
          <Scroll to="About" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857] hover:cursor-pointer" smooth duration={500}>
            About us
          </Scroll>
          <Scroll to="Categories" className="block px-4 py-2 md:px-6 md:py-3 border-2 border-white hover:border-b-[#59c857] hover:cursor-pointer" smooth duration={500}>
            Contact
          </Scroll>
        </div>
        <div className="hidden md:flex items-center space-x-5 font-poppins font-normal text-xl">
         {
          loggedIn?<Link to="/" className="" onClick={()=>{
          localStorage.removeItem('token');
          setLoggedIn(false);
        }}>
            Logout
          </Link>:<Link to="/signin" className="">
          Login
        </Link> 
         }
         {
            loggedIn&&user.name ? <LetteredAvatar name={user.name} backgroundColors={defaultColors}/>: <div>
            <img className="w-10 h-10" src={boy} alt="Landing" />
          </div>
         }
         
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <div className="flex flex-col items-center space-y-4 font-poppins font-normal text-xl">
          <Scroll to="Home" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            Home
          </Scroll>
          <Link href="/recipes" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            Recipes
          </Link>
          <Scroll to="About" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            About us
          </Scroll>
          <Scroll to="Categories" className="block px-4 py-2 border-2 border-white hover:border-b-[#68F665]">
            Contact
          </Scroll>
          {
            loggedIn? <Link to={"/"} onClick={()=>{
              localStorage.removeItem('token');
              setLoggedIn(false);
              setIsOpen(false);
            }}>Logout</Link>:<Link to={"/signin"}>Login</Link>
          }
          <div>
            <img className="w-10 h-10" src={boy} alt="Landing" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
