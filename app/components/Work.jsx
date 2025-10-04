import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4
         initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.5, delay: 0.3}}
        className={`text-center mb-2 text-lg font-ovo ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>My portfolio</motion.h4>
        <motion.h2
         initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.5, delay: 0.5}}
        className={`text-center text-5xl font-ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My latest work</motion.h2>
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.5, delay: 0.7}}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end-development.
        </motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.6, delay: 0.9}}
         className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5'>
            {workData.map((project, index)=>(
                <motion.div 
                whileHover={{ scale: 1.05}}
        transition={{duration: 0.3}}
                  key={index}
                  className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                  style={{backgroundImage : `url(${project.bgImage})`}}
                >
                  {/* Card overlay */}
<div
  className={`w-10/12 h-[90px] rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
  px-5 flex items-center justify-between 
  group-hover:bottom-7 duration-500 border overflow-hidden
  ${isDarkMode 
    ? 'bg-white border-black shadow-[2px_2px_8px_rgba(255,255,255,0.3)] text-black' 
    : 'bg-white border-black shadow-[2px_2px_8px_rgba(0,0,0,0.3)] text-black'}`}
>
  <div className="w-[80%]">
    <h2 className="font-semibold truncate">{project.title}</h2>
    <p className={`text-sm line-clamp-1 ${isDarkMode ? 'text-black' : 'text-gray-700'}`}>
      {project.description}
    </p>
  </div>

  <div
    className={`border rounded-full w-9 aspect-square flex items-center justify-center transition 
      ${isDarkMode 
        ? 'border-white shadow-[2px_2px_0_#fff] group-hover:bg-white group-hover:text-black' 
        : 'border-black shadow-[2px_2px_0_#000] group-hover:bg-lime-300'}`}
  >
    <Image src={assets.send_icon} alt='send icon' className='w-5' />
  </div>
</div>
                </motion.div>
            ))}
        </motion.div>

        {/* Button */}
        <motion.a 
        initial={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.5, delay: 1.1}}
          href="" 
          className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 duration-500
            ${isDarkMode 
              ? 'text-white border-white hover:bg-[#2a004a]' 
              : 'text-gray-700 border-gray-700 hover:bg-[#fcf4ff]'}`
          }
        >
          Show more 
          <Image 
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
            alt='Right arrow' 
            className='w-4'
          />
        </motion.a>
    </motion.div>
  )
}

export default Work
