import React from 'react'
import {HERO_CONTENT} from '../constants/index'
import profilepic from '../assets/me.jpg'
import { motion } from "framer-motion"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect } from 'react'

const Intro = () => {
  useEffect(() => {
    gsap.to('.link', { color: '#40a832', y: 0, duration: 1, repeat:-1, stagger: 0.25, ease:'power2.inOut' });
    gsap.to('.link', { color: '#ffffff', delay: 1, duration: 1, repeat:-1, stagger: 0.25, ease: 'power2.inOut' });
  }, []);
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
                    <span className='link'>H</span><span className='link'>a</span><span className='link'>w</span><span className='link'>a</span><span className='link'>r</span><span className='link'>i</span><span className='link'>y</span><span className='link'>a</span><span className='link'>w</span>    <span className='link'>p</span><span className='link'>a</span><span className='link'>u</span><span className='link'>l</span><span className='link'>o</span><span className='link'>s</span>
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
                <img src={profilepic} alt='Hawariyaw paulos' className='im w-1/7 h-5/7' />
            </motion.div>
           </div>
        </div>
    </div>
  )
}

export default Intro