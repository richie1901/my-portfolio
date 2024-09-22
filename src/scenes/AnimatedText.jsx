import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Hi Richard Kabu Adekponya Here!","A Backend Engineer", "With Over 5 Years Of Experience", "Designing And Implementing","Scalable, Robust And Secured","High Performance Backend","And Server Side Systems","I've Honed My Skills In","Microservices And Cloud-Native Architectures","Throughout My Career"];

const AnimatedText = () => {
    const [wordIndex, setWordIndex] = useState(0);
  
    // Change the word every 2 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 3000); // Adjust this value for the duration each word stays on screen
  
      return () => clearInterval(interval);
    }, []);
  
    // Animation for moving words from right to left
    const wordAnimation = {
      hidden: { opacity: 0, x: 100 },   // Start off-screen to the right
      visible: { opacity: 1, x: 0 },    // Enter into the center
      exit: { opacity: 0, x: -100 },    // Exit off-screen to the left
    };
  
    return (
      <div className="font-playfair font-semibold text-4xl text-red" style={{ textAlign: 'center', fontSize: '2rem', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={wordIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={wordAnimation}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-block' }}
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };
export default AnimatedText