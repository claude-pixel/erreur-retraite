import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Simulateur rachat de trimestres";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Outil · Calculateur",
    title: "Rachat de trimestres : rentabilité et comparaison PER",
  });
}
