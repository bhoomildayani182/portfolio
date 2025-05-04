'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if element is in viewport
      const element = document.getElementById('Achievements');
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
        staggerChildren: 0.15
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

  const achievementsData = [
    {
      title: "Student Start-up and Innovation Policy (SSIP)",
      category: "Hackathon",
      image: "/assets/img/ssiphacathon.jpg",
      description: "Had an amazing experience during my first ever 36 hours hackathon participation in SSIP hosted #aazadikaamritmahotsav hackathon organised by Education department of Gujarat Government.",
      projectDesc: "A web portal for maintaining purchase data (Portalsology) using MERN stack.",
      tags: ["MERN Stack", "Web Development", "Hackathon"],
      link: "https://github.com/bhoomildayani182/Portalsology_Hackathon_2k22.git"
    },
    {
      title: "Codepie 3.0 Participant",
      category: "Programming",
      image: "/assets/img/codepi3.png",
      description: "I earned a certificate for my participation in Codepie 3.0 Competitive Programming Contest Organized by Faculty of Technology & Engineering in association with Codeing Ninjas and Aris Overseas on March 28, 2023.",
      quote: "Demonstrated strong problem-solving skills and ability to work under pressure, showcasing proficiency in coding and programming.",
      tags: ["Competitive Programming", "Problem Solving", "Coding"]
    }
  ];

  return (
    <section className="relative min-h-screen pt-24 py-16 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-background to-gray-light/30" id="Achievements">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-60 right-10 md:right-40 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-60 right-10 md:right-40 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/10 rotate-45"></div>
        <div className="absolute bottom-1/4 right-40 w-8 h-8 bg-primary/10 rounded-full"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Recognition & Accomplishments</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto">
            Notable accomplishments and recognition received throughout my academic and professional journey.
          </p>
        </motion.div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card bg-card-bg rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col"
            >
              <div className="relative">
                <div className="h-64 w-full bg-gray-50 overflow-hidden">
                  <Image 
                    src={achievement.image} 
                    alt={achievement.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                  {achievement.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-foreground">{achievement.title}</h3>
                <p className="text-gray-dark mb-4 text-sm">{achievement.description}</p>
                
                {achievement.projectDesc && (
                  <div className="mb-4">
                    <p className="text-gray-dark text-sm">{achievement.projectDesc}</p>
                  </div>
                )}
                
                {achievement.quote && (
                  <div className="mb-4 italic text-gray-dark text-sm border-l-2 border-primary/30 pl-3">
                    "{achievement.quote}"
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {achievement.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-light/30 px-2 py-1 rounded-full text-xs text-gray-dark">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {achievement.link && (
                  <div className="flex justify-center mt-4">
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2 text-sm justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 