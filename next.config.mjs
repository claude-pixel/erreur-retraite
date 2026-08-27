import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  async redirects() {
    // Spécialisation de l'écosystème (08/2026) : les sujets « dirigeant » vivent sur
    // competence-retraite.fr, les guides particuliers/TNS sur smartretraite.fr.
    return [
      { source: "/dossiers/retraite-cadre-dirigeant", destination: "https://www.competence-retraite.fr/blog/retraite-dirigeant-guide-complet", permanent: true },
      { source: "/dossiers/retraite-chef-entreprise", destination: "https://www.competence-retraite.fr/blog/retraite-dirigeant-guide-complet", permanent: true },
      { source: "/anomalies/retraite-dirigeant-sas", destination: "https://www.competence-retraite.fr/blog/retraite-president-sas-sasu", permanent: true },
      { source: "/anomalies/retraite-gerant-sarl", destination: "https://www.competence-retraite.fr/blog/retraite-gerant-sarl", permanent: true },
      { source: "/dossiers/retraite-auto-entrepreneur", destination: "https://smartretraite.fr/guides/retraite-micro-entrepreneur", permanent: true },
      { source: "/dossiers/retraite-tns-complete", destination: "https://smartretraite.fr/guides/retraite-tns-dirigeant-guide-2026", permanent: true },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});

export default withMDX(nextConfig);
