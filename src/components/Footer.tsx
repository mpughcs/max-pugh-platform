import { LINKS } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
          Based in Los Angeles. Limited slots monthly.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="text-[var(--foreground-muted)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            href={LINKS.email}
          >
            Email
          </a>
          <a
            className="text-[var(--foreground-muted)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-[var(--foreground-muted)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

