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
    "Portfolio professionnel de Jean-Yves SADIO (TECHWEB-JY), Développeur Web & Expert en Informatique originaire de Niafrang. Conception de solutions informatiques sur-mesure, sites web modernes et applications réactives avec React, Next.js, TypeScript et Node.js.",
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
    title: "Jean-Yves SADIO | Développeur Web & Expert Informatique - Niafrang",
    description:
      "Portfolio de Jean-Yves SADIO (TECHWEB-JY), spécialiste en Informatique et Développeur Web originaire de Niafrang. Découvrez mes projets, compétences informatiques et prestations web.",
    url: siteUrl,
    siteName: "TECHWEB-JY - Jean-Yves SADIO (Niafrang)",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Yves SADIO | Développeur Web & Expert Informatique - Niafrang",
    description:
      "Portfolio de Jean-Yves SADIO (TECHWEB-JY), spécialiste en Informatique et Développeur Web à Niafrang. Projets web, développement React / Next.js & UI/UX.",
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
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jean-Yves SADIO",
    alternateName: "Jean Yves SADIO",
    jobTitle: "Développeur Web & Expert Informatique",
    description: "Spécialiste en Informatique et Développeur Web originaire de Niafrang.",
    url: siteUrl,
    image: `${siteUrl}/images/jean-yves.png`,
    email: "contact@techwebjy.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niafrang",
      addressCountry: "SN",
    },
    worksFor: {
      "@type": "Organization",
      name: "TECHWEB-JY",
    },
    sameAs: [
      "https://github.com/techwebjy",
      "https://linkedin.com/in/techwebjy",
    ],
    knowsAbout: [
      "Informatique",
      "Génie Informatique",
      "Niafrang",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "UI/UX Design",
      "PostgreSQL",
      "Tailwind CSS",
      "Web Development",
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
