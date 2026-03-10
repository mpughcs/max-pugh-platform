import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm hover:bg-[var(--accent-muted)] hover:border-[var(--accent-muted)]",
    secondary:
      "border-[var(--border-strong)] bg-white/60 text-[var(--foreground)] shadow-sm hover:bg-white hover:border-[var(--foreground-muted)]",
    ghost:
      "border-transparent bg-transparent text-[var(--foreground)] hover:bg-[var(--background-alt)]",
  };

  return (
    <a
      {...props}
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
    />
  );
}

