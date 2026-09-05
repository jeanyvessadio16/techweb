import { z } from "zod";

// Regex pour valider le nom (lettres, espaces, tirets, apôtrophes et caractères accentués)
const nameRegex = /^[a-zA-Zà-ÿÀ-Ÿ\s'-]+$/;

// Regex pour valider un numéro de téléphone (optionnel, formats internationaux ou locaux)
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

  subject: z
    .string()
    .max(150, { message: "Le sujet ne peut pas dépasser 150 caractères." })
    .optional(),

  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères." })
    .max(2000, { message: "Le message ne peut pas dépasser 2000 caractères." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
