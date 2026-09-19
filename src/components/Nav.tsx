import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#community", label: "Community" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          {profile.name.toLowerCase().replace(" ", "-")}
        </a>
        <div className="flex items-center gap-1.5">
          <ul className="mr-2 hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
