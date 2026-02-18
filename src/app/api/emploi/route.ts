import { NextRequest, NextResponse } from "next/server";
import { emploiSchema } from "@/lib/validation";
import { sanitize } from "@/lib/sanitize";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendNotification } from "@/lib/email";
import { saveUploadedFile } from "@/lib/upload";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const formData = await req.formData();
    const fields: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") fields[key] = value;
    }

    const parsed = emploiSchema.safeParse(fields);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0]?.message || "Invalid data" }, { status: 400 });
    }

    // Handle CV upload
    const cvFile = formData.get("cv") as File | null;
    let cvFilename = "Non fourni";
    if (cvFile && cvFile.size > 0) {
      const result = await saveUploadedFile(cvFile);
      if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });
      cvFilename = result.filename || "Enregistré";
    }

    const data = parsed.data;
    const clean: Record<string, string> = {
      "Prénom": sanitize(data.firstName),
      "Nom": sanitize(data.lastName),
      "Courriel": sanitize(data.email),
      "Téléphone": sanitize(data.phone),
      "Message": sanitize(data.message || "Aucun"),
      "Poste": sanitize(data.jobId || "Candidature spontanée"),
      "CV": cvFilename,
    };

    await sendNotification("Nouvelle candidature", clean);
    console.log("[EMPLOI] Candidature reçue de:", clean.Prénom, clean.Nom);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[EMPLOI] Erreur:", err instanceof Error ? err.message : "unknown");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
