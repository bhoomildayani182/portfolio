'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  category: string;
  featured?: boolean;
  highlights: string[];       // green checkmark bullets
  tags: string[];             // tech stack badges
  links: {
    code?: string;
    report?: string;
    paper?: string;
    demo?: string;
  };
}

const projectsData: Project[] = [
  {
    title: 'Cloud-Native DevSecOps CI/CD Platform',
    subtitle: 'End-to-end security-integrated deployment pipeline on AWS with GitOps and automated vulnerability scanning.',
    category: 'DevOps & Cloud',
    featured: true,
    highlights: [
      'Reduced deployment time by 70% with GitHub Actions automation',
      'Integrated SonarQube + Trivy for continuous security scanning',
      'GitOps-based Argo CD deployments to Kubernetes clusters',
      'Environment-specific pipelines for Dev, UAT & Production',
    ],
    tags: ['GitHub Actions', 'Kubernetes', 'Terraform', 'Argo CD', 'SonarQube', 'Trivy', 'AWS', 'Docker'],
    links: { code: 'https://github.com/bhoomildayani182' },
  },
  {
    title: 'Quantum RUDDER',
    subtitle: 'Microservices-based network & identity management platform with automated Wi-Fi validation for multi-location deployments.',
    category: 'DevOps & Cloud',
    featured: true,
    highlights: [
      'Microservices architecture with Docker & Kubernetes',
      'Automated CI/CD pipeline with Jenkins',
      'Flexible on-premises and cloud deployment options',
      'Server hardening for enterprise-grade security',
    ],
    tags: ['Kubernetes', 'Docker', 'Jenkins', 'Server Hardening', 'VCS', 'Cloud'],
    links: {
      report: 'https://github.com/user-attachments/files/15935857/PRJ_2024_IT_161_20IT022_Bhoomil_Dayani.pdf',
    },
  },
  {
    title: 'Clusterized Microservices Architecture',
    subtitle: 'High-availability multi-microservice system with auto-scaling, load balancing, and fault tolerance.',
    category: 'DevOps & Cloud',
    highlights: [
      'N+1 redundancy with MySQL replication & file sync',
      'Vertical and horizontal auto-scaling for dynamic workloads',
      'Load balancing across multiple server nodes',
      'Rapid scalability via server image management',
    ],
    tags: ['High Availability', 'Shell Scripting', 'Microservices', 'Load Balancing', 'Networking'],
    links: { code: 'https://github.com/bhoomildayani182/Server-Security-Hardening.git' },
  },
  {
    title: 'Server Security Hardening with Ansible',
    subtitle: 'Automated server security configuration using Ansible to enforce consistent hardening policies at scale.',
    category: 'DevSecOps',
    highlights: [
      'Automated OS, web server & database hardening playbooks',
      'Applied VAPT best practices across all environments',
      'Enhanced security posture for on-premises VMs',
    ],
    tags: ['Ansible', 'Security', 'VAPT', 'Linux', 'Automation'],
    links: { code: 'https://github.com/bhoomildayani182/Server-Security-Hardening.git' },
  },
  {
    title: 'Activity Scheduling Timetable Generator',
    subtitle: 'Heuristic timetable optimization solving the NP-hard constraint satisfaction problem — research published at ICOECA 2023.',
    category: 'Research',
    highlights: [
      'Research paper published at ICOECA 2023',
      'Automated constraint-based timetable generation',
      'CI/CD pipeline for continuous deployment',
    ],
    tags: ['React.js', 'Node.js', 'CI/CD', 'Algorithm', 'Optimization'],
    links: {
      paper: 'https://github.com/bhoomildayani182/FlightAware/files/11018317/ICOECA-2023.pdf',
      code: 'https://github.com/bhoomildayani182/Activity_Scheduling_Automatic_TimeTable_Generator',
    },
  },
  {
    title: 'Motion Detection System',
    subtitle: 'Real-time computer vision motion detection with performance-optimized OpenCV pipeline.',
    category: 'Research',
    highlights: [
      'Real-time motion detection using OpenCV',
      'Emotion detection via facial recognition',
      'Performance-optimized processing pipeline',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    links: {
      paper: 'https://github.com/bhoomildayani182/FlightAware/files/11018186/Emotion.Detection.Using.OpenCV.for.Facial.Recognition.pdf',
      code: 'https://github.com/bhoomildayani182/Motion_Detection',
    },
  },
  {
    title: 'Activity Logger',
    subtitle: 'Full-stack Node.js logging system for tracking client-side activity usage, frequency, and duration.',
    category: 'Web Dev',
    highlights: [
      'Real-time log generation and analysis',
      'Supports debugging, planning & UX monitoring',
      'User subscription management system',
    ],
    tags: ['Node.js', 'MongoDB', 'Express'],
    links: {
      report: 'https://drive.google.com/file/d/1zhtky5sCRK3UjfR0nIa-tL7p3aaJOuKQ/view?usp=sharing',
      code: 'https://github.com/bhoomildayani182/Activity_Logger_weetech_Internship',
    },
  },
];

const categories = ['All', 'DevOps & Cloud', 'DevSecOps', 'Research', 'Web Dev'];

const categoryColors: Record<string, string> = {
  'DevOps & Cloud': 'bg-primary/10 text-primary border-primary/20',
  'DevSecOps': 'bg-secondary/10 text-secondary border-secondary/20',
  'Research': 'bg-accent/10 text-accent border-accent/20',
  'Web Dev': 'bg-[#2496ED]/10 text-[#2496ED] border-[#2496ED]/20',
};

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 text-secondary mt-0.5" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 px-6 md:px-12 bg-background"
      aria-label="Projects by Bhoomil Dayani"
    >
      {/* Subtle background glows */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            A collection of DevOps, cloud infrastructure, and engineering projects — focused on automation, security, and scalability.
          </p>
        </motion.div>

        {/* ── Filter Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${activeFilter === cat
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Projects Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className="group relative flex flex-col bg-[#0d1526] border border-white/8 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
                aria-label={project.title}
              >
                {/* Top row: category badge + featured */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryColors[project.category] ?? 'bg-white/5 text-gray-400 border-white/10'}`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {project.subtitle}
                </p>

                {/* Key highlights — green checkmarks */}
                <ul className="space-y-2 mb-6 flex-1" aria-label="Key highlights">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckIcon />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-white/5 text-gray-400 border border-white/8">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors duration-200"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                      Source Code
                    </a>
                  )}
                  {project.links.report && (
                    <a
                      href={project.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/15 text-gray-300 text-xs font-semibold hover:border-white/30 hover:text-white transition-all duration-200"
                      aria-label={`View report for ${project.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      View Report
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/15 text-gray-300 text-xs font-semibold hover:border-white/30 hover:text-white transition-all duration-200"
                      aria-label={`Read research paper for ${project.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                      Research Paper
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/15 text-gray-300 text-xs font-semibold hover:border-white/30 hover:text-white transition-all duration-200"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}