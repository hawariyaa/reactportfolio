import React from 'react'
import logo from '../assets/logo-no-background.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className='mb-2 flex  items-center justify-between py-1 px-3'> 
     <div className='flex flex-shrink-0 items-center sm:text-4xl'> 
       <img className='mx-2 w-40 sm:w-50 cursor-pointer' src={logo} alt='logo' />
     </div>
     <div className='m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer'>
     <a href='https://github.com/hawariyaa' target='_blank'><FaGithub /></a>
     <a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin /></a>
     <FaTwitter />
     <FaInstagramSquare />
     </div>
   </nav>
  )
}

export default Navbar