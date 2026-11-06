import type { MDXComponents } from "mdx/types";
import { ArticleHeader } from "@/components/editorial/ArticleHeader";
import { Lead } from "@/components/editorial/Lead";
import { Byline } from "@/components/editorial/Byline";
import { Citation } from "@/components/editorial/Citation";
import { EncadreReglementaire } from "@/components/editorial/EncadreReglementaire";
import { ChiffresSidebar } from "@/components/editorial/ChiffresSidebar";
import { ArticlesLies } from "@/components/editorial/ArticlesLies";
import { ArticleShell } from "@/components/editorial/ArticleShell";
import { VideoYouTube } from "@/components/editorial/VideoYouTube";
import { CTASmartRetraite } from "@/components/cta/CTASmartRetraite";
import { Rule } from "@/components/ui/Rule";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ArticleHeader,
    ArticleShell,
    Lead,
    Byline,
    Citation,
    EncadreReglementaire,
    ChiffresSidebar,
    ArticlesLies,
    VideoYouTube,
    CTASmartRetraite,
    Rule,
    ...components,
  };
}
