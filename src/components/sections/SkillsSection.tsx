"use client";

import { SKILL_CATEGORIES } from "@/data/skills";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Code2,
  Server,
  ShieldCheck,
  Palette,
  MonitorSmartphone,
  Search,
  Compass,
  Kanban,
  Puzzle,
} from "lucide-react";
import { motion } from "motion/react";

// Mappage dynamique des icônes réelles (SimpleIcons, VSC, Lucide)
const ICON_MAP: Record<string, React.ElementType> = {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  VscVscode,
  Server,
  ShieldCheck,
  Palette,
  MonitorSmartphone,
  Search,
  Compass,
  Kanban,
  Puzzle,
};

export default function SkillsSection() {
  return (
    <section id="competences" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section épuré avec animation fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Stack Technique & Savoir-Faire
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stack technique & Compétences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Les technologies et outils que j&apos;utilise au quotidien pour concevoir des applications web réactives, rapides et ergonomiques.
          </p>
        </motion.div>

        {/* Grille moderne des compétences par catégorie avec animations staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1, ease: "easeOut" }}
              className="flex flex-col bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-slate-300 transition-all"
            >
              {/* Entête de catégorie */}
              <div className="mb-6 pb-4 border-b border-slate-200/80">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Liste des cartes de compétences avec vrais logos et hover effect */}
              <div className="space-y-3.5 flex-1">
                {category.skills.map((skill) => {
                  const IconComponent = skill.iconName ? ICON_MAP[skill.iconName] || Code2 : Code2;

                  return (
                    <motion.div
                      key={skill.id}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                      className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex items-start gap-3.5 group cursor-default"
                    >
                      {/* Conteneur d'icône avec le vrai logo */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <IconComponent
                          className="w-5 h-5 transition-transform"
                          style={{ color: skill.color || "#1e3a8a" }}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                          {skill.name}
                        </h4>
                        {skill.description && (
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
