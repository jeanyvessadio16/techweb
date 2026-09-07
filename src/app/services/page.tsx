import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, LayoutGrid, Palette, Wrench, AlertCircle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Prestations Web | Jean-Yves SADIO - TECHWEB-JY",
  description:
    "Services complets de développement web à Niafrang (Casamance, Sénégal) : création de sites vitrines et institutionnels, développement d'applications web métier, UI/UX design sur Figma, et maintenance/optimisation SEO.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services Web sur-mesure | Jean-Yves SADIO (TECHWEB-JY)",
    description:
      "Création de sites web, applications métier, UI/UX design et optimisation de performance à Niafrang, Casamance, Sénégal.",
    url: "https://techwebjy.com/services",
  },
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Globe,
  LayoutGrid,
  Palette,
  Wrench,
};

export default function ServicesPage() {
  return (
    <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Services & Expertise Web · Niafrang, Sénégal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Des services informatiques & web pensés pour votre succès
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Chaque prestation répond à une problématique concrète. Du site vitrine à l&apos;application métier, je conçois des solutions numériques réactives, sécurisées et orientées résultats.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.iconName] || Globe;

            return (
              <section
                key={service.id}
                id={service.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Service 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                      {service.fullDescription}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-red-50/60 border border-red-200/70 rounded-2xl p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-red-900 font-bold text-sm">
                          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                          <span>Le Problème</span>
                        </div>
                        <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                          {service.problem}
                        </p>
                      </div>

                      <div className="bg-emerald-50/60 border border-emerald-200/70 rounded-2xl p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                          <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>La Solution TECHWEB-JY</span>
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                          {service.solution}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Technologies & Méthodologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold bg-slate-100 border border-slate-200 text-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-6 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                        Bénéfices pour votre activité
                      </h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Publics & Besoins concernés
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.targetAudience.map((target, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200 text-slate-700"
                          >
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="default"
                      size="lg"
                      className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl mt-4 cursor-pointer"
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                        <span>Commander ce service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-20 bg-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Vous hésitez sur le service adapté à votre projet ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contactez-moi directement pour une première analyse gratuite et des conseils sur mesure pour votre projet web.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-100 font-bold rounded-2xl px-8 py-4 shadow-lg shrink-0 cursor-pointer"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Discuter de mon besoin</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </main>
  );
}
