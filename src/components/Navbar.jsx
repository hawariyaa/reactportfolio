import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className='mb-2 flex  items-center justify-between py-1 px-3'> 
     <div className='flex flex-shrink-0 items-center'> 
       <img className='mx-2 w-10' src={logo} alt='logo' />
     </div>
     <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
     <FaGithub />
     <FaLinkedin />
     <FaTwitter />
     <FaInstagramSquare />
     </div>
   </nav>
  )
}

export default Navbar