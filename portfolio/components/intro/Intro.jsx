"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image"
import img from "../../public/bg.png"
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight,BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/Fa"
import {HiDownload} from "react-icons/hi"

const Intro = () => {
  
  
  return (
<section className='mt-28 sm:mt-0 mb-28 max-w-[50rem] text-center sm:mb-0'>
    <div className='flex items-center justify-center'>
        <motion.div    initial={{ opacity: 0, scale:0 }}
        animate={{ opacity: 1 , scale:1}}
        transition={{
            type:"tween",
     
            duration:0.2,
        }}>
            <Image
            src={img}
            width="192"
            height="192"
            quality="95"
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
         
            />
           
   
        </motion.div>
    </div>
    <motion.p className='mb-10 mt-4 px-4 text-xl font-meduim sm:text-4xl'
    initial={{ opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{
        delay:0.1,
    }}
    >
        <span className='font-bold '>
            Hello , I am Aayusha.
        </span>
        I am a{" "}
        <span className='font-bold'>
         Full- Stack developer 
        </span> with {"  "}
        <span className='font-bold'>
            2 years
        </span> of experience. I enjoy building <span className='italic'>
            sites & apps
        </span>. My focus is 
        <span className='underline'>
            React(Next.js)
        </span>
    </motion.p >
    <motion.div className='flex flex-col sm:flex-row justify-center gap-5 items-center'     initial={{ opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{
        delay:0.1,
    }}>

   
        <Link href="#contact" className='h-[3rem] w-[13rem] bg-gray-900 text-white px-7 py-3  flex items-center justify-center  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>
            Contact me here<BsArrowRight/>
        </Link>
        <a className='h-[3rem] w-[13rem] bg-white text-gray-900 px-7 py-3  flex items-center justify-center  gap-2 rounded-full  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 hover:text-white'>
            Download CV <HiDownload/>
        </a>
       
     <div className='flex gap-4'>
     <a className='h-[3rem] w-[3rem] bg-white p-4 text-gray-700  flex items-center justify-center gap-2 rounded-full  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 hover:text-white'>
         <BsLinkedin/>
        </a>
        <a className='h-[3rem] w-[3rem] bg-white p-4 text-gray-700  flex items-center justify-center  gap-2 rounded-full  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 hover:text-white'>
         <FaGithubSquare/>
        </a>
     </div>
  
    </motion.div>
</section>
  )
}

export default Intro