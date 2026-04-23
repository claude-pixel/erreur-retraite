import Link from "next/link";

export function DossierCard({
  rubrique,
  titre,
  chapo,
  href,
  date,
  tempsLecture,
}: {
  rubrique: string;
  titre: string;
  chapo: string;
  href: string;
  date?: string;
  tempsLecture?: number;
}) {
  return (
    <article className="border-b border-rule pb-8 mb-8 last:border-0">
      <div className="rubrique-label mb-3">{rubrique}</div>
      <h3 className="font-serif font-bold text-[1.6rem] leading-tight mb-3">
        <Link href={href} className="no-underline text-ink hover:text-accent transition-colors">
          {titre}
        </Link>
      </h3>
      <p className="text-ink-2 mb-3 leading-relaxed">{chapo}</p>
      <div className="text-[0.78rem] text-muted italic font-body">
        {date}
        {tempsLecture ? ` · ${tempsLecture} min de lecture` : ""}
      </div>
    </article>
  );
}
