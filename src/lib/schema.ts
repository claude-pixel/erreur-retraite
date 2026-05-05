const BASE_URL = "https://www.erreur-retraite.fr";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "erreur-retraite.fr",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    "Site d'information sur la retraite et la protection sociale. Erreurs de pension, droits, démarches.",
  publisher: {
    "@type": "Organization",
    name: "Compétence Retraite EURL",
    url: "https://competence-retraite.fr",
  },
  sameAs: [
    "https://competence-retraite.fr",
    "https://smartretraite.fr",
  ],
};

type ArticleInput = {
  slug: string;
  section: string;
  titre: string;
  chapo: string;
  datePublication: string;
  auteur?: string;
};

export function buildArticleSchema(a: ArticleInput) {
  const url = `${BASE_URL}/${a.section}/${a.slug}`;
  const authorIsPoitou = a.auteur === "Claude-Henri Poitou";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.titre,
    description: a.chapo,
    url,
    datePublished: a.datePublication,
    dateModified: a.datePublication,
    inLanguage: "fr-FR",
    author: authorIsPoitou
      ? {
          "@type": "Person",
          name: "Claude-Henri Poitou",
          url: `${BASE_URL}/auteur/claude-henri-poitou`,
          jobTitle: "Consultant en protection sociale et retraite",
        }
      : {
          "@type": "Organization",
          name: "La rédaction d'erreur-retraite.fr",
          url: BASE_URL,
        },
    publisher: {
      "@type": "Organization",
      name: "erreur-retraite.fr",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function buildBreadcrumbSchema(
  trail: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildSoftwareApplicationSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    inLanguage: "fr-FR",
  };
}

export { BASE_URL };
