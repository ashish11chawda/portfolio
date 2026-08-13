import { profile, socials } from "@/content/profile";
import { Section } from "./Section";

export function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <p className="max-w-xl text-lg leading-relaxed">
          Currently at {profile.company} and open to Senior Software Engineer conversations. The
          fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block rounded-md border border-accent-dim bg-accent-dim/20 px-4 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent-dim/40"
        >
          {profile.email}
        </a>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-2">
          {socials
            .filter((s) => s.label !== "Email")
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-baseline justify-between bg-raised px-4 py-3 transition-colors hover:bg-bg"
                >
                  <span className="text-sm">{s.label}</span>
                  <span className="font-mono text-xs text-faint">{s.handle} ↗</span>
                </a>
              </li>
            ))}
        </ul>
      </Section>

      <footer className="border-t border-edge py-8">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name} · built with Next.js, deployed on Firebase
          Hosting
        </p>
      </footer>
    </>
  );
}
