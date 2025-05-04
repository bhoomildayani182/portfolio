'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if element is in viewport
      const element = document.getElementById('education');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInViewport);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="relative min-h-screen pt-24 py-16 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-background to-gray-light/30" id="education">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-60 right-10 md:right-40 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-60 left-10 md:left-40 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Academic Background</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto">
            My academic journey that has shaped my knowledge and expertise.
          </p>
        </motion.div>
        
        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Charusat Education */}
          <motion.div 
            variants={itemVariants}
            className="card bg-card-bg rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg">2020-2024</div>
            </div>
            <div className="p-6">
              <br />
              <h3 className="text-primary text-xl font-bold mb-3">CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY</h3>
              <p className="text-gray-dark mb-4">Bachelor of Engineering - Information Technology</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold text-gray-dark">CGPA:</span>
                <span className="text-primary font-bold text-lg">9.23</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Information Technology</span>
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Programming</span>
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Research</span>
              </div>
            </div>
          </motion.div>

          {/* Tapovan Vidhyalaya */}
          <motion.div 
            variants={itemVariants}
            className="card bg-card-bg rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg">2018-2020</div>
            </div>
            <div className="p-6">
              <br />
              <h3 className="text-primary text-xl font-bold mb-3">TAPOVAN VIDHYALAYA</h3>
              <p className="text-gray-dark mb-4">High School - Science Stream</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold text-gray-dark">Percentage:</span>
                <span className="text-primary font-bold text-lg">74.67%</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Science</span>
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Mathematics</span>
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Physics</span>
              </div>
            </div>
          </motion.div>

          {/* Bhulka Sagar */}
          <motion.div 
            variants={itemVariants}
            className="card bg-card-bg rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg">2017-2018</div>
            </div>
            <div className="p-6">
              <br />
              <h3 className="text-primary text-xl font-bold mb-3">BHULKA SAGAR VIDHYABHAVAN</h3>
              <p className="text-gray-dark mb-4">Secondary School Certificate (G.S.E.B)</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold text-gray-dark">Percentage:</span>
                <span className="text-primary font-bold text-lg">85.21%</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Mathematics</span>
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">Science</span>
                <span className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">English</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 