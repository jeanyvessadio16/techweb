"use client";

import Link from "next/link";
import { SKILL_CATEGORIES } from "@/data/skills";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiGoogledrive,
  SiGooglemeet,
  SiGooglecalendar,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code2, Server, ShieldCheck, Palette, MonitorSmartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const ICON_MAP: Record<string, React.ElementType> = {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
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
  SiGoogledrive,
  SiGooglemeet,
  SiGooglecalendar,
};

export default function SkillsSection() {
  return (
    <section id="competences" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Compétences & Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Les technologies au service de votre projet
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Une maîtrise complète des outils modernes pour créer des interfaces réactives, des serveurs sécurisés et des bases de données performantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.slice(0, 3).map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1, ease: "easeOut" }}
              className="flex flex-col bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-2xs hover:border-slate-300 transition-all"
            >
              <div className="mb-6 pb-4 border-b border-slate-200/80">
                <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3 flex-1">
                {category.skills.slice(0, 4).map((skill) => {
                  const IconComponent = skill.iconName ? ICON_MAP[skill.iconName] || Code2 : Code2;

                  return (
                    <div
                      key={skill.id}
                      className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: skill.color || "#1e3a8a" }}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-950">
                          {skill.name}
                        </h4>
                        {skill.benefit && (
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            {skill.benefit}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-950 hover:bg-slate-100 font-bold rounded-xl px-8 py-3.5 cursor-pointer"
          >
            <Link href="/competences" className="inline-flex items-center gap-2">
              <span>Voir toutes mes compétences en détail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
