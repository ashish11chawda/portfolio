import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { education, profile, socials } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE = "https://imashishchawda.web.app";
const title = `${profile.name} — ${profile.role}`;
const description = profile.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: SITE }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    url: SITE,
    siteName: profile.name,
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@ashish11chawda",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

/** Tells Google this page is a person, so it can build a knowledge panel. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: SITE,
  worksFor: { "@type": "Organization", name: profile.company },
  alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  knowsAbout: ["Java", "Spring Boot", "Microservices", "API design", "Backend engineering"],
  address: { "@type": "PostalAddress", addressCountry: profile.location },
  sameAs: socials.filter((s) => !s.href.startsWith("mailto:")).map((s) => s.href),
};

/** Applies the saved theme before paint so there is no flash of the wrong one. */
const themeScript = `
try {
  var t = localStorage.getItem("theme");
  if (t) document.documentElement.setAttribute("data-theme", t);
} catch (e) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
