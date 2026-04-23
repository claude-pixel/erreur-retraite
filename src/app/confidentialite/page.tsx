import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles sur erreur-retraite.fr.",
};

export default function ConfidentialitePage() {
  return (
    <div className="container-ed py-14 max-w-[800px]">
      <RubriqueLabel withRule>Politique de confidentialité</RubriqueLabel>
      <h1
        className="font-serif font-bold text-ink mt-5 mb-8"
        style={{ fontSize: "2.4rem", lineHeight: 1.15 }}
      >
        Confidentialité et données personnelles
      </h1>

      <div className="prose-editorial">
        <p>
          erreur-retraite.fr est un média d'information sans compte utilisateur.
          Nous ne collectons aucune donnée personnelle à des fins commerciales
          et n'utilisons pas de cookies de suivi tiers.
        </p>

        <h2>Mesure d'audience</h2>
        <p>
          La mesure d'audience est assurée par Plausible Analytics, une solution
          respectueuse de la vie privée qui ne dépose aucun cookie, ne collecte
          pas d'identifiants personnels et ne transmet aucune donnée à des
          régies publicitaires. Les statistiques sont strictement anonymes et
          agrégées.
        </p>

        <h2>Formulaires de contact</h2>
        <p>
          Les messages adressés via contact@competence-retraite.fr sont
          conservés uniquement le temps nécessaire à leur traitement. Aucune
          réutilisation commerciale n'est effectuée.
        </p>

        <h2>Liens externes et partenaires</h2>
        <p>
          erreur-retraite.fr dirige son lectorat vers des services partenaires
          (SmartRetraite, Compétence Retraite) via des liens identifiés. Ces
          redirections peuvent s'accompagner, lors d'une souscription, d'une
          rémunération d'affiliation, qui sera mentionnée explicitement le cas
          échéant dans les articles concernés.
        </p>

        <h2>Droits des personnes (RGPD)</h2>
        <p>
          Conformément au règlement général sur la protection des données,
          vous disposez d'un droit d'accès, de rectification et d'effacement
          des données vous concernant. Toute demande peut être adressée à
          contact@competence-retraite.fr.
        </p>
      </div>
    </div>
  );
}
