"use client";

import { useState } from "react";

const categories = ["Tout", "Fenêtres", "Portes", "Vitrerie", "Garde-corps"];

const projects = [
  {
    category: "Fenêtres",
    title: "Villa résidentielle — Cotonou",
    desc: "Fenêtres aluminium double vitrage",
    color: "#1a3a5c",
    accent: "#f97316",
    svgType: "window",
  },
  {
    category: "Portes",
    title: "Immeuble de bureaux — Cotonou",
    desc: "Portes d'entrée blindées",
    color: "#0f2847",
    accent: "#fdba74",
    svgType: "door",
  },
  {
    category: "Vitrerie",
    title: "Showroom — Porto-Novo",
    desc: "Façade vitrée feuilletée",
    color: "#1e3a5c",
    accent: "#f97316",
    svgType: "glass",
  },
  {
    category: "Garde-corps",
    title: "Terrasse — Parakou",
    desc: "Garde-corps verre & inox",
    color: "#0a1f3d",
    accent: "#fdba74",
    svgType: "railing",
  },
  {
    category: "Fenêtres",
    title: "Résidence Les Cocotiers — Abomey",
    desc: "Fenêtres PVC couleur anthracite",
    color: "#162d4a",
    accent: "#f97316",
    svgType: "window",
  },
  {
    category: "Portes",
    title: "Hôtel Central — Bohicon",
    desc: "Portails automatiques aluminium",
    color: "#0f2847",
    accent: "#fdba74",
    svgType: "gate",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
      {/* Visual placeholder */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)` }}
      >
        {/* SVG illustration */}
        {project.svgType === "window" && (
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" opacity="0.7">
            <rect x="10" y="10" width="80" height="80" rx="4" stroke={project.accent} strokeWidth="3"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke={project.accent} strokeWidth="3"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke={project.accent} strokeWidth="3"/>
            <rect x="20" y="20" width="22" height="22" rx="2" fill={project.accent} opacity="0.3"/>
            <rect x="58" y="58" width="22" height="22" rx="2" fill={project.accent} opacity="0.3"/>
          </svg>
        )}
        {project.svgType === "door" && (
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none" opacity="0.7">
            <rect x="5" y="5" width="70" height="90" rx="4" stroke={project.accent} strokeWidth="3"/>
            <rect x="15" y="15" width="23" height="30" rx="2" fill={project.accent} opacity="0.2"/>
            <rect x="42" y="15" width="23" height="30" rx="2" fill={project.accent} opacity="0.2"/>
            <circle cx="62" cy="52" r="4" fill={project.accent} opacity="0.8"/>
          </svg>
        )}
        {project.svgType === "glass" && (
          <svg width="100" height="90" viewBox="0 0 100 90" fill="none" opacity="0.7">
            <rect x="5" y="5" width="25" height="80" rx="2" stroke={project.accent} strokeWidth="2.5" fill={project.accent} fillOpacity="0.15"/>
            <rect x="35" y="5" width="25" height="80" rx="2" stroke={project.accent} strokeWidth="2.5" fill={project.accent} fillOpacity="0.2"/>
            <rect x="65" y="5" width="25" height="80" rx="2" stroke={project.accent} strokeWidth="2.5" fill={project.accent} fillOpacity="0.15"/>
          </svg>
        )}
        {project.svgType === "railing" && (
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" opacity="0.7">
            <line x1="5" y1="20" x2="95" y2="20" stroke={project.accent} strokeWidth="4" strokeLinecap="round"/>
            {[15, 30, 45, 60, 75, 88].map((x) => (
              <line key={x} x1={x} y1="20" x2={x} y2="70" stroke={project.accent} strokeWidth="2.5" strokeLinecap="round"/>
            ))}
            <line x1="5" y1="70" x2="95" y2="70" stroke={project.accent} strokeWidth="3" strokeLinecap="round"/>
          </svg>
        )}
        {project.svgType === "gate" && (
          <svg width="110" height="80" viewBox="0 0 110 80" fill="none" opacity="0.7">
            <rect x="5" y="10" width="45" height="65" rx="3" stroke={project.accent} strokeWidth="2.5"/>
            <rect x="60" y="10" width="45" height="65" rx="3" stroke={project.accent} strokeWidth="2.5"/>
            {[20, 35, 50, 65].map((y) => (
              <line key={y} x1="10" y1={y} x2="45" y2={y} stroke={project.accent} strokeWidth="1.5" opacity="0.5"/>
            ))}
            {[20, 35, 50, 65].map((y) => (
              <line key={`r${y}`} x1="65" y1={y} x2="100" y2={y} stroke={project.accent} strokeWidth="1.5" opacity="0.5"/>
            ))}
          </svg>
        )}
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-bold text-[#0f2847] text-sm mb-0.5">{project.title}</h3>
        <p className="text-gray-500 text-xs">{project.desc}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("Tout");

  const filtered = active === "Tout" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="realisations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-widest">Nos Réalisations</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f2847]">
            Quelques projets dont nous sommes fiers
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Des centaines de chantiers livrés à travers tout le Bénin. Chaque projet est unique, chaque client mérite le meilleur.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                active === cat
                  ? "bg-[#0f2847] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#0f2847] hover:text-[#0f2847]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>📸 Galerie photo complète disponible sur demande — contactez-nous pour voir vos types de réalisations.</p>
        </div>
      </div>
    </section>
  );
}
