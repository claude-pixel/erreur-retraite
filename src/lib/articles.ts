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
