# Positions — avis argumentés de Claude-Henri Poitou (sujets à débat)

> **Usage pipeline** : quand un article touche un des sujets ci-dessous (champ `sujets:` croisé
> avec le thème de l'article), Claude Code intègre la position — reformulée mais fidèle au fond —
> et l'encadre du marqueur `{/* POSITION */}`.
> ⚠️ Syntaxe MDX : commentaire JSX `{/* ... */}`, jamais `<!-- -->` (casse la compilation).
>
> **Règles** :
> - Le fond (la position et ses arguments) est écrit par Claude-Henri. Le pipeline peut reformuler
>   le style, jamais inverser ou édulcorer la position.
> - Pas de « ça dépend » neutre : chaque position tranche, puis précise les exceptions.
> - Structure imposée : position en une phrase → 2-3 arguments → exception(s) assumée(s).

---

## Format d'une entrée

```yaml
- id: pos-rachat-trimestres
  sujets: [rachat, trimestres]      # mots-clés croisés avec le thème de l'article
  regimes: [tous]                    # ou liste : [carmf, cnav]
  position: >
    [Une phrase qui tranche.]
  arguments:
    - >
      [Argument 1, chiffré si possible.]
    - >
      [Argument 2.]
  exceptions: >
    [Le ou les cas où la position s'inverse — assumés explicitement.]
```

---

## Entrées

> Positions validées par Claude-Henri le 01/09/2026 (sauf pos-per-vs-av, encore à rédiger),
> nourries de dossiers clients réels du cabinet.

- id: pos-rachat-trimestres
  sujets: [rachat, trimestres, versement-pour-la-retraite]
  regimes: [tous]
  position: >
    Ne rachetez jamais un trimestre avant d'avoir fait corriger votre relevé de carrière —
    et rarement loin de la liquidation.
  arguments:
    - >
      Une pension nouvellement attribuée sur neuf comporte une erreur financière (Cour des
      comptes, certification du régime général, exercice 2025) : des trimestres gratuits
      dorment souvent sur le relevé — absurde de payer pour ce qui vous est déjà dû.
    - >
      Le coût net dépend de la tranche d'imposition l'année du versement : un rachat
      déductible à TMI 41 % coûte presque moitié moins cher que le même à TMI 11 %. La fin
      de carrière, malgré un barème plus élevé, est souvent la meilleure fenêtre fiscale.
    - >
      Selon le statut, des leviers moins chers existent : retraite progressive,
      surcotisation du temps partiel, ou simplement un trimestre travaillé de plus.
  exceptions: >
    Une carrière courte certaine peut justifier un rachat jeune au barème bas, si la
    trésorerie le permet. Et le piège inverse existe : quand la décote est verrouillée par
    l'âge (fréquent dans la fonction publique), racheter de la « durée d'assurance » ne sert
    à rien — seule l'option agissant sur la liquidation a un effet.

- id: pos-per-vs-av
  sujets: [per, assurance-vie, epargne-retraite, madelin]
  regimes: [tous]
  position: >
    [À RÉDIGER PAR CHP — ta position construite sur PFL 7,5 % vs sortie en capital,
    à formaliser ici : la phrase qui tranche + 2 arguments + exceptions.]
  arguments:
    - >
      [.]
  exceptions: >
    [.]

- id: pos-reforme-effets-reels
  sujets: [reforme, age-legal, duree-cotisation]
  regimes: [tous]
  position: >
    La suspension de la réforme ne change la date de départ que d'une minorité : les
    générations 1963 à début 1965 gagnent quelques mois — pour tous les autres, rien ne
    bouge, et repousser sa préparation à cause du bruit médiatique est la vraie erreur.
  arguments:
    - >
      Le gel fixe l'âge légal à 62 ans et 9 mois et la durée à 170 trimestres pour les
      seules naissances de janvier 1963 à début 1965 ; à partir de 1969, les 64 ans
      s'appliquent comme prévu.
    - >
      Pendant que le débat public occupe l'attention, les vraies pertes se jouent ailleurs :
      sur les relevés de carrière, où les erreurs ne dépendent d'aucune réforme.
  exceptions: >
    Les assurés à la frontière des générations gelées ont, eux, un vrai calcul à faire —
    quelques mois d'écart peuvent changer une décote ou une éligibilité carrière longue.

- id: pos-cumul-emploi-retraite
  sujets: [cumul, cumul-emploi-retraite]
  regimes: [tous]
  position: >
    Si le cumul emploi-retraite fait partie de votre projet, liquider avant le
    1er janvier 2027 est presque toujours la bonne décision : l'ancien régime se conserve
    à vie.
  arguments:
    - >
      La réforme (article 102 de la LFSS 2026) durcit le cumul pour les pensions prenant
      effet à compter du 1er janvier 2027 : franchise de l'ordre de 7 000 € par an, puis
      écrêtement de 50 % au-delà, selon l'âge.
    - >
      Une pension liquidée avant cette date reste régie par les règles actuelles pour toute
      sa durée — c'est un droit acquis, pas une fenêtre temporaire.
  exceptions: >
    Attendre reste gagnant quand la surcote ou des trimestres manquants pèsent plus lourd
    que la liberté de cumul — et à partir de 67 ans, le nouveau régime rouvre des droits.
    Chaque dossier se chiffre.

- id: pos-verification-ris
  sujets: [ris, releve-de-carriere, verification, anomalies]
  regimes: [tous]
  position: >
    Un relevé de carrière n'est pas une vérité, c'est une déclaration à contrôler — au plus
    tard trois ans avant le départ, et une première fois dès 45 ans.
  arguments:
    - >
      Une pension nouvellement attribuée sur neuf comporte une erreur financière (Cour des
      comptes, certification du régime général, exercice 2025) — et les caisses ne corrigent
      pas spontanément : c'est à l'assuré de réclamer, preuves à l'appui.
    - >
      Plus l'erreur est ancienne, plus la preuve est difficile : employeurs disparus,
      bulletins égarés, archives non numérisées. Attendre 55 ans, c'est vérifier au moment
      où les justificatifs des années 1990 deviennent introuvables.
    - >
      Les simulateurs — officiels ou payants — projettent à partir du relevé sans le
      contrôler, et se trompent sur les carrières non linéaires : sur des dossiers réels,
      une libérale classée dans la mauvaise caisse, une fonctionnaire dont le taux plein
      acquis était invisible sur le RIS.
  exceptions: >
    Une carrière strictement linéaire, mono-régime, chez de grands employeurs, réduit
    fortement le risque — le contrôle y est rapide, mais reste utile avant liquidation.

{/* Ajouter au fil de l'eau : dividendes vs rémunération (lien SmartDirigeant), */}
{/* liquidation anticipée carrière longue, surcote vs départ, etc. */}
