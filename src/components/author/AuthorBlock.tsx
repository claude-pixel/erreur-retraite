import Link from "next/link";

type Variant = "nominative" | "redaction" | "redaction-avec-expert";

const POITOU = {
  name: "Claude-Henri Poitou",
  title: "Consultant en protection sociale — 18 ans d'expérience",
  credentials: "Ancien consultant AG2R La Mondiale · Fondateur Compétence Retraite",
  initials: "CP",
  href: "/auteur/claude-henri-poitou",
};

function Avatar({ initials, size = 56 }: { initials: string; size?: number }) {
  return (
    <div
      className="rounded-full bg-emerald text-white flex items-center justify-center font-extrabold flex-shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      {initials}
    </div>
  );
}

function ExpertiseMention() {
  return (
    <div className="mt-5 pt-5 border-t border-rule text-[0.92rem] text-ink-2 leading-[1.55]">
      Cet article a bénéficié de l'expertise de{" "}
      <a
        href="https://competence-retraite.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold"
      >
        Compétence Retraite
      </a>
      , cabinet de conseil retraite spécialisé dans l'accompagnement des
      dirigeants et des professions indépendantes.
    </div>
  );
}

export function AuthorBlock({
  variant = "redaction",
  auteur,
}: {
  variant?: Variant;
  auteur?: string;
}) {
  if (variant === "nominative") {
    return (
      <aside className="my-12 bg-paper border border-rule rounded-2xl p-7">
        <div className="flex gap-5 items-start">
          <Avatar initials={POITOU.initials} size={60} />
          <div className="min-w-0 flex-1">
            <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-1.5">
              Auteur
            </div>
            <div className="text-[1.15rem] font-bold text-ink mb-1">
              {POITOU.name}
            </div>
            <div className="text-[0.92rem] text-ink-2 mb-2 font-medium">
              {POITOU.title}
            </div>
            <div className="text-[0.85rem] text-muted mb-3">
              {POITOU.credentials}
            </div>
            <Link
              href={POITOU.href}
              className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-emerald"
            >
              Voir tous ses articles →
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="my-12 bg-bg-2 rounded-2xl p-7">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center font-extrabold text-[0.9rem] flex-shrink-0">
          ER
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-1.5">
            Rédaction
          </div>
          <div className="text-[1.05rem] font-bold text-ink mb-1">
            {auteur ?? "La rédaction d'erreur-retraite.fr"}
          </div>
          <div className="text-[0.88rem] text-ink-2">
            Service éditorial indépendant édité par Compétence Retraite EURL.
          </div>
          {variant === "redaction-avec-expert" ? <ExpertiseMention /> : null}
        </div>
      </div>
    </aside>
  );
}

export function authorVariantFor(auteur?: string): Variant {
  if (auteur === "Claude-Henri Poitou") return "nominative";
  return "redaction";
}
