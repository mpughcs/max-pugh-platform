import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  description,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-[var(--border)] py-8 sm:py-12 md:scroll-mt-24 md:py-16"
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-xl font-bold tracking-tight text-[var(--foreground)] sm:mt-3 sm:text-2xl md:text-3xl">
            {title}
            {description ? (
              <p className="mt-1 text-sm font-normal text-[var(--foreground-muted)]">
                {description}
              </p>
            ) : null}
          </h2>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

