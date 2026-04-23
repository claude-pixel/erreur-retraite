export function SectionHeading({
  kicker,
  titre,
  sub,
  center = false,
  right,
}: {
  kicker?: string;
  titre: React.ReactNode;
  sub?: string;
  center?: boolean;
  right?: React.ReactNode;
}) {
  return (
    <div
      className={`mb-9 ${center ? "text-center" : "flex justify-between items-end gap-5 flex-wrap"}`}
    >
      <div className={center ? "" : ""}>
        {kicker ? <div className="rubrique-label mb-4">{kicker}</div> : null}
        <h2
          className="text-[2rem] leading-tight text-ink font-bold -tracking-[0.02em]"
        >
          {titre}
        </h2>
        {sub ? (
          <p className={`text-ink-2 mt-2.5 text-[1.02rem] max-w-[640px] ${center ? "mx-auto" : ""}`}>{sub}</p>
        ) : null}
      </div>
      {right && !center ? <div>{right}</div> : null}
    </div>
  );
}
