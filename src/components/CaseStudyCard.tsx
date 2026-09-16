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
      className={`flex h-full min-h-0 w-full flex-col rounded-2xl border border-[var(--border)] bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:p-5 md:max-w-xl md:p-6 ${className ?? ""}`}
    >
      <div className="flex shrink-0 flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)] md:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-[var(--foreground-muted)] md:text-base">{role}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            href={href}
            variant="primary"
            target="_blank"
            rel="noreferrer"
            className="min-h-11 flex-1 sm:flex-none"
          >
            Visit
          </Button>
          {secondaryHref ? (
            <Button
              href={secondaryHref}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              className="min-h-11 flex-1 sm:flex-none"
            >
              App Store
            </Button>
          ) : null}
        </div>
      </div>

      {imageSrc ? (
        <div className="mt-4 shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background-alt)] sm:mt-5">
          <img
            src={imageSrc}
            alt={imageAlt ?? `${title} preview`}
            className="h-44 w-full object-cover sm:h-56 md:h-64"
            loading="lazy"
          />
        </div>
      ) : null}

      <p className="mt-4 shrink-0 border-l-4 border-[var(--accent)]/50 pl-3 font-mono text-xs text-[var(--foreground-muted)] sm:mt-5 sm:pl-4 md:text-sm">
        {metrics}
      </p>

      {highlights?.length ? (
        <div className="relative mt-5 min-h-0 flex-1 sm:mt-6">
          {/* Mobile: compact 2-col grid. Desktop: horizontal snap row */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-[var(--border)] bg-white/60 p-3 shadow-sm backdrop-blur-sm"
              >
                <p className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
                  {h.title}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-[var(--foreground-muted)]">
                  {h.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="relative hidden md:block">
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
                  className="h-36 w-[260px] shrink-0 snap-start rounded-xl border border-[var(--border)] bg-white/60 p-4 shadow-sm backdrop-blur-sm"
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
        </div>
      ) : (
        <div className="mt-5 min-h-0 flex-1 sm:mt-6">
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/80"
                  aria-hidden="true"
                />
                <p className="text-xs leading-7 text-[var(--foreground)] md:text-sm">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
