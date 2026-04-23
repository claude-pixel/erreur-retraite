import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Combien me coûte une année manquante sur mon relevé";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Outil · Calculateur",
    title: "Combien me coûte une année manquante sur mon relevé ?",
  });
}
