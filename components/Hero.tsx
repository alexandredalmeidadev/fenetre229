import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f2847 0%, #071a30 50%, #0f2847 100%)" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a3a5c]/60 rounded-full blur-3xl" />
        {/* Window grid pattern */}
        <svg className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block" width="400" height="400" viewBox="0 0 200 200" fill="none">
          <rect x="10" y="10" width="80" height="80" rx="4" stroke="white" strokeWidth="2"/>
          <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="2"/>
          <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="2"/>
          <rect x="110" y="10" width="80" height="80" rx="4" stroke="white" strokeWidth="2"/>
          <line x1="150" y1="10" x2="150" y2="90" stroke="white" strokeWidth="2"/>
          <line x1="110" y1="50" x2="190" y2="50" stroke="white" strokeWidth="2"/>
          <rect x="10" y="110" width="80" height="80" rx="4" stroke="white" strokeWidth="2"/>
          <line x1="50" y1="110" x2="50" y2="190" stroke="white" strokeWidth="2"/>
          <line x1="10" y1="150" x2="90" y2="150" stroke="white" strokeWidth="2"/>
          <rect x="110" y="110" width="80" height="80" rx="4" stroke="white" strokeWidth="2"/>
          <line x1="150" y1="110" x2="150" y2="190" stroke="white" strokeWidth="2"/>
          <line x1="110" y1="150" x2="190" y2="150" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-[#fdba74] text-sm font-medium">N°1 Menuiserie & Vitrerie au Bénin</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Votre habitat mérite{" "}
            <span className="text-[#f97316]">les meilleures</span>{" "}
            fenêtres & portes
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Fenêtre 229 conçoit, fabrique et installe vos menuiseries aluminium, PVC et bois
            sur mesure à Cotonou et dans tout le Bénin. Qualité garantie, délais respectés.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-[#f97316]/30 hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:bg-white/5"
            >
              Voir nos services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            {["✓ Devis gratuit sous 24h", "✓ Pose professionnelle incluse", "✓ Garantie 5 ans"].map((item) => (
              <span key={item} className="flex items-center gap-1">
                <span className="text-[#f97316]">{item.split(" ")[0]}</span>
                <span>{item.substring(2)}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#071a30]/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-white/10">
            {[
              { value: "10+", label: "Ans d'expérience" },
              { value: "500+", label: "Projets réalisés" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "6", label: "Départements couverts" },
            ].map((stat) => (
              <div key={stat.label} className="py-5 px-4 sm:px-8 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
