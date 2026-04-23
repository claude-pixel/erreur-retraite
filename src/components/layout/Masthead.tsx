import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function Masthead() {
  return (
    <header className="bg-bg py-5">
      <div className="container-ed grid grid-cols-[auto_1fr_auto] gap-8 items-center max-lg:grid-cols-1 max-lg:gap-4">
        <Link href="/" className="no-underline" aria-label="erreur-retraite.fr — accueil">
          <Logo size={44} />
        </Link>

        <form
          action="/a-la-une"
          className="max-w-[560px] w-full justify-self-center relative max-lg:justify-self-stretch"
        >
          <input
            type="search"
            name="q"
            placeholder="Posez votre question : puis-je racheter des trimestres ?"
            className="w-full py-3.5 pr-14 pl-6 border-[1.5px] border-rule-2 rounded-pill bg-paper text-[0.95rem] text-ink placeholder:text-muted focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/15 transition-all"
          />
          <button
            type="submit"
            aria-label="Rechercher"
            className="absolute right-[5px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald text-white flex items-center justify-center hover:bg-emerald-2 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20 L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </form>

        <a
          href="https://smartretraite.fr/analyse"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sun text-ink no-underline px-[22px] py-3 rounded-pill font-bold text-[0.9rem] hover:bg-sun-dark hover:text-white transition-colors whitespace-nowrap"
        >
          Diagnostic gratuit →
        </a>
      </div>
    </header>
  );
}
