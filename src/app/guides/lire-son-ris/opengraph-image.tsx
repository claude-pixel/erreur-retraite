import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Comment lire et vérifier son relevé de carrière (RIS)";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Guide pratique",
    title: "Comment lire et vérifier son relevé de carrière (RIS)",
  });
}
