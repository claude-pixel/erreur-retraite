import Link from "next/link";
import { LogoFooter } from "@/components/brand/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/80 pt-14 pb-6 mt-20 text-[0.9rem]">
      <div className="container-ed">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-9 border-b border-white/10">
          <div>
            <div className="mb-4">
              <LogoFooter size={36} />
            </div>
            <p className="max-w-[340px] text-white/80">
              Site d'information sur la retraite et la protection sociale.
              Édité par Compétence Retraite EURL. Sources officielles,
              rédaction indépendante.
            </p>
          </div>

          <div>
            <h5 className="text-white text-[0.82rem] font-bold tracking-[0.1em] uppercase mb-4">
              Rubriques
            </h5>
            <ul className="space-y-2.5 list-none p-0">
              <li><Link href="/anomalies" className="no-underline text-white/80 hover:text-sun">Anomalies</Link></li>
              <li><Link href="/dossiers" className="no-underline text-white/80 hover:text-sun">Dossiers</Link></li>
              <li><Link href="/guides" className="no-underline text-white/80 hover:text-sun">Guides pratiques</Link></li>
              <li><Link href="/outils" className="no-underline text-white/80 hover:text-sun">Simulateurs</Link></li>
              <li><Link href="/lexique" className="no-underline text-white/80 hover:text-sun">Lexique</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[0.82rem] font-bold tracking-[0.1em] uppercase mb-4">
              Informations
            </h5>
            <ul className="space-y-2.5 list-none p-0">
              <li><Link href="/a-propos" className="no-underline text-white/80 hover:text-sun">À propos</Link></li>
              <li><Link href="/contact" className="no-underline text-white/80 hover:text-sun">Contact</Link></li>
              <li><Link href="/faq" className="no-underline text-white/80 hover:text-sun">FAQ retraite</Link></li>
              <li><Link href="/chiffres-cles-2026" className="no-underline text-white/80 hover:text-sun">Chiffres-clés 2026</Link></li>
              <li><Link href="/mentions-legales" className="no-underline text-white/80 hover:text-sun">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="no-underline text-white/80 hover:text-sun">Confidentialité</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[0.82rem] font-bold tracking-[0.1em] uppercase mb-4">
              Services
            </h5>
            <ul className="space-y-2.5 list-none p-0">
              <li>
                <a href="https://smartretraite.fr" target="_blank" rel="noopener noreferrer" className="no-underline text-white/80 hover:text-sun">
                  SmartRetraite
                </a>
              </li>
              <li>
                <a href="https://competence-retraite.fr" target="_blank" rel="noopener noreferrer" className="no-underline text-white/80 hover:text-sun">
                  Compétence Retraite
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex justify-between text-[0.78rem] text-white/55 max-md:flex-col max-md:gap-2">
          <span>© {year} erreur-retraite.fr — SIREN 980 857 488</span>
          <span>Édité par Compétence Retraite EURL</span>
        </div>
      </div>
    </footer>
  );
}
