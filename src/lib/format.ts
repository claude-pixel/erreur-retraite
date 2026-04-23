export const fmt = (n: number, decimals = 0) =>
  n.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

export const fmtEur = (n: number, decimals = 0) => `${fmt(n, decimals)} €`;

export const fmtPct = (n: number, decimals = 2) => `${fmt(n, decimals)} %`;
