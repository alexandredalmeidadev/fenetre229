const testimonials = [
  {
    name: "Aristide K.",
    role: "Promoteur immobilier",
    location: "Cotonou, Littoral",
    quote:
      "J'ai confié à Fenêtre 229 l'installation de toutes les menuiseries de mon immeuble R+3 à Akpakpa. Travail propre, délais respectés, l'équipe est sérieuse. Je recommande sans hésiter.",
    stars: 5,
    initials: "AK",
  },
  {
    name: "Fatimata B.",
    role: "Propriétaire résidentielle",
    location: "Porto-Novo, Ouémé",
    quote:
      "Mes nouvelles fenêtres double vitrage ont transformé ma maison. Plus de chaleur excessive, plus de bruit de la rue. Le technicien a pris le temps de bien expliquer l'entretien. Très satisfaite.",
    stars: 5,
    initials: "FB",
  },
  {
    name: "Rodrigue A.",
    role: "Directeur général",
    location: "Parakou, Borgou",
    quote:
      "Nous avons équipé nos nouveaux locaux avec des portes blindées et une façade vitrée. Le résultat est professionnel et élégant. Le devis était clair, sans surprise à la livraison.",
    stars: 5,
    initials: "RA",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#f97316" : "none"}
          stroke="#f97316"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">Témoignages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f2847]">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Plus de 500 clients satisfaits à travers tout le Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 relative">
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-[#f97316]/10 font-serif leading-none select-none">"</div>

              <Stars count={t.stars} />
              <p className="mt-4 text-gray-600 text-sm leading-relaxed italic">"{t.quote}"</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0f2847] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[#0f2847] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                  <div className="text-[#f97316] text-xs flex items-center gap-1 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4">
            <div className="text-3xl font-extrabold text-[#0f2847]">4.9</div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f97316">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <div className="text-gray-500 text-xs">Note moyenne · 120+ avis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
