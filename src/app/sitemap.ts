import type { MetadataRoute } from "next";
import { SITE_URL } from "./metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-02-18");

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/portfolio`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.95,
        },
        { url: `${SITE_URL}/portfolio#about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/portfolio#experience`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/portfolio#education`, lastModified, changeFrequency: "yearly", priority: 0.8 },
        { url: `${SITE_URL}/portfolio#skills`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/portfolio#projects`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/portfolio#certifications`, lastModified, changeFrequency: "yearly", priority: 0.8 },
        { url: `${SITE_URL}/portfolio#achievements`, lastModified, changeFrequency: "yearly", priority: 0.7 },
        { url: `${SITE_URL}/portfolio#contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    ];
}
