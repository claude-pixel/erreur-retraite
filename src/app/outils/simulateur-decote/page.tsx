import { ToolLayout } from "@/components/tools/ToolLayout";
import { SimulateurDecote } from "./SimulateurDecote";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSoftwareApplicationSchema, BASE_URL } from "@/lib/schema";

export const metadata = {
  title: "Simulateur de décote retraite — combien vous coûtent vos trimestres manquants",
  description:
    "Calculateur gratuit : mesurez en une minute l'impact exact de trimestres manquants sur votre pension mensuelle et sur 20 ans de retraite.",
};

const schema = buildSoftwareApplicationSchema({
  name: "Simulateur de décote retraite",
  description:
    "Calcul gratuit de l'impact d'un départ avec trimestres manquants sur la pension mensuelle et sur 20 ans.",
  url: `${BASE_URL}/outils/simulateur-decote`,
});

export default function SimulateurDecotePage() {
  return (
    <>
      <JsonLd data={schema} />
      <ToolLayout
      kicker="Simulateur gratuit"
      titre={
        <>
          Combien vous coûtent vos <em>trimestres manquants</em> ?
        </>
      }
      chapo="Chaque trimestre manquant au moment du départ entraîne une décote définitive de 1,25 % sur votre pension. Mesurez en une minute l'impact exact sur votre budget, mois après mois, et sur vingt ans de retraite."
    >
      <SimulateurDecote />
    </ToolLayout>
    </>
  );
}
