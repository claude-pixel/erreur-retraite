import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/anomalies", label: "Anomalies" },
  { href: "/dossiers", label: "Dossiers" },
  { href: "/guides", label: "Guides pratiques" },
  { href: "/outils", label: "Simulateurs" },
  { href: "/chiffres-cles-2026", label: "Chiffres-clés" },
  { href: "/faq", label: "FAQ" },
  { href: "/lexique", label: "Lexique" },
];

export function MainNav() {
  return (
    <nav className="bg-bg border-t border-b border-rule sticky top-0 z-50">
      <div className="container-ed flex items-center justify-center gap-0.5 max-lg:justify-start max-lg:overflow-x-auto">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="relative py-4 px-5 text-[0.92rem] font-semibold text-ink-2 no-underline hover:text-emerald transition-colors whitespace-nowrap"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
