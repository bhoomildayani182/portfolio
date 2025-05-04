'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

  const educationData = [
    {
      id: 0,
      school: "CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
      degree: "Bachelor of Engineering - Information Technology",
      period: "2020-2024",
      grade: { label: "CGPA", value: "9.23" },
      tags: ["Information Technology", "Programming", "Research"],
      icon: "🎓", // You can replace this with actual image paths later
      color: "from-primary-light/20 to-primary/5"
    },
    {
      id: 1,
      school: "TAPOVAN VIDHYALAYA",
      degree: "High School - Science Stream",
      period: "2018-2020",
      grade: { label: "Percentage", value: "74.67%" },
      tags: ["Science", "Mathematics", "Physics"],
      icon: "🔬",
      color: "from-secondary-light/20 to-secondary/5"
    },
    {
      id: 2,
      school: "BHULKA SAGAR VIDHYABHAVAN",
      degree: "Secondary School Certificate (G.S.E.B)",
      period: "2017-2018",
      grade: { label: "Percentage", value: "85.21%" },
      tags: ["Mathematics", "Science", "English"],
      icon: "📚",
      color: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="relative min-h-screen pt-24 py-16 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-background to-gray-light/30" id="education">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-60 right-10 md:right-40 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-60 left-10 md:left-40 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-1/3 left-20 w-12 h-12 bg-accent/10 rotate-45"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Academic Background</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto">
            My academic journey that has shaped my knowledge and expertise.
          </p>
        </motion.div>
        
        {/* Education Cards - Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`card relative rounded-2xl bg-card-bg shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-xl`}
            >
              {/* Year badge at upper right */}
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg text-sm font-semibold z-10">
                {item.period}
              </div>
              
              <div className="p-6 pt-4">
                <div className="flex items-center gap-3 mb-4 mt-4">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="text-primary text-xl font-bold">
                    {item.school}
                  </h3>
                </div>
                
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg mb-4 text-sm font-medium">
                  {item.degree}
                </div>
                
                <div className="mb-5 flex items-center">
                  <div className="flex items-center gap-2 bg-gray-light/50 rounded-lg px-3 py-2">
                    <span className="font-semibold text-gray-dark">{item.grade.label}:</span>
                    <span className="text-primary font-bold text-lg">{item.grade.value}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card bg-card-bg rounded-2xl shadow-lg overflow-hidden relative"
            >
              {/* Year badge at upper right */}
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg text-sm font-semibold z-10">
                {item.period}
              </div>
              
              <div className="p-6 pt-4">
                <div className="flex items-center gap-2 mb-3 mt-4">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="text-primary text-xl font-bold">{item.school}</h3>
                </div>
                
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg mb-4 text-sm font-medium">
                  {item.degree}
                </div>
                
                <div className="flex items-center gap-2 mb-4 bg-gray-light/50 w-fit rounded-lg px-3 py-2">
                  <span className="font-semibold text-gray-dark">{item.grade.label}:</span>
                  <span className="text-primary font-bold text-lg">{item.grade.value}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-light text-gray-dark px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 