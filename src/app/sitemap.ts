import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const BASE_URL = "https://www.erreur-retraite.fr";

const STATIC_PAGES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/anomalies", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/dossiers", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/guides", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/guides/age-depart-retraite-2026", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guides/lire-son-ris", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guides/modele-lettre-caisse", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guides/corriger-erreur-releve-carriere", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guides/simuler-retraite", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/guides/checklist-depart", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/outils", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/outils/simulateur-decote", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/outils/simulateur-rachat", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/outils/combien-me-coute-une-annee-manquante", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/chiffres-cles-2026", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/lexique", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/a-la-une", priority: 0.7, changeFrequency: "daily" as const },
  { path: "/auteur/claude-henri-poitou", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/a-propos", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/${a.section}/${a.slug}`,
    lastModified: new Date(a.datePublication),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticEntries, ...articleEntries];
}
