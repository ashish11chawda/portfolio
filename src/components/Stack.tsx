import { skills } from "@/content/profile";
import { Section } from "./Section";

export function Stack() {
  return (
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
  );
}
