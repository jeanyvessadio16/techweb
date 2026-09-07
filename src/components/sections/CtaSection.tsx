"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-semibold tracking-wide">
            Concrétisons votre idée
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Vous avez un projet web ?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Transformons votre idée en une solution numérique moderne, performante et adaptée à vos objectifs.
          </p>

          <div className="pt-4">
            <Button
              size="xl"
              className="bg-white text-slate-950 hover:bg-slate-100 font-bold rounded-2xl px-9 py-4 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                <span>Parler de mon projet</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
