export function ResultPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-ink text-white rounded-[24px] p-8 lg:p-10 sticky top-24 ${className}`}>
      {children}
    </div>
  );
}

export function BigNumber({
  value,
  unit,
  sign,
}: {
  value: string;
  unit?: string;
  sign?: "+" | "-";
}) {
  return (
    <div className="flex items-baseline gap-2 -tracking-[0.02em]">
      {sign ? (
        <span className="text-[2rem] font-bold text-sun">{sign}</span>
      ) : null}
      <span className="text-[3.2rem] leading-none font-extrabold text-white">
        {value}
      </span>
      {unit ? <span className="text-[1.2rem] font-bold text-white/85">{unit}</span> : null}
    </div>
  );
}

export function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center py-3 ${highlight ? "" : "border-b border-white/10"}`}
    >
      <span className="text-white/80 text-[0.92rem]">{label}</span>
      <span className={`font-bold tabular-nums ${highlight ? "text-sun text-[1.1rem]" : "text-white text-[1rem]"}`}>
        {value}
      </span>
    </div>
  );
}

export function Verdict({
  label,
  tone,
}: {
  label: string;
  tone: "green" | "amber" | "red";
}) {
  const styles = {
    green: "bg-emerald-light text-emerald border-emerald/30",
    amber: "bg-sun-light text-sun-dark border-sun/40",
    red: "bg-brick-light text-brick border-brick/30",
  };
  const symbols = { green: "✓", amber: "~", red: "✕" };
  return (
    <div
      className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border ${styles[tone]} font-bold text-[1rem] mt-5`}
    >
      <span
        className={`w-7 h-7 rounded-full bg-white flex items-center justify-center font-extrabold text-[0.95rem]`}
      >
        {symbols[tone]}
      </span>
      {label}
    </div>
  );
}
