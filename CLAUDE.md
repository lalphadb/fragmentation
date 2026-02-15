# Fragmentation — Instructions AI

## Environnements

| | Dev | Production |
|---|---|---|
| **Serveur** | lalpha-server-1 | Dell Optiplex |
| **Chemin** | `/home/lalpha/projets/clients/fragmentation/` | `/data/clients/fragmentation/` |
| **Commande** | `npm run dev` | Docker container |
| **Port** | localhost:3000 | 127.0.0.1:3000 → Cloudflare Tunnel |
| **URL** | http://localhost:3000 | https://frag.4lb.ca |

## Stack
- **Framework** : Next.js
- **Démarrage dev** : `npm run dev` (port 3000)
- **Build** : `npm run build`

## Déploiement vers production
```bash
rsync -avz --exclude node_modules --exclude .next --exclude .git \
  ./ dell-web:/data/clients/fragmentation/
ssh dell-web "cd /data/clients && docker compose build fragmentation && docker compose up -d fragmentation"
```

## Règles
- Modifier le code ICI (dev), jamais directement sur le Dell
- Tester localement avant de déployer
- Le .env contient les secrets SMTP — ne pas committer
