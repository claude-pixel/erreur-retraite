import { ToolLayout } from "@/components/tools/ToolLayout";
import { EstimateurPoints } from "./EstimateurPoints";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSoftwareApplicationSchema, BASE_URL } from "@/lib/schema";

export const metadata = {
  title: "Estimateur de pension AGIRC-ARRCO : combien valent vos points ?",
  description:
    "Calculateur gratuit : convertissez vos points AGIRC-ARRCO en pension mensuelle (point × 1,4386 € en 2026) et mesurez ce que des points manquants vous coûteraient.",
};

const schema = buildSoftwareApplicationSchema({
  name: "Estimateur de pension AGIRC-ARRCO",
  description:
    "Conversion gratuite des points AGIRC-ARRCO en pension complémentaire mensuelle, et estimation de l'impact de points manquants sur le relevé.",
  url: `${BASE_URL}/outils/estimateur-points-agirc-arrco`,
});

export default function EstimateurPointsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ToolLayout
        kicker="Simulateur gratuit · 1 minute"
        titre={
          <>
            Combien valent vos <em>points AGIRC-ARRCO</em> ?
          </>
        }
        chapo="Indiquez votre total de points complémentaires : obtenez immédiatement votre pension mensuelle estimée, et mesurez ce que des points manquants sur votre relevé vous coûteraient à vie."
      >
        <EstimateurPoints />
      </ToolLayout>
    </>
  );
}
