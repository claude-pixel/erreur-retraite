import Link from "next/link";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";
import {
  PercentDownIcon,
  CoinsEuroIcon,
  MissingYearIcon,
  PointsChartIcon,
} from "@/components/icons/ToolIcons";

export const metadata = {
  title: "Simulateurs retraite gratuits — décote, rachat, année manquante, points AGIRC-ARRCO",
  description:
    "Calculateurs interactifs gratuits, sans inscription, pour évaluer l'impact de vos trimestres manquants, la rentabilité d'un rachat et la valeur de vos points AGIRC-ARRCO.",
};

const tools = [
  {
    href: "/outils/simulateur-decote",
    bg: "bg-brick",
    color: "text-white",
    Icon: PercentDownIcon,
    title: "Simulateur de décote",
    desc:
      "Mesurez en une minute l'impact exact de trimestres manquants sur votre pension mensuelle et sur 20 ans de retraite.",
    inputs: "pension estimée · trimestres manquants · âge de départ",
    duration: "≈ 1 min",
  },
  {
    href: "/outils/simulateur-rachat",
    bg: "bg-emerald",
    color: "text-white",
    Icon: CoinsEuroIcon,
    title: "Rentabilité d'un rachat",
    desc:
      "Coût 2026, économie fiscale, gain mensuel de pension et comparatif avec un PER équivalent. Verdict chiffré en un écran.",
    inputs: "âge · revenu · nb de trimestres · pension estimée",
    duration: "≈ 3 min",
  },
  {
    href: "/outils/combien-me-coute-une-annee-manquante",
    bg: "bg-sun",
    color: "text-ink",
    Icon: MissingYearIcon,
    title: "Coût d'une année manquante",
    desc:
      "Le chiffre-choc personnalisé : combien une seule année oubliée vous fait-elle perdre sur toute votre retraite ?",
    inputs: "pension estimée · durée de retraite",
    duration: "≈ 30 sec",
  },
  {
    href: "/outils/estimateur-points-agirc-arrco",
    bg: "bg-cobalt",
    color: "text-white",
    Icon: PointsChartIcon,
    title: "Valeur de vos points AGIRC-ARRCO",
    desc:
      "Convertissez vos points complémentaires en pension mensuelle, et mesurez ce que des points manquants sur votre relevé vous coûteraient.",
    inputs: "total de points · points manquants",
    duration: "≈ 1 min",
  },
];

export default function OutilsPage() {
  return (
    <div className="container-ed py-14">
      <RubriqueLabel>Rubrique · Simulateurs</RubriqueLabel>
      <h1
        className="font-bold text-ink mt-5 mb-6"
        style={{ fontSize: "clamp(2.2rem, 4.5vw, 3rem)", lineHeight: 1.1 }}
      >
        Quatre <em>simulateurs</em>, sans inscription
      </h1>
      <p className="font-medium text-[1.15rem] text-ink-2 max-w-[720px] mb-12 leading-[1.55]">
        Des calculateurs simples et gratuits pour répondre à une question
        concrète tout de suite : suis-je touché par la décote ? un rachat
        est-il rentable ? combien vaut une année manquante — ou mes points
        AGIRC-ARRCO — sur mon relevé ?
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group block bg-paper border border-rule rounded-[20px] p-8 no-underline transition-all hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,44,44,0.08)]"
          >
            <div className="flex justify-between items-start mb-5">
              <div
                className={`w-16 h-16 rounded-2xl ${t.bg} ${t.color} flex items-center justify-center`}
              >
                <t.Icon size={36} />
              </div>
              <span className="bg-emerald-light text-emerald px-3 py-1.5 rounded-pill text-[0.72rem] font-bold">
                Gratuit
              </span>
            </div>
            <h3 className="text-[1.25rem] text-ink font-bold mb-2.5">
              {t.title}
            </h3>
            <p className="text-[0.92rem] text-ink-2 leading-[1.55] mb-5">
              {t.desc}
            </p>
            <div className="bg-bg-2 rounded-xl p-3.5 mb-5 text-[0.78rem] text-muted">
              <strong className="text-ink-2 font-semibold">Entrées :</strong>{" "}
              {t.inputs}
            </div>
            <div className="flex justify-between items-center">
              <span className="inline-flex items-center gap-2.5 bg-ink text-white px-5 py-3 rounded-pill font-bold text-[0.9rem] group-hover:bg-emerald transition-colors">
                Lancer{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="text-[0.78rem] text-muted">{t.duration}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-7 bg-bg-2 border border-rule rounded-2xl">
        <h3 className="text-[1.1rem] font-bold text-ink mb-2">
          Les limites de la simulation
        </h3>
        <p className="text-[0.95rem] text-ink-2 leading-[1.55]">
          Nos simulateurs fournissent un ordre de grandeur fiable, calculé
          sur les barèmes officiels 2026 et les règles réglementaires en
          vigueur. Pour une situation complexe — carrière mixte, TNS,
          expatriation, dispositif particulier — un audit humain
          personnalisé par{" "}
          <a
            href="https://competence-retraite.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compétence Retraite
          </a>{" "}
          reste indispensable.
        </p>
      </div>
    </div>
  );
}
