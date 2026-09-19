import { projects } from "@/content/profile";
import { Section } from "./Section";
import { Text } from "./Placeholder";

export function Projects() {
  const unfeatured = projects.filter((p) => !p.featured).length;

  return (
    <Section id="projects" title="Selected projects" aside="what I'm building">
      <div className="grid gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={i}
            className={`flex flex-col bg-raised p-5 ${
              p.featured || (i === projects.length - 1 && unfeatured % 2 === 1)
                ? "sm:col-span-2"
                : ""
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-medium">
                <Text>{p.name}</Text>
              </h3>
              <div className="flex shrink-0 gap-3 font-mono text-xs">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-faint transition-colors hover:text-accent"
                  >
                    code ↗
                  </a>
                )}
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-faint transition-colors hover:text-accent"
                  >
                    live ↗
                  </a>
                )}
              </div>
            </div>

            <p className="mt-2 text-sm text-muted">
              <Text>{p.blurb}</Text>
            </p>

            <p className="mt-4 border-l-2 border-accent-dim pl-3 text-sm leading-relaxed text-muted">
              <Text>{p.detail}</Text>
            </p>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded border border-edge px-2 py-0.5 font-mono text-[11px] text-faint"
                >
                  <Text>{s}</Text>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
