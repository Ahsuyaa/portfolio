"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import motion
import AnimationComponent from "../animation/AnimationComponent"; // Import the AnimationComponent

export default function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [aboutData, setAboutData] = useState(null);



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/about"); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setAboutData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData(); // Initiating the data fetch
  }, []); // The empty dependency array [] ensures that this effect runs only once when the component mounts
  

  return (
    <section
      id="about"
      className="max-w-[45rem] text-center leading-8  scroll-mt-28"

    >
      {aboutData ? (
        <>
          <h2 className="text-3xl text-center font-medium mb-10">
            {aboutData.title}
          </h2>
      
            {aboutData.content}
        
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}