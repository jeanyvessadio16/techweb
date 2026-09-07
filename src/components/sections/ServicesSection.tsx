"use client";

import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import {
  Code2,
  Server,
  Palette,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Code2,
  Server,
  Palette,
  Compass,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section avec animation fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Services & Prestations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Des solutions numériques sur-mesure pour vos projets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            De la création d&apos;interfaces web jusqu&apos;à la gestion des données backend, je vous accompagne dans la réalisation d&apos;applications performantes et adaptées à vos besoins.
          </p>
        </motion.div>

        {/* Grille des services avec animations stagger & hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.iconName] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-slate-300 rounded-3xl p-7 sm:p-9 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* En-tête de carte avec icône et badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/60 text-slate-700 group-hover:bg-slate-100 group-hover:text-slate-950 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Titre et description */}
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  {/* Liste des livrables */}
                  <div className="space-y-2.5 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Livrables & Prestations
                    </h4>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer de carte : Technologies & CTA link */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200/80 text-slate-700 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-950 hover:text-slate-900 transition-colors cursor-pointer group/link"
                  >
                    <span>Discuter de votre projet</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bannière Call To Action (CTA) animée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Un projet en tête ou un besoin spécifique ?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Discutons de vos objectifs et créons ensemble une solution web moderne, rapide et parfaitement adaptée.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-blue-950 hover:bg-slate-100 font-bold rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all shrink-0 cursor-pointer"
          >
            <Link href="/#contact" className="inline-flex items-center gap-2">
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
