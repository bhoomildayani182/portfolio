'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Add smooth scrolling to hash links
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const linkElement = target.closest('a[href^="#"]');
      if (!linkElement) return;
      
      const targetId = linkElement.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    };
    
    document.body.addEventListener('click', handleHashLinkClick);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.body.removeEventListener('click', handleHashLinkClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile nav toggle button */}
      <button 
        className={`lg:hidden fixed top-6 right-6 z-50 p-2 rounded-full shadow-lg backdrop-blur-md ${
          scrolled ? 'bg-primary/80 text-white' : 'bg-white/80 text-primary'
        } transition-all duration-300`}
        type="button" 
        onClick={toggleMenu}
        aria-controls="navbarResponsive" 
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Sidebar navigation */}
      <aside 
        className={`fixed top-0 left-0 h-screen lg:w-72 w-full z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col bg-gradient-to-b from-primary to-primary-dark text-white shadow-xl">
          {/* Profile */}
          <div className="relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary-dark opacity-80"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pt-8">
              <div className="w-35 h-55 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                <Image 
                  src="/assets/img/Profile.jpg" 
                  alt="Bhoomil Dayani"
                  width={300}
                  height={300} 
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="mt-4 text-xl font-bold text-white">Bhoomil Dayani</h1>
              <div className="flex items-center gap-1 mt-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                <p className="text-sm font-medium">DevOps Engineer</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-grow py-6 px-6 overflow-y-auto">
            <ul className="space-y-1">
              <li>
                <Link 
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#experience"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  <span>Experience</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#education"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  <span>Education</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#skills"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#project"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#certification"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <span>Certification</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#Achievements"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                  <span>Achievements</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://bhoomildayaniblog.netlify.app"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </nav>
          
            
        </div>
      </aside>
    </>
  );
} 