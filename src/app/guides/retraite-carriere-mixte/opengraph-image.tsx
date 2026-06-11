import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Carrière mixte salarié-TNS : comment éviter les trous entre régimes ?";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Guides · Carrière",
    title: "Carrière mixte salarié-TNS : éviter les trous entre régimes",
  });
}
