import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Jean-Yves SADIO - Développeur Web & Informatique | Niafrang (TECHWEB-JY)";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Chargement du logo officiel TECHWEB-JY en base64 pour l'intégrer dans l'image OpenGraph
  let logoSrc = "";
  try {
    const logoPath = path.join(process.cwd(), "public", "logo", "techwebjy-logo.png");
    const logoBuffer = fs.readFileSync(logoPath);
    logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  } catch (error) {
    console.error("Erreur lors du chargement du logo pour OpenGraph:", error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 900px 100px, rgba(30, 58, 138, 0.5), transparent 50%), radial-gradient(circle at 100px 500px, rgba(29, 78, 216, 0.3), transparent 40%)",
          padding: "56px 72px",
          color: "white",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* En-tête avec le logo TECHWEB-JY et badge localité */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {logoSrc ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                padding: "12px 24px",
                borderRadius: "16px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Logo officiel */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt="Logo TECHWEB-JY"
                style={{
                  height: "52px",
                  objectFit: "contain",
                }}
              />
            </div>
          ) : (
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#60a5fa" }}>
              TECHWEB-JY
            </span>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#3b82f6",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#93c5fd",
              }}
            >
              NIAFRANG — SÉNÉGAL
            </span>
          </div>
        </div>

        {/* Content Principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Jean-Yves <span style={{ color: "#60a5fa" }}>SADIO</span>
          </h1>

          <p
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#e2e8f0",
              margin: 0,
            }}
          >
            Développeur Web & Expert Informatique
          </p>

          <p
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Solutions web sur-mesure, applications modernes & performantes (React, Next.js, TypeScript).
          </p>
        </div>

        {/* Pied de page avec technologies et nom de domaine */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "17px",
              fontWeight: 500,
              color: "#cbd5e1",
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>UI/UX</span>
          </div>

          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#60a5fa",
            }}
          >
            techwebjy.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

