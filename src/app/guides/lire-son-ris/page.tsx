import Link from "next/link";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Lire son relevé de carrière (RIS) : le guide pour repérer les erreurs",
  description:
    "Téléchargez votre relevé sur info-retraite.fr et vérifiez-le ligne par ligne : notre guide en 6 étapes pour repérer les trimestres et salaires manquants — et les faire corriger.",
};

const etapes = [
  {
    titre: "Connectez-vous sur info-retraite.fr",
    desc: "Portail officiel commun à tous les régimes français (CNAV, AGIRC-ARRCO, SSI, CIPAV, MSA, SRE, CNRACL, etc.). Authentification via FranceConnect (impots.gouv, ameli, La Poste…) en quelques secondes.",
    astuce: "Le service est gratuit et n'a aucune vocation commerciale. Méfiez-vous des sites d'imitation payants.",
  },
  {
    titre: "Téléchargez votre RIS (Relevé Individuel de Situation)",
    desc: "Dans l'espace personnel, cliquez sur « Mon relevé de carrière ». Le document PDF consolide toutes vos périodes d'activité, par régime et par année. Il est utilisable à tout âge (même avant 35 ans).",
    astuce: "Ce document est actualisé automatiquement chaque année à partir des données des caisses. Un décalage de 6 à 12 mois est normal pour l'année en cours.",
  },
  {
    titre: "Vérifiez la cohérence année par année",
    desc: "Pour chaque année depuis votre premier emploi : contrôlez que les trimestres validés correspondent à votre activité réelle, et que le salaire ou le revenu reporté correspond à votre bulletin de salaire ou votre avis d'imposition.",
    astuce: "Rassemblez en amont : bulletins de salaire (ou à défaut avis d'imposition), livret militaire, attestations France Travail, attestations employeur.",
  },
  {
    titre: "Identifiez les lignes manquantes ou erronées",
    desc: "Les anomalies typiques : trimestres de service militaire absents, périodes de chômage tronquées, salaires sous-reportés par un employeur, années de début de carrière avec moins de 4 trimestres validés malgré une activité à temps plein.",
    astuce: "Attention particulière aux périodes 2001, 2008 et 2014 (migrations informatiques) et aux périodes antérieures à 2000 (archives papier non numérisées).",
  },
  {
    titre: "Contactez la caisse par courrier recommandé",
    desc: "Pour chaque anomalie, adressez un courrier à la caisse compétente (CARSAT pour le régime général, AGIRC-ARRCO pour la complémentaire, SSI/CIPAV pour les indépendants). Joignez les copies des justificatifs — jamais les originaux.",
    astuce: "Conservez l'accusé de réception du courrier recommandé : c'est votre preuve d'envoi en cas de contestation ultérieure.",
  },
  {
    titre: "Patientez 3 à 6 mois, puis relancez",
    desc: "Le délai d'instruction moyen est de 3 à 6 mois. En l'absence de réponse après 4 mois, adressez un courrier de relance. En cas de refus ou de silence prolongé, saisissez la Commission de recours amiable (CRA) dans les 2 mois.",
    astuce: "La rectification d'un relevé est possible à tout âge depuis 2021. Un délai de prescription de 5 ans s'applique après la liquidation pour toute demande de révision du montant perçu.",
  },
];

export default function LireSonRisPage() {
  return (
    <div className="container-ed pt-10 pb-12">
      <nav
        aria-label="Fil d'Ariane"
        className="text-[0.85rem] text-muted mb-6 font-medium"
      >
        <Link href="/" className="no-underline text-muted hover:text-emerald">
          Accueil
        </Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="no-underline text-muted hover:text-emerald">
          Guides pratiques
        </Link>
        <span className="mx-2">›</span>
        <span>Lire son RIS</span>
      </nav>

      <header className="mb-10 max-w-[760px]">
        <RubriqueLabel>Guide pas-à-pas</RubriqueLabel>
        <h1
          className="font-bold text-ink mt-5 leading-[1.05] -tracking-[0.02em]"
          style={{ fontSize: "clamp(2.2rem, 4vw, 2.8rem)" }}
        >
          Comment lire et vérifier votre <em>relevé de carrière</em>
        </h1>
        <p className="mt-4 text-[1.1rem] text-ink-2 leading-[1.6]">
          Le Relevé Individuel de Situation (RIS) consolide l'ensemble des
          droits retraite acquis auprès des quarante-deux régimes français.
          Une pension sur sept présentant au moins une anomalie selon la
          Cour des comptes, sa vérification est une étape incontournable —
          deux ans avant le départ idéalement, et à tout âge en cas de
          doute.
        </p>
      </header>

      <div className="mb-10">
        {etapes.map((etape, i) => (
          <article
            key={i}
            className="relative pl-16 pb-10 last:pb-0 border-l-2 border-rule last:border-transparent ml-4"
          >
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-emerald text-white flex items-center justify-center font-extrabold text-[1rem] shadow-md">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h2 className="text-[1.3rem] font-bold text-ink mb-3 -tracking-[0.015em]">
              {etape.titre}
            </h2>
            <p className="text-[1rem] text-ink-2 leading-[1.65] mb-4">
              {etape.desc}
            </p>
            <div className="bg-sun-light border-l-4 border-sun rounded-r-xl px-5 py-3.5 text-[0.92rem] text-ink leading-[1.55]">
              <strong className="text-sun-dark font-bold">Astuce pratique —</strong>{" "}
              {etape.astuce}
            </div>
          </article>
        ))}
      </div>

      <section className="bg-bg-2 rounded-2xl p-7 mb-10">
        <h3 className="text-[1.15rem] font-bold text-ink mb-3">
          Pour aller plus vite : le diagnostic automatisé
        </h3>
        <p className="text-[0.95rem] text-ink-2 leading-[1.6] mb-4">
          Le service partenaire{" "}
          <a
            href="https://smartretraite.fr/analyse"
            target="_blank"
            rel="noopener noreferrer"
          >
            SmartRetraite
          </a>{" "}
          effectue un passage au crible de votre RIS en 5 minutes et produit
          un rapport hiérarchisant les anomalies détectées, avec les
          démarches recommandées.
        </p>
        <a
          href="https://smartretraite.fr/analyse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald text-white no-underline px-6 py-3 rounded-pill font-bold text-[0.92rem] hover:bg-emerald-2 transition-colors"
        >
          Lancer un diagnostic gratuit →
        </a>
      </section>

      <div className="grid md:grid-cols-3 gap-4">
        <Link
          href="/guides/modele-lettre-caisse"
          className="block bg-paper border border-rule rounded-2xl p-5 no-underline hover:border-emerald transition-all"
        >
          <h4 className="text-[1rem] font-bold text-ink mb-1">
            Modèles de courrier à la caisse
          </h4>
          <p className="text-[0.85rem] text-muted">
            4 lettres types à personnaliser
          </p>
        </Link>
        <Link
          href="/anomalies"
          className="block bg-paper border border-rule rounded-2xl p-5 no-underline hover:border-emerald transition-all"
        >
          <h4 className="text-[1rem] font-bold text-ink mb-1">
            Les 8 familles d'anomalies
          </h4>
          <p className="text-[0.85rem] text-muted">
            Les erreurs les plus fréquentes
          </p>
        </Link>
        <Link
          href="/chiffres-cles-2026"
          className="block bg-paper border border-rule rounded-2xl p-5 no-underline hover:border-emerald transition-all"
        >
          <h4 className="text-[1rem] font-bold text-ink mb-1">
            Chiffres-clés 2026
          </h4>
          <p className="text-[0.85rem] text-muted">
            Toutes les valeurs officielles
          </p>
        </Link>
      </div>
    </div>
  );
}
