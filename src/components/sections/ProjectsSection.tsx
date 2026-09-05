"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA, UPCOMING_PROJECTS_DATA } from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";

interface CategoryFilter {
  id: ProjectCategory;
  label: string;
}

const CATEGORY_FILTERS: CategoryFilter[] = [
  { id: "all", label: "Tous les projets" },
  { id: "web", label: "Web & Plateformes" },
  { id: "fullstack", label: "Full-Stack & BDD" },
  { id: "design", label: "Design & Branding" },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === selectedCategory);

  return (
    <section id="projets" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Réalisations & Projets
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Projets réalisés
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Découvrez une sélection de projets web et numériques conçus et développés avec soin.
          </p>

          {/* Filtres de catégories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <Button
                  key={cat.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "rounded-full text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer",
                    isActive
                      ? "bg-blue-900 hover:bg-blue-950 text-white shadow-xs"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {cat.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Grille des cartes de projets épurées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                  <Image
                    src={project.imageUrl}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge Catégorie & Année */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-900 shadow-2xs">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-slate-900/80 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                    {project.year}
                  </div>
                </div>

                {/* Contenu du projet */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Titre & Sous-titre */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-900 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description simple */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies & Badges Footer */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-slate-700 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-950 transition-colors cursor-pointer group/link"
                  >
                    <span>Discuter du projet</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Projets en développement */}
        <div className="mt-16 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
              <Rocket className="w-3.5 h-3.5 text-blue-900" />
              <span>{UPCOMING_PROJECTS_DATA.title}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {UPCOMING_PROJECTS_DATA.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0 max-w-xs">
            {UPCOMING_PROJECTS_DATA.technologiesExplored.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-bold shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bannière CTA globale */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-950 text-white rounded-xl px-8 py-3.5 font-semibold shadow-xs cursor-pointer"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Vous avez un projet en tête ? Parlons-en !</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
