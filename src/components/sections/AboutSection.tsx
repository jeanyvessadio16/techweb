import Link from "next/link";
import { ABOUT_DATA } from "@/data/about";
import {
  UserCheck,
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const VALUE_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  Clock,
};

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Présentation & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {ABOUT_DATA.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {ABOUT_DATA.subtitle}
          </p>
        </div>

        {/* Grille principale : Narration à gauche, Métriques & Valeurs à droite */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Colonne gauche : Parcours & Récit */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                Mon engagement pour vos projets
              </h3>
              
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-950 text-white rounded-xl px-6 py-3 font-semibold shadow-xs cursor-pointer"
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    <span>Me contacter</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-800 hover:bg-slate-100 rounded-xl px-6 py-3 font-semibold cursor-pointer"
                >
                  <Link href="/projets" className="inline-flex items-center gap-2">
                    <span>Explorer mes réalisations</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Timeline / Jalons de parcours */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-900" />
                Parcours & Expériences
              </h3>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {ABOUT_DATA.career.map((milestone) => (
                  <div key={milestone.id} className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-900" />
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900">
                      {milestone.year}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1">
                      {milestone.role}{" "}
                      <span className="font-normal text-slate-500">
                        • {milestone.companyOrContext}
                      </span>
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : Statistiques clés & Piliers de valeur */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Grille de 4 cartes statistiques */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_DATA.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {stat.label}
                  </p>
                  {stat.description && (
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Piliers / Valeurs d'excellence */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Mes 3 piliers de conception
              </h3>

              {ABOUT_DATA.values.map((val) => {
                const Icon = VALUE_ICONS[val.iconName] || CheckCircle2;
                return (
                  <div key={val.id} className="flex items-start gap-3.5 pt-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
