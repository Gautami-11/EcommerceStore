import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import "../index.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (

<div className="textfont">
  <nav className="fixed flex justify-between top-0 left-0 right-0 z-50 mb-0 p-2 h-24 bg-pink-50 w-full">
     <img src="logo.png" className="w-16 h-16" />
    <div className="flex items-center justify-between px-4">

     

      {/*  Button  */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden absolute  right-4 text-2xl"
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    
 <div
  className={`${
    menuOpen ? 'absolute top-16 left-0 w-full z-50 bg-pink-50 py-6 shadow-lg flex flex-col items-center ' : 'hidden'
  } sm:static sm:flex sm:flex-row sm:justify-end sm:items-center sm:bg-transparent sm:shadow-none sm:py-0 px-4`}
>


      <Link
        to="/"
        className="transition-all mx-4 duration-200 hover:decoration-pink-400 hover:underline underline-offset-16"
      >
        Home
      </Link>
      <Link
        to="/newcollections"
        className="transition-all  mx-4 duration-200 hover:decoration-pink-400 hover:underline underline-offset-16"
      >
        New Collections
      </Link>
      <Link
        to="/gifts"
        className="transition-all duration-200 mx-4 hover:decoration-pink-400 hover:underline underline-offset-16"
      >
        Gifts
      </Link>
      <Link
        to="/aboutUs"
        className="transition-all duration-200 mx-4 hover:decoration-pink-400 hover:underline underline-offset-16"
      >
        About Us
      </Link>
      <Link
        to="/contactUs"
        className="transition-all duration-200 mx-4 hover:decoration-pink-400 hover:underline underline-offset-16"
      >
        Contact Us
      </Link>
    </div>
    </div>

    
  </nav>
</div>
  )}


 export default Navbar