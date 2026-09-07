"use client";

import { motion } from "motion/react";
import { Search, Compass, Code2, ShieldCheck, Rocket } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Analyse du besoin",
    description: "Échange approfondi pour comprendre vos objectifs métiers, cibler votre audience et cadrer le périmètre technique.",
    icon: Search,
  },
  {
    step: "02",
    title: "Conception",
    description: "Création des arborescences, wireframes et maquettes UI/UX sur Figma pour valider l'ergonomie avant le développement.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Développement",
    description: "Intégration propre et typée avec React, Next.js, Node.js et PostgreSQL selon les meilleures pratiques du web.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Tests et optimisation",
    description: "Audits de vitesse (Core Web Vitals), optimisation SEO, tests d'accessibilité et vérification sur tous les écrans.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Livraison",
    description: "Déploiement sur serveur sécurisé, transfert de propriété et accompagnement pour la prise en main de votre solution.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Méthodologie & Démarche
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Comment nous allons travailler ensemble
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Un processus structuré en 5 étapes claires pour vous offrir visibilité et sérénité tout au long de la création de votre plateforme.
          </p>
        </motion.div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((stepItem, index) => {
            const IconComponent = stepItem.icon;
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-extrabold text-xs">
                      {stepItem.step}
                    </div>
                    <IconComponent className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
