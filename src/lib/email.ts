import nodemailer from "nodemailer";
import { escapeHtml } from "./sanitize";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendNotification(subject: string, fields: Record<string, string>) {
  if (!process.env.SMTP_HOST || process.env.SMTP_HOST === "smtp.example.com") {
    console.log("[EMAIL] SMTP non configuré - email non envoyé:", subject);
    return;
  }

  const rows = Object.entries(fields)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd">${escapeHtml(k)}</td><td style="padding:6px 12px;border:1px solid #ddd">${escapeHtml(v)}</td></tr>`)
    .join("");

  await transporter.sendMail({
    from: process.env.SMTP_FROM || "noreply@frag.4lb.ca",
    to: process.env.SMTP_TO || "mad-or@hotmail.com",
    subject: `[Fragmentation M.R] ${subject}`,
    html: `<h2>${escapeHtml(subject)}</h2><table style="border-collapse:collapse;width:100%">${rows}</table>`,
  });
}
