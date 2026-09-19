import { community, eventsOrganized } from "@/content/profile";
import { Section } from "./Section";

export function Community() {
  return (
    <Section id="community" title="Community">
      <ul className="divide-y divide-edge">
        {community.map((c) => (
          <li
            key={c.role + c.org}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
          >
            <span>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {c.role} ↗
                </a>
              ) : (
                c.role
              )}
              <span className="text-muted"> · {c.org}</span>
            </span>
            <span className="font-mono text-xs text-faint">{c.period}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 font-mono text-xs text-faint">Events I&apos;ve helped run</h3>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {eventsOrganized.map((e) => (
          <li
            key={e}
            className="rounded border border-edge bg-raised px-2.5 py-1 text-sm text-muted"
          >
            {e}
          </li>
        ))}
      </ul>
    </Section>
  );
}
