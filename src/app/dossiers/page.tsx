import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Dossiers — articles de fond sur la retraite",
  description:
    "Dossiers documentés et enquêtes approfondies sur les droits à la retraite, les régimes et les réformes en cours.",
};

export default function DossiersPage() {
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
        questions du système de retraite français. Les premiers dossiers seront
        publiés prochainement.
      </p>

      <div className="border border-rule bg-bg-2 px-10 py-12 text-center">
        <div className="rubrique-label mb-4">Prochainement</div>
        <p className="text-ink-2">
          La rubrique « Dossiers » sera alimentée dès le mois de mai 2026 avec
          des articles longs sur la réforme en cours, la retraite des femmes,
          la pension de réversion et le cumul emploi-retraite.
        </p>
      </div>
    </div>
  );
}
