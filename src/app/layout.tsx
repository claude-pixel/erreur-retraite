import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { TopStrip } from "@/components/layout/TopStrip";
import { Masthead } from "@/components/layout/Masthead";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORGANIZATION_SCHEMA } from "@/lib/schema";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.erreur-retraite.fr"),
  title: {
    default: "erreur-retraite.fr — L'information retraite enfin accessible",
    template: "%s — erreur-retraite.fr",
  },
  description:
    "Site d'information sur la retraite et la protection sociale. Repérez les erreurs de pension, comprenez vos droits et les démarches à entreprendre.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "erreur-retraite.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="bg-bg text-ink antialiased">
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <TopStrip />
        <Masthead />
        <MainNav />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
