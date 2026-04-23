export function Byline({
  auteur = "la rédaction d'erreur-retraite.fr",
  date,
  tempsLecture,
}: {
  auteur?: string;
  date: string;
  tempsLecture?: number;
}) {
  return (
    <div className="pt-5 border-t border-rule text-[0.85rem] text-muted flex flex-wrap items-center gap-2 font-medium">
      <span>
        Par <strong className="text-ink font-bold">{auteur}</strong>
      </span>
      <span className="inline-block w-[3px] h-[3px] rounded-full bg-muted mx-1" />
      <span>Publié le {date}</span>
      {tempsLecture ? (
        <>
          <span className="inline-block w-[3px] h-[3px] rounded-full bg-muted mx-1" />
          <span>Temps de lecture : {tempsLecture} min</span>
        </>
      ) : null}
    </div>
  );
}
