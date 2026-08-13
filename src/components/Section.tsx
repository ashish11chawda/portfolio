export function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-edge py-16 sm:py-20">
      <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-faint">
          <span className="mr-2 text-accent">/</span>
          {title}
        </h2>
        {aside && <p className="font-mono text-xs text-faint">{aside}</p>}
      </div>
      {children}
    </section>
  );
}
