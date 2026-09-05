import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderGit2, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-full overflow-x-hidden">
      {/* Hero section */}
      <section id="hero" className="relative overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Colonne gauche : Présentation & IHM */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Titre & Hiérarchie */}
              <div className="space-y-3">
                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide">
                  Développeur Web & Interfaces Numériques
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Jean-Yves <span className="text-blue-900">SADIO</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 tracking-tight">
                  Conception & Développement Web
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Développeur Web passionné par la création d'interfaces modernes, rapides et intuitives. J'allie sensibilité UI/UX et rigueur technique pour concevoir des applications web sur-mesure.
              </p>

              {/* Boutons d'action (CTAs) */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-white rounded-xl px-7 py-3.5 font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    <span>Discuter d'un projet</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-900 rounded-xl px-7 py-3.5 font-semibold transition-all cursor-pointer"
                >
                  <Link href="/projets" className="inline-flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-slate-600" />
                    <span>Voir mes projets</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Colonne droite : Photo de profil & Carte IHM */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">

                {/* Cadre de la photo */}
                <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl">
                  <Image
                    src="/images/jean-yves.png"
                    alt="Photo de profil de Jean-Yves SADIO"
                    width={500}
                    height={500}
                    priority
                    className="w-full aspect-square object-cover rounded-2xl transition-transform hover:scale-[1.01] duration-300"
                  />
                </div>

                {/* Badge flottant inférieur : Spécialité */}
                <div className="absolute -bottom-4 left-2 right-2 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium leading-none">Spécialité</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">UI/UX & Développement Web</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services section */}
      <ServicesSection />

      {/* Skills section */}
      <SkillsSection />

      {/* About me section */}
      <AboutSection />

      {/* Projects section */}
      <ProjectsSection />

      {/* Contact section */}
      <ContactSection />
    </main>
  );
}
