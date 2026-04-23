import { ToolLayout } from "@/components/tools/ToolLayout";
import { SimulateurRachat } from "./SimulateurRachat";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSoftwareApplicationSchema, BASE_URL } from "@/lib/schema";

export const metadata = {
  title: "Simulateur rachat de trimestres — rentabilité, fiscalité et comparaison PER",
  description:
    "Calculateur gratuit : coût d'un rachat de trimestres avec le barème 2026, économie fiscale, seuil de rentabilité et comparaison avec un PER.",
};

const schema = buildSoftwareApplicationSchema({
  name: "Simulateur de rachat de trimestres",
  description:
    "Calcul gratuit du coût d'un rachat de trimestres avec le barème CNAV 2026, économie fiscale, gain pension et comparaison PER.",
  url: `${BASE_URL}/outils/simulateur-rachat`,
});

export default function SimulateurRachatPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ToolLayout
      kicker="Simulateur gratuit"
      titre={
        <>
          Est-ce <em>vraiment rentable</em> de racheter des trimestres ?
        </>
      }
      chapo="Coût officiel 2026 par tranche d'âge et de revenu, gain mensuel de pension, économie d'impôt et comparaison avec un Plan Épargne Retraite équivalent. Verdict en une minute, sans inscription."
    >
      <SimulateurRachat />
    </ToolLayout>
    </>
  );
}
