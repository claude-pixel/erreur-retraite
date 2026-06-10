---
name: retraite-reglementation
description: Source unique des chiffres et règles retraite 2026 pour les articles erreur-retraite.fr — paramètres par régime (CARMF, CIPAV, CARPIMKO, CNAV/SSI, AGIRC-ARRCO, CNBF, MSA, fonctionnaires…) extraits du Mémento de la protection sociale 2026, avec traçabilité fiche/page. À utiliser pour toute rédaction ou vérification d'article retraite, valeur de point, âge de départ, décote, réversion.
---

# retraite-reglementation — chiffres et règles 2026

Source unique des valeurs réglementaires pour le pipeline éditorial erreur-retraite.fr.
Extrait du **Mémento de la protection sociale, version 2026** (fiches n°1 à 32, p. 4-113).
Original : `~/Desktop/Smartstatut/Mémento 2026.pdf`. La section prévoyance (fiches 33-48)
n'est pas couverte.

## Règles d'usage (contrat du brief « citation-ready »)

1. **Aucun chiffre inventé.** Toute valeur citée dans un article provient d'un fichier
   `regimes/*.md` ci-dessous. Si la valeur n'y est pas : jeton + `{/* À SOURCER */}`,
   jamais d'estimation.
2. **Dater chaque chiffre.** Reprendre le millésime exact du fichier (« 77,14 € en 2026 »,
   « 21,28 € en 2025 »). ⚠️ Plusieurs caisses n'ont que des valeurs **2025** dans le
   Mémento (CIPAV, CARPIMKO complémentaire, RCI, CARCDSF, CARPV, CPRN, MSA) — ne jamais
   les présenter comme des valeurs 2026.
3. **Réforme suspendue.** Tous les tableaux d'âges intègrent la « suspension de la réforme
   des retraites applicable au 1er septembre 2026 » (formulation du Mémento). Les articles
   doivent refléter cet état du droit, pas les paliers antérieurs.
4. **Conflits Mémento vs corrections éditoriales.** Si le Mémento contredit une correction
   YMYL déjà actée sur le site (ex. coefficient de solidarité AGIRC-ARRCO, voir
   carriere-longue.md), la correction du site prime — signaler à CHP en PR.
5. **Traçabilité.** Chaque fichier régime cite sa fiche et ses pages. En cas de doute,
   relire la fiche dans le PDF avant publication.
6. Lors de la bascule Mémento 2027 : régénérer les fichiers et incrémenter `ANNEE` dans
   `scripts/validate-article.mjs`.

## Index des fichiers

| Fichier | Contenu | Fiches |
|---|---|---|
| [regimes/00-transversal.md](regimes/00-transversal.md) | Panorama des régimes, âges légaux, trimestres requis, validation des trimestres, données sociales (SMIC, PASS) | 1-3 |
| [regimes/regime-general-base.md](regimes/regime-general-base.md) | Base CNAV / MSA salarié / SSI (SAM, taux, LURA, décote, surcote, réversion), minimum contributif | 4-5 |
| [regimes/agirc-arrco.md](regimes/agirc-arrco.md) | Complémentaire des salariés (point 1,4386 €, décote, majorations) | 6 |
| [regimes/ircantec.md](regimes/ircantec.md) | Complémentaire des contractuels publics | 7 |
| [regimes/ssi-rci.md](regimes/ssi-rci.md) | Complémentaire RCI des artisans-commerçants | 8 |
| [regimes/fonctionnaires.md](regimes/fonctionnaires.md) | Base SRE/CRNACL (traitement indiciaire, 75 %) + RAFP | 9-10 |
| [regimes/cnavpl-base.md](regimes/cnavpl-base.md) | Base de toutes les professions libérales (hors avocats) | 11 |
| [regimes/cipav.md](regimes/cipav.md) | Complémentaire CIPAV (architectes, ostéopathes, psychologues…) | 12 |
| [regimes/carpimko.md](regimes/carpimko.md) | Complémentaire + ASV des auxiliaires médicaux (infirmiers, kinés…) | 13-14 |
| [regimes/carmf.md](regimes/carmf.md) | Complémentaire + ASV des médecins (point 77,14 € en 2026) | 15-16 |
| [regimes/carcdsf.md](regimes/carcdsf.md) | Complémentaire + PCV des chirurgiens-dentistes et sages-femmes | 17-19 |
| [regimes/cavp.md](regimes/cavp.md) | Pharmaciens : répartition + capitalisation, supplémentaire biologistes | 20-21 |
| [regimes/carpv.md](regimes/carpv.md) | Complémentaire des vétérinaires | 22 |
| [regimes/cavec.md](regimes/cavec.md) | Complémentaire des experts-comptables | 23 |
| [regimes/cprn.md](regimes/cprn.md) | Complémentaire des notaires (sections B et C) | 24 |
| [regimes/cavom.md](regimes/cavom.md) | Complémentaire des officiers ministériels | 25 |
| [regimes/cavamac.md](regimes/cavamac.md) | Complémentaire des agents généraux d'assurance | 26 |
| [regimes/cnbf.md](regimes/cnbf.md) | Avocats : base forfaitaire + complémentaire | 27-28 |
| [regimes/msa-exploitant.md](regimes/msa-exploitant.md) | Exploitants agricoles : base (AVI/AVA) + RCO | 29-30 |
| [regimes/carriere-longue.md](regimes/carriere-longue.md) | Départ anticipé carrière longue (conditions par génération) | 31 |
| [regimes/retraite-progressive.md](regimes/retraite-progressive.md) | Retraite progressive (salariés, TNS, exploitants) | 32 |

## Données sociales de référence (rappel rapide)
- SMIC horaire au 1er janvier : 12,02 € · PASS : 48 060 € · PMSS : 4 005 €
  (libellées « données sociales 2025 » dans le Mémento, fiche n°3)
- Trimestres requis : 167 (né en 1960) → 172 (à compter de 1966)
- Âge légal : 62 ans (avant 09/1961) → 64 ans (à compter de 1969) ; taux plein : 67 ans
