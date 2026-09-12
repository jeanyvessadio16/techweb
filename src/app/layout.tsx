import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techwebjy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jean-Yves SADIO | Développeur Web à Niafrang, Sénégal (TECHWEB-JY)",
    template: "%s | Jean-Yves SADIO - TECHWEB-JY",
  },
  description:
    "Portfolio professionnel et marque TECHWEB-JY de Jean-Yves SADIO, Développeur Web à Niafrang, Bignona, Ziguinchor, Kafountine et Kataba (Casamance, Sénégal). Conception de sites web vitrines, applications sur-mesure, UI/UX design et maintenance réactive avec React, Next.js et Node.js.",
  keywords: [
    "Jean-Yves SADIO",
    "TECHWEB-JY",
    "Développeur Web Niafrang",
    "Développeur Web Bignona",
    "Développeur Web Ziguinchor",
    "Développeur Web Kafountine",
    "Développeur Web Kataba",
    "Développeur Web Casamance",
    "Développeur Web Sénégal",
    "Création site web Bignona",
    "Création site web Ziguinchor",
    "Création site web Kafountine",
    "Création site web Casamance",
    "Développement d'application web Sénégal",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "UI/UX Design",
    "Figma",
  ],
  authors: [{ name: "Jean-Yves SADIO", url: siteUrl }],
  creator: "Jean-Yves SADIO",
  publisher: "TECHWEB-JY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jean-Yves SADIO | Développeur Web Bignona, Ziguinchor & Casamance - TECHWEB-JY",
    description:
      "Conception de sites web modernes et applications réactives sur-mesure pour entreprises, organisations et entrepreneurs à Bignona, Ziguinchor, Kafountine, Kataba et partout au Sénégal.",
    url: siteUrl,
    siteName: "TECHWEB-JY - Jean-Yves SADIO (Niafrang · Bignona · Ziguinchor, Sénégal)",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo/techwebjy-logo.png",
        width: 1200,
        height: 630,
        alt: "Logo TECHWEB-JY - Jean-Yves SADIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Yves SADIO | Développeur Web Bignona, Ziguinchor & Casamance - TECHWEB-JY",
    description:
      "Portfolio de Jean-Yves SADIO (TECHWEB-JY), développeur web à Niafrang, Bignona, Ziguinchor, Kafountine et Kataba. React, Next.js, Node.js & UI/UX Design.",
    images: ["/logo/techwebjy-logo.png"],
    creator: "@techwebjy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo/techwebjy-logo.png",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jean-Yves SADIO",
    alternateName: ["Jean Yves SADIO", "Jean-Yves SADIO Niafrang", "Jean-Yves SADIO Bignona", "Jean-Yves SADIO Ziguinchor", "TECHWEB-JY"],
    jobTitle: "Développeur Web Full-Stack",
    description:
      "Développeur Web à Niafrang, Bignona, Ziguinchor, Kafountine et Kataba (Casamance, Sénégal). Conception de sites web et applications réactives sur-mesure pour entreprises et entrepreneurs de toute la région.",
    url: siteUrl,
    image: `${siteUrl}/images/jean-yves.png`,
    logo: `${siteUrl}/logo/techwebjy-logo.png`,
    email: "techwebjeanyves@gmail.com",
    telephone: "+221767600219",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niafrang",
      addressRegion: "Ziguinchor",
      addressCountry: "SN",
      addressArea: "Bignona",
    },
    worksFor: {
      "@type": "Organization",
      name: "TECHWEB-JY",
      url: siteUrl,
      logo: `${siteUrl}/logo/techwebjy-logo.png`,
    },
    sameAs: [
      "https://github.com/techwebjy",
      "https://linkedin.com/in/techwebjy",
    ],
    knowsAbout: [
      "Développement Web",
      "Création de sites web",
      "Développement d'application web",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "UI/UX Design",
      "SEO",
      "GEO",
      "Niafrang",
      "Bignona",
      "Ziguinchor",
      "Kafountine",
      "Kataba",
      "Casamance",
      "Sénégal",
    ],
    knowsLanguage: ["fr", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TECHWEB-JY - Jean-Yves SADIO",
    image: `${siteUrl}/logo/techwebjy-logo.png`,
    logo: `${siteUrl}/logo/techwebjy-logo.png`,
    url: siteUrl,
    telephone: "+221767600219",
    email: "techwebjeanyves@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niafrang",
      addressRegion: "Casamance",
      addressCountry: "SN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.85,
      longitude: -16.65,
    },
    areaServed: [
      "Niafrang",
      "Bignona",
      "Ziguinchor",
      "Kafountine",
      "Kataba",
      "Casamance",
      "Sénégal",
      "International",
    ],
    description:
      "Création de sites web, développement d'applications web, UI/UX design et maintenance par Jean-Yves SADIO. Intervenant à Niafrang, Bignona, Ziguinchor, Kafountine, Kataba et dans toute la Casamance.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TECHWEB-JY - Jean-Yves SADIO",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: "Jean-Yves SADIO",
    },
    inLanguage: "fr-FR",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} min-h-screen antialiased overflow-x-hidden w-full max-w-full`}
    >
      <head>
        <link rel="author" type="text/plain" href="/llms.txt" title="LLMs Info (GEO)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden w-full max-w-full box-border`}>
        <HeaderNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
