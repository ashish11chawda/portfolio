import { skills, talks } from "@/content/profile";
import { Section } from "./Section";
import { Text } from "./Placeholder";

export function Stack() {
  return (
    <>
      <Section id="stack" title="Stack" aside="things I've shipped with, not read about">
        <dl className="space-y-5">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className="font-mono text-xs text-faint sm:pt-1">{s.group}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-edge bg-raised px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="speaking" title="Speaking & writing">
        <ul className="divide-y divide-edge">
          {talks.map((t, i) => (
            <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
              <span className="text-muted">
                {t.href ? (
                  <a href={t.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                    <Text>{t.title}</Text> ↗
                  </a>
                ) : (
                  <Text>{t.title}</Text>
                )}
              </span>
              <span className="font-mono text-xs text-faint">
                <Text>{t.venue}</Text> · <Text>{t.year}</Text>
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
