"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function CollapsibleSection({
  id,
  eyebrow,
  title,
  isOpen = true,
  sectionKey,
  children,
  onTabClick,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  isOpen?: boolean;
  /** When using single-tab-open logic, pass a key so the parent knows which section was clicked */
  sectionKey?: string;
  children: ReactNode;
  onTabClick?: (key: string) => void;
}) {
  const [open, setOpen] = useState(isOpen);
  const sectionRef = useRef<HTMLElement>(null);
  const prevExpandedRef = useRef<boolean | undefined>(undefined);

  const isControlled = onTabClick !== undefined;
  const expanded = isControlled ? isOpen : open;

  useEffect(() => {
    const becameOpen = expanded && prevExpandedRef.current === false;
    prevExpandedRef.current = expanded;
    if (isControlled && becameOpen && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expanded, isControlled]);

  const handleClick = () => {
    if (isControlled && sectionKey !== undefined) {
      onTabClick(sectionKey);
    } else {
      setOpen((prev) => !prev);
    }
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className="border-t border-[var(--border)] py-8 md:py-10 scroll-mt-24"
    >
      <button
        type="button"
        onClick={handleClick}
        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-lg"
        aria-expanded={expanded}
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
          className="shrink-0 pt-2 text-[var(--foreground-muted)] transition-transform "
          aria-hidden
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {expanded ? (
        <div className="mt-6 -mx-5 overflow-x-auto px-5 md:-mx-8 md:px-8">
          <div className="flex flex-row items-stretch gap-6 pr-4 [&>*]:shrink-0">
            {children}
          </div>
        </div>
      ) : null}
    </section>
  );
}
