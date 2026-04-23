export function EncadreReglementaire({
  label,
  valeur,
  desc,
  source,
  float = false,
}: {
  label: string;
  valeur?: string;
  desc?: string;
  source?: string;
  float?: boolean;
}) {
  return (
    <aside
      className={`bg-bg-2 border border-rule rounded-2xl px-6 py-5 my-7 ${
        float ? "md:float-right md:ml-6 md:mb-4 md:max-w-[320px]" : ""
      }`}
    >
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-2">
        {label}
      </div>
      {valeur ? (
        <div className="font-bold text-[1.8rem] leading-none text-ink mb-2 -tracking-[0.02em]">
          {valeur}
        </div>
      ) : null}
      {desc ? (
        <div className="text-[0.95rem] text-ink-2 leading-[1.55]">{desc}</div>
      ) : null}
      {source ? (
        <div className="mt-3 text-[0.72rem] text-muted">Source : {source}</div>
      ) : null}
    </aside>
  );
}
