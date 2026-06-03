import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getArticleBySlug } from "@/lib/articles";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const SLUG = "cumul-emploi-retraite";
const article = getArticleBySlug(SLUG)!;
export const alt = article.titre;

export default async function Image() {
  return createOgImage({ title: article.titre, eyebrow: article.rubrique });
}
