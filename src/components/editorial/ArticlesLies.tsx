import Link from "next/link";

export function ArticlesLies({ liens }: { liens: { href: string; label: string }[] }) {
  if (!liens.length) return null;
  return (
    <section className="my-12 border-t border-rule pt-9">
      <div className="rubrique-label mb-5">Pour aller plus loin</div>
      <ul className="list-none p-0 m-0 grid md:grid-cols-3 gap-5">
        {liens.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block no-underline bg-paper border border-rule rounded-2xl p-5 font-bold text-[1rem] leading-snug text-ink hover:border-emerald hover:text-emerald transition-all"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
