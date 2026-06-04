import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Estimateur de pension AGIRC-ARRCO : combien valent vos points ?";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Outil · Calculateur",
    title: "Combien valent vos points AGIRC-ARRCO ?",
  });
}
