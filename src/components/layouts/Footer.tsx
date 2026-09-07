"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Compétences", href: "/competences" },
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projets" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grille principale du Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80 items-start">
          
          {/* Colonne 1 : Marque & Identification */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link
              href="/"
              className="inline-block bg-white rounded-xl p-2.5 shadow-xs transition-transform hover:scale-105"
            >
              <Image
                src="/logo/techwebjy-logo.png"
                alt="Logo TECHWEB-JY"
                width={150}
                height={40}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              TECHWEB-JY — Développement web moderne et solutions numériques sur mesure par Jean-Yves SADIO (Niafrang, Casamance, Sénégal).
            </p>

            {/* Liens réseaux sociaux */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/techwebjy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Jean-Yves SADIO"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center justify-center cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/techwebjy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Jean-Yves SADIO"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center justify-center cursor-pointer"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation principale */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h3>
            <nav aria-label="Navigation footer">
              <ul className="flex flex-col space-y-2 text-sm font-medium">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Colonne 3 : Coordonnées et localisation */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3.5">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Contact & Localisation
            </h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="mailto:techwebjeanyves@gmail.com"
                className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-slate-800 transition-all shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-semibold text-xs sm:text-sm">techwebjeanyves@gmail.com</span>
              </a>

              <a
                href="tel:+221767600219"
                className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-slate-800 transition-all shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold text-xs sm:text-sm">+221 76 760 02 19</span>
              </a>

              <div className="inline-flex items-center gap-2.5 text-slate-400 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Niafrang · Casamance · Sénégal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bas de page : Copyright exact & Retour en haut */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 TECHWEB-JY — Jean-Yves SADIO. Tous droits réservés.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
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
