"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { type Navbar } from "@/types/navigation";
import { cn } from "cn";
import { Button } from "../ui/button";

const NAVBAR_LINKS: Navbar[] = [
  { id: 1, label: "Accueil", href: "/" },
  { id: 2, label: "À propos", href: "/a-propos" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Projets", href: "/projets" },
];

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Détecte le défilement pour ajouter un effet d'ombre subtil
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le défilement quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          "bg-white/90 backdrop-blur-md border-b border-slate-200/80",
          isScrolled ? "shadow-xs" : ""
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            aria-label="Accueil TECHWEB-JY"
          >
            <Image
              src="/logo/techwebjy-logo.png"
              alt="Logo TECHWEB-JY"
              width={160}
              height={44}
              priority
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Navigation Links Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Navigation principale">
            {NAVBAR_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-150",
                    isActive
                      ? "text-blue-600 bg-blue-50/80 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button Desktop avec Shadcn UI Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 font-medium shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <Link href="/contact" className="inline-flex items-center gap-1.5">
                <span>Me contacter</span>
              </Link>
            </Button>
          </div>

          {/* Bouton Menu Mobile avec Shadcn UI Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={isMenuOpen}
            className="md:hidden cursor-pointer rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </header>

      {/* Volet Menu Mobile & Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          {/* Overlay d'arrière-plan */}
          <div
            className="fixed inset-0 bg-slate-900/25 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Tiroir / Panneau mobile */}
          <nav
            aria-label="Navigation mobile"
            className="w-sm max-w-[85vw] min-h-screen fixed top-16 sm:top-20 right-0 bg-white border-l border-slate-200 shadow-xl p-6 transition-transform"
          >
            <ul className="flex flex-col space-y-2">
              {NAVBAR_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Bouton d'action dans le menu mobile avec Shadcn UI Button */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-medium shadow-sm cursor-pointer"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <Mail className="w-4 h-4" />
                  <span>Prendre contact</span>
                </Link>
              </Button>
              <p className="text-center text-xs text-slate-500 mt-3">
                Disponible pour missions freelance & CDI
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}