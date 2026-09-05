"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/validations/contact";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
      subject: "",
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
      if (data.subject) formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("from_name", "Portfolio TECHWEB-JY - Contact");

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
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:techwebjeanyves@gmail.com"
                      className="text-sm font-semibold text-slate-900 hover:text-slate-950 transition-colors"
                    >
                      techwebjeanyves@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Téléphone / WhatsApp</p>
                    <a
                      href="tel:+221767600219"
                      className="text-sm font-semibold text-slate-900 hover:text-slate-950 transition-colors"
                    >
                      +221 76 760 02 19
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Localisation</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Niafrang, Sénégal (Remote & Hybride)
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

          {/* Colonne droite : Formulaire de contact sécurisé (Shadcn UI + Web3Forms + Zod) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message envoyé avec succès !</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Merci pour votre message. Vos informations ont été transmises avec succès. Je vous répondrai dans les plus brefs délais.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl cursor-pointer border-slate-300"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot Spam Protection (Web3Forms) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* Message d'erreur serveur si échec */}
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
                      placeholder="Jean Dupont"
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
                      placeholder="jean.dupont@exemple.com"
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
                      placeholder="+33 6 12 34 56 78"
                      className="h-11 px-4 rounded-xl border-slate-200 text-sm text-slate-900"
                    />
                    {errors.phone && (
                      <p className="text-xs font-medium text-red-600 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Sujet <span className="text-slate-400 font-normal normal-case">(Optionnel)</span>
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      {...register("subject")}
                      placeholder="Création d'une application..."
                      className="h-11 px-4 rounded-xl border-slate-200 text-sm text-slate-900"
                    />
                    {errors.subject && (
                      <p className="text-xs font-medium text-red-600 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="Décrivez brièvement vos besoins, vos objectifs ou votre projet..."
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
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white rounded-xl py-3.5 font-semibold shadow-xs transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Envoi du message en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
