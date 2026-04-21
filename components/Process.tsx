const steps = [
  {
    num: "01",
    title: "Contactez-nous",
    description:
      "Appelez-nous ou remplissez notre formulaire en ligne. Décrivez votre projet — type de menuiserie, surface, localisation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 5.55 5.55l.96-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.1 15.9z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Devis & visite technique",
    description:
      "Un technicien se déplace gratuitement chez vous pour prendre les mesures exactes et vous remettre un devis détaillé sous 24h.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Fabrication sur mesure",
    description:
      "Vos menuiseries sont fabriquées dans notre atelier avec des matériaux certifiés. Chaque pièce est contrôlée avant expédition.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Installation & livraison",
    description:
      "Nos équipes posent vos menuiseries proprement et dans les délais prévus. Nettoyage du chantier inclus. Garantie 5 ans activée.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-[#0f2847]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">Comment ça marche</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Votre projet en 4 étapes simples
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            De la demande de devis à la pose finale, tout est pris en charge par notre équipe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#f97316]/30 z-0" style={{ width: "calc(100% - 3rem)", left: "calc(50% + 2.5rem)" }} />
              )}
              <div className="relative z-10 bg-[#1a3a5c] rounded-2xl p-6 border border-white/10 hover:border-[#f97316]/40 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-extrabold text-[#f97316]/30 leading-none">{step.num}</div>
                  <div className="w-10 h-10 bg-[#f97316]/15 rounded-xl flex items-center justify-center text-[#f97316]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
