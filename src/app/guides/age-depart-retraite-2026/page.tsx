import Link from "next/link";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Âge de départ en retraite 2026 par année de naissance",
  description:
    "Tables complètes 2026 : âge légal et âge du taux plein automatique par génération, nombre de trimestres requis, spécificités carrière longue et catégories actives.",
};

export default function AgeDepart2026Page() {
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
        <span>Âge de départ 2026</span>
      </nav>

      <header className="mb-10 max-w-[760px]">
        <RubriqueLabel>Guide pratique</RubriqueLabel>
        <h1
          className="font-bold text-ink mt-5 leading-[1.05] -tracking-[0.02em]"
          style={{ fontSize: "clamp(2.2rem, 4.2vw, 3rem)" }}
        >
          À quel <em>âge</em> puis-je partir en 2026 ?
        </h1>
        <p className="mt-4 text-[1.1rem] text-ink-2 leading-[1.6]">
          La réponse dépend de votre année de naissance. Depuis la
          suspension de la réforme 2023 au 1ᵉʳ septembre 2026, les tableaux
          ci-dessous s'appliquent à tous les assurés du régime général,
          des indépendants (SSI), des libéraux (CNAVPL hors avocats) et
          des avocats (CNBF).
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-[1.5rem] font-bold text-ink mb-5 -tracking-[0.02em]">
          Régime général, SSI, CNAVPL, CNBF
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.95rem]">
            <thead>
              <tr className="bg-ink text-white">
                <th className="p-3.5 text-left font-semibold">Année de naissance</th>
                <th className="p-3.5 text-left font-semibold">Âge légal</th>
                <th className="p-3.5 text-left font-semibold">Taux plein auto</th>
                <th className="p-3.5 text-left font-semibold">Durée requise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1960", "62 ans", "67 ans", "167 trim"],
                ["Du 01/01/1961 au 31/08/1961", "62 ans", "67 ans", "168 trim"],
                ["Du 01/09/1961 au 31/12/1961", "62 ans et 3 mois", "67 ans", "169 trim"],
                ["1962", "62 ans et 6 mois", "67 ans", "169 trim"],
                ["Du 01/01/1963 au 31/03/1965", "62 ans et 9 mois", "67 ans", "170 trim"],
                ["Du 01/04/1965 au 31/12/1965", "63 ans", "67 ans", "171 trim"],
                ["1966", "63 ans et 3 mois", "67 ans", "172 trim"],
                ["1967", "63 ans et 6 mois", "67 ans", "172 trim"],
                ["1968", "63 ans et 9 mois", "67 ans", "172 trim"],
                ["À compter de 1969", "64 ans", "67 ans", "172 trim"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-rule hover:bg-bg-2">
                  <td className="p-3.5">{row[0]}</td>
                  <td className="p-3.5 font-semibold text-emerald">{row[1]}</td>
                  <td className="p-3.5">{row[2]}</td>
                  <td className="p-3.5">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[0.85rem] text-muted mt-3 leading-[1.55]">
          <strong>Âge légal</strong> : l'âge minimum à partir duquel vous
          pouvez liquider votre retraite. <strong>Taux plein automatique</strong> :
          âge à partir duquel la décote n'est plus appliquée, même si votre
          durée d'assurance est incomplète.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-[1.5rem] font-bold text-ink mb-5 -tracking-[0.02em]">
          Fonctionnaires (catégorie sédentaire)
        </h2>
        <p className="text-ink-2 mb-5 text-[0.98rem] leading-[1.55]">
          Agents de l'État (SRE), territoriaux et hospitaliers (CRNACL) de
          catégorie sédentaire. La notion de taux plein est remplacée par
          celle d'âge d'annulation de la décote.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.95rem]">
            <thead>
              <tr className="bg-ink text-white">
                <th className="p-3.5 text-left font-semibold">Année de naissance</th>
                <th className="p-3.5 text-left font-semibold">Âge légal</th>
                <th className="p-3.5 text-left font-semibold">Âge d'annulation décote</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Du 01/01/1955 au 31/08/1961", "62 ans", "67 ans"],
                ["Du 01/09/1961 au 31/12/1961", "62 ans et 3 mois", "67 ans"],
                ["1962", "62 ans et 6 mois", "67 ans"],
                ["Du 01/01/1963 au 31/03/1965", "62 ans et 9 mois", "67 ans"],
                ["Du 01/04/1965 au 31/12/1965", "63 ans", "67 ans"],
                ["1966", "63 ans et 3 mois", "67 ans"],
                ["1967", "63 ans et 6 mois", "67 ans"],
                ["1968", "63 ans et 9 mois", "67 ans"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-rule hover:bg-bg-2">
                  <td className="p-3.5">{row[0]}</td>
                  <td className="p-3.5 font-semibold text-emerald">{row[1]}</td>
                  <td className="p-3.5">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-[1.5rem] font-bold text-ink mb-5 -tracking-[0.02em]">
          Fonctionnaires (catégorie active)
        </h2>
        <p className="text-ink-2 mb-5 text-[0.98rem] leading-[1.55]">
          Emplois présentant un risque particulier ou des fatigues
          exceptionnelles (policiers, pompiers, personnel hospitalier
          soignant, etc.). Condition : au moins 17 ans dans un emploi de
          catégorie active.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.95rem]">
            <thead>
              <tr className="bg-ink text-white">
                <th className="p-3.5 text-left font-semibold">Année de naissance</th>
                <th className="p-3.5 text-left font-semibold">Âge légal</th>
                <th className="p-3.5 text-left font-semibold">Âge d'annulation décote</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Avant le 01/09/1966", "57 ans", "62 ans"],
                ["Du 01/09/1966 au 31/12/1966", "57 ans et 3 mois", "62 ans"],
                ["1967", "57 ans et 6 mois", "62 ans"],
                ["Du 01/01/1968 au 31/03/1970", "57 ans et 9 mois", "62 ans"],
                ["Du 01/04/1970 au 31/12/1970", "58 ans", "62 ans"],
                ["1971", "58 ans et 3 mois", "62 ans"],
                ["1972", "58 ans et 6 mois", "62 ans"],
                ["1973", "58 ans et 9 mois", "62 ans"],
                ["À partir de 1974", "59 ans", "62 ans"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-rule hover:bg-bg-2">
                  <td className="p-3.5">{row[0]}</td>
                  <td className="p-3.5 font-semibold text-emerald">{row[1]}</td>
                  <td className="p-3.5">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 bg-emerald-light rounded-2xl p-7 border border-emerald/20">
        <h2 className="text-[1.4rem] font-bold text-ink mb-4 -tracking-[0.02em]">
          Départs anticipés possibles
        </h2>
        <ul className="list-none p-0 m-0 space-y-3 text-[0.98rem] text-ink-2 leading-[1.6]">
          <li>
            <strong className="text-emerald">Carrière longue</strong> — dès
            58 à 60 ans pour les assurés ayant commencé à travailler avant
            16, 18 ou 20 ans, sous condition de durée cotisée.
          </li>
          <li>
            <strong className="text-emerald">Retraite pour handicap</strong>{" "}
            — dès 55 ans avec un taux d'incapacité d'au moins 50 % pendant
            toute la durée exigée.
          </li>
          <li>
            <strong className="text-emerald">Retraite progressive</strong>{" "}
            — dès 60 ans, permet de liquider une fraction de pension tout
            en continuant à travailler à temps partiel (possibilité
            étendue aux TNS depuis 2023).
          </li>
          <li>
            <strong className="text-emerald">Invalidité ou inaptitude au
            travail</strong> — taux plein à l'âge légal sans condition de
            durée.
          </li>
        </ul>
      </section>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <Link
          href="/outils/simulateur-decote"
          className="block bg-paper border border-rule rounded-2xl p-7 no-underline hover:border-emerald transition-all"
        >
          <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-2">
            Simulateur gratuit
          </div>
          <h3 className="text-[1.15rem] font-bold text-ink mb-2">
            Combien coûterait un départ avant l'âge du taux plein ?
          </h3>
          <p className="text-[0.9rem] text-ink-2 leading-[1.55]">
            Calculateur en une minute avec la règle officielle de décote.
          </p>
        </Link>
        <Link
          href="/chiffres-cles-2026"
          className="block bg-paper border border-rule rounded-2xl p-7 no-underline hover:border-emerald transition-all"
        >
          <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-2">
            Référence
          </div>
          <h3 className="text-[1.15rem] font-bold text-ink mb-2">
            Tous les chiffres-clés de la retraite 2026
          </h3>
          <p className="text-[0.9rem] text-ink-2 leading-[1.55]">
            PASS, points, décote, minimum contributif, réversion.
          </p>
        </Link>
      </div>
    </div>
  );
}
