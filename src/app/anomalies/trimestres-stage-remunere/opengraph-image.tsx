import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const TITLE =
  "Stage rémunéré, jobs étudiants : comment récupérer vos trimestres oubliés ?";
const EYEBROW = "Anomalies · Début de carrière";
export const alt = TITLE;

export default async function Image() {
  return createOgImage({ title: TITLE, eyebrow: EYEBROW });
}
