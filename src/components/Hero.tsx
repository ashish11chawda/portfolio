import { profile, socials } from "@/content/profile";
import { Text } from "./Placeholder";

export function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-16 sm:pt-24 sm:pb-20">
      <div className="grid-wash pointer-events-none absolute inset-x-0 top-0 -z-10 h-72" aria-hidden />

      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-edge bg-raised px-3 py-1 font-mono text-xs text-muted">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Open to Senior Software Engineer roles
      </p>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>

      <p className="mt-3 text-lg text-muted">
        {profile.role} · {profile.company} · {profile.location}
      </p>

      <p className="mt-7 max-w-2xl text-balance text-lg leading-relaxed">{profile.tagline}</p>

      <div className="mt-7 max-w-2xl space-y-3 text-muted leading-relaxed">
        {profile.summary.map((line, i) => (
          <p key={i}>
            <Text>{line}</Text>
          </p>
        ))}
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-4">
        {profile.highlights.map((h) => (
          <div key={h.label} className="bg-raised px-4 py-4">
            <dt className="font-mono text-xl text-accent">
              <Text>{h.value}</Text>
            </dt>
            <dd className="mt-1.5 text-xs leading-snug text-faint">
              <Text>{h.label}</Text>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-9 flex flex-wrap gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="rounded-md border border-edge bg-raised px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent-dim hover:text-ink"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
