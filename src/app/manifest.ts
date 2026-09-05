import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jean-Yves SADIO - Portfolio TECHWEB-JY",
    short_name: "TECHWEB-JY",
    description:
      "Portfolio professionnel de Jean-Yves SADIO, Développeur Web Full-Stack & Spécialiste UI/UX.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
