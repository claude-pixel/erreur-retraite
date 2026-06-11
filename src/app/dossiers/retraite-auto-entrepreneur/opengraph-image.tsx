import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getArticleBySlug } from "@/lib/articles";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const SLUG = "retraite-auto-entrepreneur";
const TITRE = "Auto-entrepreneur : votre retraite vaut-elle vraiment le coup ?";
const RUBRIQUE = "Dossiers · Indépendants";

const article = getArticleBySlug(SLUG);
export const alt = article?.titre ?? TITRE;

export default async function Image() {
  return createOgImage({
    title: article?.titre ?? TITRE,
    eyebrow: article?.rubrique ?? RUBRIQUE,
  });
}
