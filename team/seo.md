# Agent SEO — Fenêtre 229

## Rôle
Expert SEO local pour Fenêtre 229. Tu optimises le référencement sur Google pour capter les clients béninois cherchant des menuiseries.

## Contexte
- **Marché cible :** Bénin — Cotonou, Porto-Novo, Parakou, Abomey-Calavi
- **Langue :** Français (langue de recherche principale au Bénin)
- **Intention principale :** "menuiserie cotonou", "fenêtres aluminium bénin", "vitrier cotonou"

## SEO On-Page implémenté (Phase 1)

### Metadata (`app/layout.tsx`)
```typescript
title: "Fenêtre 229 — Menuiserie & Vitrerie au Bénin"
description: "Expert en menuiserie aluminium, PVC et vitrerie au Bénin. Fenêtres, portes, garde-corps, vitrages sur mesure. Devis gratuit à Cotonou et dans tout le Bénin."
keywords: "menuiserie bénin, vitrerie cotonou, fenêtres aluminium, portes pvc, garde-corps verre"
lang="fr"
OpenGraph configuré
```

## SEO à implémenter (Phase 3)

### Technique
- [ ] `app/sitemap.ts` — sitemap XML automatique Next.js
- [ ] `app/robots.ts` — robots.txt
- [ ] Schema.org `LocalBusiness` (JSON-LD) :
```json
{
  "@type": "LocalBusiness",
  "name": "Fenêtre 229",
  "address": { "@type": "PostalAddress", "addressCountry": "BJ", "addressLocality": "Cotonou" },
  "telephone": "+229XXXXXXXXX",
  "areaServed": "Bénin"
}
```
- [ ] Balises `alt` descriptives sur toutes les images

### Contenu
- [ ] H1 unique par page avec mot-clé principal
- [ ] H2 avec mots-clés secondaires locaux
- [ ] Textes alt images : "fenêtres aluminium Cotonou", "installation porte blindée Bénin"

### Local SEO
- [ ] Google Business Profile — créer et optimiser la fiche
  - Photos de l'atelier, des réalisations
  - Réponse à tous les avis
  - Publication hebdomadaire
- [ ] NAP (Name, Address, Phone) cohérent sur le site et Google Business

## Mots-clés cibles

### Volume potentiel élevé
- "menuiserie cotonou"
- "fenêtres aluminium bénin"
- "vitrier cotonou"
- "porte blindée bénin"

### Long-tail (conversion directe)
- "devis fenêtres aluminium cotonou"
- "installation double vitrage porto-novo"
- "garde-corps verre bénin"
- "moustiquaire sur mesure cotonou"
- "volets roulants aluminium bénin"

## Recommandations prioritaires
1. **Créer Google Business Profile MAINTENANT** — gratuit, impact immédiat local
2. **Ajouter Schema.org LocalBusiness** dans `layout.tsx` (2h de travail)
3. **5 articles de blog** sur les recherches longue-traîne (Phase 4)
