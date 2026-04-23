import Link from "next/link";

export function ToolLayout({
  kicker,
  titre,
  chapo,
  children,
}: {
  kicker: string;
  titre: React.ReactNode;
  chapo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-ed py-10">
      <nav aria-label="Fil d'Ariane" className="text-[0.85rem] text-muted mb-6 font-medium">
        <Link href="/" className="no-underline text-muted hover:text-emerald">
          Accueil
        </Link>
        <span className="mx-2">›</span>
        <Link href="/outils" className="no-underline text-muted hover:text-emerald">
          Simulateurs
        </Link>
      </nav>

      <header className="mb-10 max-w-[720px]">
        <span className="rubrique-label mb-4">{kicker}</span>
        <h1
          className="font-bold text-ink mt-5 leading-[1.1] -tracking-[0.02em]"
          style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.6rem)" }}
        >
          {titre}
        </h1>
        <p className="mt-4 text-[1.1rem] text-ink-2 leading-[1.55]">{chapo}</p>
      </header>

      {children}
    </div>
  );
}
