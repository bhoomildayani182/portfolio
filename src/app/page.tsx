'use client';

import Navbar from './components/Navbar';
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
    <main className="bg-background">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certification />
      <Achievements />
      <Contact />
    </main>
  );
}
