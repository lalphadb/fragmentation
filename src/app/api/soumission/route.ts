import { NextRequest, NextResponse } from "next/server";
import { soumissionSchema } from "@/lib/validation";
import { sanitize } from "@/lib/sanitize";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendNotification } from "@/lib/email";
import { saveUploadedFile } from "@/lib/upload";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Trop de requêtes. Réessayez dans 15 minutes." }, { status: 429 });
  }

  try {
    const formData = await req.formData();
    const fields: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") fields[key] = value;
    }

    const parsed = soumissionSchema.safeParse(fields);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0]?.message || "Données invalides" }, { status: 400 });
    }

    // Handle file uploads
    const files = formData.getAll("files") as File[];
    const savedFiles: string[] = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const result = await saveUploadedFile(file);
      if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });
      if (result.filename) savedFiles.push(result.filename);
    }

    const data = parsed.data;
    const clean: Record<string, string> = {
      "Type de projet": sanitize(data.projectType),
      "Service": sanitize(data.serviceType),
      "Adresse": sanitize(data.address),
      "Ville": sanitize(data.city),
      "Code postal": sanitize(data.postalCode),
      "Description": sanitize(data.description),
      "Échéance": sanitize(data.deadline || "Non spécifiée"),
      "Contraintes": sanitize(data.constraints || "Aucune"),
      "Nom": sanitize(data.name),
      "Courriel": sanitize(data.email),
      "Téléphone": sanitize(data.phone),
      "Entreprise": sanitize(data.company || "Non spécifiée"),
      "Fichiers joints": savedFiles.length > 0 ? savedFiles.join(", ") : "Aucun",
    };

    await sendNotification("Nouvelle demande de soumission", clean);
    console.log("[SOUMISSION] Demande reçue de:", clean.Nom);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[SOUMISSION] Erreur:", err instanceof Error ? err.message : "unknown");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
