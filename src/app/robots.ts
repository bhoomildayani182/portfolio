import type { MetadataRoute } from "next";
import { SITE_URL } from "./metadata";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/static/"],
            },
            // Allow Googlebot specifically for rich results
            {
                userAgent: "Googlebot",
                allow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
