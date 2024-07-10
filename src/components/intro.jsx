import React from 'react'
import {HERO_CONTENT} from '../constants/index'
import profilepic from '../assets/kevinRushProfile.jpg'
import { motion } from "framer-motion"

const Intro = () => {
  return (
    <div className='mx-20 border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
           <div className='w-full lg:w-1/2'>
             <div flex flex-col items-center lg:items-start>
                 <motion.h1 
                 initial={{x:-100, opacity:0}}
                 animate={{x:0, opacity:1}}
                 transition={{duration: 0.7, delay: 0.5}}
                 className='pb-16 text-2xl font-thin tracking-tight lg:mt-16 lg:text-6xl font-medium'>
                    Hawariyaw Paulos
                 </motion.h1>
                 <motion.span 
                 initial={{x:-100, opacity:0}}
                 animate={{x:0, opacity:1}}
                 transition={{duration: 0.7, delay: 1.3}}
                 className='bg-gradient-to-r from-pink-300 via-slate-500
                 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Front-end developer
                 </motion.span>
                 <motion.p 
                 initial={{x:-100, opacity:0}}
                 animate={{x:0, opacity:1}}
                 transition={{duration: 0.7, delay: 2}}
                 className='my-2 max-w-xl py-6 font-light tracking-tighter intro'>
                 {HERO_CONTENT}
                 </motion.p>
             </div>
           </div>
           <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration: 0.7, delay: 2}}
            className='flex justify-center'> 
                <img src={profilepic} alt='Hawariyaw paulos' />
            </motion.div>
           </div>
        </div>
    </div>
  )
}

export default Intro