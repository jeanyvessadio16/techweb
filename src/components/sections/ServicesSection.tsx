"use client";

import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { Globe, LayoutGrid, Palette, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Globe,
  LayoutGrid,
  Palette,
  Wrench,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Services & Prestations Web
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Des solutions numériques sur-mesure pour vos projets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            De la création de sites vitrines jusqu&apos;au développement d&apos;applications web complexes, je vous apporte des solutions adaptées à vos objectifs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-slate-300 rounded-3xl p-7 sm:p-9 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/60 text-slate-800">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:text-blue-900 transition-colors cursor-pointer"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-900 hover:bg-slate-100 font-bold rounded-xl px-8 py-3.5 cursor-pointer"
          >
            <Link href="/services" className="inline-flex items-center gap-2">
              <span>Découvrir mes services en détail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
