"use client";

import { useState, useMemo } from "react";
import { NumberField, SliderField } from "@/components/tools/Inputs";
import { fmtEur, fmt } from "@/lib/format";

// Valeur de service du point AGIRC-ARRCO 2026
const VALEUR_SERVICE = 1.4386;
const ESPERANCE = 20; // années de retraite pour la projection

export function EstimateurPoints() {
  const [points, setPoints] = useState(5000);
  const [pointsManquants, setPointsManquants] = useState(150);

  const result = useMemo(() => {
    const pensionAnnuelle = points * VALEUR_SERVICE;
    const pensionMensuelle = pensionAnnuelle / 12;
    const perteMensuelle = (pointsManquants * VALEUR_SERVICE) / 12;
    const perteTotale = perteMensuelle * 12 * ESPERANCE;
    return { pensionMensuelle, pensionAnnuelle, perteMensuelle, perteTotale };
  }, [points, pointsManquants]);

  return (
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
      <section className="bg-paper border border-rule rounded-[24px] p-8 lg:p-10">
        <h2 className="text-[1.3rem] font-bold text-ink mb-6">
          Vos points complémentaires
        </h2>

        <NumberField
          label="Votre total de points AGIRC-ARRCO"
          value={points}
          onChange={setPoints}
          suffix="points"
          min={0}
          max={30000}
          step={50}
          hint="Indiqué sur votre relevé de carrière"
        />

        <SliderField
          label="Points potentiellement manquants"
          value={pointsManquants}
          onChange={setPointsManquants}
          min={0}
          max={1000}
          step={10}
          suffix="points"
        />

        <div className="mt-6 p-5 bg-emerald-light rounded-xl border border-emerald/20 text-[0.88rem] text-emerald-2 leading-relaxed">
          <strong className="font-bold">Méthode de calcul</strong> — La pension
          complémentaire annuelle brute égale le total de points multiplié par
          la valeur de service du point, fixée à{" "}
          <strong>{fmt(VALEUR_SERVICE)} €</strong> en 2026. Estimation hors
          coefficient de solidarité (malus temporaire de 10 % les trois
          premières années si vous partez dès le taux plein).
        </div>
      </section>

      <section className="bg-emerald text-white rounded-[24px] p-8 lg:p-10 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/10 pointer-events-none"
        />
        <div className="relative">
          <div className="text-[0.78rem] font-bold text-sun tracking-[0.12em] uppercase mb-4">
            Votre retraite complémentaire estimée
          </div>

          <div
            className="font-extrabold text-white leading-none my-6 -tracking-[0.03em]"
            style={{ fontSize: "clamp(3.2rem, 7.5vw, 5rem)" }}
          >
            {fmtEur(result.pensionMensuelle)}
            <span className="text-[1.4rem] font-bold text-white/70"> / mois</span>
          </div>

          <div className="text-white/85 text-[1rem] mb-8">
            soit{" "}
            <strong className="text-sun font-bold">
              {fmtEur(result.pensionAnnuelle)} / an
            </strong>{" "}
            bruts, sur la base de {fmt(points)} points.
          </div>

          <div className="border-t border-white/15 pt-5 mb-8">
            <div className="text-[0.78rem] font-bold text-sun tracking-[0.12em] uppercase mb-3">
              Si {fmt(pointsManquants)} points manquent sur votre relevé
            </div>
            <div className="text-white/90 text-[1rem] leading-relaxed">
              vous perdriez{" "}
              <strong className="text-sun font-bold">
                {fmtEur(result.perteMensuelle)} / mois
              </strong>
              , soit{" "}
              <strong className="text-sun font-bold">
                {fmtEur(result.perteTotale)}
              </strong>{" "}
              sur {ESPERANCE} ans de retraite.
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://smartretraite.fr/analyse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sun text-ink no-underline px-6 py-3.5 rounded-pill font-bold text-[0.93rem] hover:bg-white transition-colors"
            >
              Vérifier mes points →
            </a>
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "Estimateur de pension AGIRC-ARRCO",
                      text: `Ma retraite complémentaire AGIRC-ARRCO estimée : ${fmtEur(result.pensionMensuelle)} / mois.`,
                      url: window.location.href,
                    })
                    .catch(() => {});
                } else {
                  navigator.clipboard?.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3.5 rounded-pill font-semibold text-[0.88rem] hover:bg-white/20 transition-colors"
            >
              Partager ce résultat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
