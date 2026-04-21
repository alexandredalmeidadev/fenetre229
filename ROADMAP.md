# ROADMAP — Fenêtre 229
> Dernière mise à jour : 21 avril 2026

---

## 🎨 DIRECTIVES DESIGN — NE JAMAIS OUBLIER

> Ces règles s'appliquent à CHAQUE composant et CHAQUE page.

### Identité visuelle
- **Style :** Professionnel, moderne, épuré — adapté au marché béninois
- **Palette :** Navy `#0f2847` + Orange `#f97316` + Blanc — jamais de fond gris froid
- **Typographie :** Sans-serif bold, impact, lisible sur mobile
- **Logo :** SVG inline dans `components/Logo.tsx` — fenêtre à 4 carreaux + texte "fenêtre229"

### Règles UI
- Mobile first — tester sur 375px avant desktop
- Sections avec ancres (`#accueil`, `#services`, `#realisations`, `#expertise`, `#contact`)
- CTA orange sur fond navy, CTA outline sur fond blanc
- Hover states sur toutes les cartes (lift + shadow)
- Smooth scroll activé (`scroll-behavior: smooth`)

---

## Phase 1 — Site vitrine de base ✅ TERMINÉ

### Infrastructure
- [x] Next.js 15 App Router + TypeScript
- [x] Tailwind CSS v4 (config via `@theme` dans `globals.css`)
- [x] vercel.json configuré (région fra1)
- [x] git init + config user.email alexandrepvdalmeida@gmail.com
- [x] CLAUDE.md + ROADMAP.md créés

### Composants
- [x] `Logo.tsx` — SVG logo "fenêtre229" réutilisable (light/dark)
- [x] `Navbar.tsx` — Navigation fixe avec hamburger mobile
- [x] `Hero.tsx` — Section hero full-screen navy avec stats band
- [x] `Services.tsx` — 6 services en grille (fenêtres, portes, vitrerie, volets, garde-corps, moustiquaires)
- [x] `Expertise.tsx` — Pourquoi nous choisir (6 arguments + stats cards)
- [x] `Process.tsx` — 4 étapes "Comment ça marche" sur fond navy
- [x] `Gallery.tsx` — Réalisations filtrables par catégorie (illustrations SVG)
- [x] `Testimonials.tsx` — 3 témoignages de clients béninois + badge note
- [x] `Contact.tsx` — Formulaire devis gratuit + infos contact + CTA WhatsApp
- [x] `Footer.tsx` — Footer complet (logo, services, liens, régions, réseaux)

### SEO & Meta
- [x] Metadata complète dans `layout.tsx` (title, description, keywords, OpenGraph)
- [x] Langue française (`lang="fr"`)
- [x] Scroll smooth

### Contenu
- [x] Copy adapté au marché béninois
- [x] Zones d'intervention listées (Cotonou, Porto-Novo, Parakou, Abomey-Calavi, Bohicon, Natitingou)
- [x] Témoignages clients béninois
- [x] Contact : numéros à mettre à jour avec les vrais

### Équipe agents
- [x] `team/cto.md`
- [x] `team/designer.md`
- [x] `team/frontend.md`
- [x] `team/marketing.md`
- [x] `team/seo.md`

---

## Phase 2 — Contenu réel & Photos 🔲 À FAIRE

### Photos & Médias
- [ ] Remplacer les SVG de galerie par de vraies photos des réalisations du client
- [ ] Photo de l'équipe pour la section "À propos"
- [ ] Logo final fourni par le client (si différent du SVG actuel)
- [ ] Vidéo courte de présentation de l'atelier (optionnel)

### Contenu client à compléter
- [ ] Vrai numéro de téléphone WhatsApp (remplacer `+229 XX XX XX XX`)
- [ ] Vraie adresse de l'atelier à Cotonou
- [ ] Email professionnel réel (remplacer `contact@fenetre229.bj`)
- [ ] Vrais témoignages clients avec photos et noms
- [ ] Horaires d'ouverture exacts

### Formulaire
- [ ] Intégrer un backend email (Resend ou EmailJS) pour recevoir les demandes de devis
- [ ] Notification WhatsApp ou SMS à la soumission du formulaire
- [ ] Validation des champs côté serveur

---

## Phase 3 — SEO & Performance 🔲 À FAIRE

### SEO Local Bénin
- [ ] Google Business Profile — créer ou lier la fiche
- [ ] Schema.org LocalBusiness (JSON-LD) dans le layout
- [ ] Sitemap.xml (`app/sitemap.ts`)
- [ ] Robots.txt
- [ ] Balises alt sur toutes les images

### Performance
- [ ] Optimiser les images avec `next/image` (WebP, lazy loading)
- [ ] Score Lighthouse > 90 sur mobile
- [ ] Fonts system stack ou next/font pour éviter le CLS

### Analytics
- [ ] Google Analytics 4 ou Plausible (RGPD friendly)
- [ ] Suivi des clics sur les CTAs (devis, WhatsApp, téléphone)

---

## Phase 4 — Fonctionnalités avancées 🔲 OPTIONNEL

### Catalogue produits
- [ ] Page `/produits` avec filtres (aluminium, PVC, bois, verre)
- [ ] Fiches produits avec photos, caractéristiques, prix indicatifs
- [ ] Galerie photos par projet (avant/après)

### Blog / Conseils
- [ ] Section blog avec MDX (Next.js)
- [ ] Articles : "Comment choisir ses fenêtres au Bénin", "Entretien des volets aluminium"...
- [ ] Bénéfice SEO long-tail

### Devis en ligne avancé
- [ ] Calculateur de prix indicatif par type de menuiserie
- [ ] Upload de plan ou photo par le client
- [ ] Système de suivi de commande

### Multi-langue
- [ ] Français + Fon ou Yoruba (optionnel, marché local)

---

## Commandes de démarrage

```bash
# Depuis C:\Dev\OREBTECH\fenetre229

npm install
npm run dev
# → http://localhost:3000

# Build de production
npm run build
npm start
```

---

## À personnaliser AVANT la mise en ligne

| Élément | Où | Statut |
|---------|-----|--------|
| Numéro WhatsApp | `components/Contact.tsx` + `Footer.tsx` | ❌ À compléter |
| Adresse | `components/Contact.tsx` + `Footer.tsx` | ❌ À compléter |
| Email | `components/Contact.tsx` + `Footer.tsx` | ❌ À compléter |
| Photos galerie | `components/Gallery.tsx` | ❌ Photos réelles |
| Logo final | `components/Logo.tsx` | ✅ SVG généré (à valider) |
| Nom domaine | `vercel.json` + DNS | ❌ À configurer |
