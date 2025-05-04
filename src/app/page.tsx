'use client';

import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills />
    </main>
  );
}
