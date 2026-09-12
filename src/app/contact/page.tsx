import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Devis Web | Jean-Yves SADIO - Développeur Web Bignona, Ziguinchor & Kafountine",
  description:
    "Contactez Jean-Yves SADIO, Développeur Web à Niafrang, Bignona, Ziguinchor, Kafountine et Kataba (Casamance, Sénégal). Discutez de votre projet de création de site web ou d'application sur-mesure. Réponse sous 24h à 48h.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Devis Web | Jean-Yves SADIO - Développeur Web Bignona & Ziguinchor",
    description:
      "Formulaire de contact et coordonnées directes de Jean-Yves SADIO, développeur web à Niafrang, Bignona, Ziguinchor, Kafountine et Kataba, Casamance, Sénégal.",
    url: "https://techwebjy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 w-full pt-20 sm:pt-28 bg-slate-50">
      <ContactSection />
    </main>
  );
}
