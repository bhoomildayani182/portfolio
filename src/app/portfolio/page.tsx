import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Certification from "../sections/Certification";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import Contact from "../sections/Contact";
import { SEO, SITE_URL } from "../metadata";

export const metadata: Metadata = {
    title: "Portfolio | Bhoomil Dayani — DevOps & Cloud Engineer",
    description: SEO.description,
    alternates: { canonical: "/portfolio" },
    openGraph: {
        url: `${SITE_URL}/portfolio`,
        title: "Portfolio | Bhoomil Dayani — DevOps & Cloud Engineer",
        description: SEO.description,
        images: [{ url: SEO.ogImage, width: 1200, height: 630, alt: SEO.ogImageAlt }],
    },
};

// BreadcrumbList JSON-LD
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_URL}/portfolio` },
        { "@type": "ListItem", position: 3, name: "Experience", item: `${SITE_URL}/portfolio#experience` },
        { "@type": "ListItem", position: 4, name: "Projects", item: `${SITE_URL}/portfolio#projects` },
        { "@type": "ListItem", position: 5, name: "Contact", item: `${SITE_URL}/portfolio#contact` },
    ],
};

export default function PortfolioPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main
                className="bg-background"
                role="main"
                aria-label="Bhoomil Dayani — DevOps & Cloud Engineer Portfolio"
            >
                <Navbar />
                <section id="about" aria-label="About Bhoomil Dayani"><About /></section>
                <section id="experience" aria-label="Work Experience"><Experience /></section>
                <section id="education" aria-label="Education"><Education /></section>
                <section id="skills" aria-label="Technical Skills"><Skills /></section>
                <section id="projects" aria-label="Projects"><Projects /></section>
                <section id="certifications" aria-label="Certifications"><Certification /></section>
                <section id="achievements" aria-label="Achievements"><Achievements /></section>
                <section id="contact" aria-label="Contact"><Contact /></section>
            </main>
        </>
    );
}
