import type { Metadata } from "next";
import Link from "next/link";
import { SKILL_CATEGORIES } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Code2, Server, Database, Palette, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Compétences & Expertises Techniques | Jean-Yves SADIO - TECHWEB-JY",
  description:
    "Compétences informatiques et technologies maîtrisées par Jean-Yves SADIO (Développeur Web à Niafrang, Sénégal) : React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase, Prisma, UI/UX Design.",
  alternates: {
    canonical: "/competences",
  },
  openGraph: {
    title: "Compétences & Technologies Web | Jean-Yves SADIO (TECHWEB-JY)",
    description:
      "Stack technique moderne pour le développement web front-end, back-end, bases de données et design d'interfaces à Niafrang, Sénégal.",
    url: "https://techwebjy.com/competences",
  },
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  design: Palette,
  tools: Wrench,
};

export default function CompetencesPage() {
  return (
    <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Stack Technique & Savoir-faire
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Des technologies modernes au service de vos projets
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Plutôt qu&apos;une simple liste d&apos;outils ou des pourcentages artificiels, voici l&apos;explication concrète des problèmes que chaque technologie permet de résoudre et des bénéfices apportés à vos applications.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {SKILL_CATEGORIES.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.id] || Code2;

            return (
              <section
                key={category.id}
                id={category.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs"
              >
                <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-slate-200/80">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                      {category.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-medium mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-950">
                            {skill.name}
                          </h3>
                          {skill.featured && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-900">
                              Cœur de métier
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                        {skill.useCase && (
                          <div className="text-slate-700 font-semibold">
                            <span className="text-slate-400 font-normal">Cas d&apos;usage : </span>
                            {skill.useCase}
                          </div>
                        )}
                        {skill.benefit && (
                          <div className="flex items-start gap-1.5 text-emerald-800 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{skill.benefit}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-20 bg-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Besoin d&apos;une stack technique spécifique pour votre projet ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Parlons de l&apos;architecture la plus adaptée à vos contraintes de performance, de sécurité et d&apos;évolution.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-100 font-bold rounded-2xl px-8 py-4 shadow-lg shrink-0 cursor-pointer"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Discuter de l&apos;architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </main>
  );
}
