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
    default: "Jean-Yves SADIO | Développeur Web & Expert Informatique - Niafrang (TECHWEB-JY)",
    template: "%s | Jean-Yves SADIO - Informatique & Web Niafrang",
  },
  description:
    "Portfolio professionnel de Jean-Yves SADIO (TECHWEB-JY), Développeur Web & Etudiant en Informatique originaire de Niafrang. Conception de solutions informatiques sur-mesure, sites web modernes et applications réactives avec React, Next.js, TypeScript et Node.js.",
  keywords: [
    "Niafrang",
    "Jean-Yves SADIO",
    "Jean-Yves SADIO Niafrang",
    "Informatique Niafrang",
    "Développeur Niafrang",
    "TECHWEB-JY Niafrang",
    "Informatique",
    "Développeur Informatique",
    "Ingénieur Informatique",
    "Solutions Informatiques",
    "Développeur Web",
    "Développeur React",
    "Développeur Next.js",
    "UI/UX Designer",
    "Développeur Freelance Sénégal",
    "Création site web Niafrang",
    "Développement Front-End",
    "Développement Full-Stack",
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
    title: "Jean-Yves SADIO | Développeur Web & Etudiant en Informatique - Niafrang",
    description:
      "Portfolio de Jean-Yves SADIO (TECHWEB-JY), étudiant en Informatique et Développeur Web originaire de Niafrang. Découvrez mes projets, compétences informatiques et prestations web.",
    url: siteUrl,
    siteName: "TECHWEB-JY - Jean-Yves SADIO (Niafrang)",
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
    title: "Jean-Yves SADIO | Développeur Web & Expert Informatique - Niafrang",
    description:
      "Portfolio de Jean-Yves SADIO (TECHWEB-JY), spécialiste en Informatique et Développeur Web à Niafrang. Projets web, développement React / Next.js & UI/UX.",
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
    alternateName: ["Jean Yves SADIO", "Jean-Yves SADIO Niafrang", "TECHWEB-JY"],
    jobTitle: "Développeur Web Full-Stack & Expert Informatique",
    description:
      "Spécialiste en Informatique et Développeur Web originaire de Niafrang (Sénégal). Conception d'applications web modernes, réactives et performantes.",
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
      "Informatique",
      "Génie Informatique",
      "Niafrang",
      "Sénégal",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "UI/UX Design",
      "PostgreSQL",
      "Tailwind CSS",
      "Web Development",
      "SEO",
      "Generative Engine Optimization (GEO)",
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
    areaServed: ["Niafrang", "Sénégal", "International", "Worldwide"],
    description:
      "Services informatiques, création de sites web et développement d'applications sur-mesure à Niafrang (Sénégal) par Jean-Yves SADIO.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qui est Jean-Yves SADIO à Niafrang ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jean-Yves SADIO est un développeur web full-stack et expert en informatique basé à Niafrang (Sénégal), fondateur de TECHWEB-JY.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les services proposés par TECHWEB-JY ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TECHWEB-JY propose la création de sites web modernes, le développement d'applications web (React, Next.js, Node.js), la conception UI/UX et des prestations de conseil informatique.",
        },
      },
      {
        "@type": "Question",
        name: "Comment contacter Jean-Yves SADIO (TECHWEB-JY) ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez contacter Jean-Yves SADIO par téléphone et WhatsApp au +221 76 760 02 19, par email à techwebjeanyves@gmail.com ou directement sur son site https://techwebjy.com.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TECHWEB-JY - Portfolio Jean-Yves SADIO (Niafrang)",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: "Jean-Yves SADIO",
    },
    inLanguage: "fr-FR",
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
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
