// AnimationComponent.js
import React from "react";
import { motion } from "framer-motion";

const AnimationComponent = ({ isVisible, children }) => {
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        delay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationComponent;
