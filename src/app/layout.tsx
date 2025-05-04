import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhoomil Dayani | DevOps Engineer Portfolio",
  description: "Professional portfolio of Bhoomil Dayani, a DevOps Engineer passionate about CI/CD pipelines, cloud infrastructure, and automation technologies.",
  keywords: ["DevOps", "Cloud Engineering", "AWS", "Azure", "CI/CD", "Docker", "Kubernetes", "Terraform", "Portfolio"],
  authors: [{ name: "Bhoomil Dayani" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/img/favicon.png?v=3' }
    ],
    apple: '/assets/img/favicon.png?v=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/img/favicon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.png?v=3" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
