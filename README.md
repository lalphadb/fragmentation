# Dynamitage-Fragmentation M.R — Site Web

Site vitrine professionnel pour une entreprise québécoise de forage, dynamitage et fragmentation de roc.

## Stack technique

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** — UI responsive, mobile-first
- **Prisma** + SQLite (dev/prod) — ORM typesafe
- **Zod** — validation serveur stricte
- **Nodemailer** — notifications email SMTP
- **Docker** — déploiement conteneurisé
- **Traefik** — reverse proxy + SSL Let's Encrypt (intégré à l'infra existante)

## Installation rapide

```bash
# 1. Copier les photos dans le dossier public
chmod +x setup.sh
./setup.sh

# OU manuellement:
cp Photos/*.jpg public/images/realisations/
cp Photos/Logo_fragmentation.jpg public/images/logo.jpg
cp .env.example .env
# Éditer .env avec vos paramètres réels
mkdir -p data uploads
docker compose up -d --build
```

## Variables d'environnement (.env)

| Variable | Description | Obligatoire |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL du site (https://fragmentation.4lb.ca) | Oui |
| `NEXT_PUBLIC_COMPANY_NAME` | Nom de l'entreprise | Oui |
| `NEXT_PUBLIC_COMPANY_PHONE` | Téléphone | Oui |
| `NEXT_PUBLIC_COMPANY_EMAIL` | Courriel | Oui |
| `NEXT_PUBLIC_RBQ_NUMBER` | Numéro de licence RBQ | Oui |
| `NEXT_PUBLIC_INSURANCE_INFO` | Info assurance | Non |
| `DATABASE_URL` | Connexion DB (SQLite par défaut) | Auto |
| `SMTP_HOST` | Serveur SMTP | Pour emails |
| `SMTP_PORT` | Port SMTP (587) | Pour emails |
| `SMTP_USER` | Utilisateur SMTP | Pour emails |
| `SMTP_PASS` | Mot de passe SMTP | Pour emails |
| `SMTP_FROM` | Adresse expéditeur | Pour emails |
| `SMTP_TO` | Adresse de réception | Pour emails |
| `UPLOAD_MAX_SIZE_MB` | Taille max upload (10) | Non |
| `RATE_LIMIT_MAX_REQUESTS` | Max requêtes/fenêtre (5) | Non |

## Pages du site

| Page | URL | Description |
|---|---|---|
| Accueil | `/` | Hero, services, réalisations, témoignages |
| Services | `/services` | 6 services détaillés avec images |
| Réalisations | `/realisations` | Portfolio filtrable (catégorie, région) |
| Sécurité | `/securite` | Procédures, certifications, engagements |
| FAQ | `/faq` | 6 questions fréquentes |
| À propos | `/a-propos` | Mission, valeurs, équipements |
| Soumission | `/soumission` | Formulaire multi-étapes + upload fichiers |
| Emploi | `/emploi` | Offres + candidature + upload CV |
| Contact | `/contact` | Formulaire + coordonnées |

## Endpoints API

| Endpoint | Méthode | Description |
|---|---|---|
| `/api/contact` | POST | Formulaire de contact (JSON) |
| `/api/soumission` | POST | Demande de soumission (FormData + fichiers) |
| `/api/emploi` | POST | Candidature + CV (FormData + fichier) |

Tous les endpoints sont protégés par rate limiting et validation Zod.

## Sécurité

- **Headers HTTP** : CSP stricte, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Rate limiting** : 5 requêtes / 15 minutes par IP sur les endpoints sensibles
- **Validation serveur** : Schémas Zod sur tous les champs
- **Upload sécurisé** : types MIME vérifiés, taille limitée, double extension rejetée, renommage UUID, stockage hors webroot
- **Anti-XSS** : sanitisation des champs texte, escapeHtml dans les emails
- **Anti-injection** : Prisma ORM (requêtes paramétrées)
- **Secrets** : uniquement via variables d'environnement
- **Logs** : aucune donnée sensible (emails, mots de passe)
- **Traefik** : CrowdSec, geoblock, headers sécurité au niveau edge

## Modifier le contenu

| Contenu | Fichier |
|---|---|
| Services | `src/data/services.ts` |
| Réalisations | `src/data/realisations.ts` |
| FAQ | `src/data/faq.ts` |
| Offres d'emploi | `src/data/jobs.ts` |
| Procédures sécurité | `src/data/security.ts` |
| Témoignages | `src/data/testimonials.ts` |
| Config (nom, tel, etc.) | `src/lib/config.ts` + `.env` |
| Navigation | `src/lib/config.ts` |
| Images | `public/images/realisations/` |

## Développement local

```bash
npm install
cp .env.example .env
npx prisma db push
npm run dev
```

## Déploiement (rebuild)

```bash
docker compose down
docker compose up -d --build
```

## Maintenance

- **Logs** : `docker compose logs -f fragmentation`
- **DB** : `docker compose exec fragmentation npx prisma studio`
- **Uploads** : stockés dans `./uploads/` (volume Docker)
- **Rebuild après changement** : `docker compose up -d --build`
