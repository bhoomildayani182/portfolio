'use client';

import Navbar from './components/Navbar';
import About from './sections/About';

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <About />
    </main>
  );
}
