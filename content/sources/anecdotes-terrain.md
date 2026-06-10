# Anecdotes terrain — source unique pour l'élément « praticien »

> **Usage pipeline** : pour chaque article, Claude Code pioche l'entrée correspondant au régime
> (champ `regime:`), l'intègre dans la section « Erreurs fréquentes » ou « Comment se calcule »,
> et l'encadre du marqueur `{/* PRATICIEN */}` (vérifié par scripts/validate-article.mjs).
> ⚠️ Syntaxe MDX : commentaire JSX `{/* ... */}`, jamais `<!-- -->` (casse la compilation).
>
> **Règles** :
> - Une entrée = 2-4 lignes max, écrites par Claude-Henri uniquement. Jamais générées.
> - Toujours anonymisé : profession + secteur OK, jamais de nom, ville, ou détail identifiant.
> - Chiffrer quand possible (« X €/an de pension perdue ») — c'est ce qui rend l'anecdote incopiable.
> - Un même régime peut avoir plusieurs entrées : le pipeline prend la première non encore utilisée
>   (champ `utilise_dans:` mis à jour à chaque génération pour éviter les doublons inter-articles).

---

## Format d'une entrée

```yaml
- id: carmf-001
  regime: carmf
  theme: asv          # asv | trimestres | points | sam | mda | cumul | rachat | affiliation
  utilise_dans: []     # rempli par le pipeline, ex: [retraite-carmf-2026]
  texte: >
    Sur un dossier de médecin secteur 1, [décrire l'anomalie précise constatée],
    soit [montant] €/an de pension perdue. [La nuance que seul un praticien connaît.]
```

---

## Entrées

### CARMF
- id: carmf-001
  regime: carmf
  theme: asv
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP — ex. : trimestre ASV non reporté sur un dossier secteur 1,
    impact chiffré, et la subtilité de vérification que personne ne connaît.]

### CARPIMKO
- id: carpimko-001
  regime: carpimko
  theme: points
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP]

### CIPAV
- id: cipav-001
  regime: cipav
  theme: affiliation
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP — ex. : bascule SSI/CIPAV mal gérée pour un auto-entrepreneur, conséquence.]

### CNAV (régime général)
- id: cnav-001
  regime: cnav
  theme: sam
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP — ex. : année incomplète intégrée à tort dans le SAM.]

### AGIRC-ARRCO
- id: agirc-arrco-001
  regime: agirc-arrco
  theme: points
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP — ex. : points non reportés lors d'un changement d'employeur, lien revue de masse 2026.]

### SSI
- id: ssi-001
  regime: ssi
  theme: trimestres
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP]

### MSA
- id: msa-001
  regime: msa
  theme: trimestres
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP]

### IRCANTEC
- id: ircantec-001
  regime: ircantec
  theme: points
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP]

### Fonctionnaires
- id: fonctionnaires-001
  regime: fonctionnaires
  theme: trimestres
  utilise_dans: []
  texte: >
    [À RÉDIGER PAR CHP]

{/* Dupliquer le bloc pour les autres régimes du skill : CAVEC, CAVP, CPRN, CAVAMAC, CAVOM, CRPCEN, CNBF, CARCDSF, CARPV, etc. */}
{/* Objectif minimum : 1 entrée par régime couvert par le plan éditorial = pipeline débloqué. */}
