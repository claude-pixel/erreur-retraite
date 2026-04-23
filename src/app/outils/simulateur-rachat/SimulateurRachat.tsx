"use client";

import { useState, useMemo } from "react";
import { NumberField, SliderField } from "@/components/tools/Inputs";
import {
  ResultPanel,
  ResultRow,
  Verdict,
} from "@/components/tools/ResultPanel";
import { fmtEur } from "@/lib/format";

const BAREME_2026 = [
  { min: 20, max: 29, ratio: 0.0635, plafond: 1800 },
  { min: 30, max: 39, ratio: 0.0735, plafond: 2200 },
  { min: 40, max: 49, ratio: 0.091, plafond: 3400 },
  { min: 50, max: 54, ratio: 0.1105, plafond: 4500 },
  { min: 55, max: 59, ratio: 0.1225, plafond: 5400 },
  { min: 60, max: 66, ratio: 0.1325, plafond: 6400 },
] as const;

function coutUnitaire(age: number, revenu: number) {
  const tranche = BAREME_2026.find((t) => age >= t.min && age <= t.max) ?? BAREME_2026[BAREME_2026.length - 1];
  return Math.min(revenu * tranche.ratio, tranche.plafond);
}

function getVerdict(seuil: number, esperance: number): { label: string; tone: "green" | "amber" | "red" } {
  if (seuil <= 0) return { label: "Calcul impossible", tone: "red" };
  if (seuil < esperance * 0.5) return { label: "Rachat très rentable", tone: "green" };
  if (seuil < esperance * 0.8) return { label: "Rachat rentable", tone: "green" };
  if (seuil < esperance) return { label: "Rachat juste rentable", tone: "amber" };
  return { label: "Un PER serait probablement plus rentable", tone: "red" };
}

export function SimulateurRachat() {
  const [age, setAge] = useState(50);
  const [revenu, setRevenu] = useState(45000);
  const [nbTrimestres, setNbTrimestres] = useState(4);
  const [pensionEstimee, setPensionEstimee] = useState(1800);
  const esperance = 22;
  const mti = 0.3;

  const result = useMemo(() => {
    const coutUnit = coutUnitaire(age, revenu);
    const coutTotal = coutUnit * nbTrimestres;
    const gainPct = (nbTrimestres * 1.25) / 100;
    const gainMens = pensionEstimee * gainPct;
    const gainAn = gainMens * 12;
    const gainTotal = gainAn * esperance;
    const economieFiscale = coutTotal * mti;
    const coutNet = coutTotal - economieFiscale;
    const seuilAns = gainAn > 0 ? coutNet / gainAn : 0;
    const perCapital = coutNet * Math.pow(1.05, 20);
    const verdict = getVerdict(seuilAns, esperance);
    return {
      coutUnit,
      coutTotal,
      coutNet,
      economieFiscale,
      gainMens,
      gainAn,
      gainTotal,
      seuilAns,
      perCapital,
      verdict,
    };
  }, [age, revenu, nbTrimestres, pensionEstimee]);

  return (
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
      <section className="bg-paper border border-rule rounded-[24px] p-8 lg:p-10">
        <h2 className="text-[1.3rem] font-bold text-ink mb-6">Vos paramètres</h2>

        <SliderField
          label="Votre âge actuel"
          value={age}
          onChange={setAge}
          min={30}
          max={66}
          suffix="ans"
        />

        <NumberField
          label="Votre revenu annuel net imposable"
          value={revenu}
          onChange={setRevenu}
          suffix="€ / an"
          min={15000}
          max={250000}
          step={1000}
          hint="Référence pour le barème CNAV"
        />

        <SliderField
          label="Nombre de trimestres à racheter"
          value={nbTrimestres}
          onChange={setNbTrimestres}
          min={1}
          max={12}
          suffix="trimestre(s)"
        />

        <NumberField
          label="Votre pension estimée au taux plein"
          value={pensionEstimee}
          onChange={setPensionEstimee}
          suffix="€ / mois"
          min={800}
          max={8000}
          step={50}
          hint="Brut avant rachat"
        />

        <div className="mt-6 p-5 bg-bg-2 rounded-xl text-[0.85rem] text-ink-2 leading-relaxed">
          <strong className="font-bold text-ink">Hypothèses retenues</strong> —
          Espérance de retraite : 22 ans. Taux marginal d'imposition : 30 %.
          Rendement PER alternatif : 5 %/an. Barème officiel CNAV 2026 option 2
          (taux + durée).
        </div>
      </section>

      <ResultPanel>
        <div className="mb-2 text-[0.78rem] font-bold text-sun tracking-[0.12em] uppercase">
          Votre analyse personnalisée
        </div>
        <div className="text-white/70 text-[0.92rem] mb-6">
          Rachat de {nbTrimestres} trimestre{nbTrimestres > 1 ? "s" : ""} à {age} ans
        </div>

        <div className="border-t border-white/10 pt-3">
          <ResultRow label="Coût unitaire par trimestre" value={fmtEur(result.coutUnit)} />
          <ResultRow label="Coût brut total" value={fmtEur(result.coutTotal)} />
          <ResultRow
            label="Économie d'impôt (MTI 30 %)"
            value={"− " + fmtEur(result.economieFiscale)}
          />
          <ResultRow
            label="Coût net après fiscalité"
            value={fmtEur(result.coutNet)}
            highlight
          />
        </div>

        <div className="mt-5 border-t border-white/10 pt-3">
          <ResultRow label="Gain de pension mensuel" value={"+ " + fmtEur(result.gainMens)} />
          <ResultRow label="Gain annuel" value={"+ " + fmtEur(result.gainAn)} />
          <ResultRow
            label="Gain total sur 22 ans"
            value={"+ " + fmtEur(result.gainTotal)}
            highlight
          />
        </div>

        <div className="mt-5 border-t border-white/10 pt-3">
          <ResultRow
            label="Seuil de rentabilité"
            value={`${result.seuilAns.toFixed(1)} ans`}
          />
          <ResultRow
            label="Alternative PER à 5 %/an sur 20 ans"
            value={"≈ " + fmtEur(result.perCapital)}
          />
        </div>

        <Verdict label={result.verdict.label} tone={result.verdict.tone} />

        <a
          href="https://smartretraite.fr/analyse"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block text-center bg-sun text-ink no-underline px-6 py-4 rounded-pill font-bold text-[0.95rem] hover:bg-white transition-colors"
        >
          Audit retraite personnalisé →
        </a>
      </ResultPanel>
    </div>
  );
}
