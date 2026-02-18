'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const roles = [
    'DevOps Engineer',
    'Cloud Engineer',
    'CI/CD Specialist',
    'DevSecOps Engineer',
    'Kubernetes Expert',
];

const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '3', label: 'Certifications' },
];

export default function HomeHero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const current = roles[roleIndex];
        let t: ReturnType<typeof setTimeout>;
        if (typing) {
            if (displayed.length < current.length) {
                t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
            } else {
                t = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
            } else {
                setRoleIndex((i) => (i + 1) % roles.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(t);
    }, [displayed, typing, roleIndex]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        /* pt-16 offsets the fixed navbar height */
        <div className="relative min-h-screen flex flex-col bg-background pt-16">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute top-[-10%] right-[-5%] w-[45rem] h-[45rem] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] rounded-full bg-secondary/10 blur-[120px]" />
            </div>

            {/* Hero content */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left — Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                                </span>
                                Available for new projects
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight mb-5">
                                I build{' '}
                                <span className="gradient-text">production-ready</span>
                                <br />
                                cloud infrastructure.
                            </h1>

                            <p className="text-xl text-gray-400 font-light mb-3 h-7">
                                <span className="text-primary font-medium">{displayed}</span>
                                <span className="animate-pulse text-primary">|</span>
                            </p>

                            <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-lg">
                                Specializing in Kubernetes, AWS, Terraform, CI/CD pipelines, and DevSecOps.
                                AWS Certified Cloud Practitioner based in Ahmedabad, India.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    type="button"
                                    onClick={() => scrollTo('about')}
                                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all duration-300"
                                >
                                    View Portfolio
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <a
                                    href="https://github.com/user-attachments/files/25255455/Bhoomil-Dayani-Resume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                                    </svg>
                                    Download CV
                                </a>
                            </div>

                            {/* Socials */}
                            <div className="flex items-center gap-3 mt-10">
                                {[
                                    { label: 'GitHub', href: 'https://github.com/bhoomildayani182', d: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z' },
                                    { label: 'LinkedIn', href: 'https://linkedin.com/in/bhoomildayani', d: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
                                    { label: 'Twitter', href: 'https://twitter.com/BhoomilDayani', d: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' },
                                ].map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer me" aria-label={`Bhoomil Dayani on ${s.label}`}
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d={s.d} /></svg>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Profile + Badges */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                                {/* Glow */}
                                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" aria-hidden="true" />

                                {/* Photo */}
                                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 z-10 group">
                                    <Image
                                        src="/assets/img/Profile-1.jpg"
                                        alt="Bhoomil Dayani — DevOps & Cloud Engineer, Ahmedabad India"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        priority
                                        sizes="(max-width: 768px) 224px, 256px"
                                    />
                                </div>

                                {/* AWS — top-left */}
                                <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute top-4 left-0 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#1e293b]/95 border border-white/10 backdrop-blur-md shadow-xl">
                                    <span className="text-base" aria-hidden="true">☁️</span>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-widest text-primary font-bold leading-none mb-0.5">Cloud</p>
                                        <p className="text-xs font-bold text-white leading-none">AWS | GCP | Azure</p>
                                    </div>
                                </motion.div>

                                {/* Docker — top-right */}
                                <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                                    className="absolute top-4 right-0 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#1e293b]/95 border border-white/10 backdrop-blur-md shadow-xl">
                                    <span className="text-base" aria-hidden="true">🛠️</span>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-widest text-secondary font-bold leading-none mb-0.5">Iac </p>
                                        <p className="text-xs font-bold text-white leading-none">Terraform</p><p className="text-xs font-bold text-white leading-none">Cloud Formation</p>
                                    </div>
                                </motion.div>

                                {/* Terraform — bottom-left */}
                                <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                    className="absolute bottom-3 left-0 -translate-x-1/4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#1e293b]/95 border border-white/10 backdrop-blur-md shadow-xl">
                                    <span className="text-base" aria-hidden="true">🐳</span>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-widest text-[#2496ED] font-bold leading-none mb-0.5">Micro Services</p>
                                        <p className="text-xs font-bold text-white leading-none">Docker</p>
                                    </div>
                                </motion.div>

                                {/* Ansible — bottom-right */}
                                <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                                    className="absolute bottom-4 right-0 z-20 flex translate-x-1/4 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#1e293b]/95 border border-white/10 backdrop-blur-md shadow-xl">
                                    <span className="text-base" aria-hidden="true">📜</span>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-widest text-accent font-bold leading-none mb-0.5">Automation</p>
                                        <p className="text-xs font-bold text-white leading-none">Secure CI/CD</p>
                                    </div>
                                </motion.div>

                                {/* Kubernetes — bottom-center */}
                                <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3.5 px-3 py-2 rounded-2xl bg-[#1e293b]/95 border border-white/10 backdrop-blur-md shadow-xl">
                                    <span className="text-base" aria-hidden="true">☸️</span>
                                    <div>
                                        <p className="text-xs font-bold text-white leading-none">Kubernetes</p>
                                        <p className="text-[9px] text-gray-400 leading-none mt-0.5">Orchestration</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10 border-t border-white/5"
                aria-label="Career statistics"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
                    <div className="grid grid-cols-3 divide-x divide-white/5">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center py-2">
                                <span className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
                                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
