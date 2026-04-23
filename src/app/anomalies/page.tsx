import { articles, formatDate } from "@/lib/articles";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";
import { DossierCard } from "@/components/cards/DossierCard";

export const metadata = {
  title: "Anomalies — les erreurs les plus fréquentes sur les relevés de carrière",
  description:
    "Panorama documenté des huit familles d'anomalies qui grèvent les pensions de retraite françaises. Analyses sourcées, chiffres officiels, procédures de correction.",
};

export default function AnomaliesPage() {
  const anomalies = articles.filter((a) => a.section === "anomalies");
  return (
    <div className="container-ed py-14">
      <RubriqueLabel >Rubrique · Anomalies</RubriqueLabel>
      <h1
        className="font-bold text-ink mt-5 mb-6"
        style={{
          fontSize: "clamp(2.4rem, 4.5vw, 3.2rem)",
          lineHeight: 1.1,
        }}
      >
        Anomalies de pension : <em className="text-emerald">les huit familles</em>
      </h1>
      <p className="font-medium text-[1.2rem] text-ink-2 max-w-prose mb-12">
        Selon la Cour des comptes, une pension sur sept présente au moins une
        erreur. Nous avons recensé huit familles d'anomalies, documentées et
        sourcées, qui concentrent l'essentiel des cas rencontrés en audit de
        relevé de carrière.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12">
        {anomalies.map((a) => (
          <DossierCard
            key={a.slug}
            rubrique={a.rubrique}
            titre={a.titre}
            chapo={a.chapo}
            href={`/anomalies/${a.slug}`}
            date={formatDate(a.datePublication)}
            tempsLecture={a.tempsLecture}
          />
        ))}
      </div>
    </div>
  );
}
