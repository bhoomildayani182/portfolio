'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if element is in viewport
      const element = document.getElementById('skills');
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
        staggerChildren: 0.2
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

  const skillCategories = [
    {
      title: "DevOps Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      color: "from-blue-500/30 to-blue-600/10",
      skills: ["Linux", "Git", "GitHub Actions", "Docker", "Jenkins", "Argo CD", "Kubernetes"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
      color: "from-purple-500/30 to-purple-600/10",
      skills: ["AWS", "Azure", "Terraform", "Ansible", "Infrastructure as Code"]
    },
    {
      title: "Programming",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      color: "from-green-500/30 to-green-600/10",
      skills: ["C", "C++", "Shell Scripting", "Python", "JavaScript"]
    },
    {
      title: "Networking & Monitoring",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      color: "from-orange-500/30 to-orange-600/10",
      skills: ["Load Balancing", "Firewalls", "Server Hardening", "Prometheus", "Grafana"]
    }
  ];

  const proficiencies = [
    { name: "DevOps & CI/CD", value: 95, color: "from-blue to-indigo-500" },
    { name: "Cloud Infrastructure", value: 85, color: "from-blue to-blue-500" },
    { name: "Containerization", value: 95, color: "from-purple to-pink-500" },
    { name: "Scripting & Automation", value: 90, color: "from-green to-teal-500" }
  ];

  return (
    <section className="relative min-h-screen pt-24 py-16 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-gray-light/30 to-background" id="skills">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Right side blur effects only */}
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        {/* Additional decorative elements - right side only */}
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/10 rotate-45"></div>
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
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Technical Expertise</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto">
            Technologies and tools I've mastered throughout my professional journey.
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`card relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30`}></div>
              
              <div className="relative p-6 z-10 backdrop-blur-sm bg-card-bg/80 h-full">
                <div className="flex items-center mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-white/20 text-gray-dark px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Skill Meter */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="bg-card-bg/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-10">Proficiency Levels</h3>
            <div className="space-y-8">
              {proficiencies.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-dark font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.value}%</span>
                  </div>
                  <div className="relative w-full h-3 bg-gray-light/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.value}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 