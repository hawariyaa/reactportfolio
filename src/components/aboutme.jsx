import React from 'react'
import {ABOUT_TEXT} from '../constants/index'
import aboutmeimage from '../assets/kevinRushProfile.png'
import {motion} from "framer-motion"

const Aboutme = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'> 
        <h1 className='my-20 text-center text-4xl'>
            About me
        </h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
         <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5, delay:1.5}}
         className='flex items-center justify-center'> 
            <img src={aboutmeimage} alt='aboutme' />
         </motion.div>
        </div>
        <div className='w-full lg:w-1/2'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5, delay:1.5}}
            className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT} </p>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme