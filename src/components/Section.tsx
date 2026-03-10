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
      className="border-t border-[var(--border)] py-12 md:py-16 scroll-mt-24"
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
            {title}
            {description ? (
              <p className="text-sm text-[var(--foreground-muted)]">
                {description}
              </p>
            ) : null}
          </h2>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

