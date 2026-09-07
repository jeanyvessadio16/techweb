"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderGit2, Code, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28 lg:pb-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Colonne gauche : Titres, Proposition de valeur & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            >
              {/* Localisation et Identité */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Niafrang · Casamance · Sénégal</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                  Jean-Yves <span className="text-slate-900">SADIO</span>
                </h1>

                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                  Développeur Web à Niafrang, Sénégal
                </p>
              </div>

              {/* Description synthétique */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Je conçois des sites web et applications modernes, rapides et sur mesure pour les entreprises, organisations, entrepreneurs et porteurs de projets.
              </p>

              {/* Boutons d'action principaux (CTAs) */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
                <Button
                  variant="default"
                  size="xl"
                  className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white rounded-xl px-8 py-4 font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                    <span>Démarrer un projet</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto border-slate-300 text-slate-900 hover:bg-slate-100 rounded-xl px-8 py-4 font-semibold transition-all cursor-pointer"
                >
                  <Link href="/projets" className="inline-flex items-center justify-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-slate-600" />
                    <span>Voir mes projets</span>
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Colonne droite : Photo officielle et carte de profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">

                {/* Cadre de la photo */}
                <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/90 shadow-xl">
                  <Image
                    src="/images/jean-yves.png"
                    alt="Photo de profil de Jean-Yves SADIO - Développeur Web Niafrang"
                    width={500}
                    height={500}
                    priority
                    className="w-full aspect-square object-cover rounded-2xl transition-transform hover:scale-[1.01] duration-300"
                  />
                </div>

                {/* Badge flottant : Spécialité & Marque */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-5 left-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-lg flex items-center gap-3.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-none">Marque Personnelle</p>
                    <p className="text-sm font-extrabold text-slate-950 mt-1">TECHWEB-JY · Développement Sur-Mesure</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section Présentation Rapide (avec lien vers /about) */}
      <AboutSection />

      {/* Section Services Preview (avec lien vers /services) */}
      <ServicesSection />

      {/* Section Compétences Preview (avec lien vers /competences) */}
      <SkillsSection />

      {/* Section Projets Preview (avec lien vers /projets) */}
      <ProjectsSection />

      {/* Section Processus (5 étapes méthodologiques) */}
      <ProcessSection />

      {/* Section CTA Finale (vers /contact) */}
      <CtaSection />

    </main>
  );
}
