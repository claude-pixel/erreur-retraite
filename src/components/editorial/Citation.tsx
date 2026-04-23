export function Citation({
  children,
  source,
}: {
  children: React.ReactNode;
  source?: string;
}) {
  return (
    <figure className="my-12 max-w-[800px] mx-auto">
      <blockquote className="relative bg-emerald-light border-l-4 border-emerald rounded-r-2xl px-10 py-8 text-ink text-[1.25rem] leading-[1.5] font-medium">
        <p className="m-0">{children}</p>
      </blockquote>
      {source ? (
        <figcaption className="mt-3 text-[0.88rem] text-muted text-right">
          —{" "}
          <strong className="text-ink not-italic font-bold">{source}</strong>
        </figcaption>
      ) : null}
    </figure>
  );
}
