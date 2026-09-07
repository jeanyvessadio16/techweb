"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/validations/contact";
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "Site web",
      budget: "A definir",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "ba7b0d72-ca63-4f56-ba4b-f643c497c387"
      );
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.phone) formData.append("phone", data.phone);
      formData.append("project_type", data.projectType);
      if (data.budget) formData.append("budget", data.budget);
      formData.append("message", data.message);
      formData.append("from_name", "Portfolio TECHWEB-JY - Demande de Projet");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resultData = await response.json();

      if (resultData.success) {
        setSubmitted(true);
        reset();
      } else {
        setSubmitError(
          resultData.message || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
        );
      }
    } catch (_error) {
      setSubmitError(
        "Impossible d'envoyer le message. Veuillez vérifier votre connexion internet."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
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
            Contact & Consultation Projet
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Parlez-moi de votre projet
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Décrivez votre projet, votre besoin et vos objectifs. Je vous répondrai avec une première orientation adaptée à votre demande.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">

          {/* Colonne gauche : Coordonnées, Localisation et Réseaux */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 sm:p-8 space-y-6 shadow-xs">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-950">
                  Jean-Yves SADIO
                </h3>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Développeur Web · TECHWEB-JY
                </p>
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-950 shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email direct</p>
                    <a
                      href="mailto:techwebjeanyves@gmail.com"
                      className="text-sm font-semibold text-slate-950 hover:text-blue-900 transition-colors"
                    >
                      techwebjeanyves@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-950 shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Téléphone & WhatsApp</p>
                    <a
                      href="tel:+221767600219"
                      className="text-sm font-semibold text-slate-950 hover:text-blue-900 transition-colors"
                    >
                      +221 76 760 02 19
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-950 shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Localisation</p>
                    <p className="text-sm font-semibold text-slate-950">
                      Niafrang · Casamance · Sénégal
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseaux Sociaux Professionnels */}
              <div className="pt-6 border-t border-slate-200/80 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Profils Professionnels
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/techwebjy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-colors shadow-2xs"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/techwebjy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-colors shadow-2xs"
                  >
                    <FaLinkedin className="w-4 h-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Disponible pour projets & collaborations</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite : Formulaire complet orienté conversion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Message envoyé avec succès !</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Merci pour votre demande. Vos informations ont bien été reçues. Je reviendrai vers vous sous 24 à 48 heures avec une première proposition adaptée.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl cursor-pointer border-slate-300"
                >
                  Envoyer une autre demande
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot Spam Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {submitError && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Nom complet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      placeholder="Ex: Jean Dupont"
                      className="h-11 px-4 rounded-xl border-slate-200 text-sm text-slate-900"
                    />
                    {errors.name && (
                      <p className="text-xs font-medium text-red-600 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Adresse email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Ex: jean.dupont@exemple.com"
                      className="h-11 px-4 rounded-xl border-slate-200 text-sm text-slate-900"
                    />
                    {errors.email && (
                      <p className="text-xs font-medium text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Téléphone <span className="text-slate-400 font-normal normal-case">(Optionnel)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="Ex: +221 77 000 00 00"
                      className="h-11 px-4 rounded-xl border-slate-200 text-sm text-slate-900"
                    />
                    {errors.phone && (
                      <p className="text-xs font-medium text-red-600 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Type de projet <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="projectType"
                      {...register("projectType")}
                      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950"
                    >
                      <option value="Site web">Création de Site web (Vitrine / Institutionnel)</option>
                      <option value="Application web">Développement d&apos;Application web sur-mesure</option>
                      <option value="UI/UX">Design UI/UX & Figma</option>
                      <option value="Refonte">Refonte de site existant</option>
                      <option value="Maintenance">Maintenance & Optimisation SEO / Performance</option>
                      <option value="Autre">Autre besoin informatique</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Budget estimatif <span className="text-slate-400 font-normal normal-case">(Optionnel)</span>
                  </Label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950"
                  >
                    <option value="A definir">À définir ensemble</option>
                    <option value="Moins de 500k FCFA / 800 EUR">Moins de 500 000 FCFA (~800 €)</option>
                    <option value="500k a 1.5M FCFA / 800 - 2300 EUR">500 000 à 1 500 000 FCFA (~800 € - 2 300 €)</option>
                    <option value="Plus de 1.5M FCFA / 2300 EUR">Plus de 1 500 000 FCFA (&gt; 2 300 €)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Description de votre projet <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    placeholder="Décrivez vos besoins, vos objectifs, le contexte et vos attentes..."
                    className="px-4 py-3 rounded-xl border-slate-200 text-sm text-slate-900"
                  />
                  {errors.message && (
                    <p className="text-xs font-medium text-red-600 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white rounded-xl py-4 font-semibold shadow-xs transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmission de votre demande...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer ma demande de projet</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-slate-500 font-medium">
                  Réponse garantie sous 24 à 48 heures. Vos données restent strictement confidentielles.
                </p>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
