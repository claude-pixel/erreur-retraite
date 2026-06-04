export type Article = {
  slug: string;
  section: "anomalies" | "dossiers" | "guides";
  rubrique: string;
  titre: string;
  titreHtml: string;
  chapo: string;
  motCle: string;
  volumeSEO: number;
  impact: string;
  tempsLecture: number;
  datePublication: string;
  auteur?: string;
  num?: string;
};

export const articles: Article[] = [
  {
    slug: "trimestres-manquants",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "Trimestres manquants : ces années oubliées qui amputent votre pension",
    titreHtml:
      "Trimestres manquants : ces années <em>oubliées</em> qui amputent votre pension",
    chapo:
      "Service militaire non reporté, périodes de chômage effacées, missions d'intérim oubliées : les trimestres fantômes constituent l'anomalie la plus fréquente des relevés de carrière français.",
    motCle: "trimestres manquants retraite",
    volumeSEO: 1600,
    impact: "50 à 200 €/mois",
    tempsLecture: 8,
    datePublication: "2026-04-20",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "01",
  },
  {
    slug: "points-agirc-arrco",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "AGIRC-ARRCO : l'erreur silencieuse qui grève votre retraite complémentaire",
    titreHtml:
      "AGIRC-ARRCO : l'erreur <em>silencieuse</em> qui grève votre retraite complémentaire",
    chapo:
      "Le régime complémentaire des salariés du privé représente jusqu'à 40 % de la pension totale d'un cadre. La fusion des régimes en 2019 a généré des erreurs de conversion dont les effets se font aujourd'hui sentir.",
    motCle: "points AGIRC-ARRCO erreur",
    volumeSEO: 880,
    impact: "60 à 250 €/mois",
    tempsLecture: 9,
    datePublication: "2026-04-18",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "02",
  },
  {
    slug: "revenus-tns",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "Retraite des indépendants : les revenus mal déclarés qui coûtent des centaines d'euros par mois",
    titreHtml:
      "Retraite des indépendants : les revenus <em>mal déclarés</em> qui coûtent des centaines d'euros par mois",
    chapo:
      "Artisans, commerçants, gérants de SARL, professions libérales : les travailleurs non-salariés présentent le taux d'anomalies de relevé le plus élevé. La complexité des régimes SSI, CIPAV et CNAVPL en est la cause principale.",
    motCle: "retraite TNS erreur",
    volumeSEO: 720,
    impact: "100 à 400 €/mois",
    tempsLecture: 10,
    datePublication: "2026-04-15",
    auteur: "Claude-Henri Poitou",
    num: "03",
  },
  {
    slug: "carriere-etranger",
    section: "anomalies",
    rubrique: "Anomalies · Impact variable",
    titre: "Carrière à l'étranger : les droits oubliés qui peuvent vous être restitués",
    titreHtml:
      "Carrière à l'étranger : les droits <em>oubliés</em> qui peuvent vous être restitués",
    chapo:
      "Expatriation, détachement, carrière européenne : les périodes travaillées hors de France génèrent des droits retraite qui ne s'inscrivent pas automatiquement sur votre relevé français. Navigation dans un maquis réglementaire où les erreurs sont nombreuses et coûteuses.",
    motCle: "retraite carrière étranger",
    volumeSEO: 540,
    impact: "Variable, souvent élevé",
    tempsLecture: 9,
    datePublication: "2026-04-12",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "04",
  },
  {
    slug: "majorations-non-appliquees",
    section: "anomalies",
    rubrique: "Anomalies · Impact modéré",
    titre: "Majorations de retraite : douze droits que les caisses n'appliquent pas toujours",
    titreHtml:
      "Majorations de retraite : <em>douze droits</em> que les caisses n'appliquent pas toujours",
    chapo:
      "Majoration pour enfants, carrière longue, invalidité partielle, aidant familial : des dizaines de dispositifs de majoration existent dans le droit français de la retraite. Tous ne sont pas appliqués automatiquement.",
    motCle: "majoration retraite enfants",
    volumeSEO: 960,
    impact: "40 à 200 €/mois",
    tempsLecture: 7,
    datePublication: "2026-04-10",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "05",
  },
  {
    slug: "rachat-trimestres",
    section: "anomalies",
    rubrique: "Optimisation · À anticiper",
    titre: "Rachat de trimestres : quand est-ce vraiment rentable ?",
    titreHtml:
      "Rachat de trimestres : quand est-ce <em>vraiment</em> rentable ?",
    chapo:
      "Racheter des trimestres d'études ou d'années incomplètes peut permettre d'anticiper son départ en retraite ou d'éviter une décote permanente. Mais l'opération n'est pas toujours financièrement avantageuse.",
    motCle: "rachat trimestres rentable",
    volumeSEO: 590,
    impact: "Décision patrimoniale majeure",
    tempsLecture: 11,
    datePublication: "2026-04-08",
    auteur: "Claude-Henri Poitou",
    num: "06",
  },
  {
    slug: "periodes-chomage",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "Chômage et retraite : comment récupérer les trimestres oubliés",
    titreHtml:
      "Chômage et retraite : comment <em>récupérer</em> les trimestres oubliés",
    chapo:
      "Cinquante jours d'indemnisation par France Travail valident un trimestre assimilé pour la retraite. Pourtant, la transmission entre organismes échoue fréquemment, notamment lors des migrations informatiques successives.",
    motCle: "chômage trimestre retraite",
    volumeSEO: 1100,
    impact: "30 à 120 €/mois",
    tempsLecture: 7,
    datePublication: "2026-04-05",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "07",
  },
  {
    slug: "salaires-sam",
    section: "anomalies",
    rubrique: "Anomalies · Impact majeur",
    titre: "Salaires mal reportés : l'erreur invisible qui réduit votre pension à vie",
    titreHtml:
      "Salaires mal reportés : l'erreur <em>invisible</em> qui réduit votre pension à vie",
    chapo:
      "Votre pension de base est calculée sur la moyenne de vos vingt-cinq meilleures années de salaire. Si un employeur a déclaré incorrectement, ou si une conversion franc-euro a mal été opérée, votre Salaire Annuel Moyen — et donc votre pension — est définitivement amputé.",
    motCle: "SAM salaire annuel moyen erreur",
    volumeSEO: 430,
    impact: "50 à 300 €/mois",
    tempsLecture: 9,
    datePublication: "2026-04-02",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "08",
  },
  {
    slug: "retraite-gerant-sarl",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "Gérant de SARL : les erreurs de retraite selon majoritaire ou minoritaire",
    titreHtml:
      "Gérant de SARL : les erreurs selon <em>majoritaire ou minoritaire</em>",
    chapo:
      "Le statut social du gérant de SARL dépend de sa part dans le capital. Une bascule mal reconstituée entre régime général et SSI peut coûter plusieurs années de droits à la retraite.",
    motCle: "retraite gérant SARL",
    volumeSEO: 390,
    impact: "Variable, souvent élevé",
    tempsLecture: 8,
    datePublication: "2026-04-22",
    auteur: "Claude-Henri Poitou",
    num: "09",
  },
  {
    slug: "retraite-cipav-erreur",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "CIPAV : les anomalies spécifiques aux libéraux non réglementés",
    titreHtml:
      "CIPAV : les anomalies <em>spécifiques</em> aux libéraux non réglementés",
    chapo:
      "La réforme du périmètre CIPAV de 2018, les classes forfaitaires et la gestion historique par points créent un cocktail d'anomalies spécifique à cette caisse.",
    motCle: "CIPAV erreur retraite",
    volumeSEO: 320,
    impact: "80 à 300 €/mois",
    tempsLecture: 8,
    datePublication: "2026-04-22",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "10",
  },
  {
    slug: "retraite-dirigeant-sas",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "Président de SAS : assimilé salarié mais régime particulier",
    titreHtml:
      "Président de SAS : <em>assimilé salarié</em> mais régime particulier",
    chapo:
      "Le président de SAS est affilié au régime général mais n'est pas automatiquement couvert par l'AGIRC-ARRCO, ni par l'assurance chômage. Un statut hybride aux anomalies spécifiques.",
    motCle: "retraite président SAS",
    volumeSEO: 310,
    impact: "Jusqu'à 40 % de la retraite",
    tempsLecture: 8,
    datePublication: "2026-04-22",
    auteur: "Claude-Henri Poitou",
    num: "11",
  },
  {
    slug: "conge-maternite-retraite",
    section: "anomalies",
    rubrique: "Anomalies · Impact élevé",
    titre: "Congé maternité et retraite : l'anomalie féminine la plus fréquente",
    titreHtml:
      "Congé maternité : <em>l'anomalie féminine</em> la plus fréquente",
    chapo:
      "Les congés maternité valident des trimestres assimilés et sont reconstitués à 125 % pour le SAM. Mais les anomalies de report restent massives — et s'ajoutent aux inégalités structurelles de carrière.",
    motCle: "congé maternité retraite trimestres",
    volumeSEO: 580,
    impact: "30 à 150 €/mois",
    tempsLecture: 7,
    datePublication: "2026-04-22",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "12",
  },
  {
    slug: "retraite-pluriactivite",
    section: "anomalies",
    rubrique: "Anomalies · Impact variable",
    titre: "Pluriactivité : quand cotiser à deux régimes génère des erreurs",
    titreHtml:
      "Pluriactivité : quand cotiser à <em>deux régimes</em> génère des erreurs",
    chapo:
      "Salarié et indépendant la même année, cumul de deux activités non salariées, passage d'un statut à l'autre : la pluriactivité multiplie les régimes interlocuteurs et, avec eux, les risques de trimestres comptés deux fois, de revenus mal ventilés ou de droits perdus entre les caisses.",
    motCle: "retraite pluriactivité",
    volumeSEO: 320,
    impact: "Variable, souvent sous-estimé",
    tempsLecture: 8,
    datePublication: "2026-05-26",
    auteur: "Claude-Henri Poitou",
    num: "13",
  },
  {
    slug: "pension-reversion",
    section: "dossiers",
    rubrique: "Dossiers · Droits du conjoint",
    titre: "Pension de réversion : conditions, calcul et pièges à éviter",
    titreHtml:
      "Pension de réversion : conditions, calcul et <em>pièges à éviter</em>",
    chapo:
      "Au décès d'un assuré, son conjoint survivant peut percevoir une partie de la retraite qu'il touchait ou aurait touchée. Mais les règles diffèrent radicalement d'un régime à l'autre : taux, condition de ressources, âge minimum, sort du divorce et du remariage. Décryptage complet d'un droit aussi essentiel que mal compris.",
    motCle: "pension de réversion",
    volumeSEO: 40000,
    impact: "54 à 60 % de la pension du défunt",
    tempsLecture: 12,
    datePublication: "2026-05-28",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "14",
  },
  {
    slug: "cumul-emploi-retraite",
    section: "dossiers",
    rubrique: "Dossiers · Fin de carrière",
    titre: "Cumul emploi-retraite : plafonds, nouveaux droits et erreurs fréquentes",
    titreHtml:
      "Cumul emploi-retraite : plafonds, <em>nouveaux droits</em> et erreurs fréquentes",
    chapo:
      "Reprendre une activité tout en touchant sa pension est un droit ouvert à tous les retraités. Depuis le 1ᵉʳ septembre 2023, ce cumul peut même générer une seconde pension. Encore faut-il distinguer cumul intégral et cumul plafonné, et éviter les erreurs de liquidation qui bloquent le versement.",
    motCle: "cumul emploi retraite",
    volumeSEO: 27000,
    impact: "Revenus complémentaires + seconde pension",
    tempsLecture: 11,
    datePublication: "2026-06-02",
    auteur: "Claude-Henri Poitou",
    num: "15",
  },
  {
    slug: "retraite-progressive",
    section: "dossiers",
    rubrique: "Dossiers · Aménagement de fin de carrière",
    titre: "Retraite progressive : travailler moins en touchant déjà une partie de sa pension",
    titreHtml:
      "Retraite progressive : travailler moins en touchant <em>déjà une partie</em> de sa pension",
    chapo:
      "Réduire son temps de travail et percevoir une fraction de sa retraite, sans liquider définitivement ses droits : la retraite progressive est l'un des dispositifs les plus avantageux — et les plus méconnus — de la fin de carrière. Depuis le 1ᵉʳ septembre 2023, elle est ouverte à presque tous les statuts, et l'employeur ne peut plus la refuser sans motif.",
    motCle: "retraite progressive",
    volumeSEO: 33000,
    impact: "Transition de revenu maîtrisée",
    tempsLecture: 10,
    datePublication: "2026-06-03",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "16",
  },
  {
    slug: "depart-anticipe-carriere-longue",
    section: "dossiers",
    rubrique: "Dossiers · Départ anticipé",
    titre: "Carrière longue : partir avant 64 ans quand on a commencé à travailler jeune",
    titreHtml:
      "Carrière longue : partir avant 64 ans quand on a <em>commencé jeune</em>",
    chapo:
      "Ceux qui ont commencé à travailler à 16, 18, 20 ou 21 ans peuvent partir en retraite avant l'âge légal, à condition de réunir des trimestres précis en début de carrière. Or ce sont justement ces premiers trimestres — jobs d'été, apprentissage, contrats courts — qui sont le plus souvent mal reportés. Une seule ligne manquante suffit à faire reculer le départ de plusieurs années.",
    motCle: "carrière longue départ anticipé",
    volumeSEO: 22000,
    impact: "Jusqu'à 6 ans de départ gagnés",
    tempsLecture: 10,
    datePublication: "2026-06-03",
    auteur: "Claude-Henri Poitou",
    num: "17",
  },
  {
    slug: "retraite-femme-inegalites",
    section: "dossiers",
    rubrique: "Dossiers · Enquête",
    titre: "Retraite des femmes : les inégalités cachées et les droits trop souvent oubliés",
    titreHtml:
      "Retraite des femmes : les inégalités cachées et les <em>droits oubliés</em>",
    chapo:
      "À carrière équivalente, les femmes perçoivent une pension de droit direct inférieure de près de 40 % à celle des hommes. Une partie de cet écart tient aux carrières et aux salaires ; une autre, évitable, vient de droits compensatoires mal appliqués : majorations pour enfants, trimestres de maternité, assurance vieillesse des parents au foyer.",
    motCle: "retraite des femmes inégalités",
    volumeSEO: 8000,
    impact: "Jusqu'à 8 trimestres par enfant en jeu",
    tempsLecture: 11,
    datePublication: "2026-06-03",
    auteur: "la rédaction d'erreur-retraite.fr",
    num: "18",
  },
  {
    slug: "retraite-tns-complete",
    section: "dossiers",
    rubrique: "Dossiers · Indépendants",
    titre: "Retraite des indépendants : le guide complet des régimes SSI, CIPAV et CNAVPL",
    titreHtml:
      "Retraite des indépendants : le guide complet des régimes <em>SSI, CIPAV et CNAVPL</em>",
    chapo:
      "Artisans, commerçants, professions libérales, micro-entrepreneurs : les travailleurs non salariés relèvent de régimes éclatés, aux règles de cotisation et de validation distinctes. C'est aussi la population qui présente le taux d'anomalies de relevé le plus élevé. Panorama complet pour comprendre ses droits et repérer les erreurs.",
    motCle: "retraite TNS indépendant guide",
    volumeSEO: 14000,
    impact: "100 à 400 €/mois d'écart fréquent",
    tempsLecture: 12,
    datePublication: "2026-06-03",
    auteur: "Claude-Henri Poitou",
    num: "19",
  },
  {
    slug: "fusion-agirc-arrco-2019",
    section: "dossiers",
    rubrique: "Dossiers · Régime complémentaire",
    titre: "Fusion AGIRC-ARRCO 2019 : l'origine des erreurs qui touchent les cadres",
    titreHtml:
      "Fusion AGIRC-ARRCO 2019 : l'origine des erreurs qui touchent les <em>cadres</em>",
    chapo:
      "Le 1ᵉʳ janvier 2019, les régimes AGIRC (cadres) et ARRCO ont fusionné en un régime unique. La conversion des points, le passage aux tranches 1 et 2 et l'arrivée du coefficient de solidarité ont créé un terrain propice aux anomalies — particulièrement pour les cadres, qui cumulaient des droits dans les deux anciens régimes.",
    motCle: "fusion AGIRC-ARRCO 2019 erreur",
    volumeSEO: 1900,
    impact: "Jusqu'à 40 % de la pension d'un cadre",
    tempsLecture: 9,
    datePublication: "2026-06-04",
    auteur: "Claude-Henri Poitou",
    num: "20",
  },
  {
    slug: "retraite-medecin-carmf",
    section: "dossiers",
    rubrique: "Dossiers · Professions de santé",
    titre: "Retraite des médecins : le guide des trois étages CARMF et leurs erreurs",
    titreHtml:
      "Retraite des médecins : les <em>trois étages</em> CARMF et leurs erreurs",
    chapo:
      "Base CNAVPL, complémentaire CARMF, supplémentaire ASV : la retraite d'un médecin libéral repose sur trois régimes superposés, aux cotisations, valeurs de point et règles distinctes. Cette superposition, et le statut conventionné secteur 1 ou 2, multiplient les points de friction où des droits se perdent.",
    motCle: "retraite médecin CARMF",
    volumeSEO: 1600,
    impact: "3 régimes, jusqu'à plusieurs milliers d'€/an",
    tempsLecture: 11,
    datePublication: "2026-06-04",
    auteur: "Claude-Henri Poitou",
    num: "21",
  },
  {
    slug: "retraite-avocat-cnbf",
    section: "dossiers",
    rubrique: "Dossiers · Professions du droit",
    titre: "Retraite des avocats : la CNBF, son régime forfaitaire et ses pièges",
    titreHtml:
      "Retraite des avocats : la CNBF, son régime <em>forfaitaire</em> et ses pièges",
    chapo:
      "L'avocat relève d'un régime à part, la CNBF, dont la base n'est pas calculée sur les revenus mais sur un montant forfaitaire pondéré par la durée d'affiliation. À cela s'ajoute une complémentaire par classes, en pleine transition. Une mécanique singulière où la durée de carrière et le choix de classe pèsent autant que les revenus.",
    motCle: "retraite avocat CNBF",
    volumeSEO: 1300,
    impact: "Base forfaitaire + complémentaire par classes",
    tempsLecture: 10,
    datePublication: "2026-06-04",
    auteur: "Claude-Henri Poitou",
    num: "22",
  },
  {
    slug: "retraite-artisan-commercant",
    section: "dossiers",
    rubrique: "Dossiers · Indépendants",
    titre: "Retraite des artisans et commerçants : base alignée, complémentaire RCI et héritage du RSI",
    titreHtml:
      "Retraite des artisans et commerçants : base alignée, <em>complémentaire RCI</em> et héritage du RSI",
    chapo:
      "Depuis l'intégration au régime général en 2020, la retraite de base des artisans et commerçants suit les règles des salariés. Mais leur complémentaire reste un régime à part, le RCI, né d'une fusion en 2013 et héritier des anomalies de gestion du défunt RSI. Deux étages, deux logiques, et un terrain particulièrement propice aux erreurs de relevé.",
    motCle: "retraite artisan commerçant RSI RCI",
    volumeSEO: 1100,
    impact: "100 à 400 €/mois d'écart fréquent",
    tempsLecture: 10,
    datePublication: "2026-06-04",
    auteur: "Claude-Henri Poitou",
    num: "23",
  },
  {
    slug: "retraite-profession-liberale",
    section: "dossiers",
    rubrique: "Dossiers · Professions libérales",
    titre: "Retraite des professions libérales et CIPAV : régime, réforme 2018 et vigilance",
    titreHtml:
      "Retraite des professions libérales et CIPAV : régime, <em>réforme 2018</em> et vigilance",
    chapo:
      "Base CNAVPL commune, complémentaire CIPAV pour une vingtaine de professions seulement depuis la réforme de 2018, passage à une cotisation proportionnelle en 2023 : la retraite des libéraux non réglementés a profondément changé en quelques années. Comprendre qui relève encore de la CIPAV — et pourquoi tant de relevés sont devenus illisibles.",
    motCle: "retraite CIPAV profession libérale",
    volumeSEO: 1400,
    impact: "Périmètre et règles bouleversés",
    tempsLecture: 10,
    datePublication: "2026-06-04",
    auteur: "Claude-Henri Poitou",
    num: "24",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesBySection(section: Article["section"]): Article[] {
  return articles.filter((a) => a.section === section);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
