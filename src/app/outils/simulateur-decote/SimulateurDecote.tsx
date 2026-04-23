"use client";

import { useState, useMemo } from "react";
import { NumberField, SliderField } from "@/components/tools/Inputs";
import {
  ResultPanel,
  BigNumber,
  ResultRow,
} from "@/components/tools/ResultPanel";
import { fmtEur, fmtPct } from "@/lib/format";

export function SimulateurDecote() {
  const [pension, setPension] = useState(1500);
  const [trimestres, setTrimestres] = useState(4);
  const [ageDepart, setAgeDepart] = useState(62);

  const result = useMemo(() => {
    const tauxDecote = Math.min(trimestres * 1.25, 25);
    const pensionApres = pension * (1 - tauxDecote / 100);
    const perteMens = pension - pensionApres;
    const perteAn = perteMens * 12;
    const perte20 = perteAn * 20;
    return { tauxDecote, pensionApres, perteMens, perteAn, perte20 };
  }, [pension, trimestres]);

  return (
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
      <section className="bg-paper border border-rule rounded-[24px] p-8 lg:p-10">
        <h2 className="text-[1.3rem] font-bold text-ink mb-6">Vos paramètres</h2>

        <NumberField
          label="Votre pension mensuelle estimée au taux plein"
          value={pension}
          onChange={setPension}
          suffix="€ / mois"
          min={500}
          max={10000}
          step={50}
          hint="Montant brut avant décote"
        />

        <SliderField
          label="Nombre de trimestres manquants"
          value={trimestres}
          onChange={setTrimestres}
          min={1}
          max={20}
          suffix="trimestre(s)"
        />

        <SliderField
          label="Âge de départ envisagé"
          value={ageDepart}
          onChange={setAgeDepart}
          min={62}
          max={67}
          suffix="ans"
        />

        <div className="mt-8 p-5 bg-emerald-light rounded-xl border border-emerald/20 text-[0.9rem] text-emerald-2 leading-relaxed">
          <strong className="font-bold">Bon à savoir</strong> — Vos trimestres
          manquants sont peut-être récupérables par rectification de votre
          relevé de carrière. Avant tout calcul, vérifiez la complétude de
          votre RIS sur info-retraite.fr.
        </div>
      </section>

      <ResultPanel>
        <div className="mb-2 text-[0.78rem] font-bold text-sun tracking-[0.12em] uppercase">
          Votre pension après décote
        </div>
        <BigNumber value={fmtEur(result.pensionApres)} unit="/ mois" />
        <div className="text-white/70 text-[0.9rem] mt-2 mb-6">
          au lieu de <strong className="text-white font-bold">{fmtEur(pension)}</strong>
        </div>

        <div className="border-t border-white/10 pt-4">
          <ResultRow
            label="Perte mensuelle"
            value={"− " + fmtEur(result.perteMens)}
          />
          <ResultRow
            label="Perte annuelle"
            value={"− " + fmtEur(result.perteAn)}
          />
          <ResultRow
            label="Perte sur 20 ans de retraite"
            value={"− " + fmtEur(result.perte20)}
            highlight
          />
          <ResultRow
            label="Taux de décote appliqué"
            value={fmtPct(result.tauxDecote, 2)}
          />
        </div>

        <a
          href="https://smartretraite.fr/analyse"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 block text-center bg-sun text-ink no-underline px-6 py-4 rounded-pill font-bold text-[0.95rem] hover:bg-white transition-colors"
        >
          Vérifier mon relevé avec SmartRetraite →
        </a>
      </ResultPanel>
    </div>
  );
}
