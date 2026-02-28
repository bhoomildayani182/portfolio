'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: 'https://blog.bhoomild.com', external: true },
];

export default function TopNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const scrollTo = (id: string) => {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
                : 'bg-transparent'
                }`}
            role="banner"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-6">

                {/* Logo */}
                <Link
                    href="/"
                    aria-label="Bhoomil Dayani — DevOps & Cloud Engineer"
                    className="shrink-0 text-lg font-bold tracking-tight"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className="gradient-text">Bhoomil</span>
                    <span className="text-white/50"> Dayani</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                    {navLinks.map((link) =>
                        link.external ? (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <button
                                key={link.label}
                                type="button"
                                onClick={() => scrollTo(link.href.slice(1))}
                                className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
                            >
                                {link.label}
                            </button>
                        )
                    )}
                    <a
                        href="mailto:hello@bhoomild.com"
                        className="ml-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all duration-300"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-nav"
                        key="mobile-nav"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="md:hidden bg-[#0a0f1e]/98 backdrop-blur-xl border-b border-white/5 px-6 pb-5 pt-2"
                    >
                        <nav aria-label="Mobile navigation">
                            <ul className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setMenuOpen(false)}
                                                className="flex px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => scrollTo(link.href.slice(1))}
                                                className="w-full text-left flex px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                                            >
                                                {link.label}
                                            </button>
                                        )}
                                    </li>
                                ))}
                                <li className="mt-2">
                                    <a
                                        href="mailto:hello@bhoomild.com"
                                        className="flex items-center justify-center px-4 py-3 rounded-xl bg-primary text-white text-sm font-semibold"
                                    >
                                        Hire Me
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
