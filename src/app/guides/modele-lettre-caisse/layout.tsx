import type { Metadata } from "next";

// La page est un composant client (copie des modèles au clic) et ne peut pas
// exporter de métadonnées : sans ce layout, elle reprenait le titre et la
// description de l'accueil.
export const metadata: Metadata = {
  title: "Modèles de lettre à sa caisse de retraite : 4 courriers à copier",
  description:
    "Quatre modèles de courrier à personnaliser : rectification de trimestres, relevé militaire, recours amiable (CRA), points Agirc-Arrco. À envoyer en recommandé.",
};

export default function ModeleLettreCaisseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
