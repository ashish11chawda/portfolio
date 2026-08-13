const PREFIX = "TODO: ";

export const isPlaceholder = (value: string) => value.startsWith(PREFIX);

/**
 * Renders any string, but makes unfilled placeholders impossible to miss.
 * Once every TODO() in content/profile.ts is replaced, this is a no-op.
 */
export function Text({ children, className = "" }: { children: string; className?: string }) {
  if (!isPlaceholder(children)) return <span className={className}>{children}</span>;

  return (
    <span
      className={`inline rounded border border-dashed border-warn/60 bg-warn/10 px-1.5 py-0.5 font-mono text-[0.8em] text-warn ${className}`}
      title="Placeholder — fill this in at src/content/profile.ts"
    >
      {children.slice(PREFIX.length)}
    </span>
  );
}
