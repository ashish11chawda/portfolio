"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const CHANGED = "themechange";

/**
 * The <html data-theme> attribute is the source of truth — an inline script in
 * the layout sets it before paint. This subscribes to it rather than keeping a
 * second copy of the state in React.
 */
function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: light)");
  media.addEventListener("change", onChange);
  window.addEventListener(CHANGED, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(CHANGED, onChange);
  };
}

function getSnapshot(): Theme {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

/** Server render has no theme to read; dark is the documented default. */
const getServerSnapshot = (): Theme => "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "light" ? "dark" : "light";

  const toggle = () => {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event(CHANGED));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      className="rounded-md border border-edge px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-edge-strong hover:text-ink"
    >
      <span suppressHydrationWarning>{next}</span>
    </button>
  );
}
