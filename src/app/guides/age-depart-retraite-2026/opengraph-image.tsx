import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Âge de départ en retraite 2026 par année de naissance";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Guide pratique",
    title: "Âge de départ en retraite 2026 par année de naissance",
  });
}
