import { ChiffresSidebar } from "./ChiffresSidebar";
import { Byline } from "./Byline";
import { ArticleHeader } from "./ArticleHeader";
import { Lead } from "./Lead";
import Link from "next/link";
import { formatDate } from "@/lib/articles";
import { AuthorBlock, authorVariantFor } from "@/components/author/AuthorBlock";
import { CTASmartRetraite } from "@/components/cta/CTASmartRetraite";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  BASE_URL,
} from "@/lib/schema";

type Chiffre = { num: string; label: string; source?: string };

const SECTION_LABEL: Record<string, string> = {
  anomalies: "Anomalies",
  dossiers: "Dossiers",
  guides: "Guides pratiques",
};

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, "").trim();
}

export function ArticleShell({
  rubrique,
  titreHtml,
  chapo,
  auteur,
  datePublication,
  tempsLecture,
  chiffres,
  coSignature,
  slug,
  section = "anomalies",
  children,
}: {
  rubrique: string;
  titreHtml: string;
  chapo: string;
  auteur?: string;
  datePublication: string;
  tempsLecture: number;
  chiffres: Chiffre[];
  coSignature?: "competence-retraite";
  slug?: string;
  section?: "anomalies" | "dossiers" | "guides";
  children: React.ReactNode;
}) {
  const baseVariant = authorVariantFor(auteur);
  const variant =
    baseVariant === "redaction" && coSignature === "competence-retraite"
      ? "redaction-avec-expert"
      : baseVariant;

  const sectionLabel = SECTION_LABEL[section] ?? "Articles";
  const titrePlain = stripHtml(titreHtml);

  const schemas = slug
    ? [
        buildArticleSchema({
          slug,
          section,
          titre: titrePlain,
          chapo,
          datePublication,
          auteur,
        }),
        buildBreadcrumbSchema([
          { name: "Accueil", url: `${BASE_URL}/` },
          { name: sectionLabel, url: `${BASE_URL}/${section}` },
          {
            name: titrePlain,
            url: `${BASE_URL}/${section}/${slug}`,
          },
        ]),
      ]
    : null;

  return (
    <div className="container-ed pt-10 pb-12">
      {schemas ? <JsonLd data={schemas} /> : null}

      <nav aria-label="Fil d'Ariane" className="text-[0.85rem] text-muted mb-6 font-medium">
        <Link href="/" className="no-underline text-muted hover:text-emerald">
          Accueil
        </Link>
        <span className="mx-2">›</span>
        <Link
          href={`/${section}`}
          className="no-underline text-muted hover:text-emerald"
        >
          {sectionLabel}
        </Link>
      </nav>

      <div className="grid lg:grid-cols-[2.3fr_1fr] gap-14 items-start">
        <article className="min-w-0">
          <ArticleHeader rubrique={rubrique} titre={titreHtml} />
          <Lead>{chapo}</Lead>
          <Byline
            auteur={auteur}
            date={formatDate(datePublication)}
            tempsLecture={tempsLecture}
          />
          <div className="prose-editorial mt-9 max-w-none">{children}</div>

          <CTASmartRetraite
            titre="Analysez votre relevé de carrière (RIS) en <em>cinq minutes</em>"
            description="Notre service partenaire SmartRetraite passe votre relevé au crible et détecte les trimestres, points et revenus manquants qui minorent votre pension."
            bouton="Analyser mon relevé →"
          />

          <AuthorBlock variant={variant} auteur={auteur} />
        </article>

        <aside>
          <div className="lg:sticky lg:top-24 space-y-6">
            <ChiffresSidebar chiffres={chiffres} />
            <div className="bg-paper border border-rule rounded-[18px] p-5">
              <div className="rubrique-label mb-2.5">SmartRetraite</div>
              <p className="text-[0.85rem] text-ink-2 leading-[1.5] mb-3">
                Notre service partenaire vérifie votre relevé de carrière et
                détecte les anomalies qui minorent votre pension.
              </p>
              <a
                href="https://smartretraite.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[0.85rem] font-semibold text-emerald hover:underline"
              >
                Découvrir SmartRetraite →
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
