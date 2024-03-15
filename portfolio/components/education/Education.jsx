"use client"

import React, { useEffect, useState } from 'react';


const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/education"); 
        if (response.ok) {
          const data = await response.json();
          setTimelineData(data);
          console.log(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData(); 
  }, []); 

  return (
    <section id="education" className="p-4 mb-20">
      <div className="max-w-screen-xl mx-auto p-4">
        {timelineData.length > 0 ? (
          timelineData.map((data, index) => (
            <div key={index} className="mb-6 relative">
              <div className="flex mb-4 items-center">
                <div className="w-1/2">
                  <div className="text-xl font-semibold">{data.title}</div>
                  <div className="text-gray-600">{data.location}</div>
                </div>
                <div className="w-1/2 text-right text-gray-600">{data.date}</div>
              </div>
              <div className="pl-10">
                <p>{data.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Timeline;
