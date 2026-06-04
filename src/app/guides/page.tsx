import Link from "next/link";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Guides pratiques — démarches et procédures retraite",
  description:
    "Guides pas-à-pas pour corriger un relevé de carrière, connaître son âge de départ, utiliser les modèles de lettres types.",
};

const guides = [
  {
    href: "/guides/corriger-erreur-releve-carriere",
    titre: "Corriger une erreur sur son relevé de carrière",
    desc: "Procédure complète : justificatifs, courrier à la bonne caisse, délais d'instruction, recours CRA et tribunal, avant comme après la liquidation.",
    tag: "Démarches",
  },
  {
    href: "/guides/lire-son-ris",
    titre: "Comment lire et vérifier son relevé de carrière (RIS)",
    desc: "Guide pas-à-pas en 6 étapes : téléchargement sur info-retraite.fr, repérage des anomalies, procédure de rectification.",
    tag: "Méthode",
  },
  {
    href: "/guides/simuler-retraite",
    titre: "Comment simuler sa retraite : outils, limites et pièges",
    desc: "Simulateurs officiels, estimation indicative globale : ce qu'ils calculent, pourquoi une simulation sur un relevé erroné donne un résultat faux.",
    tag: "Méthode",
  },
  {
    href: "/guides/checklist-depart",
    titre: "Checklist avant de partir à la retraite",
    desc: "De 12 mois avant le départ au dépôt du dossier : relevé, trimestres, majorations, date optimale, réversion. Tout vérifier avant de signer.",
    tag: "Checklist",
  },
  {
    href: "/guides/verifier-points-agirc-arrco",
    titre: "Vérifier et recalculer ses points AGIRC-ARRCO",
    desc: "Lire son relevé complémentaire, recalculer sa pension (point × 1,4386 €) et repérer les points manquants ou mal reportés depuis la fusion de 2019.",
    tag: "Méthode",
  },
  {
    href: "/guides/age-depart-retraite-2026",
    titre: "Âge de départ en retraite 2026",
    desc: "Tables complètes par année de naissance : régime général, fonctionnaires sédentaires et actifs, trimestres requis.",
    tag: "Référence",
  },
  {
    href: "/guides/modele-lettre-caisse",
    titre: "4 modèles de courrier à votre caisse de retraite",
    desc: "Modèles personnalisables : rectification trimestres, demande de relevé militaire, saisine CRA, rectification AGIRC-ARRCO.",
    tag: "Téléchargeable",
  },
];

const prochainement = [
  "Carrière mixte salarié/TNS : éviter les trous entre régimes",
  "Délais de correction par caisse et par type d'anomalie",
];

export default function GuidesPage() {
  return (
    <div className="container-ed py-14">
      <RubriqueLabel>Rubrique · Guides pratiques</RubriqueLabel>
      <h1
        className="font-bold text-ink mt-5 mb-6"
        style={{ fontSize: "clamp(2.2rem, 4.2vw, 3rem)", lineHeight: 1.1 }}
      >
        Démarches <em>pas-à-pas</em>
      </h1>
      <p className="font-medium text-[1.15rem] text-ink-2 max-w-[720px] mb-12 leading-[1.55]">
        Checklists, méthodes et modèles de lettres : nos guides pratiques
        accompagnent les démarches concrètes, de la lecture du Relevé
        Individuel de Situation au dépôt du dossier de liquidation.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-14">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group block bg-paper border border-rule rounded-[20px] p-7 no-underline transition-all hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,44,44,0.08)]"
          >
            <div className="inline-block bg-emerald-light text-emerald px-3 py-1 rounded-pill text-[0.72rem] font-bold tracking-wider uppercase mb-4">
              {g.tag}
            </div>
            <h3 className="text-[1.2rem] text-ink font-bold mb-2.5 leading-[1.3] group-hover:text-emerald transition-colors">
              {g.titre}
            </h3>
            <p className="text-[0.92rem] text-ink-2 leading-[1.55] mb-5">
              {g.desc}
            </p>
            <span className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-emerald">
              Lire le guide <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="bg-bg-2 rounded-2xl p-7">
        <div className="rubrique-label mb-4">Prochainement</div>
        <p className="text-[0.98rem] text-ink-2 mb-4 leading-[1.55]">
          D'autres guides sont en cours de rédaction et seront publiés au cours
          des prochaines semaines :
        </p>
        <ul className="list-none p-0 m-0 grid md:grid-cols-2 gap-2 text-[0.92rem] text-ink-2">
          {prochainement.map((p) => (
            <li key={p} className="flex gap-2 items-start">
              <span className="text-emerald font-bold">›</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
