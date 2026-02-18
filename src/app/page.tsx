// Server Component — no 'use client' so Next.js can inject metadata server-side
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Certification from "./sections/Certification";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import { SITE_URL, PERSON, SEO } from "./metadata";

// ─── BreadcrumbList JSON-LD ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Experience",
      item: `${SITE_URL}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Projects",
      item: `${SITE_URL}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: `${SITE_URL}/#contact`,
    },
  ],
};

// ─── ProfilePage JSON-LD ─────────────────────────────────────────────────────
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: `${PERSON.name} — DevOps Engineer Portfolio`,
  description: SEO.description,
  mainEntity: { "@id": `${SITE_URL}/#person` },
  breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      <main
        className="bg-background"
        role="main"
        aria-label="Bhoomil Dayani — DevOps Engineer Portfolio"
        itemScope
        itemType="https://schema.org/ProfilePage"
      >
        <Navbar />

        {/* Each section has a matching id for anchor navigation + sitemap */}
        <section id="about" aria-label="About Bhoomil Dayani">
          <About />
        </section>

        <section id="experience" aria-label="Work Experience">
          <Experience />
        </section>

        <section id="education" aria-label="Education">
          <Education />
        </section>

        <section id="skills" aria-label="Technical Skills">
          <Skills />
        </section>

        <section id="projects" aria-label="Projects">
          <Projects />
        </section>

        <section id="certifications" aria-label="Certifications">
          <Certification />
        </section>

        <section id="achievements" aria-label="Achievements">
          <Achievements />
        </section>

        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
