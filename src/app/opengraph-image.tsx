import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "erreur-retraite.fr — L'information retraite enfin accessible";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImage({
    eyebrow: "Média d'information retraite",
    title: "Repérez les erreurs de pension. Comprenez vos droits.",
  });
}
