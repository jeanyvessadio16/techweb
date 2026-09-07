"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, FolderGit2, Mail, Compass, Terminal, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  const quickLinks = [
    {
      title: "Accueil",
      description: "Retourner à la page principale du portfolio",
      href: "/",
      icon: Home,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Projets",
      description: "Découvrir mes réalisations web et UI/UX",
      href: "/projets",
      icon: FolderGit2,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Contact",
      description: "Échanger sur un projet ou une opportunité",
      href: "/contact",
      icon: Mail,
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
  ];

  return (
    <main className="min-h-[85vh] w-full flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden px-4 py-16 sm:py-24">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Erreur 404 · Page non trouvée</span>
          </div>

          <div className="relative select-none">
            <span className="text-8xl sm:text-9xl lg:text-[11rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 tracking-tighter leading-none opacity-90">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Compass className="w-24 h-24 sm:w-32 sm:h-32 text-blue-900/10 animate-spin" style={{ animationDuration: '25s' }} />
            </div>
          </div>
        </div>

        <div className="space-y-3 max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Oups ! Vous vous êtes aventuré en territoire inconnu.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            La page que vous recherchez n&apos;existe pas, a été déplacée ou n&apos;est plus accessible temporairement.
          </p>
        </div>

        <div className="max-w-md mx-auto rounded-2xl bg-slate-900 text-slate-200 p-4 font-mono text-xs text-left shadow-xl border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px]">console_debug.log</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
          </div>
          <div className="text-rose-400 font-semibold pt-1">
            HTTP 404_NOT_FOUND: Path resource unavailable
          </div>
          <div className="text-slate-400">
            &gt; checking route tree... <span className="text-amber-400">no_match</span>
          </div>
          <div className="text-blue-400">
            &gt; recommendation: navigate_back() or return_home()
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-white rounded-xl px-7 py-3.5 font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Page précédente</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-900 rounded-xl px-7 py-3.5 font-semibold shadow-sm transition-all cursor-pointer"
          >
            <Link href="/" className="inline-flex items-center justify-center gap-2">
              <Home className="w-4 h-4 text-blue-900" />
              <span>Accueil</span>
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-200/80">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Raccourcis de navigation</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className="group p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${link.color} transition-transform group-hover:scale-110`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
