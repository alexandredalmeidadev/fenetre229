@AGENTS.md

# CLAUDE.md — Fenêtre 229

## Git

- **user.email:** alexandrepvdalmeida@gmail.com
- **user.name:** Alexandre d'ALMEIDA
- **Remote:** https://github.com/alexandredalmeidadev/fenetre229.git
- **Branche de dev:** `dev`
- **Branche principale:** `main`

---

## Projet

**Nom :** Fenêtre 229
**Type :** Site vitrine — Menuiserie & Vitrerie
**Langue :** Français (UI)
**Zone cible :** Bénin / Afrique de l'Ouest (Cotonou et tout le Bénin)
**Inspiration :** fenetre24.com — adapté au contexte béninois
**Client :** Entreprise de menuiserie et vitrerie basée au Bénin

---

## Stack Technique

| Couche | Technologie |
|--------|------------|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript |
| Style | Tailwind CSS v4 |
| Déploiement | Vercel (région fra1) |

---

## Structure

```
fenetre229/
├── app/
│   ├── layout.tsx          ← Root layout + metadata SEO
│   ├── page.tsx            ← Landing page (assemblage composants)
│   └── globals.css         ← Tailwind v4 + custom theme colors
├── components/
│   ├── Navbar.tsx          ← Navigation fixe mobile-friendly
│   ├── Hero.tsx            ← Section hero full-screen
│   ├── Services.tsx        ← 6 services (fenêtres, portes, vitrerie...)
│   ├── Expertise.tsx       ← Pourquoi nous choisir (6 points)
│   ├── Process.tsx         ← Comment ça marche (4 étapes)
│   ├── Gallery.tsx         ← Réalisations filtrables par catégorie
│   ├── Testimonials.tsx    ← 3 témoignages clients béninois
│   ├── Contact.tsx         ← Formulaire devis + infos contact
│   ├── Footer.tsx          ← Footer complet avec liens
│   └── Logo.tsx            ← Composant logo SVG réutilisable
├── team/                   ← Agents Claude spécialisés
├── CLAUDE.md               ← Ce fichier
├── ROADMAP.md              ← Avancement du projet
└── vercel.json             ← Config Vercel (fra1)
```

---

## Palette de couleurs

| Rôle | Valeur |
|------|--------|
| Primary navy | `#0f2847` |
| Primary dark | `#071a30` |
| Primary light | `#1a3a5c` |
| Accent orange | `#f97316` |
| Accent dark | `#ea6c0a` |
| Accent light | `#fdba74` |

---

## Règles

1. **Tailwind v4** : config via `@theme` dans `globals.css`, pas de `tailwind.config.js`
2. **Server Components** par défaut — `"use client"` uniquement si interactivité requise
3. **TypeScript** sans `any`
4. **Sections ancres** : `#accueil`, `#services`, `#realisations`, `#expertise`, `#contact`
5. **SEO** : metadata complète dans `layout.tsx`
6. **Mobile first** : chaque composant est responsive

---

## Démarrage

```bash
cd C:\Dev\OREBTECH\fenetre229
npm install
npm run dev
# → http://localhost:3000
```

---

## Agents Disponibles

| Agent | Fichier | Domaine |
|-------|---------|---------|
| CTO | `team/cto.md` | Architecture, décisions techniques |
| Designer | `team/designer.md` | Design, Tailwind, couleurs, SVG |
| Frontend | `team/frontend.md` | Next.js, composants, pages |
| Marketing | `team/marketing.md` | Copywriting, SEO, conversion |
| SEO | `team/seo.md` | Référencement local Bénin |
