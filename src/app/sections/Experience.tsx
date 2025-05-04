'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    <section className="relative min-h-screen pt-20 pb-16 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-background to-gray-light/30" id="experience">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Work History</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            My <span className="gradient-text">Experience</span>
          </h1>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative border-l-2 border-primary/30 pl-6 md:pl-8 ml-4 md:ml-6 space-y-12">
          {/* Experience Item 1 */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -left-[34px] md:-left-[38px] top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            
            <div className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">Zen Exim PVT LTD</h3>
                  <h4 className="text-lg font-medium text-gray-dark">DevOps Engineer</h4>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <div className="flex items-center gap-1 text-gray-medium mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>Dec 2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Ahmedabad, India</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-dark text-justify">
                <p><span className="font-semibold text-foreground">Containerization & Kubernetes:</span> Implemented Docker and managed Kubernetes deployments with StatefulSets for fault-tolerance and high availability (A-A, A-P, N+1). Configured load balancing and network sharing.</p>
                <p><span className="font-semibold text-foreground">CI/CD Pipelines:</span> Built automated pipelines using GitHub Actions and Jenkins for seamless deployments.</p>
                <p><span className="font-semibold text-foreground">Automation & Security:</span> Utilized DevOps tools for automation, managed VCS, and automated server hardening with a focus on security best practices.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Experience Item 2 */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -left-[34px] md:-left-[38px] top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            
            <div className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">IIT Bombay</h3>
                  <h4 className="text-lg font-medium text-gray-dark">DevOps Engineer</h4>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <div className="flex items-center gap-1 text-gray-medium mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>May 2023 - June 2023</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-dark text-justify">
                <p>During my internship, I gained hands-on experience in server security hardening using Ansible, containerizing ERPNext services with healthcare modules, and setting up Minikube for containerized modules.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Experience Item 3 */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -left-[34px] md:-left-[38px] top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            
            <div className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">SmartInternz</h3>
                  <h4 className="text-lg font-medium text-gray-dark">Java Spring Boot & Modern Application Development</h4>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <div className="flex items-center gap-1 text-gray-medium mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>Nov 2022 - Jan 2023</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Remote</span>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-dark text-justify">
                <p>Learned during my virtual internship - Preparation for a starting position in the modern applications domain, the basics of managing modern applications, the basics of Kubernetes, and the basics of containers.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Experience Item 4 */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -left-[34px] md:-left-[38px] top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            
            <div className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">WeeTech Solution PVT.LTD.</h3>
                  <h4 className="text-lg font-medium text-gray-dark">Web Development (backend on Node.js)</h4>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <div className="flex items-center gap-1 text-gray-medium mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>June 2022 - July 2022</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Surat, India</span>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-dark text-justify">
                <p>During the time of my internship at WeeTech Solution Pvt Ltd, I have created an activity logger using Node.js, Express.js, MongoDB, which logs the activity in the client project/website and shows the analytics of it.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 