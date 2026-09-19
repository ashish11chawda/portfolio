import { certifications, funFacts, writing } from "@/content/profile";
import { Section } from "./Section";

export function More() {
  return (
    <>
      <Section id="writing" title="Writing">
        <ul className="divide-y divide-edge">
          {writing.map((w) => (
            <li
              key={w.title}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
            >
              <span className="text-muted">
                {w.href ? (
                  <a href={w.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                    {w.title} ↗
                  </a>
                ) : (
                  w.title
                )}
              </span>
              <span className="font-mono text-xs text-faint">
                {w.venue} · {w.year}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="certifications" title="Certifications">
        <ul className="grid gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-2">
          {certifications.map((c, i) => (
            <li
              key={c.name}
              className={`flex items-baseline justify-between gap-3 bg-raised px-4 py-3 ${
                i === certifications.length - 1 && certifications.length % 2 === 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <span className="text-sm">{c.name}</span>
              <span className="font-mono text-xs text-faint">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="fun-facts" title="Fun facts">
        <ul className="space-y-2.5">
          {funFacts.map((f) => (
            <li key={f} className="flex gap-3 text-muted leading-relaxed">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-edge-strong" aria-hidden />
              {f}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
