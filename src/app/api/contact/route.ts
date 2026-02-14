import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sanitize } from "@/lib/sanitize";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Trop de requêtes. Réessayez dans 15 minutes." }, { status: 429 });
  }

  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0]?.message || "Données invalides" }, { status: 400 });
    }

    const data = parsed.data;
    const clean = {
      Nom: sanitize(data.name),
      Courriel: sanitize(data.email),
      Téléphone: sanitize(data.phone || "Non fourni"),
      Sujet: sanitize(data.subject),
      Message: sanitize(data.message),
    };

    await sendNotification(`Nouveau contact : ${clean.Sujet}`, clean);
    console.log("[CONTACT] Message reçu de:", clean.Nom);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[CONTACT] Erreur:", err instanceof Error ? err.message : "unknown");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
