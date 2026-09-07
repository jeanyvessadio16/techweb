"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "cn";
import { Button } from "../ui/button";

const NAVBAR_LINKS = [
  { id: 1, label: "Accueil", href: "/" },
  { id: 2, label: "Services", href: "/services" },
  { id: 3, label: "Compétences", href: "/competences" },
  { id: 4, label: "À propos", href: "/about" },
  { id: 5, label: "Projets", href: "/projets" },
  { id: 6, label: "Contact", href: "/contact" },
];

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 box-border",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg p-1 shrink-0"
            aria-label="Accueil TECHWEB-JY - Jean-Yves SADIO"
          >
            <Image
              src="/logo/techwebjy-logo.png"
              alt="Logo TECHWEB-JY - Jean-Yves SADIO"
              width={160}
              height={44}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigation principale">
            {NAVBAR_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-slate-950 bg-slate-100 font-bold shadow-2xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              className="bg-slate-950 hover:bg-slate-900 text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                <span>Démarrer un projet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-colors cursor-pointer shrink-0"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-950 shrink-0" />
            ) : (
              <Menu className="w-6 h-6 text-slate-950 shrink-0" />
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden overflow-hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          <nav
            aria-label="Navigation mobile"
            className="w-4/5 max-w-xs fixed top-16 right-0 bottom-0 bg-white border-l border-slate-200 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between box-border"
          >
            <ul className="flex flex-col space-y-2 pt-2">
              {NAVBAR_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-slate-100 text-slate-950 font-bold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pb-20 pt-6 border-t border-slate-100 space-y-3">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-slate-950 hover:bg-slate-900 text-white rounded-xl py-3.5 font-semibold shadow-xs cursor-pointer"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                  <span>Démarrer un projet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <p className="text-center text-xs text-slate-500 font-medium">
                Niafrang · Casamance · Sénégal
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}