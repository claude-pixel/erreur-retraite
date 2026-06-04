import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function baseProps({ size = 40, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

// Calculette — simulateur décote
export function PercentDownIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="14" cy="14" r="4" stroke="currentColor" />
      <circle cx="26" cy="26" r="4" stroke="currentColor" />
      <path d="M29 11 L11 29" stroke="currentColor" />
      <path d="M30 32 L34 32 M32 30 L32 34" stroke="currentColor" />
    </svg>
  );
}

// Calcul rachat (pile de pièces avec €)
export function CoinsEuroIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <ellipse cx="20" cy="12" rx="12" ry="5" stroke="currentColor" />
      <path d="M8 12 V22 C8 25 13.4 27 20 27 C26.6 27 32 25 32 22 V12" stroke="currentColor" />
      <path d="M8 22 V32 C8 35 13.4 37 20 37 C26.6 37 32 35 32 32 V22" stroke="currentColor" />
      <text x="20" y="33" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor">€</text>
    </svg>
  );
}

// Points AGIRC-ARRCO (courbe de points)
export function PointsChartIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 6 V33 H34" stroke="currentColor" />
      <path d="M11 28 L18 22 L24 25 L32 13" stroke="currentColor" />
      <circle cx="11" cy="28" r="2.3" fill="currentColor" />
      <circle cx="18" cy="22" r="2.3" fill="currentColor" />
      <circle cx="24" cy="25" r="2.3" fill="currentColor" />
      <circle cx="32" cy="13" r="2.3" fill="currentColor" />
    </svg>
  );
}

// Année manquante (calendrier avec X)
export function MissingYearIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="5" y="8" width="30" height="28" rx="3" stroke="currentColor" />
      <path d="M12 4 V11" stroke="currentColor" />
      <path d="M28 4 V11" stroke="currentColor" />
      <path d="M5 17 H35" stroke="currentColor" />
      <rect x="10" y="22" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="17.5" y="22" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="25" y="22" width="5" height="5" rx="1" stroke="currentColor" strokeDasharray="2 1.5" />
      <path d="M26 23 L29 26 M29 23 L26 26" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10" y="29" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="17.5" y="29" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="25" y="29" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
