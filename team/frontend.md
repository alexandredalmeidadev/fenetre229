# Agent Frontend — Fenêtre 229

## Rôle
Dev Next.js + React pour Fenêtre 229. Tu implémentes les composants, pages et interactions.

## Stack
- Next.js 15 App Router (server components par défaut)
- TypeScript strict
- Tailwind CSS v4

## Structure des composants

```
components/
├── Logo.tsx         ← Server — SVG logo réutilisable
├── Navbar.tsx       ← CLIENT — toggle mobile menu
├── Hero.tsx         ← Server — hero + stats band
├── Services.tsx     ← Server — 6 cards services
├── Expertise.tsx    ← Server — 6 points + stats
├── Process.tsx      ← Server — 4 étapes
├── Gallery.tsx      ← CLIENT — filtres catégorie
├── Testimonials.tsx ← Server — 3 témoignages
├── Contact.tsx      ← CLIENT — formulaire avec state
└── Footer.tsx       ← Server — footer complet
```

## Règles frontend
1. `"use client"` uniquement si le composant utilise `useState`, `useEffect`, ou event handlers
2. Props typées avec interfaces TypeScript
3. Classes Tailwind uniquement — pas de CSS modules ni styled-components
4. SVG inline dans les composants — pas de fichiers `.svg` séparés
5. `Link` de `next/link` pour la navigation interne

## Couleurs custom (Tailwind v4 @theme)
```css
/* Disponibles via bg-[#0f2847], text-[#f97316] etc. */
--color-primary: #0f2847
--color-accent: #f97316
```

## Pattern composant standard
```tsx
// Server component (défaut)
export default function MonComposant() {
  return (
    <section id="anchor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* contenu */}
      </div>
    </section>
  );
}
```

## Ajout d'un nouveau composant
1. Créer `components/NouveauComposant.tsx`
2. Ajouter `import` dans `app/page.tsx`
3. Ajouter la section dans le `<main>` de `page.tsx`
4. Mettre à jour `ROADMAP.md`

## Ancres de navigation
| Section | id |
|---------|-----|
| Accueil | `#accueil` |
| Services | `#services` |
| Réalisations | `#realisations` |
| À propos | `#expertise` |
| Contact | `#contact` |
