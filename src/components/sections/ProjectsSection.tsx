"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import {
  FolderKanban,
  ExternalLink,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

interface CategoryFilter {
  id: ProjectCategory;
  label: string;
}

const CATEGORY_FILTERS: CategoryFilter[] = [
  { id: "all", label: "Tous les projets" },
  { id: "saas", label: "SaaS & Dashboards" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "web", label: "Outils Web" },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === selectedCategory);

  return (
    <section id="projets" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Réalisations & Études de cas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Projets récents & Réalisations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Découvrez une sélection de projets concrets alliant design moderne, code TypeScript rigoureux et performances optimales.
          </p>

          {/* Filtres de catégories avec Shadcn UI Button */}
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
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                      : "bg-slate-100 border-transparent text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
                  )}
                >
                  {cat.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Image & Badges */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                <Image
                  src={project.imageUrl}
                  alt={`Aperçu du projet ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge d'année */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-700 shadow-2xs">
                  {project.year}
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">
                  {project.subtitle}
                </p>
                <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Fonctionnalités clés */}
                {project.keyFeatures && (
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Puces de technologies */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Boutons d'action */}
                <div className="mt-6 pt-2 flex items-center gap-3 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 font-medium shadow-xs inline-flex items-center justify-center gap-1.5 text-xs cursor-pointer"
                      )}
                    >
                      <span>Démo en direct</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl px-3 py-2.5 inline-flex items-center justify-center gap-1.5 text-xs cursor-pointer"
                      )}
                      aria-label={`Code source de ${project.title}`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bannière d'appel à l'action sous les projets */}
        <div className="mt-16 bg-slate-50 border border-slate-200/90 rounded-2xl p-8 sm:p-10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Vous avez un projet web ambitieux en tête ?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Discutons de vos besoins et transformons vos idées en produit performant.
            </p>
          </div>
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-semibold shadow-xs cursor-pointer shrink-0"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Démarrer un projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
