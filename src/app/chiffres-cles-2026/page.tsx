import Link from "next/link";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";
import { JsonLd } from "@/components/seo/JsonLd";
import { BASE_URL } from "@/lib/schema";

export const metadata = {
  title: "Chiffres-clés retraite 2026 — PASS, points, âges, décote, minimum contributif",
  description:
    "Toutes les valeurs officielles 2026 de la retraite française : PASS, valeurs de points AGIRC-ARRCO, CIPAV, IRCANTEC, âges de départ par génération, minimum contributif, règles de décote.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Chiffres-clés 2026",
      item: BASE_URL + "/chiffres-cles-2026",
    },
  ],
};

const tocLinks = [
  { href: "#generaux", label: "Chiffres de référence" },
  { href: "#ages", label: "Âges de départ par génération" },
  { href: "#duree", label: "Durée d'assurance requise" },
  { href: "#taux", label: "Taux, décote, surcote" },
  { href: "#minimum", label: "Minimum contributif" },
  { href: "#points", label: "Valeurs des points par régime" },
  { href: "#majorations", label: "Majorations pour enfants" },
  { href: "#reversion", label: "Pension de réversion" },
  { href: "#rachat", label: "Rachat de trimestres" },
];

function SectionTitle({ id, kicker, titre }: { id: string; kicker?: string; titre: string }) {
  return (
    <div className="mb-6" id={id}>
      {kicker ? (
        <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-2">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-[1.6rem] font-bold text-ink -tracking-[0.02em] leading-[1.2]">
        {titre}
      </h2>
    </div>
  );
}

function KVRow({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="flex justify-between items-baseline py-3 border-b border-rule last:border-0 gap-4">
      <div>
        <div className="text-[0.95rem] text-ink font-medium">{label}</div>
        {note ? <div className="text-[0.78rem] text-muted mt-0.5">{note}</div> : null}
      </div>
      <div className="text-[1rem] font-bold text-ink tabular-nums whitespace-nowrap">
        {value}
      </div>
    </div>
  );
}

export default function ChiffresCles2026() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <div className="container-ed pt-10 pb-12">
        <nav
          aria-label="Fil d'Ariane"
          className="text-[0.85rem] text-muted mb-6 font-medium"
        >
          <Link href="/" className="no-underline text-muted hover:text-emerald">
            Accueil
          </Link>
          <span className="mx-2">›</span>
          <span>Chiffres-clés 2026</span>
        </nav>

        <header className="mb-10 max-w-[900px]">
          <RubriqueLabel>Page de référence</RubriqueLabel>
          <h1
            className="font-bold text-ink mt-5 leading-[1.05] -tracking-[0.02em]"
            style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)" }}
          >
            Chiffres-clés de la retraite <em>2026</em>
          </h1>
          <p className="mt-5 text-[1.15rem] text-ink-2 leading-[1.6]">
            Toutes les valeurs officielles applicables en 2026 : PASS, valeurs
            de points par régime, âges de départ par génération, minimum
            contributif, règles de décote et de surcote. Référentiel mis à
            jour d'après le Mémento de la Protection Sociale 2026 et les
            décrets publiés au Journal officiel.
          </p>

          <div className="mt-7 p-5 bg-sun-light border border-sun/30 rounded-2xl">
            <div className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-sun-dark mb-2">
              Réforme 2023 suspendue
            </div>
            <p className="text-[0.98rem] text-ink-2 leading-[1.55]">
              L'entrée en vigueur progressive de la réforme des retraites de
              2023 est <strong>suspendue à compter du 1ᵉʳ septembre 2026</strong>.
              Les tableaux ci-dessous reflètent cette suspension. L'âge
              maximum reste à <strong>64 ans</strong> pour les assurés nés à
              partir de 1969 et la durée maximum à <strong>172 trimestres</strong>{" "}
              pour les assurés nés à compter de 1966.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_3fr] gap-10 items-start">
          {/* SOMMAIRE */}
          <aside className="sticky top-24 bg-bg-2 rounded-2xl p-6 max-lg:static">
            <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-4">
              Sommaire
            </div>
            <ul className="list-none p-0 m-0 space-y-2.5">
              {tocLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.92rem] text-ink-2 no-underline hover:text-emerald font-medium leading-snug block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENU */}
          <div className="max-w-none">
            {/* 1. GÉNÉRAUX */}
            <section className="mb-12">
              <SectionTitle
                id="generaux"
                kicker="1 · Référentiels de calcul"
                titre="Les chiffres de base"
              />
              <div className="bg-paper border border-rule rounded-2xl p-6 lg:p-8">
                <KVRow label="PASS annuel" value="48 060 €" note="Plafond annuel de la Sécurité sociale" />
                <KVRow label="PMSS mensuel" value="4 005 €" note="Plafond mensuel de la Sécurité sociale" />
                <KVRow label="SMIC horaire brut" value="12,02 €" note="Au 1ᵉʳ janvier 2025 — référence pour la validation des trimestres" />
                <KVRow label="Salaire validant 1 trimestre" value="1 803 €" note="150 × SMIC horaire" />
                <KVRow label="Salaire validant 4 trimestres" value="7 212 €" note="600 × SMIC horaire" />
                <KVRow label="Assiette minimale TNS" value="450 × SMIC horaire" note="Valide 3 trimestres (CNAVPL base, RCI)" />
                <KVRow label="Capital décès TNS obligatoire" value="9 612 €" note="20 % du PASS 2026" />
              </div>
            </section>

            {/* 2. ÂGES DE DÉPART */}
            <section className="mb-12">
              <SectionTitle
                id="ages"
                kicker="2 · Âge légal et taux plein automatique"
                titre="Âges de départ par année de naissance"
              />
              <p className="text-ink-2 mb-5 text-[0.98rem] leading-[1.55]">
                Applicable au régime général (CNAV), à la Sécurité sociale
                des indépendants, à la MSA salariés et exploitants, à la
                CNAVPL (libéraux hors avocats) et à la CNBF (avocats).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.95rem]">
                  <thead>
                    <tr className="bg-ink text-white">
                      <th className="p-3 text-left font-semibold">Année de naissance</th>
                      <th className="p-3 text-left font-semibold">Âge légal</th>
                      <th className="p-3 text-left font-semibold">Taux plein automatique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Entre le 01/01/1955 et le 31/08/1961", "62 ans", "67 ans"],
                      ["Du 01/09/1961 au 31/12/1961", "62 ans et 3 mois", "67 ans"],
                      ["1962", "62 ans et 6 mois", "67 ans"],
                      ["Du 01/01/1963 au 31/03/1965", "62 ans et 9 mois", "67 ans"],
                      ["Du 01/04/1965 au 31/12/1965", "63 ans", "67 ans"],
                      ["1966", "63 ans et 3 mois", "67 ans"],
                      ["1967", "63 ans et 6 mois", "67 ans"],
                      ["1968", "63 ans et 9 mois", "67 ans"],
                      ["À compter de 1969", "64 ans", "67 ans"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-rule">
                        <td className="p-3">{row[0]}</td>
                        <td className="p-3 font-semibold">{row[1]}</td>
                        <td className="p-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. DURÉE D'ASSURANCE */}
            <section className="mb-12">
              <SectionTitle
                id="duree"
                kicker="3 · Durée de référence"
                titre="Durée d'assurance requise pour le taux plein"
              />
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.95rem]">
                  <thead>
                    <tr className="bg-ink text-white">
                      <th className="p-3 text-left font-semibold">Année de naissance</th>
                      <th className="p-3 text-left font-semibold">Trimestres requis</th>
                      <th className="p-3 text-left font-semibold">Équivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1960", "167", "41 ans 9 mois"],
                      ["Du 01/01/1961 au 31/08/1961", "168", "42 ans"],
                      ["Du 01/09/1961 au 31/12/1962", "169", "42 ans 3 mois"],
                      ["Du 01/01/1963 au 31/03/1965", "170", "42 ans 6 mois"],
                      ["Du 01/04/1965 au 31/12/1965", "171", "42 ans 9 mois"],
                      ["À compter de 1966", "172", "43 ans"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-rule">
                        <td className="p-3">{row[0]}</td>
                        <td className="p-3 font-semibold">{row[1]}</td>
                        <td className="p-3 text-muted">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. TAUX, DÉCOTE, SURCOTE */}
            <section className="mb-12">
              <SectionTitle
                id="taux"
                kicker="4 · Règles de calcul"
                titre="Taux de pension, décote et surcote"
              />
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-paper border border-rule rounded-2xl p-6">
                  <div className="text-[0.72rem] font-bold uppercase tracking-wider text-emerald mb-2">
                    Taux plein
                  </div>
                  <div className="text-[1.8rem] font-extrabold text-ink -tracking-[0.02em]">
                    50 %
                  </div>
                  <p className="text-[0.88rem] text-ink-2 mt-2 leading-[1.5]">
                    du salaire annuel moyen plafonné au PASS, lorsque la
                    durée de référence est atteinte ou à l'âge du taux plein
                    automatique.
                  </p>
                </div>
                <div className="bg-paper border border-rule rounded-2xl p-6">
                  <div className="text-[0.72rem] font-bold uppercase tracking-wider text-warn mb-2">
                    Décote
                  </div>
                  <div className="text-[1.8rem] font-extrabold text-ink -tracking-[0.02em]">
                    −0,625 %
                  </div>
                  <p className="text-[0.88rem] text-ink-2 mt-2 leading-[1.5]">
                    par trimestre manquant, appliquée au taux de 50 %. Plafond
                    de 20 trimestres. Le plus petit nombre de trimestres
                    manquants (âge ou durée) est retenu.
                  </p>
                </div>
                <div className="bg-paper border border-rule rounded-2xl p-6">
                  <div className="text-[0.72rem] font-bold uppercase tracking-wider text-emerald mb-2">
                    Surcote
                  </div>
                  <div className="text-[1.8rem] font-extrabold text-ink -tracking-[0.02em]">
                    +1,25 %
                  </div>
                  <p className="text-[0.88rem] text-ink-2 mt-2 leading-[1.5]">
                    par trimestre cotisé au-delà du taux plein et de l'âge
                    légal. Surcote anticipée de +1,25 %/trim (max 5 %) pour
                    les mères ayant eu au moins un enfant.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. MINIMUM CONTRIBUTIF */}
            <section className="mb-12">
              <SectionTitle
                id="minimum"
                kicker="5 · Pension plancher régime général"
                titre="Minimum contributif 2026"
              />
              <div className="bg-paper border border-rule rounded-2xl p-6 lg:p-8">
                <KVRow label="Minimum entier" value="9 075,48 € / an" note="Proratisé selon la durée d'assurance au régime général" />
                <KVRow label="Majoration (≥ 120 trim cotisés)" value="1 771,68 € / an" note="Proratisée selon la durée d'assurance cotisée" />
                <KVRow label="Plafond total des pensions" value="16 930,68 € / an" note="Ensemble des pensions personnelles (base + complé)" />
              </div>
              <p className="text-[0.88rem] text-muted mt-3 leading-[1.55]">
                Conditions cumulatives : retraite de base liquidée au taux
                plein · ensemble des pensions liquidées · total des pensions
                personnelles inférieur au plafond.
              </p>
            </section>

            {/* 6. POINTS PAR RÉGIME */}
            <section className="mb-12">
              <SectionTitle
                id="points"
                kicker="6 · Régimes à points"
                titre="Valeurs des points retraite par régime"
              />
              <p className="text-ink-2 mb-5 text-[0.98rem] leading-[1.55]">
                La pension se calcule par : <strong>nombre de points × valeur
                de service × coefficient de liquidation</strong>. Les valeurs
                indiquées ci-dessous sont celles applicables en 2026 (ou à
                défaut 2025, dernière valeur connue).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.92rem]">
                  <thead>
                    <tr className="bg-ink text-white">
                      <th className="p-3 text-left font-semibold">Régime</th>
                      <th className="p-3 text-left font-semibold">Affiliés</th>
                      <th className="p-3 text-left font-semibold">Prix d'achat</th>
                      <th className="p-3 text-left font-semibold">Valeur service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AGIRC-ARRCO", "Salariés du privé", "20,1877 €", "1,4386 €"],
                      ["IRCANTEC", "Agents non titulaires de l'État", "5,787 €", "0,56053 €"],
                      ["RAFP", "Fonctionnaires (régime additionnel)", "1,4596 €", "0,05671 €"],
                      ["CNAVPL (base)", "Libéraux (hors avocats)", "—", "0,6599 €"],
                      ["CIPAV", "Libéraux non réglementés", "47,40 € (2025)", "2,89 € (2025)"],
                      ["CARPIMKO", "Auxiliaires médicaux libéraux", "—", "21,28 € (2025)"],
                      ["RCI", "Artisans et commerçants", "21,532 € (2025)", "1,335 € (2025)"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-rule">
                        <td className="p-3 font-semibold">{row[0]}</td>
                        <td className="p-3 text-ink-2">{row[1]}</td>
                        <td className="p-3 tabular-nums">{row[2]}</td>
                        <td className="p-3 tabular-nums">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[0.85rem] text-muted mt-3 leading-[1.55]">
                <strong>Taux d'appel AGIRC-ARRCO 2026</strong> : 127 % (la
                cotisation productive de points se calcule en divisant le
                taux appelé par 1,27). Coefficient de conversion AGIRC → ARRCO
                (01/01/2019) : 0,347791548.
              </p>
            </section>

            {/* 7. MAJORATIONS ENFANTS */}
            <section className="mb-12">
              <SectionTitle
                id="majorations"
                kicker="7 · Bonus familial"
                titre="Majoration pour enfants selon le régime"
              />
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.92rem]">
                  <thead>
                    <tr className="bg-ink text-white">
                      <th className="p-3 text-left font-semibold">Régime</th>
                      <th className="p-3 text-left font-semibold">Majoration</th>
                      <th className="p-3 text-left font-semibold">Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Régime général (CNAV)", "+10 %", "3 enfants et plus"],
                      ["AGIRC-ARRCO (points post-2012)", "+10 %, plafond 2 367,48 €", "3 enfants et plus"],
                      ["AGIRC-ARRCO (points 1999-2011)", "+5 %", "3 enfants et plus"],
                      ["IRCANTEC", "10 à 30 % (3 à 7+ enfants)", "Barème progressif"],
                      ["Fonctionnaire", "+10 %", "3 enfants et plus"],
                      ["CNAVPL", "+10 %", "3 enfants et plus"],
                      ["CIPAV", "+10 %", "3 enfants et plus"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-rule">
                        <td className="p-3 font-semibold">{row[0]}</td>
                        <td className="p-3 tabular-nums">{row[1]}</td>
                        <td className="p-3 text-ink-2">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[0.85rem] text-muted mt-3 leading-[1.55]">
                <strong>Majoration de durée d'assurance (MDA)</strong> :
                8 trimestres par enfant au régime général (4 maternité/adoption
                + 4 éducation partageables). <strong>Surcote anticipée femmes</strong> :
                +1,25 %/trim (max 5 %) pour au moins 1 enfant et carrière
                complète avant l'âge légal.
              </p>
            </section>

            {/* 8. RÉVERSION */}
            <section className="mb-12">
              <SectionTitle
                id="reversion"
                kicker="8 · Droits du conjoint survivant"
                titre="Pension de réversion par régime"
              />
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.9rem]">
                  <thead>
                    <tr className="bg-ink text-white">
                      <th className="p-3 text-left font-semibold">Régime</th>
                      <th className="p-3 text-left font-semibold">Taux</th>
                      <th className="p-3 text-left font-semibold">Âge min</th>
                      <th className="p-3 text-left font-semibold">Cond. ressources</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Régime général / SSI / MSA", "54 %", "55 ans", "Oui (24 710,40 €/an en 2025)"],
                      ["AGIRC-ARRCO", "60 %", "55 ans", "Non"],
                      ["IRCANTEC", "50 %", "50 ans", "Non"],
                      ["Fonctionnaire", "50 %", "Aucune", "Non"],
                      ["RAFP", "50 %", "Aucune", "Non"],
                      ["CNAVPL (base libéraux)", "54 %", "55 ans", "Oui"],
                      ["CIPAV (complé)", "60 %", "62 ans", "Non"],
                      ["CARPIMKO", "60 %", "65 ans (60 si inapte)", "Non"],
                      ["RCI (artisans/commerçants)", "60 %", "55 ans", "Oui (2 PASS)"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-rule">
                        <td className="p-3 font-semibold">{row[0]}</td>
                        <td className="p-3 tabular-nums">{row[1]}</td>
                        <td className="p-3">{row[2]}</td>
                        <td className="p-3 text-ink-2">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[0.85rem] text-muted mt-3 leading-[1.55]">
                Dans tous les régimes : <strong>mariage obligatoire</strong>,
                le PACS n'ouvre pas droit à réversion. Les règles varient
                ensuite selon le régime (durée minimum, enfants issus du
                mariage, etc.).
              </p>
            </section>

            {/* 9. RACHAT DE TRIMESTRES */}
            <section className="mb-12">
              <SectionTitle
                id="rachat"
                kicker="9 · Dispositif Fillon"
                titre="Rachat de trimestres 2026"
              />
              <div className="bg-paper border border-rule rounded-2xl p-6 lg:p-8 mb-4">
                <KVRow label="Nombre maximum de trimestres rachetables" value="12" note="Études supérieures diplômantes ou années incomplètes, cumul plafonné" />
                <KVRow label="Option 1 — taux seul" value="Moins cher" note="Améliore uniquement le taux de liquidation" />
                <KVRow label="Option 2 — taux + durée" value="Plus cher" note="Améliore simultanément le taux et le pro-rata (choix le plus fréquent)" />
                <KVRow label="Déductibilité fiscale" value="Oui, 100 %" note="Du revenu imposable de l'année de versement" />
              </div>
              <p className="text-[0.92rem] text-ink-2 leading-[1.55]">
                Le barème officiel CNAV varie selon l'âge et le revenu
                imposable. Un <Link href="/outils/simulateur-rachat">simulateur
                de rentabilité</Link> permet d'évaluer le seuil de rentabilité
                et de comparer avec un Plan Épargne Retraite équivalent avant
                de se décider.
              </p>
            </section>

            {/* SOURCES */}
            <section className="bg-bg-2 rounded-2xl p-7 mt-10">
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-2">
                Sources & mise à jour
              </div>
              <h3 className="text-[1.1rem] font-bold text-ink mb-3">
                Où vérifier ces chiffres
              </h3>
              <ul className="list-none p-0 m-0 space-y-2 text-[0.92rem] text-ink-2">
                <li>
                  <strong>Mémento de la Protection Sociale 2026</strong> —
                  publication annuelle de référence compilant les chiffres
                  officiels de l'ensemble des régimes.
                </li>
                <li>
                  <strong>Décret PASS annuel</strong> — publié au Journal
                  officiel fin décembre.
                </li>
                <li>
                  <strong>AGIRC-ARRCO, IRCANTEC, CIPAV…</strong> — accords
                  paritaires de revalorisation publiés chaque 1ᵉʳ novembre.
                </li>
                <li>
                  <strong>CNAV / Info-retraite.fr</strong> — règles officielles
                  de calcul et simulateurs.
                </li>
                <li>
                  <strong>Cour des comptes</strong> — rapports annuels sur la
                  Sécurité sociale (contrôle des pensions).
                </li>
              </ul>
              <p className="text-[0.82rem] text-muted mt-4 italic">
                Dernière mise à jour : avril 2026. Cette page est révisée
                chaque trimestre et à chaque publication d'un nouveau décret
                réglementaire.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
