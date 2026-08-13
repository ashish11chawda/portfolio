import { experience } from "@/content/profile";
import { Section } from "./Section";
import { Text } from "./Placeholder";

export function Work() {
  return (
    <Section id="work" title="Experience">
      <ol className="space-y-12">
        {experience.map((job, i) => (
          <li key={i} className="relative pl-6 sm:pl-8">
            <span
              className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent ring-4 ring-accent-dim/30"
              aria-hidden
            />
            {i < experience.length - 1 && (
              <span className="absolute left-[3.5px] top-6 bottom-[-2.5rem] w-px bg-edge" aria-hidden />
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-medium">
                <Text>{job.role}</Text>
                <span className="text-faint"> at </span>
                <Text>{job.company}</Text>
              </h3>
              <p className="font-mono text-xs text-faint">
                <Text>{job.period}</Text>
              </p>
            </div>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-muted leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-edge-strong" aria-hidden />
                  <Text>{b}</Text>
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((s) => (
                <li
                  key={s}
                  className="rounded border border-edge px-2 py-0.5 font-mono text-[11px] text-faint"
                >
                  <Text>{s}</Text>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
