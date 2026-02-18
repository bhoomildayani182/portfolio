import type { MetadataRoute } from "next";
import { SITE_URL } from "./metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-02-18");

    const sections = [
        { id: "about", priority: 1.0, changeFrequency: "monthly" as const },
        { id: "experience", priority: 0.9, changeFrequency: "monthly" as const },
        { id: "education", priority: 0.8, changeFrequency: "yearly" as const },
        { id: "skills", priority: 0.9, changeFrequency: "monthly" as const },
        { id: "projects", priority: 0.9, changeFrequency: "monthly" as const },
        { id: "certifications", priority: 0.8, changeFrequency: "yearly" as const },
        { id: "achievements", priority: 0.7, changeFrequency: "yearly" as const },
        { id: "contact", priority: 0.8, changeFrequency: "yearly" as const },
    ];

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        ...sections.map((section) => ({
            url: `${SITE_URL}/#${section.id}`,
            lastModified,
            changeFrequency: section.changeFrequency,
            priority: section.priority,
        })),
    ];
}
