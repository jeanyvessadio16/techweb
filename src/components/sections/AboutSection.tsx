"use client";

import Link from "next/link";
import { ABOUT_DATA } from "@/data/about";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section avec fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Présentation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {ABOUT_DATA.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {ABOUT_DATA.subtitle}
          </p>
        </motion.div>

        {/* Carte de présentation animée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xs space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-950" />
              Mon engagement pour vos projets
            </h3>
            
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-slate-950 hover:bg-slate-900 text-white rounded-xl px-7 py-3.5 font-semibold shadow-xs cursor-pointer"
              >
                <Link href="/#contact" className="inline-flex items-center gap-2">
                  <span>Me contacter</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-800 hover:bg-slate-100 rounded-xl px-7 py-3.5 font-semibold cursor-pointer"
              >
                <Link href="/#projets" className="inline-flex items-center gap-2">
                  <span>Explorer mes réalisations</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
