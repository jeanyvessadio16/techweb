import { z } from "zod";

const nameRegex = /^[a-zA-Zà-ÿÀ-Ÿ\s'-]+$/;
const phoneRegex = /^(?:\+?\d{1,4}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères." })
    .regex(nameRegex, { message: "Le nom contient des caractères invalides." }),

  email: z
    .string()
    .min(1, { message: "L'adresse email est requise." })
    .email({ message: "Veuillez saisir une adresse email valide." }),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || phoneRegex.test(val),
      { message: "Veuillez saisir un numéro de téléphone valide." }
    ),

  projectType: z
    .string()
    .min(1, { message: "Veuillez sélectionner un type de projet." }),

  budget: z
    .string()
    .optional(),

  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères." })
    .max(2000, { message: "Le message ne peut pas dépasser 2000 caractères." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
