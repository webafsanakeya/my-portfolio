import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.5, delay: 0.3}}
        className={`text-center mb-2 text-lg font-ovo ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>What I offer</motion.h4>
        <motion.h2 
          initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.5, delay: 0.5}}
        className={`text-center text-5xl font-ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Services</motion.h2>
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.5, delay: 0.7}}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
          I am a frontend developer from Dhaka, Bangladesh with 2 years experience in multiple countries like Webnex IT, CodersTrust, Programming Hero
        </motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.6, delay: 0.9}}
        className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
                <motion.div
                whileHover={{scale: 1.05}}
                  key={index}
                  className={`border rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 transition-transform
                    ${isDarkMode 
                      ? 'border-white bg-[#11001F] hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fff]' 
                      : 'border-gray-400 bg-white hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]'
                    }`}
                >
                    <Image src={icon} alt="" className='w-10'/>
                    <h3 className={`text-lg my-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                    <p className={`text-sm leading-5 ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
                    <a 
                      href={link} 
                      className={`flex items-center gap-2 text-sm mt-5 ${isDarkMode ? 'text-white' : 'text-black'}`}
                    >
                        Read more <Image src={assets.right_arrow} className='w-4' alt=''/>
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services
