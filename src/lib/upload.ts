import { v4 as uuid } from "uuid";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const ALLOWED_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
const ALLOWED_EXT = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"];
const MAX_SIZE = parseInt(process.env.UPLOAD_MAX_SIZE_MB || "10", 10) * 1024 * 1024;
const UPLOAD_DIR = path.join(process.cwd(), "uploads");

function hasDoubleExtension(name: string): boolean {
  const parts = name.split(".");
  return parts.length > 2;
}

export async function saveUploadedFile(file: File): Promise<{ ok: boolean; filename?: string; error?: string }> {
  if (file.size > MAX_SIZE) return { ok: false, error: `Fichier trop volumineux (max ${process.env.UPLOAD_MAX_SIZE_MB || 10} Mo)` };

  const ext = path.extname(file.name).toLowerCase();
  if (!ALLOWED_EXT.includes(ext)) return { ok: false, error: `Type de fichier non autorisé: ${ext}` };
  if (hasDoubleExtension(file.name)) return { ok: false, error: "Double extension détectée" };
  if (!ALLOWED_TYPES.includes(file.type) && file.type !== "") return { ok: false, error: `Type MIME non autorisé: ${file.type}` };

  const safeName = `${uuid()}${ext}`;
  await mkdir(UPLOAD_DIR, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, safeName), buffer);
  return { ok: true, filename: safeName };
}
