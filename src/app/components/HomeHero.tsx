'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

    // Typewriter effect
    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (typing) {
            if (displayed.length < current.length) {
                timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
            } else {
                setRoleIndex((i) => (i + 1) % roles.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    return (
        <div className="relative min-h-screen flex flex-col bg-background overflow-hidden">
            {/* ── Ambient background glows ── */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[45rem] h-[45rem] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] rounded-full bg-secondary/10 blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-accent/5 blur-[80px]" />
            </div>

            {/* ── Top Navbar ── */}
            <header className="relative z-20 flex items-center justify-between px-6 md:px-16 py-5 border-b border-white/5">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-tight">
                        <span className="gradient-text">Bhoomil</span>
                        <span className="text-foreground/80">.dev</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {[
                        { label: 'Portfolio', href: '/portfolio' },
                        { label: 'Blog', href: 'https://bhoomildayaniblog.netlify.app', external: true },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="mailto:hello@bhoomild.com"
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    hello@bhoomild.com
                </Link>
            </header>

            {/* ── Hero Content ── */}
            <main className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-0">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left — Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            {/* Available badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                                </span>
                                Available for new projects
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-4">
                                I build{' '}
                                <span className="gradient-text">production-ready</span>
                                <br />
                                cloud infrastructure.
                            </h1>

                            {/* Typewriter subtitle */}
                            <p className="text-xl md:text-2xl text-gray-400 font-light mb-3 h-8">
                                <span className="text-primary font-medium">{displayed}</span>
                                <span className="animate-pulse text-primary">|</span>
                            </p>

                            {/* Description */}
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                                Specializing in Kubernetes, AWS, Terraform, CI/CD pipelines, and DevSecOps.
                                AWS Certified Cloud Practitioner based in Ahmedabad, India.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/portfolio"
                                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-dark transition-all duration-300"
                                >
                                    View Portfolio
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </Link>
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

                            {/* Social links */}
                            <div className="flex items-center gap-4 mt-10">
                                {[
                                    { label: 'GitHub', href: 'https://github.com/bhoomildayani182', icon: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z' },
                                    { label: 'LinkedIn', href: 'https://linkedin.com/in/bhoomildayani', icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
                                    { label: 'Twitter', href: 'https://twitter.com/BhoomilDayani', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer me"
                                        aria-label={`Bhoomil Dayani on ${s.label}`}
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                            <path d={s.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Profile photo + floating badges */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            {/* Glow ring */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                            </div>

                            {/* Profile image */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 z-10">
                                <Image
                                    src="/assets/img/Profile-1.jpg"
                                    alt="Bhoomil Dayani — DevOps & Cloud Engineer"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                    sizes="(max-width: 768px) 256px, 320px"
                                />
                            </div>

                            {/* Floating badge — AWS */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-4 -left-4 md:left-0 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1e293b]/90 border border-white/10 backdrop-blur-sm shadow-xl"
                            >
                                <span className="text-lg">☁️</span>
                                <div>
                                    <p className="text-xs font-semibold text-white">AWS Certified</p>
                                    <p className="text-[10px] text-gray-400">Cloud Practitioner</p>
                                </div>
                            </motion.div>

                            {/* Floating badge — Kubernetes */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute bottom-8 -right-4 md:right-0 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1e293b]/90 border border-white/10 backdrop-blur-sm shadow-xl"
                            >
                                <span className="text-lg">⚙️</span>
                                <div>
                                    <p className="text-xs font-semibold text-white">Kubernetes</p>
                                    <p className="text-[10px] text-gray-400">Container Orchestration</p>
                                </div>
                            </motion.div>

                            {/* Floating badge — CI/CD */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute bottom-28 -left-6 md:-left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1e293b]/90 border border-white/10 backdrop-blur-sm shadow-xl"
                            >
                                <span className="text-lg">🚀</span>
                                <div>
                                    <p className="text-xs font-semibold text-white">CI/CD</p>
                                    <p className="text-[10px] text-gray-400">GitHub Actions</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* ── Stats Bar ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10 border-t border-white/5"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-16 py-6">
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
