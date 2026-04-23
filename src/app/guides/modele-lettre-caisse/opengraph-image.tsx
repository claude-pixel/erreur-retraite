import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Modèles de lettre à la caisse de retraite";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Guide pratique · Modèles",
    title: "Modèles de lettre à la caisse de retraite",
  });
}
