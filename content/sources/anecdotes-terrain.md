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

> Entrées ci-dessous : validées par Claude-Henri le 01/09/2026, à partir de dossiers
> clients réels du cabinet (anonymisés).

### CNAV (régime général)
- id: cnav-001
  regime: cnav
  theme: mda
  utilise_dans: []
  texte: >
    Sur un dossier de salarié père de quatre enfants, deux seulement étaient enregistrés
    au dossier retraite. Sans correction, la majoration de 10 % pour trois enfants et plus
    serait passée à la trappe au moment de la liquidation — personne ne croise ces fichiers
    à votre place.

- id: cnav-002
  regime: cnav
  theme: rachat
  utilise_dans: [surcote-retraite-optimisation]
  texte: >
    Rachat de trimestres envisagé sur un dossier de salarié en fin de carrière, puis écarté
    après vérification du barème réel à son âge : la retraite progressive combinée à la
    surcotisation du temps partiel donnait un meilleur résultat, pour un coût nettement
    inférieur. Le rachat n'est jamais le premier levier à examiner.

- id: cnav-003
  regime: cnav
  theme: rachat
  utilise_dans: []
  texte: >
    Sur un rachat de 10 trimestres validé (+423 €/mois de pension à terme), la vraie question
    n'était pas « si » mais « quand » : entre un versement immédiat et le même rachat huit ans
    plus tard, l'écart net atteignait plusieurs milliers d'euros selon la tranche d'imposition
    de chaque fenêtre.

- id: cnav-004
  regime: cnav
  theme: trimestres
  utilise_dans: []
  texte: >
    Des années cotisées en Allemagne n'ont pu être totalisées que grâce au numéro d'assuré
    allemand (DRV) que le client avait oublié — retrouvé dans de vieux papiers. Sans ce numéro,
    la coordination européenne serait restée incomplète, et des trimestres perdus.

### AGIRC-ARRCO
- id: agirc-arrco-001
  regime: agirc-arrco
  theme: points
  utilise_dans: [delais-correction-erreur]
  texte: >
    Sur un dossier de salarié parti en retraite cette année, la période de chômage indemnisé
    de fin de carrière manquait au relevé de points — environ 70 €/mois de complémentaire en
    jeu. La subtilité : l'anomalie était invisible sur le RIS, elle ne se voyait que sur le
    relevé actualisé de points. C'est la notification définitive qu'il faut contrôler.

- id: agirc-arrco-002
  regime: agirc-arrco
  theme: points
  utilise_dans: []
  texte: >
    Salarié né en 1964 : trois années 1989-1991 sans aucun point de complémentaire, la caisse
    de l'époque ayant disparu dans les fusions successives. Les bulletins de salaire conservés
    ont permis de demander la reconstitution — sans eux, rien n'était récupérable.

### Fonctionnaires
- id: fonctionnaires-001
  regime: fonctionnaires
  theme: mda
  utilise_dans: [taux-plein-automatique-67]
  texte: >
    Fonctionnaire détachée dont le relevé laissait croire à une décote : ses 16 trimestres de
    majoration pour enfants donnaient en réalité le taux plein. Départ possible deux ans plus
    tôt qu'elle ne le pensait — le RIS ne fait pas ce calcul à votre place.

- id: fonctionnaires-002
  regime: fonctionnaires
  theme: rachat
  utilise_dans: []
  texte: >
    Sur un dossier d'enseignante, la décote était verrouillée par l'âge, pas par la durée
    d'assurance : racheter des trimestres « durée » n'aurait strictement rien changé. Seule
    l'option agissant sur la liquidation avait un effet réel sur la pension. Vérifier QUELLE
    borne crée la décote avant de sortir le chéquier.

### MSA
- id: msa-001
  regime: msa
  theme: trimestres
  utilise_dans: [audit-retraite-methodologie]
  texte: >
    Exploitant agricole, père de famille nombreuse : l'AVPF s'était arrêtée en 2004 sans que
    personne ne le signale, et une dette de cotisations MSA bloquait la validation de
    trimestres pourtant travaillés. Deux anomalies invisibles l'une sans l'autre — le relevé
    semblait « normal ».

### CIPAV
- id: cipav-001
  regime: cipav
  theme: affiliation
  utilise_dans: [retraite-par-regime]
  texte: >
    Une psychomotricienne classée « ingénieur conseil » par un outil professionnel de
    simulation : mauvaise section, mauvais barème, projection fausse. Même les outils payants
    se trompent de caisse — c'est l'attestation d'affiliation CIPAV qui fait foi, pas le
    simulateur.

### CARMF
- id: carmf-001
  regime: carmf
  theme: asv
  utilise_dans: []
  texte: >
    Sur un dossier de médecin secteur 1, des années d'ASV mal créditées : la participation
    des caisses d'assurance maladie n'apparaissait pas sur toutes les années conventionnées.
    L'écart ne se voyait qu'en comparant les points ASV année par année avec les appels de
    cotisations — personne ne fait ce rapprochement spontanément.

### CARPIMKO
- id: carpimko-001
  regime: carpimko
  theme: affiliation
  utilise_dans: []
  texte: >
    Une infirmière passée de l'hôpital au libéral : l'année de la bascule n'était créditée
    nulle part — plus rien côté public, pas encore de points côté CARPIMKO. Une année entière
    tombée entre deux caisses, invisible tant qu'on ne lit pas les deux relevés côte à côte.

### SSI
- id: ssi-001
  regime: ssi
  theme: trimestres
  utilise_dans: []
  texte: >
    Un commerçant avec des années 1990 cotisées à l'ancienne caisse mais zéro trimestre
    validé au relevé : l'assiette avait été mal reportée à l'époque. Les bulletins de
    cotisation conservés ont permis la régularisation — sans papier, rien n'était prouvable.

### IRCANTEC
- id: ircantec-001
  regime: ircantec
  theme: points
  utilise_dans: []
  texte: >
    Une contractuelle de collectivité, titularisée ensuite : ses années de vacations
    relevaient de l'IRCANTEC et n'apparaissaient sur aucun relevé consolidé. Des points
    dormants que ni la CNRACL ni l'IRCANTEC ne signalent d'eux-mêmes.

{/* Dupliquer le bloc pour les autres régimes du skill : CAVEC, CAVP, CPRN, CAVAMAC, CAVOM, CRPCEN, CNBF, CARCDSF, CARPV, etc. */}
{/* Objectif minimum : 1 entrée par régime couvert par le plan éditorial = pipeline débloqué. */}
{/* Les 9 régimes principaux sont couverts (validation CHP 01/09/2026 : cas réellement rencontrés). Restent sans anecdote : les caisses de la liste ci-dessus (CAVEC, CAVP, CPRN, CNBF…). */}
