type Chiffre = { num: string; label: string; source?: string };

export function ChiffresSidebar({
  titre = "Chiffres-clés",
  chiffres,
}: {
  titre?: string;
  chiffres: Chiffre[];
}) {
  return (
    <aside className="bg-bg-2 border border-rule rounded-2xl px-6 py-7 sticky top-24">
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-4 pb-3 border-b-2 border-emerald">
        {titre}
      </div>
      <div>
        {chiffres.map((c, i) => (
          <div
            key={i}
            className={`py-4 ${i !== chiffres.length - 1 ? "border-b border-rule" : ""}`}
          >
            <div className="font-bold text-[1.9rem] text-ink leading-none -tracking-[0.02em]">
              {c.num}
            </div>
            <div className="text-[0.88rem] text-ink-2 mt-2 leading-snug">
              {c.label}
            </div>
            {c.source ? (
              <div className="text-[0.72rem] text-muted mt-1">{c.source}</div>
            ) : null}
          </div>
        ))}
      </div>
    </aside>
  );
}
