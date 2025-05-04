'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
    <section className="relative min-h-screen pt-20 pb-24 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-background to-gray-light/30" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 right-10 md:right-40 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 md:left-40 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
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
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">About Me</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Bhoomil</span>
          </h1>
          <div className="flex items-center gap-2 text-xl text-gray-dark mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
            <span>DevOps Engineer</span>
          </div>
        </motion.div>
        
        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="card p-8 mb-8">
              <div className="space-y-4 text-lg text-justify">
                <p className="text-gray-dark">
                  I am a passionate and goal-oriented DevOps Engineer with over 1.5 year of experience
                  in designing CI/CD pipelines, managing cloud infrastructure on AWS and Microsoft
                  Azure, and automating processes using tools like Terraform, Docker, Jenkins, and
                  Ansible.
                </p>
                <p className="text-gray-dark">
                  Experienced in CI/CD pipelines, GitHub Actions, and automation tools. Proficient in cloud infrastructure, 
                  security, with hands-on expertise in high-availability architectures. Skilled in optimizing workflows, 
                  and seamlessly migrating on-premises systems to the cloud.
                </p>
                <p className="text-gray-dark">
                  I am driven by a commitment to enhancing software quality, security, and performance
                  through automation and best practices.
                </p>
              </div>
            </div>
            
            {/* Social links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/bhoomil-dayani-b286b1201/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/bhoomildayani182"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                </svg>
                <span>GitHub</span>
              </a>
              
              <a
                href="https://twitter.com/BhoomilDayani"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
                <span>Twitter</span>
              </a>
              
              <a
                href="https://www.hackerrank.com/bhoomildayani182"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center gap-2 px-4 py-2 bg-[#2EC866] text-white rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-2 5h4v6h-4v-6z"></path>
                </svg>
                <span>HackerRank</span>
              </a>
              
              <a
                href="https://www.facebook.com/bhoomildayani182"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                </svg>
                <span>Facebook</span>
              </a>
              
              <a
                href="https://www.instagram.com/bhoomil_dayani/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
                <span>Instagram</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact and personal info */}
          <motion.div variants={itemVariants} className="md:col-span-1 space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Personal Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-medium text-sm">Email</p>
                    <a href="mailto:bhoomildayani05@email.com" className="animated-underline text-foreground hover:text-primary transition-colors">
                      bhoomildayani05@email.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-medium text-sm">Phone</p>
                    <a href="tel:+919033706595" className="animated-underline text-foreground hover:text-primary transition-colors">
                      (+91) 9033706595
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-medium text-sm">Location</p>
                    <p className="text-foreground">
                      Sadbhav Flats, Gurukul Road, <br />
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-medium text-sm">Experience</p>
                    <p className="text-foreground">1.5+ Years</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Download resume button */}
            <a 
              href="https://github.com/user-attachments/files/19447700/Bhoomil_Dayani_DevOps.pdf"
              download
              className="block w-full py-3 px-6 text-center rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download Resume</span>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
      
    </section>
  );
}
