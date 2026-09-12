import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA, UPCOMING_PROJECTS_DATA } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, ArrowRight, FolderGit2, AlertCircle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets & Portfolio Web | Jean-Yves SADIO - Développeur Web Bignona & Ziguinchor",
  description:
    "Réalisations de Jean-Yves SADIO (Fani Impact Lab, ACCEENT Ziguinchor). Plateformes web, applications réactives et solutions sur-mesure développées à Niafrang, Bignona et Ziguinchor, Sénégal.",
  alternates: {
    canonical: "/projets",
  },
  openGraph: {
    title: "Portfolio & Realisations Web | Jean-Yves SADIO - Développeur Web Bignona & Ziguinchor",
    description:
      "Études de cas réelles et projets web développés avec React, Next.js, TypeScript et Tailwind CSS à Niafrang, Bignona, Ziguinchor, Casamance, Sénégal.",
    url: "https://techwebjy.com/projets",
  },
};

export default function ProjetsPage() {
  return (
    <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Portfolio & Cas d&apos;Études Réels
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Des réalisations conçues comme des preuves de compétence
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Découvrez comment j&apos;accompagne les entreprises et organisations pour résoudre leurs défis de visibilité et d&apos;outils digitaux grâce à un développement web performant.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24 mb-20">
          {PROJECTS_DATA.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
                    <Image
                      src={project.imageUrl}
                      alt={`Aperçu du projet ${project.title}`}
                      width={800}
                      height={500}
                      className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-950/90 text-white backdrop-blur-md">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                      <span>Année de livraison : {project.year}</span>
                      <span>Rôle : Conception & Développement Web</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                      {project.title}
                    </h2>
                    <p className="text-sm font-semibold text-slate-600">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {project.description}
                  </p>

                  {project.problem && project.solution && (
                    <div className="space-y-3 pt-2">
                      <div className="bg-red-50/60 border border-red-200/70 rounded-xl p-3.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 text-red-900 font-bold mb-1">
                          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                          <span>Contexte & Problème :</span>
                        </div>
                        <p className="text-slate-800 leading-relaxed">{project.problem}</p>
                      </div>

                      <div className="bg-emerald-50/60 border border-emerald-200/70 rounded-xl p-3.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 text-emerald-900 font-bold mb-1">
                          <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Solution apportée :</span>
                        </div>
                        <p className="text-slate-800 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                  )}

                  {project.deliverables && (
                    <div className="space-y-2 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Livrables majeurs
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 border border-slate-200 text-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.demoUrl && (
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                      <Button
                        variant="default"
                        size="default"
                        className="bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl cursor-pointer"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <span>Visiter le site en ligne</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

        <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xs mb-20 text-center max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-950 mx-auto">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              {UPCOMING_PROJECTS_DATA.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {UPCOMING_PROJECTS_DATA.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {UPCOMING_PROJECTS_DATA.technologiesExplored.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Vous voulez ajouter votre projet à cette liste ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Concevons ensemble une solution numérique sur-mesure performante qui valorisera parfaitement votre marque et vos services.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-100 font-bold rounded-2xl px-8 py-4 shadow-lg shrink-0 cursor-pointer"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Discuter de mon projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </main>
  );
}
