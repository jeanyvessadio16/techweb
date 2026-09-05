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
  { id: 1, label: "Accueil", href: "/#hero" },
  { id: 2, label: "Services", href: "/#services" },
  { id: 3, label: "Compétences", href: "/#competences" },
  { id: 4, label: "À propos", href: "/#a-propos" },
  { id: 5, label: "Projets", href: "/#projets" },
  { id: 6, label: "Contact", href: "/#contact" },
];

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  // Détection du défilement & Scroll Spy des sections actives
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver pour repérer la section visible
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, [pathname]);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le défilement et écouter la touche Échap quand le menu mobile est ouvert
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 w-full max-w-full z-50 transition-all duration-300 box-border",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full box-border">
          {/* Logo */}
          <Link
            href="/#hero"
            onClick={(e) => handleNavClick(e, "/#hero")}
            className="flex items-center gap-2 group transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-lg p-1 shrink-0"
            aria-label="Accueil TECHWEB-JY"
          >
            <Image
              src="/logo/techwebjy-logo.png"
              alt="Logo TECHWEB-JY"
              width={160}
              height={44}
              priority
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Navigation Links Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Navigation principale">
            {NAVBAR_LINKS.map((link) => {
              const targetSection = link.href.replace("/#", "");
              const isActive =
                pathname === "/"
                  ? activeSection === targetSection
                  : pathname === link.href;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-blue-900 bg-blue-50/90 font-bold shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              className="bg-blue-900 hover:bg-blue-950 text-white rounded-full px-5 py-2 font-medium shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="inline-flex items-center gap-1.5"
              >
                <span>Me contacter</span>
              </Link>
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={isMenuOpen}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors cursor-pointer shrink-0"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-900 shrink-0" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900 shrink-0" />
            )}
          </button>
        </div>
      </header>

      {/* Volet Menu Mobile & Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden overflow-hidden" role="dialog" aria-modal="true">
          {/* Overlay d'arrière-plan */}
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Tiroir / Panneau mobile */}
          <nav
            aria-label="Navigation mobile"
            className="w-4/5 max-w-xs fixed top-16 right-0 bottom-0 bg-white border-l border-slate-200 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between box-border"
          >
            <ul className="flex flex-col space-y-2 pt-2">
              {NAVBAR_LINKS.map((link) => {
                const targetSection = link.href.replace("/#", "");
                const isActive =
                  pathname === "/"
                    ? activeSection === targetSection
                    : pathname === link.href;

                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-blue-50 text-blue-900 font-bold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-blue-900" />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Bouton d'action dans le menu mobile */}
            <div className="pb-24 pt-6 border-t border-slate-100 space-y-3">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-blue-900 hover:bg-blue-950 text-white rounded-xl py-3.5 font-medium shadow-xs cursor-pointer"
              >
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <Mail className="w-4 h-4" />
                  <span>Prendre contact</span>
                </Link>
              </Button>
              <p className="text-center text-xs text-slate-500">
                Disponible pour missions freelance & CDI
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}