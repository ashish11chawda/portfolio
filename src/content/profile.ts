/**
 * Single source of truth for the whole site.
 *
 * Anything wrapped in TODO() is a placeholder that still needs filling in.
 * It renders visibly on the page so nothing ships half-written by accident.
 *
 * Everything NOT wrapped in TODO() was sourced from the previous site
 * (about/exp/education/project.html) or a public profile, and is factual.
 * The TODOs that remain are all things no public source could tell me:
 * numbers, scale, and outcomes. Those have to come from you.
 */
export const TODO = (hint: string) => `TODO: ${hint}`;

export const profile = {
  name: "Ashish Chawda",
  role: "Software Engineer",
  company: "Tray",
  location: "India",
  email: "ashish.chawda@tray.com",

  tagline:
    "Backend engineer working in Java and Spring. I've spent the last four years on an enterprise product — most recently taking it from a monolith to services that can be scaled independently.",

  summary: [
    "Software Engineer at Tray, where I build enterprise product features across the backend and work with cross-functional teams to get them shipped.",
    `I led the migration from a monolithic architecture to microservices — ${TODO(
      "the part that matters: which services you carved out first, how you decided the boundaries, and how you migrated without downtime",
    )}`,
    "Outside of feature work I review code, mentor the engineers who joined after me, and help shape the technical roadmap. Computer Science graduate from Shri Shankaracharya Technical Campus, Bhilai.",
  ],

  /** Hard numbers. These are what recruiters scan first. */
  highlights: [
    { value: "4+", label: "Years shipping production software" },
    { value: TODO("e.g. 12"), label: TODO("e.g. Services owned or migrated") },
    { value: TODO("e.g. 2M+"), label: TODO("e.g. Requests served daily") },
    { value: TODO("e.g. 6"), label: TODO("e.g. Engineers on the team") },
  ],
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/ashish11chawda", handle: "@ashish11chawda" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish11chawda",
    handle: "in/ashish11chawda",
  },
  { label: "X", href: "https://x.com/ashish11chawda", handle: "@ashish11chawda" },
  { label: "YouTube", href: "https://www.youtube.com/@ashish11chawda", handle: "@ashish11chawda" },
  { label: "Email", href: "mailto:ashish.chawda@tray.com", handle: "ashish.chawda@tray.com" },
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
      `Led the migration of an enterprise product from a monolith to microservices, improving scalability and letting components be deployed and scaled independently. ${TODO(
        "Add the outcome — deploy frequency, p99 latency, or incident rate before vs after",
      )}`,
      `Designed and implemented enterprise product features end to end, working with cross-functional teams from requirements through release. ${TODO(
        "Name the single feature you're proudest of and what it does for customers",
      )}`,
      "Contributed to the technical roadmap, identifying areas for improvement and proposing the strategy for addressing them.",
      `Review code and mentor junior engineers on the team. ${TODO(
        "How many people, and one concrete thing that got better because of it",
      )}`,
      `Conduct testing and debugging to catch issues before release. ${TODO(
        "If you introduced a testing practice or raised coverage, say which and by how much",
      )}`,
    ],
    stack: ["Java", "Spring", "Hibernate", "Microservices", "MySQL", "AWS"],
  },
  {
    company: "Tray",
    role: "Backend Developer Intern",
    period: "2021 — 2022",
    location: "India",
    bullets: [
      "Built and integrated Swagger/OpenAPI documentation for the platform's APIs, making them usable across teams without back-and-forth.",
      "Wrote technical documentation for APIs and kept it accurate as the surface changed.",
      "Worked with Java, Spring and Hibernate on production code, and contributed to project planning in team meetings.",
    ],
    stack: ["Java", "Spring", "Hibernate", "Swagger / OpenAPI"],
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

/**
 * Three projects that show judgement beat ninety repos that show enthusiasm.
 * The tutorial clones are deliberately off the site.
 */
export const projects: Project[] = [
  {
    name: TODO("Your strongest piece of Tray work you're allowed to describe publicly"),
    blurb: TODO("One line: what it does and who depends on it."),
    detail: TODO(
      "The tradeoff you made and why — this is the field that gets you asked about it in an interview. e.g. 'Split the service on write-contention boundaries rather than by domain noun, because the hot path was a single table.'",
    ),
    stack: ["Java", "Spring Boot"],
    featured: true,
  },
  {
    name: "LitForm API",
    blurb: "A form management API with admin and user roles — create, edit and publish forms, then collect submissions.",
    detail: `Role-based access split the API cleanly: admins get full CRUD over forms, users get read-and-submit only. ${TODO(
      "How did you enforce the role boundary — filter, annotations, method-level security? That's the interesting part",
    )}`,
    stack: ["Java", "Spring Boot", "REST"],
  },
  {
    name: "GCRF Progress Tracker",
    blurb:
      "Let students in the Google Cloud Ready Facilitator programme at SSTC Bhilai track their daily progress against their Qwiklabs profile.",
    detail: `Built for a real cohort rather than as an exercise — it had to reconcile a student's registered email against their external Qwiklabs profile. ${TODO(
      "Roughly how many students used it, and what broke at that size",
    )}`,
    stack: ["JavaScript", "HTML"],
    repo: "https://github.com/ashish11chawda/gcrf21-badge",
  },
  {
    name: "Multiplayer Tic Tac Toe",
    blurb: "Realtime two-player game with live chat and authentication.",
    detail: TODO(
      "How you handled state sync and reconnects over websockets — who owns the authoritative board state, and what happens when a player drops mid-game",
    ),
    stack: ["JavaScript", "WebSockets", "Node.js"],
    repo: "https://github.com/ashish11chawda/tic-tac-toe",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL"] },
  { group: "Backend", items: ["Spring", "Spring Boot", "Hibernate", "REST", "Swagger / OpenAPI"] },
  { group: "Architecture", items: ["Microservices", "Monolith decomposition", "API design"] },
  { group: "Frontend", items: ["React", "Tailwind CSS", "Next.js"] },
  { group: "Data", items: ["MySQL", "MongoDB"] },
  { group: "Infra", items: ["AWS", "Git", "GitHub Actions"] },
  { group: "Practice", items: ["Code review", "Mentoring", "Technical documentation"] },
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
    notes: [
      "Hack Club SSGI — Lead",
      "GFG Student Chapter SSGI — Lead (2020–2021)",
      "Microsoft Learn Student Ambassador",
    ],
  },
];

export type Talk = { title: string; venue: string; year: string; href?: string };

export const talks: Talk[] = [
  {
    title: "Building a Twitter clone with Tailwind CSS — workshop",
    venue: "DevFest Raipur",
    year: "2022",
    href: "https://github.com/ashish11chawda/twitter-clone-tailwind",
  },
  {
    title: TODO("Anything since 2022 — a talk, a blog post, an internal tech doc you can link"),
    venue: TODO("where"),
    year: TODO("when"),
  },
];
