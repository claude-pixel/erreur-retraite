#!/usr/bin/env node
/**
 * validate-article.mjs — Checklist §6 bloquante pour erreur-retraite.fr
 *
 * Adapté à l'architecture réelle du site : articles MDX (src/app/<section>/<slug>/page.mdx)
 * avec composants React (ArticleShell, CTASmartRetraite, …).
 *
 * Usage :
 *   node scripts/validate-article.mjs src/app/dossiers/retraite-medecin-carmf/page.mdx
 *   node scripts/validate-article.mjs --souple <fichiers...>   (articles existants modifiés)
 *
 * Modes :
 *   strict (défaut) — checklist §6 complète, bloquante. Pour les NOUVEAUX articles.
 *   --souple        — mêmes contrôles rétrogradés en avertissements. Pour les articles
 *                     du corpus existant (antérieurs à la checklist) quand on les modifie.
 *                     Restent bloquants même en souple : ce qui casse la compilation MDX
 *                     (commentaires HTML <!-- -->, jetons {{...}}) et les termes interdits.
 *
 * Code de sortie : 0 = OK, 1 = au moins un échec (bloque le merge en CI).
 * Zéro dépendance externe — Node ≥ 18.
 *
 * CONVENTIONS ATTENDUES DANS LES ARTICLES (côté génération) :
 *   - Marqueur élément praticien : {/* PRATICIEN *​/} (commentaire JSX — PAS <!-- -->,
 *     invalide en MDX), inséré avec l'anecdote depuis content/sources/anecdotes-terrain.md
 *   - Marqueur prise de position : {/* POSITION *​/} (depuis content/sources/positions.md)
 *   - Jeton non résolu : interdit tel quel (casse la compilation MDX). S'il manque une
 *     valeur, l'écrire dans un commentaire JSX : {/* À SOURCER : {{nom_du_jeton}} *​/}
 */

import { readFileSync } from "node:fs";
import { basename, dirname } from "node:path";

// ---------- Configuration ----------

const ANNEE = "2026"; // ← incrémenter lors de la bascule Mémento 2027

const TERMES_INTERDITS = [
  /\bIA\b/, // "IA" mot isolé (ne matche pas "biais", "média")
  /intelligence artificielle/i,
  /\bagents?\b/i, // "agent"/"agents" mot isolé
  /\bbots?\b/i,
];

const AUTEUR_ATTENDU = "Claude-Henri Poitou";

const H2_MIN_MOTS = 120;
const H2_MAX_MOTS = 180;
const FAQ_REP_MIN = 40;
const FAQ_REP_MAX = 80;
const FAQ_MIN_Q = 3;
const FAQ_MAX_Q = 5;
const TOTAL_MIN_MOTS = 1800;

// Sections H2 exemptées de la règle 120-180 mots
const H2_EXEMPTES = [/^faq/i, /sources/i, /l['']essentiel/i];

// ---------- Helpers ----------

/** Retire les commentaires JSX {/* ... *​/} */
const sansCommentaires = (txt) => txt.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

/**
 * Retire les blocs JSX (composants React) pour ne garder que la prose markdown.
 * Heuristique ligne à ligne adaptée au formatage du repo : un bloc commence par
 * `<Composant` ou `</Composant>` en début de ligne et se termine à la ligne
 * finissant par `/>`, ou par `>` seul (balise ouvrante multi-lignes type ArticleShell).
 */
function sansJsx(txt) {
  const lignes = txt.split("\n");
  const garde = [];
  let dansBloc = false;
  for (const l of lignes) {
    if (!dansBloc && /^\s*<\/?[A-Z]/.test(l)) {
      if (/\/>\s*$|<\/[A-Z][\w]*>\s*$|^[^<]*>\s*$/.test(l.trim()) && !/=\s*\{?\[?$/.test(l)) {
        continue; // balise sur une seule ligne
      }
      dansBloc = true;
      continue;
    }
    if (dansBloc) {
      if (/(\/>|^>|^\s*>)\s*$/.test(l)) dansBloc = false;
      continue;
    }
    garde.push(l);
  }
  return garde.join("\n");
}

/** Prose visible : sans commentaires JSX, sans blocs composants, sans export metadata */
const proseVisible = (md) =>
  sansJsx(sansCommentaires(md)).replace(/^export const metadata[\s\S]*?^};?\s*$/m, "");

const compterMots = (txt) =>
  txt
    .replace(/[#*_>\-\[\]()`|{}]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

function decouperSections(md) {
  // Retourne [{titre, contenu}] pour chaque H2, découpé par position (titres identiques OK)
  const sections = [];
  const regex = /^##\s+(?!#)(.+)$/gm;
  const bornes = [];
  let match;
  while ((match = regex.exec(md)) !== null) {
    bornes.push({ titre: match[1].trim(), debut: regex.lastIndex, position: match.index });
  }
  for (let i = 0; i < bornes.length; i++) {
    const fin = i + 1 < bornes.length ? bornes[i + 1].position : md.length;
    sections.push({ titre: bornes[i].titre, contenu: md.slice(bornes[i].debut, fin) });
  }
  return sections;
}

/** Extrait la valeur d'une prop chaîne d'ArticleShell, ex. titreHtml="..."
 *  Respecte le délimiteur d'ouverture : une valeur entre " peut contenir des
 *  apostrophes (« Chef d'entreprise »), fréquentes en français. */
function propChaine(md, nom) {
  const m = md.match(new RegExp(`${nom}\\s*=\\s*"([^"]*)"|${nom}\\s*=\\s*'([^']*)'`));
  return m ? (m[1] ?? m[2]) : null;
}

// ---------- Vérifications ----------

function valider(md, fichier, souple) {
  const erreurs = [];
  const avertissements = [];
  const ok = [];
  // bloquant=true : reste une erreur même en mode souple
  const check = (cond, libelle, detail = "", bloquant = false) => {
    if (cond) return ok.push(libelle);
    const msg = libelle + (detail ? ` — ${detail}` : "");
    if (souple && !bloquant) avertissements.push(msg);
    else erreurs.push(msg);
  };

  const corps = md;
  const prose = proseVisible(corps);

  // 0. Commentaires HTML <!-- --> : invalides en MDX, cassent la compilation
  check(
    !/<!--/.test(corps),
    "Aucun commentaire HTML <!-- --> (invalide en MDX — utiliser {/* ... */})",
    "",
    true
  );

  // 1. Termes interdits (dans la prose visible, hors commentaires JSX et props composants)
  const trouves = TERMES_INTERDITS.flatMap((re) => {
    const m = prose.match(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"));
    return m || [];
  });
  check(
    trouves.length === 0,
    "Aucun terme interdit (IA / intelligence artificielle / agent / bot)",
    trouves.length ? `trouvé : ${[...new Set(trouves)].join(", ")}` : "",
    true
  );

  // 2. ArticleShell + titre (prop titreHtml) formulé en question
  const titre = propChaine(corps, "titreHtml");
  check(/<ArticleShell/.test(corps), "Composant ArticleShell présent");
  check(titre !== null, "Prop titreHtml renseignée");
  if (titre !== null)
    check(titre.includes("?"), "Titre formulé en question", `« ${titre.slice(0, 70)} »`);

  // 3. Byline auteur + page auteur (le lien /auteur/claude-henri-poitou est rendu par AuthorBlock)
  const auteur = propChaine(corps, "auteur");
  check(
    auteur === AUTEUR_ATTENDU,
    `Auteur « ${AUTEUR_ATTENDU} »`,
    auteur ? `trouvé : « ${auteur} »` : "prop auteur absente"
  );

  // 4. Marqueur élément praticien (commentaire JSX)
  check(/\{\/\*\s*PRATICIEN\s*\*\/\}/.test(corps), "Élément praticien présent ({/* PRATICIEN */})");

  // 5. Marqueur prise de position (avertissement seulement : tous les sujets n'ont pas de débat)
  if (!/\{\/\*\s*POSITION\s*\*\/\}/.test(corps))
    avertissements.push("Pas de prise de position ({/* POSITION */}) — OK si sujet sans débat, sinon ajouter");
  else ok.push("Prise de position présente");

  // 6. Sections H2 : 120-180 mots + au moins une mention datée
  const sections = decouperSections(corps);
  check(sections.length >= 5, "Au moins 5 sections H2", `trouvé : ${sections.length}`);
  for (const s of sections) {
    if (H2_EXEMPTES.some((re) => re.test(s.titre))) continue;
    const mots = compterMots(proseVisible(s.contenu));
    if (mots < H2_MIN_MOTS || mots > H2_MAX_MOTS) {
      const msg = `Section « ${s.titre} » : ${mots} mots (attendu ${H2_MIN_MOTS}-${H2_MAX_MOTS})`;
      souple ? avertissements.push(msg) : erreurs.push(msg);
    } else ok.push(`Section « ${s.titre} » : ${mots} mots ✓`);
    if (!s.contenu.includes(ANNEE)) {
      const msg = `Section « ${s.titre} » : aucune mention « ${ANNEE} » (chiffres non datés ?)`;
      souple ? avertissements.push(msg) : erreurs.push(msg);
    }
  }

  // 7. Jetons non résolus : cassent la compilation MDX → toujours bloquants,
  //    sauf à l'intérieur d'un commentaire JSX contenant « À SOURCER »
  const lignes = corps.split("\n");
  lignes.forEach((l, i) => {
    if (/\{\{[^}]+\}\}/.test(l) && !/\{\/\*.*À SOURCER.*\*\/\}/.test(l))
      erreurs.push(`Ligne ${i + 1} : jeton non résolu (casse le build MDX) : ${l.trim().slice(0, 80)}`);
  });
  const jetonsSources = (corps.match(/À SOURCER/g) || []).length;
  if (jetonsSources > 0)
    avertissements.push(`${jetonsSources} jeton(s) marqué(s) À SOURCER — article publiable mais incomplet, à lister en PR`);

  // 8. Bloc « L'essentiel en 2026 » — ou son équivalent site : la sidebar chiffres-clés
  check(
    new RegExp(`essentiel en ${ANNEE}`, "i").test(corps) || /chiffres=\{\[/.test(corps),
    `Bloc « L'essentiel en ${ANNEE} » ou sidebar chiffres-clés présent`
  );

  // 9. FAQ : 3-5 Q/R, réponses 40-80 mots
  const faq = sections.find((s) => /^faq/i.test(s.titre));
  if (!faq) {
    const msg = "Section FAQ absente";
    souple ? avertissements.push(msg) : erreurs.push(msg);
  } else {
    // Questions = H3 ou lignes en gras se terminant par ?
    const blocs = faq.contenu.split(/\n(?=###\s|\*\*)/).filter((b) => /^(###\s|\*\*)[^\n]*\?/.test(b.trim()));
    const nb = blocs.length;
    check(nb >= FAQ_MIN_Q && nb <= FAQ_MAX_Q, `FAQ : ${FAQ_MIN_Q}-${FAQ_MAX_Q} Q/R`, `trouvé : ${nb}`);
    blocs.forEach((b, i) => {
      const rep = b.split("?").slice(1).join("?");
      const mots = compterMots(proseVisible(rep));
      if (mots < FAQ_REP_MIN || mots > FAQ_REP_MAX)
        avertissements.push(`FAQ Q${i + 1} : réponse de ${mots} mots (cible ${FAQ_REP_MIN}-${FAQ_REP_MAX})`);
    });
  }

  // 10. Bloc Sources daté
  check(
    /sources?[\s\S]{0,300}(mémento|barème|carmf|cnav|agirc|service-public)/i.test(corps) &&
      /dernière vérification/i.test(corps),
    "Bloc Sources avec organisme + « Dernière vérification »"
  );

  // 11. Longueur totale (prose visible uniquement)
  const total = compterMots(prose);
  check(total >= TOTAL_MIN_MOTS, `Longueur ≥ ${TOTAL_MIN_MOTS} mots`, `trouvé : ${total}`);

  // 12. CTA vers smartretraite.fr (le lien + UTM sont portés par le composant)
  check(/<CTASmartRetraite/.test(corps), "CTA SmartRetraite présent (<CTASmartRetraite />)");

  return { fichier, erreurs, avertissements, ok };
}

// ---------- Main ----------

const argv = process.argv.slice(2);
const souple = argv.includes("--souple");
const fichiers = argv.filter((a) => a !== "--souple");

if (fichiers.length === 0) {
  console.error("Usage : node scripts/validate-article.mjs [--souple] <page.mdx> [...]");
  process.exit(2);
}

let echec = false;
for (const f of fichiers) {
  let md;
  try {
    md = readFileSync(f, "utf8");
  } catch {
    console.error(`\n━━━ ${f} ━━━\n  ❌ Fichier introuvable ou illisible`);
    echec = true;
    continue;
  }
  const r = valider(md, f, souple);
  const nom = basename(f) === "page.mdx" ? basename(dirname(f)) : basename(f);
  console.log(`\n━━━ ${nom}${souple ? " (mode souple)" : ""} ━━━`);
  r.ok.forEach((l) => console.log(`  ✅ ${l}`));
  r.avertissements.forEach((l) => console.log(`  ⚠️  ${l}`));
  r.erreurs.forEach((l) => console.log(`  ❌ ${l}`));
  if (r.erreurs.length) {
    echec = true;
    console.log(`\n  → ÉCHEC : ${r.erreurs.length} point(s) bloquant(s). Merge interdit.`);
  } else {
    console.log(`\n  → VALIDÉ${r.avertissements.length ? ` (${r.avertissements.length} avertissement(s))` : ""}.`);
  }
}
process.exit(echec ? 1 : 0);
