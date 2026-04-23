import Link from "next/link";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Contact — rédaction erreur-retraite.fr",
  description:
    "Contactez la rédaction d'erreur-retraite.fr : signalement d'erreur, suggestion de sujet, question générale sur la retraite, partenariat.",
};

const channels = [
  {
    label: "Signalement d'erreur ou imprécision",
    desc: "Un chiffre qui semble incorrect, une règle mal expliquée, un lien cassé : merci de nous l'indiquer avec un maximum de contexte.",
    email: "contact@competence-retraite.fr",
    delai: "Réponse sous 3 jours ouvrés",
  },
  {
    label: "Suggestion de sujet éditorial",
    desc: "Une anomalie sur laquelle nous n'avons pas encore publié ? Une question récurrente de votre entourage ? Nous lisons toutes les suggestions.",
    email: "contact@competence-retraite.fr",
    delai: "Accusé de réception sous 5 jours",
  },
  {
    label: "Demande d'audit personnalisé",
    desc: "Pour les situations complexes (TNS, expatriation, carrière mixte), l'audit humain est assuré par Compétence Retraite.",
    href: "https://competence-retraite.fr",
    cta: "Accéder à Compétence Retraite →",
  },
  {
    label: "Diagnostic en ligne rapide",
    desc: "Pour un contrôle express de votre relevé de carrière, le service partenaire SmartRetraite offre un diagnostic automatisé gratuit.",
    href: "https://smartretraite.fr/analyse",
    cta: "Lancer un diagnostic →",
  },
];

export default function ContactPage() {
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
        <span>Contact</span>
      </nav>

      <header className="mb-10 max-w-[760px]">
        <RubriqueLabel>Contact</RubriqueLabel>
        <h1
          className="font-bold text-ink mt-5 leading-[1.1] -tracking-[0.02em]"
          style={{ fontSize: "clamp(2.2rem, 4vw, 2.8rem)" }}
        >
          Écrire à la rédaction
        </h1>
        <p className="mt-4 text-[1.1rem] text-ink-2 leading-[1.55]">
          erreur-retraite.fr est un site d'information éditorial. Nous
          répondons aux signalements, suggestions de sujet et questions
          générales. Pour un examen personnalisé de votre situation, nos
          services partenaires ci-dessous sont mieux armés.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {channels.map((c) => (
          <article
            key={c.label}
            className="bg-paper border border-rule rounded-2xl p-7 flex flex-col"
          >
            <h2 className="text-[1.15rem] font-bold text-ink mb-3">{c.label}</h2>
            <p className="text-[0.95rem] text-ink-2 leading-[1.55] mb-5 flex-1">
              {c.desc}
            </p>
            {c.email ? (
              <div>
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center gap-2 bg-emerald text-white no-underline px-5 py-3 rounded-pill font-bold text-[0.9rem] hover:bg-emerald-2 transition-colors"
                >
                  {c.email} →
                </a>
                {c.delai ? (
                  <div className="text-[0.78rem] text-muted mt-2">{c.delai}</div>
                ) : null}
              </div>
            ) : (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-white no-underline px-5 py-3 rounded-pill font-bold text-[0.9rem] hover:bg-emerald transition-colors self-start"
              >
                {c.cta}
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="bg-bg-2 rounded-2xl p-7">
        <h3 className="text-[1.05rem] font-bold text-ink mb-3">
          Informations sur l'éditeur
        </h3>
        <div className="text-[0.92rem] text-ink-2 leading-[1.6]">
          <p>
            <strong>Compétence Retraite EURL</strong> — SIREN 980 857 488 —
            Siège social en France
          </p>
          <p className="mt-2">
            <strong>Directeur de publication :</strong> Claude-Henri Poitou
          </p>
          <p className="mt-2">
            <strong>Hébergeur :</strong> Vercel Inc. — 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA
          </p>
          <p className="mt-3 text-muted text-[0.85rem]">
            Voir également nos{" "}
            <Link href="/mentions-legales" className="text-emerald">
              mentions légales
            </Link>{" "}
            et notre{" "}
            <Link href="/confidentialite" className="text-emerald">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
