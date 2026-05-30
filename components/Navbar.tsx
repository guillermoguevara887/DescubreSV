"use client";

import { useState } from "react";

const links = [
  { href: "#historia", label: "Historia" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#guias", label: "Guías" },
  { href: "#planificador", label: "Planificador" },
  { href: "#mapa", label: "Mapa" },
  { href: "#impacto", label: "Impacto" },
];

function SvFlag({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 30 18" xmlns="http://www.w3.org/2000/svg" className="rounded-sm shadow-sm flex-shrink-0">
      <rect x="0" y="0" width="30" height="6" fill="#003DA5"/>
      <rect x="0" y="6" width="30" height="6" fill="#FFFFFF"/>
      <rect x="0" y="12" width="30" height="6" fill="#003DA5"/>
      {/* Simplified coat of arms dot */}
      <circle cx="15" cy="9" r="2.2" fill="#003DA5" opacity="0.5"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-black text-xl text-gray-900">
          <SvFlag size={28} />
          <span>
            Descubre<span style={{ color: "#1D4ED8" }}>SV</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-3 py-1 rounded-full border border-amber-100">
            MVP · Demo
          </span>
          <button
            className="text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
            style={{ background: "#1D4ED8" }}
          >
            Planear viaje
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-600 text-sm font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
