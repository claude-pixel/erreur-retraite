import Link from "next/link";
import { articles } from "@/lib/articles";
import { AnomalieCard } from "@/components/cards/AnomalieCard";
import { CTASmartRetraite } from "@/components/cta/CTASmartRetraite";
import { PercentDownIcon, CoinsEuroIcon, MissingYearIcon } from "@/components/icons/ToolIcons";

const hero = articles[0];

export default function Home() {
  return (
    <>
      {/* WELCOME HERO */}
      <section className="pt-16 pb-8">
        <div className="container-ed text-center">
          <h1
            className="text-ink leading-[1.1] mx-auto max-w-[900px] mb-5 font-bold -tracking-[0.02em]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Votre pension mérite <em>de ne pas être amputée</em>.
          </h1>
          <p className="text-[1.2rem] text-ink-2 max-w-[700px] mx-auto mb-10 leading-[1.5]">
            Une pension sur sept est mal calculée en France. Nous vous aidons
            à repérer les erreurs, à comprendre vos droits et à les faire
            valoir — en quelques minutes, gratuitement.
          </p>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-4 mt-10 text-left max-lg:grid-cols-1">
            {/* Hero big card */}
            <article className="relative bg-emerald text-white rounded-[20px] p-8 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,44,44,0.08)]">
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none"
              />
              <span className="relative inline-flex items-center gap-2 bg-white/15 text-white px-3.5 py-1.5 rounded-pill text-[0.78rem] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-sun" />
                Sujet de la semaine
              </span>
              <h2 className="relative text-[1.75rem] leading-[1.2] font-bold text-white mb-3.5">
                <Link href={`/${hero.section}/${hero.slug}`} className="text-white no-underline hover:text-sun-light">
                  Trimestres manquants : récupérez les années oubliées
                </Link>
              </h2>
              <p className="relative text-white/90 text-[0.98rem] mb-6 leading-[1.55]">
                Service militaire, chômage, intérim : l'anomalie la plus
                fréquente coûte en moyenne 790 €/an aux assurés concernés.
                On vous explique comment agir.
              </p>
              <Link
                href={`/${hero.section}/${hero.slug}`}
                className="relative inline-flex items-center gap-2.5 bg-sun text-ink no-underline px-6 py-3 rounded-pill font-bold text-[0.93rem] hover:bg-white transition-colors"
              >
                Lire le dossier →
              </Link>
            </article>

            {/* Alt card 1 */}
            <article className="bg-bg-2 rounded-[20px] p-8 transition-transform hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,44,44,0.08)]">
              <div className="kicker-text mb-3.5">Conseil pratique</div>
              <h3 className="text-[1.2rem] text-ink leading-[1.25] font-bold mb-2.5">
                Vérifiez votre relevé en 5 minutes
              </h3>
              <p className="text-[0.9rem] text-ink-2 leading-[1.55] mb-4">
                Comparez votre RIS à vos bulletins avec notre méthode
                pas-à-pas. Repérez les lignes manquantes d'un coup d'œil.
              </p>
              <Link href="/guides" className="no-underline text-[0.88rem] font-semibold text-emerald inline-flex gap-1.5 group">
                Voir le guide <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>

            {/* Alt card 2 */}
            <article className="bg-bg-2 rounded-[20px] p-8 transition-transform hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,44,44,0.08)]">
              <div className="kicker-text mb-3.5">Simulateur phare</div>
              <h3 className="text-[1.2rem] text-ink leading-[1.25] font-bold mb-2.5">
                Combien une année oubliée vous coûte ?
              </h3>
              <p className="text-[0.9rem] text-ink-2 leading-[1.55] mb-4">
                Deux champs suffisent — votre pension estimée et votre âge
                de départ — pour obtenir la réponse en dix secondes.
              </p>
              <Link href="/outils" className="no-underline text-[0.88rem] font-semibold text-emerald inline-flex gap-1.5 group">
                Lancer le calcul <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="bg-bg-2 border-y border-rule py-7 mt-10">
        <div className="container-ed grid lg:grid-cols-[auto_repeat(4,1fr)] gap-7 items-center max-lg:grid-cols-1">
          <div className="text-[0.9rem] text-ink-2 pr-6 border-r-2 border-emerald leading-[1.35] max-lg:border-r-0 max-lg:border-b-2 max-lg:pb-3.5 max-lg:pr-0">
            <strong className="block text-emerald font-extrabold text-[0.75rem] tracking-[0.12em] uppercase mb-1.5">
              Chiffres-clés 2026
            </strong>
            les données officielles que nous utilisons pour nos analyses
          </div>
          {[
            { v: "1 / 7", l: "pensions mal calculées" },
            { v: "790 €", l: "erreur annuelle moyenne" },
            { v: "48 060 €", l: "PASS 2026" },
            { v: "1,4386 €", l: "point AGIRC-ARRCO" },
          ].map((g) => (
            <div key={g.l}>
              <div className="text-[1.6rem] font-extrabold text-ink leading-none -tracking-[0.02em]">{g.v}</div>
              <div className="text-[0.8rem] text-muted mt-1">{g.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ANOMALIES TILES */}
      <section className="container-ed py-16">
        <div className="mb-9 text-center">
          <span className="rubrique-label mb-4">Anomalies</span>
          <h2 className="text-[2rem] leading-[1.15] text-ink font-bold -tracking-[0.02em] mt-3">
            Les <em>huit familles d'erreurs</em> les plus fréquentes
          </h2>
          <p className="text-ink-2 mt-2.5 text-[1.02rem] max-w-[640px] mx-auto">
            Chaque fiche est documentée, sourcée et accompagnée d'une
            procédure concrète pour agir.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {articles.map((a) => (
            <AnomalieCard
              key={a.slug}
              num={a.num ?? "01"}
              slug={a.slug}
              titre={a.titre.split(" : ")[0]}
              desc={a.chapo.length > 120 ? a.chapo.slice(0, 120) + "…" : a.chapo}
              impact={a.impact}
              href={`/${a.section}/${a.slug}`}
              tempsLecture={a.tempsLecture}
            />
          ))}
        </div>
      </section>

      {/* QUESTIONS PRATIQUES */}
      <section className="bg-bg-2 border-y border-rule py-16">
        <div className="container-ed">
          <div className="mb-9 text-center">
            <span className="rubrique-label mb-4">Questions fréquentes</span>
            <h2 className="text-[2rem] leading-[1.15] text-ink font-bold -tracking-[0.02em] mt-3">
              Les <em>réponses pratiques</em> à vos questions
            </h2>
            <p className="text-ink-2 mt-2.5 text-[1.02rem] max-w-[640px] mx-auto">
              Les interrogations les plus fréquentes, regroupées et traitées
              en moins de trois minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "Comment obtenir mon relevé de carrière ?", sub: "Guide pas-à-pas info-retraite.fr · 3 min", href: "/guides" },
              { q: "Puis-je racheter mes années d'études ?", sub: "Conditions, coûts, rentabilité · 5 min", href: "/anomalies/rachat-trimestres" },
              { q: "À quel âge puis-je partir au taux plein ?", sub: "Table 2026 par année de naissance · 2 min", href: "/lexique" },
              { q: "Comment se calcule ma pension AGIRC-ARRCO ?", sub: "Mécanisme des points, valeur 2026 · 4 min", href: "/anomalies/points-agirc-arrco" },
              { q: "Ma carrière à l'étranger sera-t-elle prise en compte ?", sub: "Règlement européen et conventions · 4 min", href: "/anomalies/carriere-etranger" },
              { q: "Comment contester une erreur de ma caisse ?", sub: "Modèle de lettre + voies de recours · 5 min", href: "/guides" },
            ].map((item) => (
              <Link
                key={item.q}
                href={item.href}
                className="group grid grid-cols-[48px_1fr_32px] gap-4 items-center bg-paper border border-rule rounded-2xl px-6 py-5 no-underline transition-all hover:border-emerald"
              >
                <div className="w-11 h-11 rounded-full bg-bg-2 text-emerald flex items-center justify-center font-extrabold text-[1.1rem] group-hover:bg-emerald group-hover:text-white transition-colors">
                  ?
                </div>
                <div>
                  <div className="text-[0.97rem] text-ink font-semibold leading-snug">{item.q}</div>
                  <div className="text-[0.82rem] text-muted font-normal mt-0.5">{item.sub}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-bg-2 text-ink-2 flex items-center justify-center group-hover:bg-emerald group-hover:text-white group-hover:translate-x-1 transition-all">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="container-ed py-16">
        <div className="mb-9 text-center">
          <span className="rubrique-label mb-4">Simulateurs gratuits</span>
          <h2 className="text-[2rem] leading-[1.15] text-ink font-bold -tracking-[0.02em] mt-3">
            Trois <em>calculateurs</em>, trois minutes, aucune inscription
          </h2>
          <p className="text-ink-2 mt-2.5 text-[1.02rem] max-w-[640px] mx-auto">
            Des outils simples pour répondre à une question concrète tout
            de suite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { bg: "bg-brick", color: "text-white", Icon: PercentDownIcon, title: "Simulateur de décote", desc: "Mesurez ce que vous perdez en partant avec des trimestres manquants.", inputs: "pension estimée · trimestres manquants · âge de départ", href: "/outils/simulateur-decote" },
            { bg: "bg-emerald", color: "text-white", Icon: CoinsEuroIcon, title: "Rentabilité d'un rachat", desc: "Coût, fiscalité, gain pension, comparaison PER : tout en un écran.", inputs: "âge · revenu · nb trimestres · pension estimée", href: "/outils/simulateur-rachat" },
            { bg: "bg-sun", color: "text-ink", Icon: MissingYearIcon, title: "Coût d'une année manquante", desc: "Un chiffre choc en dix secondes, avec des équivalences parlantes.", inputs: "pension estimée · durée de retraite", href: "/outils/combien-me-coute-une-annee-manquante" },
          ].map((t) => (
            <Link key={t.title} href={t.href} className="group block bg-paper border border-rule rounded-[20px] p-8 no-underline transition-all hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,44,44,0.08)]">
              <div className="flex justify-between items-start mb-5">
                <div className={`w-16 h-16 rounded-2xl ${t.bg} ${t.color} flex items-center justify-center`}>
                  <t.Icon size={36} />
                </div>
                <span className="bg-emerald-light text-emerald px-3 py-1.5 rounded-pill text-[0.72rem] font-bold">
                  Gratuit
                </span>
              </div>
              <h3 className="text-[1.25rem] text-ink font-bold mb-2.5">{t.title}</h3>
              <p className="text-[0.92rem] text-ink-2 leading-[1.55] mb-5">{t.desc}</p>
              <div className="bg-bg-2 rounded-xl p-3.5 mb-5 text-[0.78rem] text-muted">
                <strong className="text-ink-2 font-semibold">Entrées :</strong> {t.inputs}
              </div>
              <span className="inline-flex items-center gap-2.5 bg-ink text-white px-5 py-3 rounded-pill font-bold text-[0.9rem] group-hover:bg-emerald transition-colors">
                Lancer <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink text-white py-16">
        <div className="container-ed">
          <div className="grid lg:grid-cols-3 gap-7 items-stretch max-lg:grid-cols-1">
            <div className="pr-4">
              <div className="inline-block text-[0.72rem] font-bold tracking-[0.12em] uppercase text-sun mb-3">
                Vous avez besoin d'aide
              </div>
              <h2 className="text-white text-[1.8rem] leading-[1.2] font-bold mb-3.5 -tracking-[0.02em]">
                Deux <span className="text-sun">services complémentaires</span> pour aller plus loin
              </h2>
              <p className="text-white/75 text-[0.95rem] leading-[1.55]">
                Au-delà de l'information, deux partenaires associés au site
                vous accompagnent — en ligne ou humainement — dans la
                vérification et l'optimisation de votre retraite.
              </p>
            </div>

            <div className="bg-white/5 border border-white/15 rounded-2xl p-7 transition-all hover:bg-white/10 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald text-white flex items-center justify-center font-extrabold">
                  SR
                </div>
                <span className="text-[0.78rem] text-white/70">à partir de 0 €</span>
              </div>
              <h3 className="text-white text-[1.2rem] font-bold mb-2">SmartRetraite</h3>
              <p className="text-white/75 text-[0.88rem] leading-[1.55] mb-5">
                Diagnostic numérique rapide de votre relevé de carrière.
                Détection automatique des anomalies en cinq minutes.
              </p>
              <a
                href="https://smartretraite.fr/analyse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink no-underline px-5 py-2.5 rounded-pill font-bold text-[0.88rem] hover:bg-sun transition-colors"
              >
                Lancer un diagnostic →
              </a>
            </div>

            <div className="bg-white/5 border border-white/15 rounded-2xl p-7 transition-all hover:bg-white/10 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-sun text-ink flex items-center justify-center font-extrabold">
                  CR
                </div>
                <span className="text-[0.78rem] text-white/70">sur devis</span>
              </div>
              <h3 className="text-white text-[1.2rem] font-bold mb-2">Compétence Retraite</h3>
              <p className="text-white/75 text-[0.88rem] leading-[1.55] mb-5">
                Audit humain personnalisé pour les situations complexes :
                TNS, dirigeants, carrières internationales.
              </p>
              <a
                href="https://competence-retraite.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink no-underline px-5 py-2.5 rounded-pill font-bold text-[0.88rem] hover:bg-sun transition-colors"
              >
                Prendre rendez-vous →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-ed py-16">
        <CTASmartRetraite
          titre="Une <em>synthèse hebdo</em>, pas de spam, résiliation en un clic"
          description="Rejoignez 12 000 lecteurs qui reçoivent chaque lundi un tour d'horizon des évolutions réglementaires et des alertes anomalies."
          bouton="S'inscrire à la newsletter →"
          href="https://smartretraite.fr/analyse"
        />
      </section>
    </>
  );
}
