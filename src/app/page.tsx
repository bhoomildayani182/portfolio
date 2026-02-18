import type { Metadata } from "next";
import HomeHero from "./components/HomeHero";
import { SEO, SITE_URL } from "./metadata";

export const metadata: Metadata = {
  title: "Bhoomil Dayani | DevOps & Cloud Engineer — Kubernetes, AWS, CI/CD",
  description: SEO.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title: "Bhoomil Dayani | DevOps & Cloud Engineer",
    description: SEO.description,
    images: [{ url: SEO.ogImage, width: 1200, height: 630, alt: SEO.ogImageAlt }],
  },
};

export default function Home() {
  return <HomeHero />;
}
