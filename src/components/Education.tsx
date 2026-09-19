import { education } from "@/content/profile";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((e) => (
        <div key={e.school}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-base font-medium">{e.school}</h3>
            <p className="font-mono text-xs text-faint">{e.period}</p>
          </div>
          <p className="mt-1 text-muted">{e.qualification}</p>
          {e.notes.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {e.notes.map((n) => (
                <li
                  key={n}
                  className="rounded border border-edge bg-raised px-2.5 py-1 text-sm text-muted"
                >
                  {n}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Section>
  );
}
