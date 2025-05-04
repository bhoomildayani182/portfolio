'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Certification() {
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      // Check if element is in viewport
      const element = document.getElementById('certification');
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

  const certificationsData = [
    {
      title: "AWS Cloud Practitioner",
      provider: "AWS",
      category: "Cloud",
      image: "/assets/img/awsclp.jpg",
      description: "Professional certification demonstrating cloud computing expertise",
      badgeLink: "https://www.credly.com/badges/f48dafb1-7635-495c-abc7-fd0ca8d99c23/public_url",
      detailsLink: "https://www.linkedin.com/posts/bhoomil-dayani-b286b1201_aws-certified-cloud-practitioner-activity-7019523219967643648-rdcM"
    },
    {
      title: "ZenExim PVT LTD",
      provider: "Professional",
      category: "Award",
      image: "/assets/img/zen.png",
      description: "Department Star of the Month of Quantum Networks",
      detailsLink: "https://www.linkedin.com/posts/bhoomildayani_gratitude-teamwork-recognition-activity-7269980367435038720-bCfD"
    },
    {
      title: "Microsoft Azure Fundamentals",
      provider: "Azure",
      category: "Cloud",
      image: "/assets/img/AZ-900.png",
      description: "AZ-900 certification for cloud fundamentals",
      badgeLink: "https://www.credly.com/badges/03e288f5-920b-4fbd-aecd-457b556d23f9/public_url",
      detailsLink: "https://www.linkedin.com/posts/bhoomildayani_connections-azure-azurecloud-activity-7037028954821599232-0aPe"
    },
    {
      title: "Microsoft Power Platform Fundamentals",
      provider: "Azure",
      category: "Microsoft",
      image: "/assets/img/PL-900.png",
      description: "PL-900 certification for Power Platform fundamentals",
      badgeLink: "https://www.credly.com/badges/8939ff67-e50b-42c6-a44f-a431481110a7/public_url",
      detailsLink: "https://www.linkedin.com/posts/bhoomildayani_connections-azure-azurecloud-activity-7041337852651036673-oGBx"
    },
    {
      title: "IBM DevOps and Software Engineering",
      provider: "DevOps",
      category: "DevOps",
      image: "/assets/img/devops.png",
      description: "Professional certification in DevOps and software engineering",
      certificateLink: "https://coursera.org/share/bff093eafcc8702e7a81ac869f922737"
    },
    {
      title: "Google Cloud Ready Facilitators Program",
      provider: "Cloud",
      category: "Cloud",
      image: "/assets/img/GCCF1.png",
      description: "Professional certification in Google Cloud technologies",
      profileLink: "https://www.cloudskillsboost.google/public_profiles/68820899-7f56-4ccb-9e9c-d1bab3a29d5a"
    },
    {
      title: "Research Paper Publication",
      provider: "Research",
      category: "Research",
      image: "/assets/img/ICOECA2023.png",
      description: "International Conference on Expert Clouds and Applications (ICOECA 2023)",
      paperLink: "https://github.com/bhoomildayani182/FlightAware/files/11018317/ICOECA-2023.pdf",
      detailsLink: "https://www.linkedin.com/posts/bhoomildayani_icoeca-2023-activity-7033370343733948416-VP3q"
    },
    {
      title: "Research Paper Publication",
      provider: "Research",
      category: "Research",
      image: "/assets/img/conforances.png",
      description: "International Multidisciplinary Conference on Information Science, Management Research and Social Sciences",
      paperLink: "https://github.com/bhoomildayani182/FlightAware/files/11018186/Emotion.Detection.Using.OpenCV.for.Facial.Recognition.pdf",
      detailsLink: "https://www.linkedin.com/posts/bhoomil-dayani-b286b1201_ajk-emotiondetection-technicalpaper-activity-6937630064280748032-R8jj"
    },
    {
      title: "Microsoft Learn Student Ambassador",
      provider: "Microsoft",
      category: "Microsoft",
      image: "/assets/img/fronendmicrosoft.jpg",
      description: "Front-End Web Development ESSENTIALS Bootcamp",
      detailsLink: "https://cert.devtown.in/verify/1QDjwa"
    },
    {
      title: "Charusat Research Paper Award",
      provider: "Research",
      category: "Award",
      image: "/assets/img/charusat.png",
      description: "Recognition for outstanding research contribution",
      detailsLink: "https://www.linkedin.com/posts/bhoomildayani_charusat-researchpaper-award-activity-7292061887624572928-1dcW"
    },
    {
      title: "The Hong Kong University of Science and Technology",
      provider: "Web Dev",
      category: "Web Dev",
      image: "/assets/img/fswd.png",
      description: "Front-End Web Development with React and Server-side Development with NodeJS",
      detailsLink: "https://coursera.org/share/c721148e98400d85ef5e788c9116c017"
    },
    {
      title: "HackerRank SQL (Basic)",
      provider: "Programming",
      category: "Programming",
      image: "/assets/img/SQL.png",
      description: "Professional certification in SQL programming",
      detailsLink: "https://www.hackerrank.com/certificates/b08cce156a33"
    },
    {
      title: "HackerRank Java (Basic)",
      provider: "Programming",
      category: "Programming",
      image: "/assets/img/JavaBasic.jfif",
      description: "Professional certification in Java programming",
      detailsLink: "https://www.linkedin.com/posts/bhoomil-dayani-b286b1201_activity-6856174931873447936-bfZ_"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Networking",
      category: "Networking",
      image: "/assets/img/bitsbyte.PNG",
      description: "Professional certification in computer networking",
      detailsLink: "https://coursera.org/share/3ab396da9bfcbfca0294be970bf211fa"
    },
    {
      title: "Google Developer Group",
      provider: "Web Dev",
      category: "Web Dev",
      image: "/assets/img/fronendgoogledeveloper.jpg",
      description: "Front-End Web Development ESSENTIALS Bootcamp",
      detailsLink: "https://cert.devtown.in/verify/IAjka"
    }
  ];

  // Get unique categories for filter options
  const categories = ['all', ...new Set(certificationsData.map(cert => cert.category))];

  // Filter certifications based on selected category
  const filteredCertifications = sortBy === 'all' 
    ? certificationsData 
    : certificationsData.filter(cert => cert.category === sortBy);

  return (
    <section className="relative min-h-screen pt-24 py-16 px-6 md:px-12 lg:pl-80 bg-gradient-to-br from-background to-gray-light/30" id="certification">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-60 right-10 md:right-40 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-60 right-10 md:right-40 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        
        {/* Decorative shapes - right side only */}
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/10 rotate-45"></div>
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
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Professional Development</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto">
            A collection of professional certifications, awards, and achievements that showcase my expertise and continuous learning.
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
        
        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card bg-card-bg rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative">
                <div className="h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    width={300}
                    height={200}
                    className="object-contain p-4 w-full h-full"
                  />
                </div>
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                  {cert.provider}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{cert.title}</h3>
                <p className="text-gray-dark mb-6 text-sm">{cert.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {cert.badgeLink && (
                      <a 
                        href={cert.badgeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>
                        Badge
                      </a>
                    )}
                    
                    {cert.paperLink && (
                      <a 
                        href={cert.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        Paper
                      </a>
                    )}
                  </div>
                  
                  <div>
                    {cert.detailsLink && (
                      <a 
                        href={cert.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <span>Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                    
                    {cert.profileLink && (
                      <a 
                        href={cert.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <span>Profile</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                    
                    {cert.certificateLink && (
                      <a 
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-primary/50 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <span>Certificate</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 