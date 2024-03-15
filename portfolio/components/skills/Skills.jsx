"use client";

import React from "react";

import { skillsData } from "@/lib/data";

import { motion } from "framer-motion";


export default function Skills() {


  return (
    <section
      id="skills"
 
      className="mb-28 max-w-[53rem] text-center sm:mb-0"
    >
             <h2 className="text-3xl text-center font-medium mb-10">
            My Skills
          </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
           
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}