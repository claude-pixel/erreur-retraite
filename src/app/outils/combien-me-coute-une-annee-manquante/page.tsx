import { ToolLayout } from "@/components/tools/ToolLayout";
import { AnneeManquante } from "./AnneeManquante";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSoftwareApplicationSchema, BASE_URL } from "@/lib/schema";

export const metadata = {
  title: "Combien me coûte une année manquante sur mon relevé de carrière ?",
  description:
    "Calculateur gratuit : une seule année manquante sur votre relevé coûte en moyenne 18 000 € sur 20 ans. Découvrez votre chiffre en 10 secondes.",
};

const schema = buildSoftwareApplicationSchema({
  name: "Coût d'une année manquante — simulateur retraite",
  description:
    "Calcul gratuit de l'impact financier d'une année non reportée sur le relevé de carrière, projeté sur toute la durée de retraite.",
  url: `${BASE_URL}/outils/combien-me-coute-une-annee-manquante`,
});

export default function AnneeManquantePage() {
  return (
    <>
      <JsonLd data={schema} />
      <ToolLayout
      kicker="Simulateur gratuit · 10 secondes"
      titre={
        <>
          Combien vous coûte une <em>année manquante</em> sur votre relevé ?
        </>
      }
      chapo="Deux champs suffisent. Obtenez immédiatement l'impact financier d'une seule année non reportée sur votre relevé de carrière, projeté sur toute votre retraite."
    >
      <AnneeManquante />
    </ToolLayout>
    </>
  );
}
