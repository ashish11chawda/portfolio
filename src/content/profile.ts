/**
 * Single source of truth for the whole site.
 *
 * Anything wrapped in TODO() is a placeholder that still needs filling in.
 * It renders visibly on the page so nothing ships half-written by accident.
 *
 * Kept in step with the GitHub profile README (github.com/ashish11chawda).
 */
export const TODO = (hint: string) => `TODO: ${hint}`;

export const profile = {
  name: "Ashish Chawda",
  role: "Software Engineer",
  company: "Tray",
  location: "Hyderabad, India",
  email: "ashish11chawda@gmail.com",

  tagline:
    "Backend engineer working in Java and Spring. I design and ship core backend services for an enterprise product at Tray, and led its move from a monolith to services that scale independently.",

  summary: [
    "At Tray I own backend features end to end, working with product and cross-functional teams from design through release.",
    "I led the migration from a monolithic architecture to microservices, so components can now be deployed and scaled independently.",
    "I review code, mentor engineers, and help shape our technical roadmap. Outside work I build full-stack side projects in TypeScript, Next.js, NestJS and FastAPI.",
  ],

  /** Hard numbers. These are what recruiters scan first. */
  highlights: [
    { value: "4+", label: "Years shipping production software" },
    { value: "6", label: "Hackathons & developer events organized" },
    { value: "90+", label: "Public repos on GitHub" },
    { value: "6K+", label: "Followers on LinkedIn" },
  ],
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/ashish11chawda", handle: "@ashish11chawda" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish11chawda",
    handle: "in/ashish11chawda",
  },
  { label: "Blog", href: "https://ashishchawda.hashnode.dev", handle: "ashishchawda.hashnode.dev" },
  { label: "X", href: "https://x.com/ashish11chawda", handle: "@ashish11chawda" },
  { label: "YouTube", href: "https://www.youtube.com/@ashish11chawda", handle: "@ashish11chawda" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ashish11chawda",
    handle: "@ashish11chawda",
  },
  { label: "Email", href: "mailto:ashish11chawda@gmail.com", handle: "ashish11chawda@gmail.com" },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Tray",
    role: "Software Engineer",
    period: "2022 — Present",
    location: "India",
    bullets: [
      "Led the migration of an enterprise product from a monolith to microservices, so components can be deployed and scaled independently.",
      "Design and ship core backend services end to end, working with product and cross-functional teams from requirements through release.",
      "Contribute to the technical roadmap by identifying areas to improve and proposing how to address them.",
      "Review code and mentor engineers on the team.",
      "Own testing and debugging for my services so issues are caught before release.",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "Microservices", "MySQL", "AWS"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  /** The interesting engineering decision — this is what gets you asked about it. */
  detail: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Retail Platform",
    blurb:
      "A multi-tenant commerce API with a customer storefront and a staff admin dashboard, built as a modular monolith designed for later service extraction.",
    detail:
      "Three guarantees, each proven by tests. Postgres row-level security enforces tenant isolation, so a query that forgets its tenant filter returns zero rows. Inventory can't oversell: 50 concurrent reservations against 10 units produce exactly 10 successes, with no locks held across requests. Checkout is idempotent end to end, so replaying an Idempotency-Key after a timeout still produces one order and one charge.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Stripe", "Testcontainers"],
    featured: true,
  },
  {
    name: "Kundli",
    blurb:
      "Vedic astrology charts explained in plain language, computed from NASA JPL planetary data.",
    detail:
      "Chart calculation lives in a separate Python engine behind the Next.js app, and a pnpm monorepo shares types between the two.",
    stack: ["Next.js", "FastAPI", "Skyfield", "TypeScript"],
    repo: "https://github.com/ashish11chawda/kundli",
  },
  {
    name: "Litform",
    blurb:
      "A gamified survey platform that asks one question at a time and rewards completion with points, streaks and badges.",
    detail:
      "A ground-up rebuild of my 2022 college major project on a current stack. The original implementation is preserved on a legacy branch.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Better Auth"],
    repo: "https://github.com/Team-Technophile/litform",
  },
  {
    name: "Harshie's Bakehouse",
    blurb: "A full-stack bakery site with a public menu, an admin panel and a staff dashboard.",
    detail:
      "Admin and staff roles have separate permission gates, and a mock mode runs the whole app on sample data with no database attached.",
    stack: ["Next.js", "Supabase", "TanStack Query", "shadcn/ui"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Day job", items: ["Java", "Spring Boot", "Hibernate", "MySQL", "AWS", "OpenAPI"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "TanStack Query"] },
  {
    group: "Backend & data",
    items: [
      "NestJS",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Supabase",
      "MongoDB",
      "Stripe",
    ],
  },
  {
    group: "Tooling",
    items: [
      "Vitest",
      "Playwright",
      "Docker",
      "pnpm",
      "Turborepo",
      "GitHub Actions",
      "Google Cloud",
      "Vercel",
      "Firebase",
      "Claude Code",
    ],
  },
];

export type Education = {
  school: string;
  qualification: string;
  period: string;
  notes: string[];
};

export const education: Education[] = [
  {
    school: "Shri Shankaracharya Technical Campus, Bhilai",
    qualification: "B.Tech, Computer Science & Engineering",
    period: "2018 — 2022",
    notes: [],
  },
];

export type CommunityRole = { role: string; org: string; period: string; href?: string };

export const community: CommunityRole[] = [
  {
    role: "GitHub Campus Expert",
    org: "GitHub",
    period: "2021 — 2024",
    href: "https://githubcampus.expert/ashish11chawda",
  },
  {
    role: "Microsoft Learn Student Ambassador",
    org: "Microsoft",
    period: "2021 — 2022",
    href: "https://studentambassadors.microsoft.com/en-US/profile/45941",
  },
  { role: "Google Cloud Ready Facilitator", org: "Google", period: "2021" },
  {
    role: "Co-organizer",
    org: "Bhilai Hacks, a 24-hour online hackathon",
    period: "2021",
    href: "https://bhilaihacks.co",
  },
  { role: "Organizer", org: "Holiday Hacks SSTC", period: "2022" },
];

export const eventsOrganized = [
  "GitHub Field Day India 2021",
  "GitHub Field Day Delhi 2022",
  "Bhilai Hacks",
  "Holiday Hacks",
  "API Hacks 2.0",
  "Bugtrons 2.0",
];

export type Writing = { title: string; venue: string; year: string; href?: string };

export const writing: Writing[] = [
  {
    title: "GitHub Campus Expert Application for February 2022 is open!",
    venue: "Hashnode",
    year: "2022",
    href: "https://ashishchawda.hashnode.dev/github-campus-expert-application-february-2022",
  },
];

export const certifications: { name: string; issuer: string }[] = [
  { name: "Cloud Engineering", issuer: "Qwiklabs" },
  { name: "Intermediate ML: TensorFlow on GCP", issuer: "Qwiklabs" },
  { name: "BigQuery Basics for Data Analysts", issuer: "Qwiklabs" },
  { name: "Baseline: Data, ML, AI", issuer: "Qwiklabs" },
  { name: "VCS: Git & GitHub", issuer: "Udemy" },
  { name: "Programming in C", issuer: "NPTEL" },
  { name: "Programming in C++", issuer: "NPTEL" },
];

export const funFacts: string[] = [
  "I can talk about astronomy all day, so I built an app that computes planetary positions from NASA JPL ephemerides.",
  "I was rejected from GitHub Campus Experts the first time, got in on the second try, and wrote a guide for the next applicants.",
  "Off-screen, it's geopolitics, space documentaries and folk music.",
  "I speak English, Hindi and a little Gujarati.",
  '90+ public repos, from a COVID-19 tracker to a Google Docs clone. Most started as "how does this actually work?"',
];
