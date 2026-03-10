export function RuleList({ rules }: { rules: string[] }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">
      <ul className="divide-y divide-[var(--border)]">
        {rules.map((rule) => (
          <li key={rule} className="px-5 py-4 text-base leading-7">
            <span className="font-mono text-[var(--accent)]">→</span>{" "}
            <span className="font-medium text-[var(--foreground)]">{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

