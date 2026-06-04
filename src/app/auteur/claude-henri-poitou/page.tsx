import Link from "next/link";
import { articles, formatDate } from "@/lib/articles";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Claude-Henri Poitou — expert en protection sociale et retraite",
  description:
    "Biographie et articles de Claude-Henri Poitou, consultant en protection sociale et retraite (18 ans d'expérience, ex-AG2R, fondateur Compétence Retraite).",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Claude-Henri Poitou",
  jobTitle: "Consultant en protection sociale et retraite",
  description:
    "Expert en régimes sociaux et retraite des travailleurs non-salariés. Dix-huit ans d'expérience en protection sociale.",
  url: "https://www.erreur-retraite.fr/auteur/claude-henri-poitou",
  sameAs: [
    "https://competence-retraite.fr",
    "https://smartretraite.fr",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Compétence Retraite EURL",
      url: "https://competence-retraite.fr",
    },
  ],
  alumniOf: {
    "@type": "Organization",
    name: "AG2R La Mondiale",
  },
  knowsAbout: [
    "Protection sociale",
    "Retraite des indépendants",
    "Régime AGIRC-ARRCO",
    "Régime CIPAV",
    "Plan Épargne Retraite",
    "Loi Madelin",
    "Audit de relevés de carrière",
  ],
};

const expertise = [
  "Protection sociale des travailleurs non-salariés",
  "Régimes complémentaires AGIRC-ARRCO",
  "Retraite des professions libérales (CIPAV, CNAVPL)",
  "Optimisation patrimoniale par la retraite",
  "Dispositifs Madelin et Plan Épargne Retraite",
  "Audit de relevés de carrière complexes",
];

const parcours: { annees: string; poste: string; lieu: string }[] = [
  {
    annees: "2026 – aujourd'hui",
    poste: "Fondateur",
    lieu: "SmartRetraite",
  },
  {
    annees: "2024 – aujourd'hui",
    poste: "Fondateur et gérant",
    lieu: "Compétence Retraite EURL",
  },
  {
    annees: "2015 – aujourd'hui",
    poste: "Fondateur et dirigeant",
    lieu: "Option Courtage",
  },
  {
    annees: "2008 – 2015",
    poste: "Consultant en protection sociale",
    lieu: "AG2R La Mondiale",
  },
];

export default function AuteurPoitouPage() {
  const articlesPoitou = articles.filter((a) => a.auteur === "Claude-Henri Poitou");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="container-ed py-12">
        <nav aria-label="Fil d'Ariane" className="text-[0.85rem] text-muted mb-6 font-medium">
          <Link href="/" className="no-underline text-muted hover:text-emerald">
            Accueil
          </Link>
          <span className="mx-2">›</span>
          <span>Équipe éditoriale</span>
        </nav>

        {/* HERO AUTEUR */}
        <header className="grid lg:grid-cols-[auto_1fr] gap-10 items-start bg-paper border border-rule rounded-[24px] p-8 lg:p-12 mb-12">
          <div className="flex-shrink-0">
            <div className="relative w-36 h-36 rounded-full bg-emerald text-white flex items-center justify-center font-extrabold text-[2.8rem] shadow-lg">
              CP
              <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-sun border-4 border-paper" />
            </div>
          </div>
          <div className="min-w-0">
            <RubriqueLabel>Équipe éditoriale</RubriqueLabel>
            <h1
              className="font-bold text-ink mt-4 mb-3 leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Claude-Henri Poitou
            </h1>
            <p className="text-[1.25rem] text-emerald font-semibold mb-5">
              Expert en protection sociale et retraite des indépendants
            </p>
            <p className="text-ink-2 text-[1.05rem] leading-[1.6] max-w-[680px]">
              Consultant en régimes sociaux et courtage depuis plus de onze ans.
              Après sept années passées chez AG2R La Mondiale, l'un des
              principaux acteurs français de la protection sociale, il fonde
              Option Courtage puis Compétence Retraite, cabinet spécialisé dans
              l'audit et l'optimisation des droits à la retraite.
            </p>
          </div>
        </header>

        {/* 2 COLONNES : Expertise + Parcours */}
        <div className="grid lg:grid-cols-2 gap-7 mb-12">
          <section className="bg-paper border border-rule rounded-2xl p-8">
            <h2 className="text-[1.4rem] font-bold text-ink mb-5 -tracking-[0.015em]">
              Domaines d'expertise
            </h2>
            <ul className="space-y-3 list-none p-0">
              {expertise.map((e) => (
                <li key={e} className="flex gap-3 items-start text-[0.98rem] text-ink-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-light text-emerald flex items-center justify-center font-bold text-[0.78rem] flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-paper border border-rule rounded-2xl p-8">
            <h2 className="text-[1.4rem] font-bold text-ink mb-5 -tracking-[0.015em]">
              Parcours professionnel
            </h2>
            <ol className="list-none p-0 m-0 relative">
              {parcours.map((p, i) => (
                <li key={i} className="pl-6 pb-5 last:pb-0 relative border-l-2 border-rule last:border-transparent ml-2">
                  <span className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-emerald border-2 border-paper" />
                  <div className="text-[0.78rem] font-bold text-emerald tracking-wider uppercase mb-1">
                    {p.annees}
                  </div>
                  <div className="text-[1rem] font-bold text-ink">{p.poste}</div>
                  <div className="text-[0.92rem] text-ink-2">{p.lieu}</div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* PUBLICATIONS */}
        <section className="mb-12">
          <div className="mb-7">
            <RubriqueLabel>Articles signés</RubriqueLabel>
            <h2
              className="font-bold text-ink mt-4 -tracking-[0.02em]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)" }}
            >
              Les articles rédigés par Claude-Henri Poitou
            </h2>
          </div>

          {articlesPoitou.length === 0 ? (
            <p className="text-muted italic">Aucun article publié à ce jour.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {articlesPoitou.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.section}/${a.slug}`}
                  className="group block bg-paper border border-rule rounded-2xl p-7 no-underline transition-all hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(29,44,44,0.06)] hover:border-emerald"
                >
                  <div className="rubrique-label mb-3 !text-[0.7rem]">
                    {a.rubrique}
                  </div>
                  <h3 className="text-[1.15rem] font-bold text-ink leading-[1.3] mb-2 group-hover:text-emerald transition-colors">
                    {a.titre}
                  </h3>
                  <p className="text-[0.92rem] text-ink-2 leading-[1.55] mb-4">
                    {a.chapo}
                  </p>
                  <div className="text-[0.78rem] text-muted">
                    {formatDate(a.datePublication)} · {a.tempsLecture} min de lecture
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CONTACT */}
        <section className="bg-bg-2 rounded-2xl p-8 lg:p-10">
          <h2 className="text-[1.4rem] font-bold text-ink mb-5 -tracking-[0.015em]">
            Pour aller plus loin
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://competence-retraite.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-paper border border-rule rounded-xl px-5 py-4 no-underline hover:border-emerald transition-colors"
            >
              <div>
                <div className="text-[0.95rem] font-bold text-ink">Compétence Retraite</div>
                <div className="text-[0.85rem] text-muted">Audit retraite personnalisé</div>
              </div>
              <span className="text-emerald font-bold">→</span>
            </a>
            <a
              href="https://smartretraite.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-paper border border-rule rounded-xl px-5 py-4 no-underline hover:border-emerald transition-colors"
            >
              <div>
                <div className="text-[0.95rem] font-bold text-ink">SmartRetraite</div>
                <div className="text-[0.85rem] text-muted">Diagnostic numérique gratuit</div>
              </div>
              <span className="text-emerald font-bold">→</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
