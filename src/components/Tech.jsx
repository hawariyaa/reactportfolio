import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import {animate, motion} from "framer-motion"

const iconsVariants = (duration) =>({
     initial: {y:-2},
     animate: {y:2},
     transition: {
        duration: duration,
        ease: "linear", 
        repeat: Infinity,
        repeatType: "reverse"
     }
});

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 1 }}
  style={{ color: 'green' }}
  className="my-20 text-center text-4xl"
>
  Technologies
</motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div
          className='rounded-2xl text-6xl border-4 border-neutral-800 p-4'
         >
          <FaHtml5 className='text-[#eaed26]'/>
        </div>

            <div className='rounded-2xl text-6xl border-4 border-neutral-800 p-4'>
                <IoLogoCss3 className='text-[#c6c7a9]' />
            </div>
            <div className='rounded-2xl text-6xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-[#59f063]' />
            </div>
            <div className='rounded-2xl text-6xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-[#db1d5c]' />
            </div>     
            <div className='rounded-2xl text-6xl border-4 border-neutral-800 p-4'>
               <FaReact className='text-[#5e59f0]' />
            </div>
        </div>
    </div>
  )
}

export default Tech