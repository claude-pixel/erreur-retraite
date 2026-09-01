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
  {
    slug: "trimestres-stage-remunere",
    section: "anomalies",
    rubrique: "Anomalies · Début de carrière",
    titre: "Stage rémunéré, jobs étudiants : comment récupérer vos trimestres oubliés ?",
    titreHtml:
      "Stage rémunéré, jobs étudiants : comment récupérer vos trimestres <em>oubliés</em> ?",
    chapo:
      "Stages rémunérés, jobs d'été, premiers CDD : les revenus du début de carrière franchissaient souvent le seuil de validation d'un trimestre, mais l'employeur a disparu et rien n'a été reporté. Ces années minuscules pèsent pourtant lourd, parfois jusqu'à l'accès au départ anticipé carrière longue.",
    motCle: "stage rémunéré trimestre retraite",
    volumeSEO: 480,
    impact: "Jusqu'à plusieurs trimestres récupérables",
    tempsLecture: 9,
    datePublication: "2026-06-10",
    auteur: "Claude-Henri Poitou",
    num: "25",
  },
  {
    slug: "retraite-carriere-mixte",
    section: "guides",
    rubrique: "Guides · Carrière",
    titre: "Carrière mixte salarié-TNS : comment éviter les trous entre régimes ?",
    titreHtml:
      "Carrière mixte salarié-TNS : comment éviter les <em>trous</em> entre régimes ?",
    chapo:
      "Salarié devenu artisan, commerçant ou gérant majoritaire — ou l'inverse : les carrières mixtes sont devenues la norme, mais leur retraite se joue à la frontière entre plusieurs caisses. Depuis la LURA de 2017, la base est unifiée ; les complémentaires, elles, restent séparées. C'est précisément à cette jonction que naissent les trous de carrière.",
    motCle: "carrière mixte salarié TNS retraite",
    volumeSEO: 590,
    impact: "Trimestres et points perdus entre régimes",
    tempsLecture: 11,
    datePublication: "2026-06-10",
    auteur: "Claude-Henri Poitou",
    num: "27",
  },
  {
    slug: "reforme-retraite-2026",
    section: "dossiers",
    rubrique: "Dossiers · Réforme",
    titre: "Réforme suspendue : qu'est-ce qui change vraiment pour votre retraite en 2026 ?",
    titreHtml:
      "Réforme suspendue : qu'est-ce qui change <em>vraiment</em> pour votre retraite en 2026 ?",
    chapo:
      "Le Mémento de la protection sociale, version 2026, intègre la suspension de la réforme des retraites applicable au 1er septembre 2026. Conséquence très concrète : l'âge légal de plusieurs générations n'est plus celui qui figurait sur leurs estimations. Grille des âges par génération, durées de référence, carrière longue, retraite progressive : le point complet, chiffre par chiffre, sur ce qui change — et sur ce qui ne change pas.",
    motCle: "réforme retraite 2026 suspension",
    volumeSEO: 18000,
    impact: "Âge légal modifié pour plusieurs générations",
    tempsLecture: 12,
    datePublication: "2026-06-10",
    auteur: "Claude-Henri Poitou",
    num: "28",
  },
  {
    slug: "retraite-expatrie-france",
    section: "dossiers",
    rubrique: "Dossiers · Carrière internationale",
    titre: "Expatrié de retour : comment valoriser vos années à l'étranger ?",
    titreHtml:
      "Expatrié de retour : comment valoriser vos années à l'<em>étranger</em> ?",
    chapo:
      "Dix ans à Londres, huit ans à New York ou une décennie à Dubaï : au retour en France, ces années ne figurent nulle part sur votre relevé de carrière. Selon le pays — Union européenne, État conventionné ou territoire sans accord — elles peuvent sauver votre taux plein ou disparaître purement et simplement. Voici la stratégie complète pour ne rien laisser derrière vous.",
    motCle: "retraite expatrié années étranger",
    volumeSEO: 1300,
    impact: "Taux plein préservé ou années perdues",
    tempsLecture: 10,
    datePublication: "2026-06-10",
    auteur: "Claude-Henri Poitou",
    num: "29",
  },
  {
    slug: "retraite-fonctionnaire",
    section: "dossiers",
    rubrique: "Dossiers · Fonction publique",
    titre: "Fonctionnaire : votre pension est-elle bien calculée ?",
    titreHtml:
      "Fonctionnaire : votre pension est-elle <em>bien</em> calculée ?",
    chapo:
      "La pension d'un fonctionnaire se calcule sur le traitement indiciaire des six derniers mois — primes exclues. Une formule simple en apparence, mais truffée de pièges : temps partiel mal décompté, bonifications pour enfants oubliées, RAFP négligé, années de contractuel égarées à l'IRCANTEC. Tour d'horizon des vérifications indispensables avant de liquider.",
    motCle: "retraite fonctionnaire CNRACL SRE",
    volumeSEO: 4400,
    impact: "Bonifications et RAFP souvent oubliés",
    tempsLecture: 12,
    datePublication: "2026-06-10",
    auteur: "Claude-Henri Poitou",
    num: "30",
  },
  {
    slug: "retraite-freelance-consultant",
    section: "dossiers",
    rubrique: "Dossiers · Indépendants",
    titre: "Freelance et consultant : votre affiliation CIPAV est-elle la bonne ?",
    titreHtml:
      "Freelance et consultant : votre affiliation <em>CIPAV</em> est-elle la bonne ?",
    chapo:
      "Consultant, formateur, prestataire de services : depuis la LFSS 2018, la plupart des freelances ne relèvent plus de la CIPAV mais du régime des indépendants. Beaucoup l'ignorent, et leurs relevés portent les traces de cette bascule mal opérée. À cela s'ajoute le contentieux des points forfaitaires jamais attribués aux micro-entrepreneurs entre 2009 et 2017. Faire le tri est devenu indispensable.",
    motCle: "retraite freelance consultant CIPAV",
    volumeSEO: 640,
    impact: "Bascule CIPAV/SSI et points contentieux",
    tempsLecture: 11,
    datePublication: "2026-06-10",
    auteur: "Claude-Henri Poitou",
    num: "33",
  },
  {
    slug: "8-erreurs-releve-carriere",
    section: "dossiers",
    rubrique: "Dossiers · Pilier",
    titre: "Quelles sont les 8 erreurs les plus fréquentes sur un relevé de carrière ?",
    titreHtml:
      "Quelles sont les <em>8 erreurs</em> les plus fréquentes sur un relevé de carrière ?",
    chapo:
      "Un relevé de carrière n'est qu'un report : il agrège ce que les régimes ont reçu, pas ce que vous avez réellement gagné. Trimestres oubliés, salaires absents, points complémentaires non transmis, périodes assimilées non créditées : les anomalies sont fréquentes et coûtent cher à la liquidation. Voici les huit erreurs qui reviennent le plus souvent, comment les détecter et sur quelles pièces s'appuyer pour les corriger.",
    motCle: "erreurs relevé de carrière",
    volumeSEO: 5400,
    impact: "Pilier — les 8 anomalies majeures",
    tempsLecture: 14,
    datePublication: "2026-06-10",
    auteur: "Claude-Henri Poitou",
    num: "34",
  },
  {
    slug: "retraite-par-regime",
    section: "dossiers",
    rubrique: "Dossiers · Panorama",
    titre: "De combien de régimes de retraite dépendez-vous ? Panorama 2026",
    titreHtml:
      "De combien de <em>régimes de retraite</em> dépendez-vous ?",
    chapo:
      "Salarié, puis indépendant, parfois fonctionnaire ou libéral entre les deux : chaque statut professionnel vous rattache à un couple de régimes de retraite, base et complémentaire. Chaque régime supplémentaire est un compte de plus à alimenter — et un risque d'erreur de plus au moment de liquider. La Cour des comptes relève qu'une pension nouvellement attribuée sur neuf comporte une erreur financière. Recenser précisément les régimes dont vous relevez est donc la première étape de toute vérification.",
    motCle: "régimes de retraite france",
    volumeSEO: 8000,
    impact: "Repère fondamental — 1 régime oublié = des droits perdus",
    tempsLecture: 12,
    datePublication: "2026-09-01",
    auteur: "Claude-Henri Poitou",
    num: "35",
  },
  {
    slug: "delais-correction-erreur",
    section: "guides",
    rubrique: "Guides pratiques · Démarches",
    titre: "Corriger une erreur de retraite : combien de temps faut-il vraiment ?",
    titreHtml:
      "Corriger une erreur de retraite : combien de <em>temps</em> faut-il vraiment ?",
    chapo:
      "Deux à six mois pour une régularisation, deux mois seulement pour contester un refus, des mois encore devant le tribunal : la correction d'une erreur de retraite se compte rarement en semaines. Caisse par caisse et recours par recours, voici les délais réellement constatés — et pourquoi la vérification doit commencer deux à trois ans avant le départ.",
    motCle: "délai correction erreur retraite",
    volumeSEO: 900,
    impact: "Décisif à l'approche du départ",
    tempsLecture: 9,
    datePublication: "2026-09-01",
    auteur: "Claude-Henri Poitou",
    num: "36",
  },
  {
    slug: "surcote-retraite-optimisation",
    section: "dossiers",
    rubrique: "Dossiers · Optimisation",
    titre: "Surcote : travailler plus longtemps vaut-il vraiment le coup ?",
    titreHtml:
      "Surcote : travailler plus longtemps vaut-il <em>vraiment</em> le coup ?",
    chapo:
      "Chaque trimestre cotisé au-delà de l'âge légal majore la pension de base de 1,25 %, sans plafond. Sur le papier, la surcote est le levier le plus simple de la fin de carrière. En pratique, elle obéit à des conditions étroites — seuls les trimestres cotisés comptent — et repose sur un relevé de carrière exact, ce qui est loin d'être garanti : une pension nouvellement attribuée sur neuf comporte une erreur financière. Mécanique, pièges et comparaison honnête avec le rachat de trimestres.",
    motCle: "surcote retraite",
    volumeSEO: 5400,
    impact: "+1,25 % par trimestre, à vie",
    tempsLecture: 10,
    datePublication: "2026-09-01",
    auteur: "Claude-Henri Poitou",
    num: "37",
  },
  {
    slug: "taux-plein-automatique-67",
    section: "dossiers",
    rubrique: "Dossiers · Comprendre",
    titre: "Taux plein automatique à 67 ans : votre pension sera-t-elle vraiment pleine ?",
    titreHtml:
      "Taux plein automatique à 67 ans : votre pension sera-t-elle vraiment <em>pleine</em> ?",
    chapo:
      "À 67 ans, la retraite est accordée « au taux plein » quel que soit le nombre de trimestres : la décote disparaît. Beaucoup en concluent que leur pension sera complète — c'est faux. Le calcul reste proratisé : 120 trimestres validés sur 172 requis donnent environ 70 % d'une pension entière, même à 67 ans. Décryptage du malentendu le plus coûteux du système, et de ce que votre relevé de carrière peut encore y changer.",
    motCle: "taux plein 67 ans",
    volumeSEO: 2900,
    impact: "Pension partielle malgré le taux plein",
    tempsLecture: 10,
    datePublication: "2026-09-01",
    auteur: "Claude-Henri Poitou",
    num: "38",
  },
  {
    slug: "audit-retraite-methodologie",
    section: "dossiers",
    rubrique: "Dossiers · Méthode",
    titre: "Comment se déroule un audit retraite ? Méthode et tarifs 2026",
    titreHtml:
      "Comment se déroule un <em>audit retraite</em> — et qu'en attendre ?",
    chapo:
      "Une pension nouvellement attribuée sur neuf comporte une erreur financière, et les caisses ne corrigent pas spontanément. Face à ce constat, l'audit retraite s'est imposé comme un contrôle méthodique du dossier avant la liquidation : collecter les pièces, reconstituer la carrière, chiffrer chaque anomalie, obtenir les régularisations, arbitrer la date de départ. Voici comment se déroule cette vérification professionnelle, étape par étape — et comment choisir entre diagnostic en ligne et accompagnement humain.",
    motCle: "audit retraite",
    volumeSEO: 1300,
    impact: "Passerelle diagnostic → cabinet",
    tempsLecture: 10,
    datePublication: "2026-09-01",
    auteur: "Claude-Henri Poitou",
    num: "39",
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
