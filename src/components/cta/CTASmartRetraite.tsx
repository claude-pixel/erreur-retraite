export function CTASmartRetraite({
  titre = "Diagnostiquez votre relevé en <em>cinq minutes</em>",
  description = "Notre service partenaire SmartRetraite analyse votre relevé de carrière et détecte automatiquement les anomalies qui grèvent votre pension.",
  bouton = "Lancer mon diagnostic gratuit →",
  href = "https://smartretraite.fr/analyse",
  decouvrir = false,
  decouvrirHref = "https://smartretraite.fr",
}: {
  titre?: string;
  description?: string;
  bouton?: string;
  href?: string;
  decouvrir?: boolean;
  decouvrirHref?: string;
}) {
  return (
    <section className="my-12">
      <div className="bg-paper border-2 border-emerald rounded-[20px] px-10 py-12 max-w-[900px] mx-auto text-center relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-52 h-52 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #dcf0ea, transparent 70%)" }}
        />
        <div className="w-16 h-16 rounded-full bg-emerald text-white flex items-center justify-center text-[1.7rem] font-extrabold mx-auto mb-5 relative">
          ⌕
        </div>
        <h3
          className="text-[1.8rem] leading-tight text-ink font-bold mb-3 relative"
          dangerouslySetInnerHTML={{ __html: titre }}
        />
        <p className="text-ink-2 max-w-[560px] mx-auto mb-7 relative">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 bg-emerald text-white no-underline px-7 py-3.5 rounded-pill font-bold text-[0.95rem] hover:bg-emerald-2 transition-colors"
        >
          {bouton}
        </a>
        <div className="text-[0.78rem] text-muted mt-4 relative">
          Sans inscription · Résultat en 5 minutes · Conforme RGPD
        </div>
        {decouvrir ? (
          <div className="mt-5 pt-5 border-t border-rule-2 relative">
            <a
              href={decouvrirHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] text-ink-2 font-semibold underline decoration-rule underline-offset-4 hover:text-emerald hover:decoration-emerald transition-colors"
            >
              Qu'est-ce que SmartRetraite ? Découvrir le service →
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
