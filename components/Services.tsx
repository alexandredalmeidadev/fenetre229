import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2"/>
        <line x1="12" y1="3" x2="12" y2="21"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    title: "Fenêtres sur mesure",
    description:
      "Fenêtres aluminium et PVC haut de gamme, simple ou double vitrage. Isolation thermique et phonique optimale pour votre confort.",
    features: ["Aluminium & PVC", "Double vitrage", "Couleurs sur mesure"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="22" rx="2"/>
        <circle cx="17" cy="12" r="1.5"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
      </svg>
    ),
    title: "Portes & Portails",
    description:
      "Portes d'entrée blindées, portes intérieures et portails motorisés. Sécurité et esthétique au rendez-vous.",
    features: ["Portes blindées", "Portails motorisés", "Pose incluse"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: "Vitrerie & Miroirs",
    description:
      "Découpe, pose et remplacement de vitrages. Miroirs décoratifs, verre feuilleté et trempé pour toutes surfaces.",
    features: ["Verre trempé", "Miroirs sur mesure", "Vitrage décoratif"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="4" y1="7" x2="20" y2="7"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="17" x2="20" y2="17"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
    ),
    title: "Volets & Persiennes",
    description:
      "Volets roulants aluminium, persiennes orientables et battants. Protection solaire, sécurité et intimité.",
    features: ["Volets roulants", "Persiennes alu", "Motorisation"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Garde-corps & Balustrades",
    description:
      "Garde-corps en verre feuilleté, inox ou aluminium. Balustrades d'escalier et terrasse élégantes et sécurisées.",
    features: ["Verre feuilleté", "Inox poli", "Terrasse & escalier"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="7" cy="12" r="1"/>
        <circle cx="12" cy="12" r="1"/>
        <circle cx="17" cy="12" r="1"/>
      </svg>
    ),
    title: "Moustiquaires",
    description:
      "Moustiquaires fixes et coulissantes en fibre de verre ou aluminium. Protection efficace contre les insectes.",
    features: ["Fixe & coulissante", "Fibre de verre", "Sur mesure"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">Nos Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f2847]">
            Tout ce dont votre habitat a besoin
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            De la conception à la pose, Fenêtre 229 vous accompagne avec des solutions
            sur mesure adaptées au climat béninois.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#0f2847]/5 group-hover:bg-[#f97316]/10 rounded-xl flex items-center justify-center mb-5 text-[#0f2847] group-hover:text-[#f97316] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f2847] mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0f2847] hover:bg-[#1a3a5c] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-md"
          >
            Demander un devis pour votre projet
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
