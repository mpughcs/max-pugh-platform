"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export function CollapsibleSection({
  id,
  eyebrow,
  title,
  defaultOpen = true,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section
      id={id}
      className="border-t border-[var(--border)] py-8 md:py-10 scroll-mt-24 "
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-lg"
        aria-expanded={open}
      >
        <div>
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
            {title}
          </h2>
        </div>
        <span
          className="shrink-0 pt-2 text-[var(--foreground-muted)] transition-transform duration-200"
          aria-hidden
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {open ? (
        <div className="mt-6 -mx-5 overflow-x-auto px-5 md:-mx-8 md:px-8">
          <div className="flex flex-row items-stretch gap-6 pr-4 [&>*]:shrink-0">
            {children}
          </div>
        </div>
      ) : null}
    </section>
  );
}
