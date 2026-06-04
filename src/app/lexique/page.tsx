import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Lexique — les termes essentiels du droit à la retraite",
  description:
    "Vingt termes clés pour comprendre le droit à la retraite français : PASS, SAM, décote, trimestres assimilés, AGIRC-ARRCO, CIPAV, et plus.",
};

const termes: { terme: string; def: string }[] = [
  {
    terme: "AGIRC-ARRCO",
    def: "Régime de retraite complémentaire obligatoire des salariés du secteur privé, issu de la fusion en 2019 des anciens régimes AGIRC (cadres) et ARRCO (non-cadres).",
  },
  {
    terme: "Coefficient de solidarité",
    def: "Ancien malus AGIRC-ARRCO : minoration temporaire de -10 % pendant trois ans pour les assurés liquidant dès le taux plein. Supprimé depuis le 1ᵉʳ décembre 2023 (nouvelles liquidations) et le 1ᵉʳ avril 2024 (tous les retraités).",
  },
  {
    terme: "CIPAV",
    def: "Caisse interprofessionnelle de prévoyance et d'assurance vieillesse, compétente pour de nombreuses professions libérales non réglementées.",
  },
  {
    terme: "CNAV",
    def: "Caisse nationale d'assurance vieillesse, gestionnaire du régime général de retraite de base des salariés du secteur privé.",
  },
  {
    terme: "Décote",
    def: "Réduction définitive de la pension appliquée en cas de départ avant le taux plein : 1,25 % par trimestre manquant, plafonnée à 25 %.",
  },
  {
    terme: "Liquidation",
    def: "Acte administratif de calcul et d'attribution de la pension de retraite, irréversible dans ses modalités principales.",
  },
  {
    terme: "PASS",
    def: "Plafond annuel de la Sécurité sociale. Il sert de référence pour le calcul des cotisations et du plafonnement du salaire retenu pour la pension. En 2026 : 48 060 €.",
  },
  {
    terme: "Point AGIRC-ARRCO",
    def: "Unité de compte de la retraite complémentaire des salariés du privé. Valeur de service 2026 : 1,4386 €.",
  },
  {
    terme: "Proratisation",
    def: "Mécanisme européen de calcul des pensions pour les carrières multi-pays, fondé sur la durée de cotisation dans chaque État membre.",
  },
  {
    terme: "RIS (Relevé Individuel de Situation)",
    def: "Document officiel récapitulant, pour un assuré, l'intégralité des droits acquis auprès des régimes de base et complémentaires.",
  },
  {
    terme: "Rachat Fillon",
    def: "Dispositif permettant de racheter jusqu'à douze trimestres correspondant à des études supérieures ou à des années incomplètes.",
  },
  {
    terme: "SAM (Salaire Annuel Moyen)",
    def: "Moyenne des vingt-cinq meilleures années de salaire plafonnées au PASS, revalorisées par les coefficients CNAV. Base de calcul de la pension du régime général.",
  },
  {
    terme: "SSI",
    def: "Sécurité sociale des indépendants, régime de retraite des artisans et commerçants (ex-RSI, intégré au régime général en 2018).",
  },
  {
    terme: "Surcote",
    def: "Majoration de la pension de +1,25 % par trimestre travaillé au-delà du taux plein.",
  },
  {
    terme: "Taux plein",
    def: "Taux de liquidation de 50 % au régime général, obtenu soit par une durée d'assurance suffisante, soit automatiquement à 67 ans.",
  },
  {
    terme: "Totalisation",
    def: "Principe européen consistant à additionner les périodes cotisées dans différents États pour vérifier l'ouverture des droits.",
  },
  {
    terme: "Trimestre assimilé",
    def: "Trimestre non cotisé mais validé au titre d'une période de chômage indemnisé, maladie, maternité ou service militaire.",
  },
  {
    terme: "Trimestre cotisé",
    def: "Trimestre acquis par le versement effectif de cotisations sur un revenu au moins égal à 150 fois le SMIC horaire brut annuel.",
  },
  {
    terme: "Majoration pour enfants",
    def: "Bonification de 10 % de la pension pour les parents ayant eu ou élevé au moins trois enfants pendant neuf ans avant leurs seize ans.",
  },
  {
    terme: "CLEISS",
    def: "Centre des liaisons européennes et internationales de sécurité sociale, organisme de référence pour les carrières internationales.",
  },
];

export default function LexiquePage() {
  const sorted = [...termes].sort((a, b) => a.terme.localeCompare(b.terme, "fr"));
  return (
    <div className="container-ed py-14">
      <RubriqueLabel >Lexique</RubriqueLabel>
      <h1
        className="font-bold text-ink mt-5 mb-6"
        style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.2rem)", lineHeight: 1.1 }}
      >
        Les termes essentiels du <em className="text-emerald">droit à la retraite</em>
      </h1>
      <p className="font-medium text-[1.2rem] text-ink-2 max-w-prose mb-12">
        Vingt notions clés pour décoder les règles, les sigles et les dispositifs
        du système de retraite français. Référentiel destiné à accompagner la
        lecture des dossiers et analyses publiés sur erreur-retraite.fr.
      </p>

      <dl className="divide-y divide-rule">
        {sorted.map((t) => (
          <div key={t.terme} className="py-6 grid md:grid-cols-[240px_1fr] gap-6">
            <dt className="font-bold text-[1.2rem] text-ink">{t.terme}</dt>
            <dd className="text-ink-2 leading-relaxed m-0">{t.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
