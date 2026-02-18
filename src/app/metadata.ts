// ─── Centralized SEO Configuration ───────────────────────────────────────────
// Update SITE_URL to your production domain before deploying.

export const SITE_URL = "https://bhoomildayani.dev";

export const PERSON = {
    name: "Bhoomil Dayani",
    jobTitle: "DevOps & Cloud Engineer",
    email: "hello@bhoomild.com",
    phone: "+919033706595",
    location: {
        city: "Ahmedabad",
        region: "Gujarat",
        country: "India",
        countryCode: "IN",
    },
    url: SITE_URL,
    image: `${SITE_URL}/assets/img/profile.jpg`,
    linkedin: "https://linkedin.com/in/bhoomildayani",
    github: "https://github.com/bhoomildayani182",
    twitter: "https://twitter.com/BhoomilDayani",
    hackerrank: "https://www.hackerrank.com/bhoomildayani182",
} as const;

// ─── Keyword Clusters ─────────────────────────────────────────────────────────
export const PRIMARY_KEYWORDS = [
    "DevOps Engineer",
    "Cloud Engineer",
    "DevOps and Cloud Engineer",
    "DevOps Engineer India",
    "Cloud Engineer India",
    "DevOps Engineer Ahmedabad",
    "AWS DevOps Engineer",
    "Kubernetes Cloud Engineer",
    "Cloud DevOps Engineer",
    "DevSecOps Engineer",
    "CI/CD Expert",
];

export const SECONDARY_KEYWORDS = [
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "Ansible",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    "Argo CD",
    "SonarQube",
    "Trivy",
    "Snyk",
    "Prometheus",
    "Grafana",
    "Server Hardening",
    "High Availability Architecture",
    "Microservices",
    "Cloud Security",
    "Infrastructure as Code",
    "SOC 2 Compliance",
];

export const LONGTAIL_KEYWORDS = [
    "DevOps Cloud Engineer portfolio India",
    "AWS Cloud Practitioner DevOps",
    "Kubernetes container orchestration expert",
    "GitHub Actions CI/CD pipeline automation",
    "Terraform infrastructure as code",
    "DevSecOps security pipeline",
    "High availability server architecture",
    "Cloud infrastructure automation engineer",
];

export const ALL_KEYWORDS = [
    ...PRIMARY_KEYWORDS,
    ...SECONDARY_KEYWORDS,
    ...LONGTAIL_KEYWORDS,
];

// ─── SEO Copy ─────────────────────────────────────────────────────────────────
export const SEO = {
    titleTemplate: "%s | Bhoomil Dayani",
    defaultTitle:
        "Bhoomil Dayani | DevOps & Cloud Engineer — Kubernetes, AWS, CI/CD & DevSecOps",
    description:
        "Bhoomil Dayani is a DevOps & Cloud Engineer based in Ahmedabad, India, specializing in Kubernetes, AWS, Terraform, CI/CD pipelines, GitHub Actions, and DevSecOps. AWS Certified Cloud Practitioner & Azure Fundamentals certified.",
    ogImage: `${SITE_URL}/og-image.png`,
    ogImageAlt:
        "Bhoomil Dayani — DevOps & Cloud Engineer | Kubernetes, AWS, CI/CD, DevSecOps",
    twitterHandle: "@BhoomilDayani",
} as const;
