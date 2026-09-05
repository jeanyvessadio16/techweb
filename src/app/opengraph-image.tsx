import { ImageResponse } from "next/og";

export const alt = "Jean-Yves SADIO - Développeur Web & Expert Informatique | Niafrang (TECHWEB-JY)";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          padding: "64px 80px",
          color: "white",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 20px",
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
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "#93c5fd",
            }}
          >
            TECHWEB-JY — NIAFRANG
          </span>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
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
              fontSize: "32px",
              fontWeight: 600,
              color: "#e2e8f0",
              margin: 0,
            }}
          >
            Développeur Web & Expert Informatique • Niafrang
          </p>

          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Conception & développement d'interfaces modernes, rapides et performantes avec React, Next.js et TypeScript.
          </p>
        </div>

        {/* Footer info & Tech stack badges */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "18px",
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
