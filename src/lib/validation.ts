import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional().default(""),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
});

export const soumissionSchema = z.object({
  projectType: z.string().min(1),
  serviceType: z.string().min(1),
  address: z.string().min(3).max(300),
  city: z.string().min(2).max(100),
  postalCode: z.string().min(3).max(10),
  description: z.string().min(10).max(5000),
  deadline: z.string().max(200).optional().default(""),
  constraints: z.string().max(2000).optional().default(""),
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30),
  company: z.string().max(200).optional().default(""),
});

export const emploiSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30),
  message: z.string().max(2000).optional().default(""),
  jobId: z.string().max(100).optional().default("spontanee"),
});
