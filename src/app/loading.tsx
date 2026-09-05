import React from "react";
import { Code, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden px-4 py-12">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Grid de fond très discret */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
        {/* Conteneur du Spinner & Badge central */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Anneau extérieur tournant */}
          <div className="w-24 h-24 rounded-full border-2 border-transparent border-t-blue-900 border-r-blue-600 animate-spin" />

          {/* Anneau intermédiaire avec sens inverse */}
          <div 
            className="absolute w-18 h-18 rounded-full border-2 border-transparent border-b-indigo-500 border-l-blue-400 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          />

          {/* Badge central fixe avec logo/initiales */}
          <div className="absolute w-14 h-14 rounded-2xl bg-white shadow-xl border border-slate-200/80 flex items-center justify-center group">
            <span className="font-extrabold text-blue-900 text-lg tracking-tight flex items-center gap-0.5">
              <Code className="w-4 h-4 text-blue-600" />
              <span>JY</span>
            </span>
          </div>
        </div>

        {/* Textes de chargement */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-semibold tracking-wide animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Chargement de l'expérience</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Jean-Yves SADIO
          </h2>
          <p className="text-sm text-slate-500 max-w-xs mx-auto">
            Optimisation des interfaces et préparation des contenus en cours...
          </p>
        </div>

        {/* Barre de progression Shimmer */}
        <div className="w-full max-w-xs bg-slate-200/80 rounded-full h-1.5 overflow-hidden relative mb-10 shadow-inner">
          <div className="h-full bg-gradient-to-r from-blue-900 via-blue-600 to-indigo-600 rounded-full w-2/3 animate-pulse" />
        </div>

        {/* Skeleton UI preview pour optimiser la perception UX */}
        <div className="w-full grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow-sm">
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded-md w-3/4 animate-pulse" />
            <div className="h-2 bg-slate-100 rounded-md w-full animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded-md w-2/3 animate-pulse" />
            <div className="h-2 bg-slate-100 rounded-md w-4/5 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded-md w-5/6 animate-pulse" />
            <div className="h-2 bg-slate-100 rounded-md w-3/4 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}