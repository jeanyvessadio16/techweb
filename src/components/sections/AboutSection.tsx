"use client";

import Link from "next/link";
import Image from "next/image";
import { ABOUT_DATA } from "@/data/about";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/90 shadow-lg">
                <Image
                  src="/images/jean-yves.png"
                  alt="Photo de profil de Jean-Yves SADIO - Développeur Web Niafrang"
                  width={450}
                  height={450}
                  className="w-full aspect-square object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold tracking-wide">
              Présentation Rapide
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {ABOUT_DATA.title}
            </h2>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p>{ABOUT_DATA.paragraphs[0]}</p>
              <p>{ABOUT_DATA.paragraphs[1]}</p>
            </div>

            <div className="inline-flex items-center gap-2 text-slate-800 bg-white border border-slate-200/90 rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold">
              <MapPin className="w-4 h-4 text-red-600 shrink-0" />
              <span>Niafrang · Casamance · Sénégal</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl px-7 cursor-pointer"
              >
                <Link href="/about" className="inline-flex items-center gap-2">
                  <span>En savoir plus sur mon parcours</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
