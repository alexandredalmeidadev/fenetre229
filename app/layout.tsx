import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fenêtre 229 — Menuiserie & Vitrerie au Bénin",
  description:
    "Expert en menuiserie aluminium, PVC et vitrerie au Bénin. Fenêtres, portes, garde-corps, vitrages sur mesure. Devis gratuit à Cotonou et dans tout le Bénin.",
  keywords:
    "menuiserie bénin, vitrerie cotonou, fenêtres aluminium, portes pvc, garde-corps verre, menuisier bénin, vitrier cotonou",
  openGraph: {
    title: "Fenêtre 229 — Menuiserie & Vitrerie au Bénin",
    description: "Expert menuiserie et vitrerie au Bénin. Devis gratuit.",
    locale: "fr_BJ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
