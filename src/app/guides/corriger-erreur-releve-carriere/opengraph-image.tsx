import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Comment corriger une erreur sur son relevé de carrière";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Guide pratique · Démarches",
    title: "Corriger une erreur sur son relevé de carrière",
  });
}
