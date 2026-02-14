import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nom requis").max(100),
  email: z.string().email("Courriel invalide").max(200),
  phone: z.string().max(30).optional().default(""),
  subject: z.string().min(2, "Sujet requis").max(200),
  message: z.string().min(10, "Message trop court").max(5000),
});

export const soumissionSchema = z.object({
  projectType: z.string().min(1, "Type de projet requis"),
  serviceType: z.string().min(1, "Service requis"),
  address: z.string().min(3, "Adresse requise").max(300),
  city: z.string().min(2, "Ville requise").max(100),
  postalCode: z.string().min(3, "Code postal requis").max(10),
  description: z.string().min(10, "Description trop courte").max(5000),
  deadline: z.string().max(200).optional().default(""),
  constraints: z.string().max(2000).optional().default(""),
  name: z.string().min(2, "Nom requis").max(100),
  email: z.string().email("Courriel invalide").max(200),
  phone: z.string().min(7, "Téléphone requis").max(30),
  company: z.string().max(200).optional().default(""),
});

export const emploiSchema = z.object({
  firstName: z.string().min(2, "Prénom requis").max(100),
  lastName: z.string().min(2, "Nom requis").max(100),
  email: z.string().email("Courriel invalide").max(200),
  phone: z.string().min(7, "Téléphone requis").max(30),
  message: z.string().max(2000).optional().default(""),
  jobId: z.string().max(100).optional().default("spontanee"),
});
