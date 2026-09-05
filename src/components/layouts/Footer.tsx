"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "#a-propos" },
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/techwebjy",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/techwebjy",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: "mailto:contact@techwebjy.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-12 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ligne principale du Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-100">
          
          {/* Marque & Identification */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/techwebjy-logo.png"
                alt="Logo TECHWEB-JY"
                width={140}
                height={38}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-500 max-w-sm">
              Jean-Yves SADIO — Développeur Web Front-End. Création d'interfaces modernes, réactives et performantes.
            </p>
          </div>

          {/* Navigations essentielles */}
          <nav aria-label="Navigation footer">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Réseaux sociaux & Contact */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-200 transition-all flex items-center justify-center cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Bas de page : Copyright & Bouton de retour en haut */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TECHWEB-JY (Jean-Yves SADIO). Tous droits réservés.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-900 font-medium transition-colors cursor-pointer"
            aria-label="Retourner en haut de la page"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
