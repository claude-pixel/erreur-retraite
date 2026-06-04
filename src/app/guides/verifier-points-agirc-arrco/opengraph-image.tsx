import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Comment vérifier et recalculer ses points AGIRC-ARRCO";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Guide pratique · Méthode",
    title: "Vérifier et recalculer ses points AGIRC-ARRCO",
  });
}
