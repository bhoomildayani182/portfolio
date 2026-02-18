/* eslint-disable react/no-unescaped-entities */
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn', url: 'https://www.linkedin.com/in/bhoomil-dayani-b286b1201/', color: '#0A66C2', icon: (
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
      )
    },
    {
      name: 'GitHub', url: 'https://github.com/bhoomildayani182', color: '#1f2937', icon: (
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
      )
    },
    {
      name: 'Twitter', url: 'https://twitter.com/BhoomilDayani', color: '#1DA1F2', icon: (
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
      )
    },
    {
      name: 'HackerRank', url: 'https://www.hackerrank.com/bhoomildayani182', color: '#2EC866', icon: (
        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-2 5h4v6h-4v-6z"></path>
      )
    },
    {
      name: 'Facebook', url: 'https://www.facebook.com/bhoomildayani182', color: '#1877F2', icon: (
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
      )
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-12 overflow-hidden"
      id="about"
      aria-label="About Bhoomil Dayani"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[25rem] h-[25rem] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
            itemProp="name"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text text-glow">Bhoomil</span>
          </h1>
          <div className="flex items-center gap-3 text-2xl text-gray-400">
            <span className="h-0.5 bg-secondary/50 rounded-full"></span>
            <span className="font-light" itemProp="jobTitle">
              Cloud DevOps Engineer
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Card */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
                <p>
                  I am a cloud DevOps Engineer specializing in the design, automation, and operation of secure, scalable, and highly available infrastructure. My work focuses on simplifying complex systems through automation while maintaining reliability, performance, and security across environments.
                </p>
                <p>
                  I have hands-on experience implementing CI/CD pipelines, managing containerized microservices, and provisioning infrastructure using Infrastructure as Code. My approach emphasizes DevSecOps principles, embedding security, compliance, and quality controls directly into deployment and operational workflows.
                </p>
                <p>
                  As part of a national security infrastructure initiative for National Investigation Agency, I successfully deployed a high-availability AAA server solution, working closely with an existing enterprise infrastructure. This project required strict adherence to security standards, high availability, and seamless integration with legacy systems.
                </p>
                <p>
                  With a strong foundation in cloud architecture, networking, and system hardening, I focus on building platforms that support continuous delivery, fault tolerance, and efficient scaling. I value clean architecture, repeatable processes, and observability to ensure long-term system stability.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={`Visit Bhoomil Dayani on ${link.name} (opens in new tab)`}
                    itemProp="sameAs"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group/btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 group-hover/btn:text-white transition-colors"
                    >
                      {link.icon}
                    </svg>
                    <span className="text-sm font-medium text-gray-300 group-hover/btn:text-white">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Info Side Card */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="glass p-6 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-1.294-1.55 6.721 6.721 0 01-1.294 1.55c-1.005 1.014-2.377 1.638-3.929 1.638V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18.75m-9.75 0V15.75c3.75 0 6-3.75 6-3.75" />
                  </svg>
                </div>
                Contact Info
              </h3>

              <ul className="space-y-5">
                {[
                  { label: 'Email', value: 'hello@bhoomild.com', href: 'mailto:hello@bhoomild.com', itemProp: 'email' },
                  { label: 'Phone', value: '(+91) 9033706595', href: 'tel:+919033706595', itemProp: 'telephone' },
                  { label: 'Location', value: 'Ahmedabad, Gujarat', itemProp: 'addressLocality' },
                ].map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-1 border-b border-white/5 last:border-0 pb-3 last:pb-0">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        itemProp={item.itemProp}
                        aria-label={`${item.label}: ${item.value}`}
                        className="text-gray-200 hover:text-primary transition-colors font-medium break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-200 font-medium" itemProp={item.itemProp}>
                        {item.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="https://github.com/user-attachments/files/25255455/Bhoomil-Dayani-Resume.pdf"
                download
                className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
