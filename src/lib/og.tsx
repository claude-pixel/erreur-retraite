import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgParams = {
  title: string;
  eyebrow?: string;
};

export function createOgImage({ title, eyebrow }: OgParams) {
  const titleSize = title.length > 80 ? 52 : title.length > 55 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#fcfaf5",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 4,
              background: "#0c7558",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#3e5050",
              fontWeight: 600,
            }}
          >
            {eyebrow ?? "erreur-retraite.fr"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <div
            style={{
              fontSize: titleSize,
              lineHeight: 1.08,
              color: "#1d2c2c",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              display: "block",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #c7c0ac",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 32,
                color: "#0c7558",
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              erreur-retraite.fr
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#7a8585",
                marginTop: 4,
                fontWeight: 500,
              }}
            >
              L&apos;information retraite enfin accessible
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#a56b10",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            média indépendant
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
