import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Comment simuler sa retraite : outils officiels, limites et pièges";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Guide pratique · Méthode",
    title: "Comment simuler sa retraite sans se tromper",
  });
}
