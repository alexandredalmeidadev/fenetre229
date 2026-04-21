import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  Services: [
    "Fenêtres aluminium / PVC",
    "Portes & Portails",
    "Vitrerie & Miroirs",
    "Volets & Persiennes",
    "Garde-corps",
    "Moustiquaires",
  ],
  "Liens utiles": [
    { label: "Accueil", href: "#accueil" },
    { label: "Nos services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "À propos", href: "#expertise" },
    { label: "Devis gratuit", href: "#contact" },
  ],
  Régions: [
    "Cotonou (Littoral)",
    "Porto-Novo (Ouémé)",
    "Parakou (Borgou)",
    "Abomey-Calavi (Atlantique)",
    "Bohicon (Zou)",
    "Natitingou (Atacora)",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#071a30] text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Votre expert en menuiserie aluminium, PVC et vitrerie au Bénin.
              Sur mesure, qualité garantie, installation professionnelle.
            </p>
            <div className="mt-5 flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-[#f97316] rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/229XXXXXXXXX" className="w-9 h-9 bg-white/5 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-[#E1306C] rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-sm hover:text-[#f97316] transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks["Liens utiles"].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-[#f97316] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions + Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Zones d'intervention</h3>
            <ul className="space-y-2.5">
              {footerLinks.Régions.map((r) => (
                <li key={r} className="text-sm flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#f97316">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Fenêtre 229 — Tous droits réservés. Cotonou, Bénin.
          </p>
          <div className="flex gap-5 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Confidentialité</Link>
            <Link href="#contact" className="hover:text-[#f97316] transition-colors">Devis gratuit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
