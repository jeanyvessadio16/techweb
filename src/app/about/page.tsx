import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_DATA } from "@/data/about";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, ShieldCheck, Zap, MessageSquare, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos de Jean-Yves SADIO | Développeur Web Bignona & Ziguinchor - TECHWEB-JY",
  description:
    "Parcours, vision et approche sur-mesure de Jean-Yves SADIO, développeur web indépendant à Niafrang (Bignona, Ziguinchor, Casamance, Sénégal), fondateur de la marque TECHWEB-JY.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "À propos de Jean-Yves SADIO | Développeur Web Bignona & Ziguinchor",
    description:
      "Histoire, valeurs professionnelles et approche sur-mesure de Jean-Yves SADIO (TECHWEB-JY) à Niafrang, Bignona, Ziguinchor, Casamance, Sénégal.",
    url: "https://techwebjy.com/about",
  },
};

const VALUE_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  CheckCircle2,
  Zap,
  MessageSquare,
  TrendingUp,
};

export default function AboutPage() {
  return (
    <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold tracking-wide">
              À propos · Niafrang, Casamance, Sénégal
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Jean-Yves SADIO — Développeur Web & Créateur de TECHWEB-JY
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-slate-800 bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-2xs font-semibold text-sm">
              <MapPin className="w-4 h-4 text-red-600 shrink-0" />
              <span>Basé à Niafrang · Région de Ziguinchor · Sénégal</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl px-7 cursor-pointer"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <span>Démarrer une collaboration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold rounded-xl px-7 cursor-pointer"
              >
                <Link href="/projets">Voir mes réalisations</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/90 shadow-xl">
                <Image
                  src="/images/jean-yves.png"
                  alt="Photo officielle de Jean-Yves SADIO - Développeur Web"
                  width={500}
                  height={500}
                  priority
                  className="w-full aspect-square object-cover rounded-2xl"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-slate-900">Jean-Yves SADIO</p>
                <p className="text-xs text-slate-500 font-medium">Fondateur & Développeur Full-Stack TECHWEB-JY</p>
              </div>
            </div>
          </div>

        </div>

        <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xs mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Démarche de travail
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Mon approche : Comprendre avant de coder
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mt-3">
              Un projet web réussi ne se résume pas à l&apos;écriture de lignes de code. Ma démarche repose sur 4 piliers méthodologiques rigoureux pour garantir le succès de chaque réalisation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-white font-bold flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-950">Compréhension</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Analyse détaillée de vos objectifs métiers, de votre cible et de vos contraintes techniques avant tout développement.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-white font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-950">Conception UI/UX</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Wireframes et maquettes interactives sur Figma pour valider l&apos;ergonomie et le parcours utilisateur.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-white font-bold flex items-center justify-center text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-950">Développement</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Intégration propre et typée avec React, Next.js et Node.js en respectant les meilleures pratiques web.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-white font-bold flex items-center justify-center text-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-950">Optimisation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tests de performance, sécurité, balisage SEO et accompagnement pour la mise en ligne et la maintenance.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8 mb-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Philosophie TECHWEB-JY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Les valeurs qui guident chaque projet
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DATA.values.map((val) => {
              const ValueIcon = VALUE_ICONS[val.iconName] || CheckCircle2;

              return (
                <div
                  key={val.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-all space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-950 shrink-0">
                    <ValueIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Envie d&apos;échanger sur votre prochain projet web ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Basé à Niafrang au Sénégal, je suis disponible pour échanger sur vos besoins, que ce soit à distance ou en présentiel dans la région.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-100 font-bold rounded-2xl px-8 py-4 shadow-lg shrink-0 cursor-pointer"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Me contacter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </main>
  );
}
