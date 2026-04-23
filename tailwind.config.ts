import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fcfaf5",
        "bg-2": "#f4efe4",
        "bg-3": "#ebe4d1",
        paper: "#ffffff",
        ink: {
          DEFAULT: "#1d2c2c",
          2: "#3e5050",
        },
        muted: "#7a8585",
        rule: {
          DEFAULT: "#e3ded0",
          2: "#c7c0ac",
        },
        emerald: {
          DEFAULT: "#0c7558",
          2: "#0a5d46",
          light: "#dcf0ea",
        },
        sun: {
          DEFAULT: "#e89d2e",
          dark: "#a56b10",
          light: "#fbeed4",
        },
        brick: {
          DEFAULT: "#c24f2d",
          light: "#fae4da",
        },
        cobalt: {
          DEFAULT: "#2055a2",
          light: "#dfe9f7",
        },
        plum: {
          DEFAULT: "#744182",
          light: "#ece0f1",
        },
        sage: {
          DEFAULT: "#5b8661",
          light: "#e1eadd",
        },
        accent: "#0c7558",
        warn: "#c24f2d",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "h1-xl": ["3.2rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1-lg": ["2.4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["2rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h3: ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "body-lg": ["1.1rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.88rem", { lineHeight: "1.55" }],
        micro: ["0.72rem", { lineHeight: "1.5", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        container: "1280px",
        prose: "68ch",
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};
export default config;
