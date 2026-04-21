const points = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Plus de 10 ans d'expérience",
    description:
      "Depuis plus d'une décennie, nous intervenons chez les particuliers et les professionnels à Cotonou, Porto-Novo, Parakou et dans tout le Bénin.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "Matériaux certifiés",
    description:
      "Nous travaillons exclusivement avec des matériaux de haute qualité — aluminium brésé, PVC renforcé, verre trempé et feuilleté — certifiés aux normes internationales.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <polyline points="9 16 11 18 15 14"/>
      </svg>
    ),
    title: "Délais respectés",
    description:
      "Nous nous engageons sur des délais précis et les respectons. Votre projet est planifié, suivi et livré à la date convenue — pas de mauvaise surprise.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 5.55 5.55l.96-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.1 15.9z"/>
      </svg>
    ),
    title: "SAV réactif & garantie 5 ans",
    description:
      "Notre service après-vente est disponible 7j/7. Chaque installation est couverte par une garantie de 5 ans pièces et main-d'œuvre.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Devis gratuit & transparent",
    description:
      "Pas de frais cachés. Votre devis détaillé est établi gratuitement sous 24h avec le coût total — matériaux, main-d'œuvre et pose inclus.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Équipe locale & qualifiée",
    description:
      "Nos techniciens sont formés, béninois et passionnés. Nous connaissons le climat local, les contraintes tropicales et les besoins spécifiques de l'habitat béninois.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">Pourquoi nous choisir</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f2847] leading-tight">
              L'expertise locale au service
              <br />
              de votre confort
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Fenêtre 229 est née à Cotonou pour répondre aux besoins réels des familles
              et entreprises béninoises. Nous ne sommes pas un intermédiaire — nous concevons,
              fabriquons et posons nous-mêmes.
            </p>

            {/* Highlighted stat */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#0f2847] rounded-2xl p-5 text-white">
                <div className="text-3xl font-extrabold text-[#f97316]">500+</div>
                <div className="text-sm text-gray-300 mt-1">Chantiers livrés au Bénin</div>
              </div>
              <div className="bg-[#f97316]/10 border border-[#f97316]/20 rounded-2xl p-5">
                <div className="text-3xl font-extrabold text-[#f97316]">5 ans</div>
                <div className="text-sm text-gray-500 mt-1">de garantie sur toutes nos installations</div>
              </div>
            </div>
          </div>

          {/* Right — points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-all duration-200"
              >
                <div className="text-[#f97316] mb-3">{p.icon}</div>
                <h3 className="font-bold text-[#0f2847] mb-1.5 text-sm">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
