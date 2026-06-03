import { articles, formatDate } from "@/lib/articles";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";
import { DossierCard } from "@/components/cards/DossierCard";

export const metadata = {
  title: "Dossiers — articles de fond sur la retraite",
  description:
    "Dossiers documentés et enquêtes approfondies sur les droits à la retraite, les régimes et les réformes en cours.",
};

export default function DossiersPage() {
  const dossiers = articles.filter((a) => a.section === "dossiers");
  return (
    <div className="container-ed py-14">
      <RubriqueLabel >Rubrique · Dossiers</RubriqueLabel>
      <h1
        className="font-bold text-ink mt-5 mb-6"
        style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.2rem)", lineHeight: 1.1 }}
      >
        Dossiers de <em className="text-emerald">fond</em>
      </h1>
      <p className="font-medium text-[1.2rem] text-ink-2 max-w-prose mb-12">
        Analyses approfondies, enquêtes documentées et décryptages des grandes
        questions du système de retraite français : réversion, cumul
        emploi-retraite, réformes en cours et droits spécifiques par régime.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12">
        {dossiers.map((a) => (
          <DossierCard
            key={a.slug}
            rubrique={a.rubrique}
            titre={a.titre}
            chapo={a.chapo}
            href={`/dossiers/${a.slug}`}
            date={formatDate(a.datePublication)}
            tempsLecture={a.tempsLecture}
          />
        ))}
      </div>
    </div>
  );
}
