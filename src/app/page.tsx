import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CollapsibleSection } from "@/components/CollapsibleSection";
import { Footer } from "@/components/Footer";
import { RuleList } from "@/components/RuleList";
import { Section } from "@/components/Section";
import { LINKS } from "@/lib/links";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-5 py-4 md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                maxpugh<span className="text-secondary">.dev</span>
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Platform engineering · AI integrations
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--foreground-muted)]">
              <a className="hover:text-[var(--foreground)] hover:underline" href="#about">
                About
              </a>
              <a className="hover:text-[var(--foreground)] hover:underline" href="#work">
                Work
              </a>
              <a className="hover:text-[var(--foreground)] hover:underline" href="#engagements">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <section className="grid gap-10 rounded-2xl border border-[var(--border)] bg-white/70 p-6 shadow-sm backdrop-blur-sm md:p-10">
          <div className="grid gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Platform engineering
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] md:text-5xl md:leading-tight">
              I build reliable platforms that let teams ship{" "}
              <span className="text-[var(--accent)]">AI features</span>{" "}
              without fragility.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              My focus is platform engineering: backend boundaries, integrations, data flows,
              and operational guardrails. Practically, that means turning “we should add AI”
              into production-ready systems (tooling, safety, observability, fallbacks) that teams can maintain.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Button href={LINKS.calendlyAdvisory} target="_blank" rel="noreferrer">
              Schedule a call
            </Button>
            <Button href={LINKS.email} variant="secondary">
              Email me
            </Button>
            <p className="md:ml-auto font-mono text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
              Remote-friendly · async-first · clear written deliverables.
            </p>
          </div>
        </section>

        <Section id="about" eyebrow="Background" title="About">
          <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-white/70 p-6 shadow-sm backdrop-blur-sm md:p-8">
            {/* Subtle accent wash to keep the section feeling “alive” */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent-soft)] opacity-60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--background-alt)] opacity-70 blur-3xl" />

            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start md:gap-10">
              <div className="shrink-0">
                <div className="rounded-full bg-gradient-to-br from-[var(--accent)]/25 to-transparent p-1">
                  <img
                    src="/avatar.png"
                    alt="Max Pugh"
                    className="h-40 w-40 rounded-full object-cover ring-1 ring-[var(--border)] sm:h-48 sm:w-48"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="space-y-4 text-sm leading-7 text-[var(--foreground-muted)]">
                  <p>
                    I’m a platform-focused engineer who’s spent the last few years building systems-heavy products end-to-end:
                    web + mobile surfaces, backend services, data models, third-party integrations, and the operational tooling to keep them stable.
                  </p>
                  <p>
                    I’m strongest when the problem is “make this work in production”: payments, fulfillment, auth, background jobs,
                    recommendation pipelines, AI/LLM integrations, and the guardrails that prevent expensive surprises.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Platform engineering",
                    "AI integrations",
                    "Payments + webhooks",
                    "Background jobs",
                    "Data + recommendation pipelines",
                    "Observability + guardrails",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 text-xs font-semibold text-[var(--foreground)] shadow-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="what" eyebrow="Scope" title="What I do">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Platform foundations",
                body: "Define boundaries, data models, and service interfaces that scale with the product (not just the demo).",
              },
              {
                title: "AI integrations that ship",
                body: "Tooling + workflows for LLM features: safety gates, evals, fallbacks, and observability that keep velocity high.",
              },
              {
                title: "Operational reliability",
                body: "Background jobs, webhooks, idempotency, and log-first debugging so systems behave under real-world edge cases.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-[var(--border)] bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                <h3 className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="rules" eyebrow="Working style" title="How I work">
          <div className="grid gap-6">
            <RuleList
              rules={[
                "Async-first by default: clear written updates, diagrams, and PRs over meetings.",
                "I optimize for maintainability: simple interfaces, explicit failure modes, and good on-call hygiene.",
                "I like measurable systems: logs, dashboards, and “what happens when this fails?” answers.",
                "I’m comfortable owning integrations end-to-end (vendor APIs, webhooks, retries, and rollback plans).",
              ]}
            />
            <p className="text-sm leading-7 text-[var(--foreground-muted)]">
              If you need someone to take a “platform problem” from vague to shipped—especially where AI touches real production constraints—
              that’s where I’m most useful.
            </p>
          </div>
        </Section>

              

        <CollapsibleSection id="work" eyebrow="Recent work" title="As a founder" defaultOpen={true}>
          <CaseStudyCard
            title="Gift With Bear - Gifting Platform"
            role="Founding Engineer / CTO "
            metrics="Built and operated the core gifting platform: Firebase Functions/Firestore backend, Stripe payments + webhooks, Goody fulfillment + catalog refresh, and a Cloud Run recommendation API."
            bullets={[]}
            highlights={[
              {
                title: "Platform backend",
                detail:
                  "Firebase Functions + Firestore: core APIs, scheduled jobs, and operational guardrails.",
              },
              {
                title: "Payments + billing",
                detail:
                  "Stripe intents + webhooks with idempotency patterns and rollout safety gates.",
              },
              {
                title: "Fulfillment + catalog",
                detail:
                  "Goody integration + resumable catalog refresh (paging, resume state, delete safety thresholds).",
              },
              {
                title: "Recommendations API",
                detail:
                  "FastAPI service on Cloud Run backed by Firestore catalog data and tag-based matching.",
              },
              {
                title: "HRIS (Finch)",
                detail:
                  "Auth/token exchange, org import pipeline, scheduled sync, and launch-readiness audit artifacts.",
              },
              {
                title: "Privacy + retention",
                detail:
                  "Account deletion + retention operations to manage data lifecycle and reduce risk.",
              },
            ]}
            href={LINKS.giftWithBear}
            secondaryHref={LINKS.giftWithBearAppStore}
            imageSrc="/plusFram.png"
            imageAlt="Gift With Bear preview"
          />

          <CaseStudyCard
            title="Gifting Concierge (ChatGPT App / MCP)"
            role="Founder / CTO"
            metrics="Designed and shipped a ChatGPT App integration that drives a real checkout flow: roster ingestion → budget → recommendations → draft creation → handoff to web checkout."
            bullets={[]}
            imageSrc="/bearGPT.png"
            highlights={[
              {
                title: "MCP server",
                detail:
                  "Implemented an MCP tool surface (Streamable HTTP) with a stateless session model and clear tool contracts.",
              },
              {
                title: "Interactive widget UI",
                detail:
                  "Served a bundled Apps SDK widget (`ui://widget/...`) to guide CSV upload and stepwise flow inside ChatGPT.",
              },
              {
                title: "Backend handoff",
                detail:
                  "Draft persistence + checkout URL generation via Firebase Functions so payment + fulfillment happen on the web platform.",
              },
              {
                title: "Recommendations preview",
                detail:
                  "Wired an in-chat recommendations preview that calls the backend and falls back to safe mocks when needed.",
              },
              {
                title: "App verification",
                detail:
                  "Added OpenAI domain verification endpoint (`/.well-known/openai-apps-challenge`) to support app submission.",
              },
            ]}
            href={LINKS.giftWithBear}
          />
        </CollapsibleSection>
        
        <CollapsibleSection id="consulting"  title="As a consultant" defaultOpen={true}>
          <CaseStudyCard
            title="Travis - Travel companion platform"
            role="GTM Engineer / Tech Lead "
            metrics="Redesigned and shipped the core travel companion platform: Postgres backend managed by Supabase, OpenAI API integrations, and google calendar sync."
            bullets={[]}
            highlights={[]}
            href={LINKS.travis}
            imageSrc="/travisFrame.webp"
            imageAlt="Travis preview"
          />

        </CollapsibleSection>

        <Section id="engagements" eyebrow="Availability" title="Ways to work together">
          <div className="grid gap-4">
            <div className="rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--accent-soft)]/20 p-6 shadow-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  Remote platform engineering (primary)
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Remote · async-first · systems ownership
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
                I’m looking for a remote role where I can own platform + integration work: backend services, vendor APIs, background jobs,
                AI feature delivery, and operational guardrails.
              </p>
              <div className="mt-5">
                <Button
                  href={LINKS.calendlyAdvisory}
                  target="_blank"
                  rel="noreferrer"
                >
                  Set up a conversation
                </Button>
                <p className="mt-3 text-xs text-[var(--foreground-muted)]">
                  I’m happy to share a resume and walk through case studies.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-white/70 p-6 shadow-sm backdrop-blur-sm">
              <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                Advisory / async review (optional)
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                If you’re a founder or team and want a high-signal review (architecture, AI feasibility, integrations, launch readiness),
                I can do that too—written feedback first.
              </p>
              <div className="mt-5">
                <Button href={LINKS.asyncReview} variant="secondary">
                  Ask about async review
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-white/50 p-5 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                Other engagements
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--foreground-muted)]">
                Time-sensitive or high-stakes consults are sometimes possible when availability allows; typically a minimum block and by prior arrangement.
              </p>
            </div>
          </div>
        </Section>

        <Section id="referrals" eyebrow="References" title="Referrals">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm">
            <p className="text-sm leading-7 text-[var(--foreground-muted)]">
              I’m happy to provide referrals or connect you with people I’ve worked with. If you’re considering me for a role or engagement and would like references, please reach out and I’ll arrange an introduction.
            </p>
            <div className="mt-5">
              <Button href={LINKS.email} variant="secondary">
                Request referrals
              </Button>
            </div>
          </div>
        </Section>

        <div id="contact" className="pt-4">
          <Footer />
        </div>
      </main>
    </div>
  );
}
