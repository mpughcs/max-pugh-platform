import { Button } from "./Button";

export function CaseStudyCard({
  title,
  role,
  metrics,
  bullets,
  href,
  secondaryHref,
  imageSrc,
  imageAlt,
  highlights,
  className,
}: {
  title: string;
  role: string;
  metrics: string;
  bullets: string[];
  href: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  highlights?: Array<{
    title: string;
    detail: string;
  }>;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full min-h-0 flex-col rounded-2xl border border-[var(--border)] bg-white/70 p-6 shadow-sm backdrop-blur-sm max-w-xl ${className ?? ""}`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between shrink-0">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            {title}
          </h3>
          <p className="mt-1 text-[var(--foreground-muted)]">{role}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={href} variant="primary" target="_blank" rel="noreferrer">
            Visit
          </Button>
          {secondaryHref ? (
            <Button
              href={secondaryHref}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              App Store
            </Button>
          ) : null}
        </div>
      </div>

      {imageSrc ? (
        <div className="mt-5 shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background-alt)]">
          <img
            src={imageSrc}
            alt={imageAlt ?? `${title} preview`}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <p className="mt-5 shrink-0 border-l-4 border-[var(--accent)]/50 pl-4 font-mono text-sm text-[var(--foreground-muted)]">
        {metrics}
      </p>

      {highlights?.length ? (
        <div className="relative mt-6 min-h-0 flex-1">
          {/* Subtle edge fades for "scroll" affordance */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/70 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/70 to-transparent"
            aria-hidden="true"
          />

          <div
            className="flex h-full snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label={`${title} responsibilities`}
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                className="w-[260px] shrink-0 snap-start rounded-xl border border-[var(--border)] bg-white/60 p-4 shadow-sm backdrop-blur-sm h-36"
              >
                <p className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
                  {h.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  {h.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 min-h-0 flex-1">
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span
                  className="mt-2 h-1.5px w-1.5 shrink-0 rounded-full bg-[var(--accent)]/80"
                  aria-hidden="true"
                />
                <p className="text-sm leading-7 text-[var(--foreground)]">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

