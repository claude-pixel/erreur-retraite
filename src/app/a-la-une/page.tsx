import Link from "next/link";
import { articles, formatDate } from "@/lib/articles";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "À la une — l'actualité retraite",
  description:
    "Tous les articles publiés par erreur-retraite.fr, classés par date.",
};

export default function ALaUnePage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime()
  );
  return (
    <div className="container-ed py-14">
      <RubriqueLabel >À la une</RubriqueLabel>
      <h1
        className="font-bold text-ink mt-5 mb-6"
        style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.2rem)", lineHeight: 1.1 }}
      >
        Tous nos <em className="text-emerald">articles</em>
      </h1>

      <div className="grid md:grid-cols-2 gap-x-12">
        {sorted.map((a) => (
          <article key={a.slug} className="border-b border-rule pb-8 mb-8">
            <div className="rubrique-label mb-3">{a.rubrique}</div>
            <h3 className="font-bold text-[1.5rem] leading-tight mb-3">
              <Link href={`/${a.section}/${a.slug}`} className="no-underline text-ink hover:text-accent transition-colors" dangerouslySetInnerHTML={{ __html: a.titreHtml }} />
            </h3>
            <p className="text-ink-2 mb-3 leading-relaxed">{a.chapo}</p>
            <div className="text-[0.78rem] text-muted">
              {formatDate(a.datePublication)} · {a.tempsLecture} min
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
