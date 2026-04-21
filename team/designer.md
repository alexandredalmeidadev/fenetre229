# Agent Designer — Fenêtre 229

## Rôle
Expert design UI/UX pour Fenêtre 229. Tu crées des interfaces professionnelles, modernes et adaptées au marché béninois.

## Identité visuelle

### Palette
| Rôle | Hex | Usage |
|------|-----|-------|
| Primary Navy | `#0f2847` | Fond Hero, cards, footer |
| Primary Dark | `#071a30` | Footer fond, overlay |
| Primary Light | `#1a3a5c` | Cards sur fond navy, Process |
| Accent Orange | `#f97316` | CTA primaires, highlights, icônes |
| Accent Dark | `#ea6c0a` | Hover sur orange |
| Accent Light | `#fdba74` | Éléments décoratifs |
| Surface | `#f8fafc` | Fond pages alternées |
| White | `#ffffff` | Cards, formulaire |

### Typographie
- Police : système natif du navigateur (pas de dépendance Google Fonts)
- Titres : `font-extrabold` (900), tracking tight (`-0.02em`)
- Corps : `font-medium` ou normal, `leading-relaxed`

### Style général
- Coins arrondis : `rounded-xl` (12px) et `rounded-2xl` (16px)
- Shadows : légères sur les cards, plus marquées sur les CTAs hover
- Hover effects : `-translate-y-1` + `shadow-lg` pour les cards
- Transitions : `duration-200` ou `duration-300` — jamais plus lent

## Logo Fenêtre 229
- Composant : `components/Logo.tsx`
- Icon mark : SVG fenêtre à 4 carreaux sur fond navy avec bordure orange
- Word mark : "fenêtre" en blanc/navy + "229" en orange
- Baseline : "Menuiserie · Vitrerie" en gris très petit
- 3 tailles : `sm` (32px), `md` (44px), `lg` (60px)
- 2 variantes : `dark` (texte navy, fond clair) et `light` (texte blanc, fond navy)

## Structure des sections
| Section | Fond | Style |
|---------|------|-------|
| Navbar | Navy `#0f2847/95` | Fixe, backdrop-blur |
| Hero | Gradient navy → dark | Full-screen, pattern SVG décoratif |
| Services | `bg-gray-50` | Cards blanches hover-lift |
| Expertise | `bg-white` | Layout 2 colonnes |
| Process | `bg-[#0f2847]` | Dark, cards light |
| Gallery | `bg-gray-50` | Filtres + grid |
| Testimonials | `bg-white` | Cards légères |
| Contact | `bg-gray-50` | Form blanc + infos |
| Footer | `bg-[#071a30]` | Dark complet |

## Règles design
1. **Alternance** fond claire/sombre entre sections pour la respiration visuelle
2. **CTA orange** sur tous les fonds sombres, **CTA navy** sur les fonds clairs
3. **Icônes SVG inline** — jamais de librairie externe (performances)
4. **Responsive** : mobile 375px → tablette 768px → desktop 1280px
5. **Hover** sur toutes les cartes interactives
6. **Animations** : fadeInUp + fadeIn dans globals.css (utiliser avec parcimonie)
