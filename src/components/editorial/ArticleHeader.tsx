import { RubriqueLabel } from "./RubriqueLabel";

export function ArticleHeader({
  rubrique,
  titre,
}: {
  rubrique: string;
  titre: string;
}) {
  return (
    <header className="mb-8">
      <RubriqueLabel>{rubrique}</RubriqueLabel>
      <h1
        className="font-bold text-ink mt-5 leading-[1.1] -tracking-[0.02em]"
        style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        dangerouslySetInnerHTML={{ __html: titre }}
      />
    </header>
  );
}
