import type { MetadataRoute } from "next";
import { SITE_URL } from "./metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        // Note: Google ignores fragment (#hash) URLs in sitemaps,
        // so only the canonical page URLs are listed here.
        // Section links are handled via JSON-LD BreadcrumbList in layout.tsx.
    ];
}
