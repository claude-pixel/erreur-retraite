"use client";

import { useState, useMemo } from "react";
import { NumberField, SliderField } from "@/components/tools/Inputs";
import { fmtEur } from "@/lib/format";

function genererEquivalences(montant: number): string[] {
  const eq: string[] = [];
  if (montant >= 30000) eq.push("une voiture neuve de milieu de gamme");
  if (montant >= 20000) {
    const n = Math.floor(montant / 20000);
    eq.push(`${n} tour${n > 1 ? "s" : ""} du monde en croisière`);
  }
  if (montant >= 15000) {
    const n = Math.floor(montant / 15000);
    eq.push(`${n} année${n > 1 ? "s" : ""} de loyer d'un studio à Paris`);
  }
  if (montant >= 5000) {
    const n = Math.floor(montant / 5000);
    eq.push(`${n} voyage${n > 1 ? "s" : ""} long-courrier en famille`);
  }
  if (montant >= 2500 && eq.length < 3) {
    const n = Math.floor(montant / 2500);
    eq.push(`${n} séjour${n > 1 ? "s" : ""} d'une semaine au ski`);
  }
  return eq.slice(0, 3);
}

export function AnneeManquante() {
  const [pension, setPension] = useState(1500);
  const [esperance, setEsperance] = useState(22);

  const result = useMemo(() => {
    const tauxDecote = 0.05; // 1 year = 4 trimestres * 1.25% = 5%
    const perteMens = pension * tauxDecote;
    const perteAn = perteMens * 12;
    const perteTotale = perteAn * esperance;
    const equivalences = genererEquivalences(perteTotale);
    return { perteMens, perteAn, perteTotale, equivalences };
  }, [pension, esperance]);

  return (
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
      <section className="bg-paper border border-rule rounded-[24px] p-8 lg:p-10">
        <h2 className="text-[1.3rem] font-bold text-ink mb-6">Deux paramètres suffisent</h2>

        <NumberField
          label="Votre pension mensuelle estimée"
          value={pension}
          onChange={setPension}
          suffix="€ / mois"
          min={500}
          max={8000}
          step={50}
          hint="Au taux plein, avant décote"
        />

        <SliderField
          label="Durée de retraite attendue"
          value={esperance}
          onChange={setEsperance}
          min={15}
          max={30}
          suffix="ans"
        />

        <div className="mt-6 p-5 bg-emerald-light rounded-xl border border-emerald/20 text-[0.88rem] text-emerald-2 leading-relaxed">
          <strong className="font-bold">Méthode de calcul</strong> — Une année
          manquante équivaut à quatre trimestres, soit 5 % de décote définitive
          sur la pension. Le calcul projette cette perte sur l'ensemble de
          votre retraite.
        </div>
      </section>

      <section className="bg-emerald text-white rounded-[24px] p-8 lg:p-10 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/10 pointer-events-none"
        />
        <div className="relative">
          <div className="text-[0.78rem] font-bold text-sun tracking-[0.12em] uppercase mb-4">
            Une seule année manquante
          </div>
          <h3 className="text-[1.1rem] text-white/85 mb-4 leading-snug font-medium">
            sur votre relevé de carrière vous coûterait :
          </h3>

          <div
            className="font-extrabold text-white leading-none my-6 -tracking-[0.03em]"
            style={{ fontSize: "clamp(3.5rem, 8vw, 5.5rem)" }}
          >
            {fmtEur(result.perteTotale)}
          </div>

          <div className="text-white/85 text-[1rem] mb-8">
            sur {esperance} ans de retraite, soit{" "}
            <strong className="text-sun font-bold">
              {fmtEur(result.perteMens)} / mois
            </strong>{" "}
            à vie.
          </div>

          {result.equivalences.length > 0 ? (
            <div className="border-t border-white/15 pt-5 mb-8">
              <div className="text-[0.78rem] font-bold text-sun tracking-[0.12em] uppercase mb-3">
                C'est l'équivalent de
              </div>
              <ul className="space-y-2.5 list-none p-0">
                {result.equivalences.map((e, i) => (
                  <li key={i} className="flex gap-3 items-start text-white/90 text-[0.95rem]">
                    <span className="w-1.5 h-1.5 rounded-full bg-sun mt-2 flex-shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <a
              href="https://smartretraite.fr/analyse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sun text-ink no-underline px-6 py-3.5 rounded-pill font-bold text-[0.93rem] hover:bg-white transition-colors"
            >
              Vérifier mon relevé →
            </a>
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Combien me coûte une année manquante ?",
                    text: `J'ai découvert qu'une seule année manquante sur mon relevé de retraite me coûterait ${fmtEur(result.perteTotale)} sur ${esperance} ans.`,
                    url: window.location.href,
                  }).catch(() => {});
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
