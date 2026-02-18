'use client';

import TopNav from './components/TopNav';
import HomeHero from './components/HomeHero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Certification from './sections/Certification';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Fixed top navbar — lives at root so it spans the entire page */}
      <TopNav />

      {/* Hero — has pt-16 to clear the fixed navbar */}
      <HomeHero />

      {/* Portfolio sections — full-width, centered content */}
      <main
        id="portfolio-content"
        role="main"
        aria-label="Bhoomil Dayani — DevOps & Cloud Engineer Portfolio"
      >
        <section id="about" aria-label="About Bhoomil Dayani"><About /></section>
        <section id="experience" aria-label="Work Experience"><Experience /></section>
        <section id="education" aria-label="Education"><Education /></section>
        <section id="skills" aria-label="Technical Skills"><Skills /></section>
        <section id="projects" aria-label="Projects"><Projects /></section>
        <section id="certifications" aria-label="Certifications"><Certification /></section>
        <section id="achievements" aria-label="Achievements"><Achievements /></section>
        <section id="contact" aria-label="Contact"><Contact /></section>
      </main>
    </div>
  );
}
