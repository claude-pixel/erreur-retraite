import Link from "next/link";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";
import { JsonLd } from "@/components/seo/JsonLd";
import { BASE_URL } from "@/lib/schema";

export const metadata = {
  title: "FAQ retraite — les 20 questions les plus posées",
  description:
    "Les questions les plus fréquentes sur la retraite en France, avec réponses sourcées : âge de départ, décote, rachat, réversion, trimestres manquants, TNS, AGIRC-ARRCO.",
};

type QA = { q: string; a: string; cat: string };

const faqs: QA[] = [
  {
    cat: "Âge de départ",
    q: "À quel âge pourrai-je partir à la retraite en 2026 ?",
    a: "Depuis la suspension de la réforme 2023 au 1ᵉʳ septembre 2026, l'âge légal dépend de votre année de naissance : 62 ans pour les générations d'avant septembre 1961, et il monte progressivement jusqu'à 64 ans pour les personnes nées à partir de 1969. Dans tous les cas, le taux plein automatique reste à 67 ans.",
  },
  {
    cat: "Âge de départ",
    q: "Quelle est la différence entre l'âge légal et l'âge du taux plein ?",
    a: "L'âge légal est l'âge minimum auquel vous pouvez partir (62 à 64 ans selon votre génération). Partir à l'âge légal suppose toutefois d'avoir validé tous vos trimestres, sinon une décote s'applique. L'âge du taux plein automatique, fixé à 67 ans, vous garantit une pension sans décote quelle que soit votre durée d'assurance.",
  },
  {
    cat: "Durée d'assurance",
    q: "Combien de trimestres me faut-il pour le taux plein ?",
    a: "Pour les assurés nés à partir de 1966, il faut 172 trimestres (43 ans) d'assurance validés tous régimes confondus. Pour les générations antérieures, le nombre est inférieur : 170 trim pour les années 1963-1964, 169 trim pour 1962, 167 trim pour 1960.",
  },
  {
    cat: "Durée d'assurance",
    q: "Comment puis-je valider un trimestre en 2025 ?",
    a: "Il faut avoir cotisé sur un revenu au moins égal à 150 fois le SMIC horaire brut, soit 1 803 € en 2025. Un salaire de 7 212 € sur l'année valide les 4 trimestres maximum.",
  },
  {
    cat: "Décote et surcote",
    q: "Comment se calcule la décote si je pars avant le taux plein ?",
    a: "La décote représente 0,625 % par trimestre manquant, appliquée au taux nominal de 50 %. Elle est plafonnée à 20 trimestres. Le plus petit nombre de trimestres manquants entre l'âge du taux plein et la durée de référence est retenu.",
  },
  {
    cat: "Décote et surcote",
    q: "La surcote est-elle intéressante si je continue à travailler ?",
    a: "Oui, dans la plupart des cas : chaque trimestre cotisé au-delà du taux plein et de l'âge légal génère une majoration de 1,25 % de pension, à vie. Pour les mères ayant eu au moins un enfant, une surcote anticipée de +1,25 %/trim (max 5 %) est même possible avant l'âge légal si la carrière est complète.",
  },
  {
    cat: "Anomalies",
    q: "Comment obtenir mon relevé de carrière ?",
    a: "Connectez-vous sur info-retraite.fr avec FranceConnect. Le Relevé Individuel de Situation (RIS) y est téléchargeable gratuitement et comprend l'ensemble des droits acquis dans tous les régimes (base, complémentaire, spéciaux).",
  },
  {
    cat: "Anomalies",
    q: "Que faire si je détecte une erreur sur mon relevé ?",
    a: "Adressez un courrier recommandé à la caisse concernée (CARSAT pour le régime général, caisse AGIRC-ARRCO pour la complémentaire, SSI/CIPAV pour les indépendants) avec les justificatifs — bulletins de salaire, attestations employeur, livret militaire. Conservez les accusés de réception. En cas de refus, saisissez la Commission de recours amiable puis le Tribunal judiciaire pôle social.",
  },
  {
    cat: "Anomalies",
    q: "Peut-on corriger son relevé à tout âge ?",
    a: "Oui. Depuis le 1ᵉʳ juillet 2021, la rectification d'un relevé est possible à tout âge, sans attendre la liquidation. Après la liquidation, un délai de prescription de 5 ans s'applique à la révision du montant perçu.",
  },
  {
    cat: "Rachat",
    q: "Puis-je racheter mes années d'études ?",
    a: "Oui, jusqu'à 12 trimestres correspondant à des années d'études supérieures validées par un diplôme (DUT, BTS, licence, master, doctorat, écoles). Le coût dépend de votre âge et de votre revenu ; il est intégralement déductible du revenu imposable.",
  },
  {
    cat: "Rachat",
    q: "Le rachat est-il plus rentable qu'un PER ?",
    a: "Cela dépend de votre âge, de votre taux marginal d'imposition et de votre espérance de retraite. Schématiquement, le seuil de rentabilité d'un rachat se situe entre 15 et 18 ans pour un cadre à 30 % de MTI, alors qu'un PER à 5 %/an peut rattraper ce gain en 15 ans avec davantage de liquidité. Un simulateur comparatif est recommandé.",
  },
  {
    cat: "Régimes complémentaires",
    q: "Comment est calculée ma retraite AGIRC-ARRCO ?",
    a: "Elle se calcule par : nombre de points × valeur de service × coefficient de liquidation. La valeur de service 2026 est de 1,4386 €. Le prix d'achat du point 2026 est de 20,1877 €. Le taux d'appel est de 127 %.",
  },
  {
    cat: "Régimes complémentaires",
    q: "Le coefficient de solidarité (malus) AGIRC-ARRCO existe-t-il encore ?",
    a: "Non. Ce malus appliquait une minoration temporaire de 10 % pendant 3 ans à ceux qui liquidaient dès le taux plein. Il a été supprimé : plus aucun malus pour les retraites liquidées depuis le 1ᵉʳ décembre 2023, et suppression pour tous les retraités depuis le 1ᵉʳ avril 2024.",
  },
  {
    cat: "International",
    q: "Ma carrière à l'étranger sera-t-elle prise en compte ?",
    a: "Si le pays est membre de l'UE / EEE / Suisse, le règlement européen CE 883/2004 assure la coordination : chaque caisse calcule une pension théorique totalisée et la proratise selon la durée réellement cotisée. Hors UE, une convention bilatérale peut s'appliquer (plus de 40 pays concernés : États-Unis, Canada, Japon, Maghreb…). Le CLEISS est votre interlocuteur pour la coordination.",
  },
  {
    cat: "TNS",
    q: "Les indépendants ont-ils davantage d'anomalies sur leur relevé ?",
    a: "Oui. Selon les contrôles de la Cour des comptes, les TNS présentent en moyenne trois fois plus d'anomalies que les salariés. La fragmentation des régimes (SSI, CIPAV, CNAVPL et sections professionnelles), les multiples transitions de statut et la migration RSI → SSI en 2018 expliquent cette exposition accrue.",
  },
  {
    cat: "Réversion",
    q: "Quelles sont les conditions pour toucher la pension de réversion ?",
    a: "Au régime général, il faut avoir été marié avec l'assuré décédé, avoir au moins 55 ans et respecter un plafond de ressources annuelles (24 710,40 € seul en 2025). La réversion vaut 54 % des droits du défunt. Chaque régime a ses règles propres : AGIRC-ARRCO 60 % sans ressources, fonctionnaire 50 % sans âge, etc. Le PACS n'ouvre pas droit à réversion.",
  },
  {
    cat: "Majorations",
    q: "Quelle majoration pour mes enfants ?",
    a: "Si vous avez eu ou élevé au moins 3 enfants, votre pension de base est majorée de 10 %, et de même pour la pension AGIRC-ARRCO (plafonnée à 2 367,48 €/an pour les points acquis depuis 2012). Chaque enfant ouvre également droit à 8 trimestres de majoration de durée d'assurance (MDA), partageables entre parents depuis 2010.",
  },
  {
    cat: "Minimum contributif",
    q: "Qu'est-ce que le minimum contributif ?",
    a: "C'est la pension plancher du régime général. Son montant entier est de 9 075,48 €/an en 2026, majoré de 1 771,68 €/an pour les assurés justifiant d'au moins 120 trimestres cotisés. Il est proratisé selon la durée d'assurance. Pour en bénéficier, le total des pensions personnelles ne doit pas dépasser 16 930,68 €/an.",
  },
  {
    cat: "Service militaire",
    q: "Mon service militaire compte-t-il pour la retraite ?",
    a: "Oui. 90 jours de service national valident un trimestre assimilé, avec une règle d'arrondi au supérieur : 12 mois de service valident 5 trimestres. Si l'information n'apparaît pas sur votre relevé (fréquent pour les archives antérieures à 2000), produisez votre livret militaire ou demandez un Bulletin de Recensement Militaire au Bureau central des archives de Pau.",
  },
  {
    cat: "Dispositifs anticipés",
    q: "Puis-je partir en carrière longue ?",
    a: "Oui si vous avez commencé à travailler tôt et validé un nombre minimum de trimestres avant un âge donné (par exemple 5 trimestres avant 20 ans pour un départ à 60 ans). Les conditions précises dépendent de votre génération et de votre âge de début d'activité. La vérification doit être anticipée deux ans avant le départ souhaité.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Questions fréquentes",
      item: BASE_URL + "/faq",
    },
  ],
};

const categories = Array.from(new Set(faqs.map((f) => f.cat)));

export default function FAQPage() {
  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />

      <div className="container-ed pt-10 pb-12">
        <nav
          aria-label="Fil d'Ariane"
          className="text-[0.85rem] text-muted mb-6 font-medium"
        >
          <Link href="/" className="no-underline text-muted hover:text-emerald">
            Accueil
          </Link>
          <span className="mx-2">›</span>
          <span>FAQ</span>
        </nav>

        <header className="mb-10 max-w-[800px]">
          <RubriqueLabel>Questions fréquentes</RubriqueLabel>
          <h1
            className="font-bold text-ink mt-5 leading-[1.05] -tracking-[0.02em]"
            style={{ fontSize: "clamp(2.2rem, 4.2vw, 3rem)" }}
          >
            Les 20 <em>questions</em> que l'on nous pose le plus
          </h1>
          <p className="mt-4 text-[1.1rem] text-ink-2 leading-[1.6]">
            Les interrogations les plus fréquentes de notre lectorat,
            regroupées par thème et traitées en moins de 3 minutes chacune.
            Chaque réponse s'appuie sur les règles réglementaires en vigueur
            en 2026.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="inline-block bg-bg-2 text-ink-2 px-4 py-1.5 rounded-pill text-[0.82rem] font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="space-y-3 max-w-[900px]">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-paper border border-rule rounded-2xl overflow-hidden"
            >
              <summary className="cursor-pointer list-none p-6 flex justify-between items-start gap-4 hover:bg-bg-2 transition-colors">
                <div className="flex-1">
                  <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-1.5">
                    {f.cat}
                  </div>
                  <h3 className="text-[1.05rem] font-bold text-ink leading-snug">
                    {f.q}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-bg-2 text-ink flex items-center justify-center font-bold flex-shrink-0 group-open:bg-emerald group-open:text-white group-open:rotate-45 transition-all">
                  +
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 text-[0.98rem] text-ink-2 leading-[1.65]">
                {f.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-bg-2 rounded-2xl p-7 max-w-[900px]">
          <h3 className="text-[1.1rem] font-bold text-ink mb-3">
            Une question qui n'est pas listée ?
          </h3>
          <p className="text-[0.95rem] text-ink-2 leading-[1.6] mb-4">
            Écrivez-nous à{" "}
            <a href="mailto:contact@competence-retraite.fr">
              contact@competence-retraite.fr
            </a>{" "}
            — les questions récurrentes sont ajoutées à cette FAQ chaque
            trimestre. Pour un audit personnalisé de votre situation, voyez
            plutôt nos{" "}
            <Link href="/outils">simulateurs gratuits</Link> ou les services
            partenaires{" "}
            <a
              href="https://smartretraite.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              SmartRetraite
            </a>{" "}
            et{" "}
            <a
              href="https://competence-retraite.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compétence Retraite
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
