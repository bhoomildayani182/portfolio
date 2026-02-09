'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define interface for project data
interface ProjectLink {
  code?: string;
  report?: string;
  paper?: string;
}

interface Project {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string[];
  tags: string[];
  links: ProjectLink;
  longDescription?: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if element is in viewport
      const element = document.getElementById('project');
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

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const projectsData: Project[] = [
    {
      title: "Cloud-Native DevSecOps CI/CD Automation Platform",
      subtitle: "SecureFlow CI/CD Pipeline",
      category: "DevOps & Cloud",
      image: "/assets/img/secure_CI_CD.png",
      description: [
        "Built an end-to-end DevSecOps CI/ CD platform using GitHub Actions, enabling continuous build, testing, security scanning, and deployment workflows.",
        "Provisioned and managed AWS cloud infrastructure using Terraform, deploying microservices through infrastructure as code with a focus on scalability, reliability, and cost optimization.",
        "Integrated SonarQube for static code quality analysis and Snyk and Trivy for continuous vulnerability scanning of application dependencies and container images.",
        "Automation of Docker image building, tagging, and registry management, followed by GitOps-based deployments using Argo CD to Kubernetes clusters.",
        "Established environment-specific deployment pipelines for development, UAT, and production, maintaining consistent configurations, security controls, and quality gates across all environments."
      ],
      tags: ["Docker", "Kubernetes", "Security Analysis", "Architecture", "CI/CD", "Terraform"],
      links: {
        code: "https://github.com/bhoomildayani182"
      }
    },
    {
      title: "Quantum RUDDER",
      subtitle: "Cloud & DevOps Solution",
      category: "DevOps & Cloud",
      image: "/assets/img/rudder.png",
      description: [
        "Modular Powerhouse: Microservices Architecture",
        "Automation on Autopilot: CI/CD Pipeline",
        "Flexible Deployment Options: Catering to Diverse Needs",
        "The Benefits: A Streamlined and Efficient Wi-Fi Deployment Process"
      ],
      longDescription: "A robust solution for network and identity management with automated Wi-Fi network validation for multi-location deployments. A microservices architecture with Docker and Kubernetes enables independent development and scaling.",
      tags: ["on-premises", "Kubernetes", "VCS", "Jenkins", "Docker", "cloud", "Server Hardening"],
      links: {
        report: "https://github.com/user-attachments/files/15935857/PRJ_2024_IT_161_20IT022_Bhoomil_Dayani.pdf"
      }
    },
    {
      title: "Clusterized Microservices Architecture",
      subtitle: "High-Availability Microservices Architecture with Auto-Scaling and Load Balancing",
      category: "DevOps & Cloud",
      image: "/assets/img/HA.png",
      description: [
        "Developed a high availability architecture for a multi-microservice system, ensuring seamless service delivery and fault tolerance. Converted all services into microservices, deployed across multiple servers, and created server images for rapid scalability",
        "Configured MySQL replication, file synchronization for consistency and implemented load balancing and N+1 redundancy",
        "Enabled vertical and horizontal auto-scaling to handle dynamic workloads seamlessly"
      ],
      tags: ["High Availability", "Shell Scripting", "Microservices", "Load Balancing", "Networking"],
      links: {
        code: "https://github.com/bhoomildayani182/Server-Security-Hardening.git"
      }
    },
    {
      title: "Server Security hardening using Ansible",
      subtitle: "Automate server security configurations using Ansible to enforce consistent hardening policies across all systems",
      category: "DevOps & Cloud",
      image: "/assets/img/hardening.png",
      description: [
        "Led the implementation of comprehensive server security hardening using Ansible",
        "Applied best practices for OS, web server, database server, and application hardening",
        "Enhanced security posture for newly created servers and on-premises VMs"
      ],
      tags: ["Ansible", "Security", "VAPT"],
      links: {
        code: "https://github.com/bhoomildayani182/Server-Security-Hardening.git"
      }
    },
    {
      title: "Activity Scheduling Automatic TimeTable Generator",
      subtitle: "A heuristic timetable optimization method to increase lesson planning productivity, solving the highly constrained N-P hard timetabling problem",
      category: "Web Dev",
      image: "/assets/img/timetable.jpg",
      description: [
        "Automated timetable generation",
        "Constraint satisfaction",
        "Research paper published in ICOECA 2023"
      ],
      tags: ["React js", "node.Js", "CI/CD", "Research", "Optimization", "Algorithm"],
      links: {
        paper: "https://github.com/bhoomildayani182/FlightAware/files/11018317/ICOECA-2023.pdf",
        code: "https://github.com/bhoomildayani182/Activity_Scheduling_Automatic_TimeTable_Generator"
      }
    },
    {
      title: "Motion Detection System",
      subtitle: "An advanced motion detection system using computer vision",
      category: "Research",
      image: "/assets/img/motion.jfif",
      description: [
        "Real-time motion detection",
        "Computer vision implementation",
        "Performance optimization"
      ],
      tags: ["OpenCV", "Python", "Computer Vision"],
      links: {
        paper: "https://github.com/bhoomildayani182/FlightAware/files/11018186/Emotion.Detection.Using.OpenCV.for.Facial.Recognition.pdf",
        code: "https://github.com/bhoomildayani182/Motion_Detection"
      }
    },
    {
      title: "Activity Logger",
      subtitle: "A full-stack web application for tracking and analyzing user activities",
      category: "Web Dev",
      image: "/assets/img/activity logger.webp",
      description: [
        "Developed a Node.js-based logging system to track client-side activity usage, including frequency and duration, improving feature insight and user behavior analysis",
        "Enabled real-time log generation and analysis, supporting debugging, planning, and monitoring for operations, development, UX, and marketing teams",
        "User subscription management"
      ],
      tags: ["Node.js", "MongoDB", "Express"],
      links: {
        report: "https://drive.google.com/file/d/1zhtky5sCRK3UjfR0nIa-tL7p3aaJOuKQ/view?usp=sharing",
        code: "https://github.com/bhoomildayani182/Activity_Logger_weetech_Internship"
      }
    }
  ];

  // Get unique categories for filter options
  const categories = ['all', ...new Set(projectsData.map(proj => proj.category))];

  // Filter projects based on selected category
  const filteredProjects = sortBy === 'all'
    ? projectsData
    : projectsData.filter(proj => proj.category === sortBy);

  return (
    <section className="relative min-h-screen pt-24 py-16 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-background to-gray-light/30" id="project">
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
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Showcasing My Work</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto">
            A collection of technical projects that demonstrate my skills, expertise and problem-solving abilities.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div variants={itemVariants} className="flex justify-end mb-8">
          <div className="relative w-full max-w-xs">
            <style jsx>{`
              select option {
                background-color: #0f172a; /* Dark background */
                color: #f8fafc; /* Light text */
                padding: 8px;
              }
              select option:hover {
                background-color: #1e293b;
              }
            `}</style>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none w-full px-4 py-2 rounded-lg border border-gray-light/50 bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card bg-card-bg rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer h-full flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <div className="h-60 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="object-contain p-4 w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-foreground text-center">{project.title}</h3>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="bg-primary/5 px-2 py-1 rounded-full text-xs text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="bg-primary/5 px-2 py-1 rounded-full text-xs text-primary font-medium">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex justify-center items-center mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2 text-sm w-full justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View Project Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              className="bg-card-bg rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col relative border border-gray-light/20"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button absolute positioned */}
              <button
                className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header with image */}
              <div className="relative h-72 md:h-80 w-full bg-gradient-to-b from-gray-50 to-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain p-6 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent py-6 px-6">
                  <div className="max-w-3xl">
                    <span className="bg-primary/80 text-white text-xs font-medium py-1 px-2 rounded-md mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-white text-3xl font-bold mb-1">{selectedProject.title}</h2>
                    <p className="text-white/80 text-sm md:text-base line-clamp-2">{selectedProject.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Modal Body with scrollable content */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-primary border-b border-gray-light/50 pb-2">{selectedProject.subtitle}</h3>

                  {selectedProject.longDescription && (
                    <p className="text-gray-dark mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                  )}

                  <div className="mb-6 bg-gray-light/5 p-4 rounded-lg border border-gray-light/10">
                    <h4 className="text-lg font-semibold mb-3 text-foreground/90 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                      </svg>
                      Key Features & Contributions
                    </h4>
                    <ul className="text-gray-dark space-y-3 pl-2">
                      {selectedProject.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground/90 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                      </svg>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="bg-primary/10 px-3 py-1.5 rounded-lg text-sm text-primary font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer with links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-light/30">
                  {selectedProject.links.report && (
                    <a
                      href={selectedProject.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      View Full Report
                    </a>
                  )}

                  {selectedProject.links.paper && (
                    <a
                      href={selectedProject.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      Read Research Paper
                    </a>
                  )}

                  {selectedProject.links.code && (
                    <a
                      href={selectedProject.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2 ml-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
} 