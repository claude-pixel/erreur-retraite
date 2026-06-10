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

- id: pos-rachat-trimestres
  sujets: [rachat, trimestres, versement-pour-la-retraite]
  regimes: [tous]
  position: >
    [À RÉDIGER PAR CHP — ex. : « Le rachat de trimestres n'est rentable que dans une fenêtre
    étroite : à plus de N années de la liquidation, c'est presque toujours une erreur. »]
  arguments:
    - >
      [Argument fiscal / TMI.]
    - >
      [Argument rendement vs alternative (PER, etc.).]
  exceptions: >
    [Cas où ça s'inverse : ex. fin de carrière + TMI élevée + décote évitée.]

- id: pos-per-vs-av
  sujets: [per, assurance-vie, epargne-retraite, madelin]
  regimes: [tous]
  position: >
    [À RÉDIGER PAR CHP — tu as déjà une position construite sur PFL 7,5 % vs sortie en capital,
    à formaliser ici.]
  arguments:
    - >
      [.]
  exceptions: >
    [.]

- id: pos-reforme-effets-reels
  sujets: [reforme, age-legal, duree-cotisation]
  regimes: [tous]
  position: >
    [À RÉDIGER PAR CHP — effet réel de la réforme (et de sa suspension au 01/09/2026)
    sur les profils TNS/libéraux vs le discours médiatique.]
  arguments:
    - >
      [.]
  exceptions: >
    [.]

- id: pos-cumul-emploi-retraite
  sujets: [cumul, cumul-emploi-retraite]
  regimes: [tous]
  position: >
    [À RÉDIGER PAR CHP — ex. : cumul intégral vs plafonné, stratégie de liquidation pour TNS.]
  arguments:
    - >
      [.]
  exceptions: >
    [.]

- id: pos-verification-ris
  sujets: [ris, releve-de-carriere, verification, anomalies]
  regimes: [tous]
  position: >
    [À RÉDIGER PAR CHP — position « maison » : à quelle fréquence vérifier, pourquoi les caisses
    ne corrigent pas spontanément, pourquoi attendre 55 ans est une erreur. C'est LA position
    fondatrice d'erreur-retraite.fr, elle doit être tranchée et reprise partout.]
  arguments:
    - >
      [.]
  exceptions: >
    [.]

{/* Ajouter au fil de l'eau : dividendes vs rémunération (lien SmartDirigeant), */}
{/* liquidation anticipée carrière longue, surcote vs départ, etc. */}
