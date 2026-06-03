import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function svgBase({ size = 48, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

// 1. Trimestres manquants — Calendrier avec cellule manquante
export function CalendarMissingIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <rect x="6" y="10" width="36" height="32" rx="3" stroke="currentColor" />
      <path d="M14 6 L14 14" stroke="currentColor" />
      <path d="M34 6 L34 14" stroke="currentColor" />
      <path d="M6 20 L42 20" stroke="currentColor" />
      <rect x="12" y="26" width="6" height="5" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="21" y="26" width="6" height="5" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="30" y="26" width="6" height="5" rx="1" stroke="currentColor" strokeDasharray="2 2" />
      <rect x="12" y="34" width="6" height="5" rx="1" fill="currentColor" opacity="0.2" />
      <path d="M32 27 L34 30 M34 27 L32 30" stroke="currentColor" strokeWidth="1.4" />
      <rect x="30" y="34" width="6" height="5" rx="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

// 2. AGIRC-ARRCO — Graphique en points
export function ChartPointsIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" />
      <path d="M12 34 L18 28 L24 32 L30 20 L36 14" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="34" r="2.2" fill="currentColor" />
      <circle cx="18" cy="28" r="2.2" fill="currentColor" />
      <circle cx="24" cy="32" r="2.2" fill="currentColor" />
      <circle cx="30" cy="20" r="2.2" fill="currentColor" />
      <circle cx="36" cy="14" r="2.2" fill="currentColor" />
    </svg>
  );
}

// 3. Revenus TNS — Mallette
export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <rect x="6" y="14" width="36" height="26" rx="3" stroke="currentColor" />
      <path d="M18 14 V11 C18 9.9 18.9 9 20 9 H28 C29.1 9 30 9.9 30 11 V14" stroke="currentColor" />
      <path d="M6 24 H42" stroke="currentColor" />
      <rect x="20" y="22" width="8" height="4" rx="1" fill="currentColor" />
      <path d="M20 32 L28 32" stroke="currentColor" />
      <path d="M16 32 L16 32.01" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 32 L32 32.01" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

// 4. Carrière étranger — Globe
export function GlobeIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" />
      <ellipse cx="24" cy="24" rx="9" ry="18" stroke="currentColor" />
      <path d="M6 24 H42" stroke="currentColor" />
      <path d="M8 16 Q24 20 40 16" stroke="currentColor" />
      <path d="M8 32 Q24 28 40 32" stroke="currentColor" />
    </svg>
  );
}

// 5. Majorations — Étoile/plus avec cercle
export function StarPlusIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" />
      <path d="M24 14 V34" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 24 H34" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="34" cy="14" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="34" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="34" cy="34" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// 6. Rachat — Pièces empilées
export function CoinsIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <ellipse cx="18" cy="14" rx="10" ry="4" stroke="currentColor" />
      <path d="M8 14 V20 C8 22.2 12.5 24 18 24 C23.5 24 28 22.2 28 20 V14" stroke="currentColor" />
      <path d="M8 20 V26 C8 28.2 12.5 30 18 30 C23.5 30 28 28.2 28 26 V20" stroke="currentColor" />
      <ellipse cx="30" cy="30" rx="10" ry="4" stroke="currentColor" fill="currentColor" fillOpacity="0.12" />
      <path d="M20 30 V36 C20 38.2 24.5 40 30 40 C35.5 40 40 38.2 40 36 V30" stroke="currentColor" />
    </svg>
  );
}

// 7. Chômage — Horloge
export function ClockIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" />
      <path d="M24 14 V24 L30 28" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      <path d="M24 8 V10" stroke="currentColor" />
      <path d="M24 38 V40" stroke="currentColor" />
      <path d="M8 24 H10" stroke="currentColor" />
      <path d="M38 24 H40" stroke="currentColor" />
    </svg>
  );
}

// 8. SAM — Feuille avec barres de salaire
export function SalaryChartIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path
        d="M10 6 H28 L38 16 V40 C38 41.1 37.1 42 36 42 H10 C8.9 42 8 41.1 8 40 V8 C8 6.9 8.9 6 10 6 Z"
        stroke="currentColor"
      />
      <path d="M28 6 V16 H38" stroke="currentColor" />
      <rect x="14" y="30" width="4" height="8" fill="currentColor" opacity="0.4" />
      <rect x="21" y="26" width="4" height="12" fill="currentColor" opacity="0.6" />
      <rect x="28" y="22" width="4" height="16" fill="currentColor" />
      <path d="M14 38 H32" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

// 9. Gérant de SARL — Immeuble / entreprise
export function BuildingIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <rect x="11" y="6" width="20" height="36" rx="2" stroke="currentColor" />
      <rect x="31" y="18" width="9" height="24" rx="1.5" stroke="currentColor" />
      <rect x="16" y="12" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.25" />
      <rect x="22" y="12" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.25" />
      <rect x="16" y="20" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.25" />
      <rect x="22" y="20" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.25" />
      <rect x="34" y="24" width="3.5" height="3.5" rx="0.5" fill="currentColor" opacity="0.25" />
      <rect x="18" y="34" width="6" height="8" rx="1" stroke="currentColor" />
    </svg>
  );
}

// 10. Président de SAS — Fronton à colonnes (institution)
export function ColumnsIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path d="M6 18 L24 8 L42 18" stroke="currentColor" />
      <path d="M8 18 H40" stroke="currentColor" />
      <path d="M11 18 V36 M19 18 V36 M29 18 V36 M37 18 V36" stroke="currentColor" />
      <path d="M6 40 H42" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// 11. CIPAV — Plume (profession libérale)
export function FeatherIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path d="M38 9 C23 11 14 21 12 35 C24 33 33 24 39 10 Z" stroke="currentColor" />
      <path d="M30 16 C23 20 17 27 13 34" stroke="currentColor" />
      <path d="M9 41 L14 33" stroke="currentColor" />
    </svg>
  );
}

// 12. Congé maternité — Cœur
export function HeartIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path
        d="M24 39 C9 29 7 18 13.5 14 C18 11.2 22 13.5 24 17.5 C26 13.5 30 11.2 34.5 14 C41 18 39 29 24 39 Z"
        stroke="currentColor"
      />
    </svg>
  );
}

// 13. Pluriactivité — Flèches d'échange
export function SwitchIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path d="M9 18 H37" stroke="currentColor" />
      <path d="M31 12 L37 18 L31 24" stroke="currentColor" />
      <path d="M39 30 H11" stroke="currentColor" />
      <path d="M17 24 L11 30 L17 36" stroke="currentColor" />
    </svg>
  );
}

// 14. Pension de réversion — Couple
export function CoupleIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <circle cx="17" cy="15" r="5" stroke="currentColor" />
      <circle cx="31" cy="15" r="5" stroke="currentColor" />
      <path d="M7 41 C7 31 11 26 17 26 C20 26 22.5 27.3 24 29.5" stroke="currentColor" />
      <path d="M24 29.5 C25.5 27.3 28 26 31 26 C37 26 41 31 41 41" stroke="currentColor" />
    </svg>
  );
}

// 15. Cumul emploi-retraite — Convergence de deux flux
export function MergeIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path d="M8 12 C20 12 22 24 33 24" stroke="currentColor" />
      <path d="M8 36 C20 36 22 24 33 24" stroke="currentColor" />
      <path d="M28 18 L34 24 L28 30" stroke="currentColor" />
      <path d="M34 24 H40" stroke="currentColor" />
    </svg>
  );
}

// 16. Retraite progressive — Sablier
export function HourglassIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path d="M14 8 H34 M14 40 H34" stroke="currentColor" strokeWidth="2" />
      <path d="M17 8 V12 C17 18 24 22 24 24 C24 26 31 30 31 36 V40" stroke="currentColor" />
      <path d="M31 8 V12 C31 18 24 22 24 24 C24 26 17 30 17 36 V40" stroke="currentColor" />
      <path d="M20 13 H28" stroke="currentColor" opacity="0.5" />
      <path d="M20 37 H28" stroke="currentColor" />
    </svg>
  );
}

// 17. Carrière longue — Avance rapide (double chevron)
export function FastForwardIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" />
      <path d="M16 16 L25 24 L16 32" stroke="currentColor" strokeWidth="2" />
      <path d="M25 16 L34 24 L25 32" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// 18. Retraite des femmes — Balance (égalité)
export function ScalesIcon(props: IconProps) {
  return (
    <svg {...svgBase(props)}>
      <path d="M24 9 V41" stroke="currentColor" />
      <path d="M14 41 H34" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="11" r="2" fill="currentColor" />
      <path d="M10 14 H38" stroke="currentColor" />
      <path d="M10 14 L5 25 H15 L10 14 Z" stroke="currentColor" />
      <path d="M38 14 L33 25 H43 L38 14 Z" stroke="currentColor" />
    </svg>
  );
}

// Icon map by article slug
export const ANOMALIE_ICON_MAP: Record<string, (p: IconProps) => React.ReactElement> = {
  "trimestres-manquants": CalendarMissingIcon,
  "points-agirc-arrco": ChartPointsIcon,
  "revenus-tns": BriefcaseIcon,
  "carriere-etranger": GlobeIcon,
  "majorations-non-appliquees": StarPlusIcon,
  "rachat-trimestres": CoinsIcon,
  "periodes-chomage": ClockIcon,
  "salaires-sam": SalaryChartIcon,
  "retraite-gerant-sarl": BuildingIcon,
  "retraite-dirigeant-sas": ColumnsIcon,
  "retraite-cipav-erreur": FeatherIcon,
  "conge-maternite-retraite": HeartIcon,
  "retraite-pluriactivite": SwitchIcon,
  "pension-reversion": CoupleIcon,
  "cumul-emploi-retraite": MergeIcon,
  "retraite-progressive": HourglassIcon,
  "depart-anticipe-carriere-longue": FastForwardIcon,
  "retraite-femme-inegalites": ScalesIcon,
  "retraite-tns-complete": BriefcaseIcon,
};

export function AnomalieIcon({
  slug,
  size = 48,
  className = "",
}: {
  slug: string;
  size?: number;
  className?: string;
}) {
  const Component = ANOMALIE_ICON_MAP[slug] ?? CalendarMissingIcon;
  return <Component size={size} className={className} />;
}
