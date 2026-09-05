"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Contact & Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Discutons de votre projet
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Vous avez une idée de projet web, une question technique ou une opportunité de collaboration ? Envoyez-moi un message et je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          
          {/* Colonne gauche : Coordonnées et Disponibilité */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Coordonnées & Informations
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:contact@techwebjy.com"
                      className="text-sm font-semibold text-slate-900 hover:text-blue-900 transition-colors"
                    >
                      contact@techwebjy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Localisation</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Disponible à distance (Remote) & Hybride
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-6 border-t border-slate-200/80">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Disponible pour nouvelles missions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : Formulaire de contact */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message envoyé avec succès !</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Merci pour votre message. Je reviendrai vers vous très rapidement.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl cursor-pointer"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Adresse email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@exemple.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Sujet du projet
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Création d'une application Next.js..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-sm text-slate-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez brièvement vos besoins, vos objectifs ou votre projet..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-sm text-slate-900 outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white rounded-xl py-3.5 font-semibold shadow-xs transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
