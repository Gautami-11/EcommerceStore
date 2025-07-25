import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import "../index.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='textfont '>
      <nav className="fixed top-0 left-0 right-0 z-50 p-2 h-20   bg-pink-50 ">
  <div className="flex items-center justify-between   flex-wrap">
  <img src="logo.png" className='w-18 h-16'/>
       
         <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700   sm:hidden"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
       <div
          className={`${
            menuOpen ? "block" : "hidden"
          } bg-pink-50     rounded-3xl w-full sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:w-auto mt-4 sm:mt-0 `}
        >
            
          <Link to="/" className="transition-all duration-200 hover:decoration-pink-400 hover:underline underline-offset-16">Home</Link>
          <Link to="/newcollections" className="transition-all duration-200 hover:decoration-pink-400 hover:underline underline-offset-16">New Collections</Link>
          <Link to="/gifts" className="transition-all duration-200 hover:decoration-pink-400 hover:underline underline-offset-16">Gifts</Link>
       
          <Link to="/aboutUs" className="transition-all duration-200 hover:decoration-pink-400 hover:underline underline-offset-16">About Us</Link>
         
        <Link to="/contactUs" className="transition-all duration-200 hover:decoration-pink-400 hover:underline underline-offset-16">Contact Us</Link>
       
        </div>
        </div>
    </nav>
       

    
    </div>
  )
}

export default Navbar
