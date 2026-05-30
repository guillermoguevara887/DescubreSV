"use client";

import { useState } from "react";

const mapPoints = [
  {
    id: 1,
    label: "Centro Histórico",
    sub: "San Salvador",
    desc: "Arquitectura colonial, murales y el corazón político del país.",
    type: "cultura",
    color: "bg-blue-500",
    ring: "ring-blue-300",
    emoji: "🏛️",
    // position as % of SVG viewBox 560x320
    x: "34%",
    y: "52%",
  },
  {
    id: 2,
    label: "Mercado San Miguelito",
    sub: "San Salvador",
    desc: "La mejor gastronomía local: pupusas, sopas y jugos naturales.",
    type: "gastronomia",
    color: "bg-orange-500",
    ring: "ring-orange-300",
    emoji: "🍽️",
    x: "37%",
    y: "58%",
  },
  {
    id: 3,
    label: "El Tunco",
    sub: "La Libertad — Pacífico",
    desc: "Surf, atardeceres y la playa más vibrante de El Salvador.",
    type: "naturaleza",
    color: "bg-green-500",
    ring: "ring-green-300",
    emoji: "🏄",
    x: "28%",
    y: "76%",
  },
  {
    id: 4,
    label: "Ruta de las Flores",
    sub: "Nahuizalco · Juayúa",
    desc: "Pueblos coloniales, café de origen y artesanías nahuat.",
    type: "naturaleza",
    color: "bg-green-400",
    ring: "ring-emerald-300",
    emoji: "🌸",
    x: "18%",
    y: "50%",
  },
  {
    id: 5,
    label: "Suchitoto",
    sub: "Norte de El Salvador",
    desc: "Ciudad colonial, laguna Suchitlán y cultura viva.",
    type: "cultura",
    color: "bg-blue-400",
    ring: "ring-blue-200",
    emoji: "🏡",
    x: "42%",
    y: "32%",
  },
  {
    id: 6,
    label: "Volcán Santa Ana",
    sub: "Santa Ana — Occidente",
    desc: "El volcán activo más alto de El Salvador. Vistas espectaculares.",
    type: "naturaleza",
    color: "bg-emerald-600",
    ring: "ring-emerald-400",
    emoji: "🌋",
    x: "20%",
    y: "44%",
  },
  {
    id: 7,
    label: "Juan Hernández",
    sub: "Guía · Francés · Inglés",
    desc: "Especialista en cultura colonial. Top guía de la plataforma.",
    type: "guia",
    color: "bg-yellow-400",
    ring: "ring-yellow-300",
    emoji: "🧭",
    x: "35%",
    y: "48%",
  },
];

const legend = [
  { color: "bg-orange-500", label: "Gastronomía" },
  { color: "bg-blue-500", label: "Cultura" },
  { color: "bg-green-500", label: "Naturaleza" },
  { color: "bg-yellow-400", label: "Guías locales" },
];

type Point = typeof mapPoints[number];

export default function MapSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const activePoint = mapPoints.find((p) => p.id === hovered);

  return (
    <section className="py-24 bg-white" id="mapa">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-50 text-green-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            🗺️ Mapa interactivo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            El Salvador en{" "}
            <span className="text-gradient">un vistazo</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Haz hover sobre los puntos para descubrir cada experiencia.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Map container */}
          <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-blue-50 via-sky-50 to-teal-50">
            {/* Map with SVG + markers */}
            <div className="relative w-full" style={{ paddingBottom: "57.14%" /* 320/560 */ }}>
              <div className="absolute inset-0 p-6">
                {/* El Salvador SVG map */}
                <svg
                  viewBox="0 0 560 320"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="mapGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#BFDBFE", stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: "#BAE6FD", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#99F6E4", stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="shadow2">
                      <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1E3A8A" floodOpacity="0.1"/>
                    </filter>
                  </defs>

                  {/* Country silhouette */}
                  <path
                    d="M 56 34 C 100 28 145 26 190 30 C 235 34 275 44 318 58 C 358 70 395 88 428 106 C 448 118 462 128 472 140 L 480 158 L 484 178 C 480 192 472 202 460 210 C 450 218 445 228 450 240 C 455 250 452 260 444 268 C 432 278 416 282 396 284 C 368 288 340 290 312 290 C 278 290 244 288 212 283 C 180 278 150 270 122 260 C 96 250 74 236 56 220 C 42 208 36 195 36 180 C 36 164 40 148 44 132 C 48 116 50 98 52 80 C 54 62 54 48 56 34 Z"
                    fill="url(#mapGrad2)"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    filter="url(#shadow2)"
                  />

                  {/* Internal department lines — decorative */}
                  <g stroke="#BFDBFE" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.5">
                    <line x1="155" y1="32" x2="148" y2="272"/>
                    <line x1="268" y1="36" x2="255" y2="284"/>
                    <line x1="375" y1="60" x2="362" y2="284"/>
                    <line x1="36" y1="140" x2="480" y2="140"/>
                    <line x1="36" y1="210" x2="452" y2="262"/>
                  </g>

                  {/* Country label */}
                  <text x="240" y="165" textAnchor="middle" fill="#1E3A8A" fillOpacity="0.12" fontSize="32" fontWeight="900" fontFamily="system-ui">
                    EL SALVADOR
                  </text>
                </svg>

                {/* Interactive markers — overlaid using absolute %, matching SVG proportions */}
                {mapPoints.map((point) => (
                  <div
                    key={point.id}
                    className="absolute group cursor-pointer z-10"
                    style={{ left: point.x, top: point.y, transform: "translate(-50%, -50%)" }}
                    onMouseEnter={() => setHovered(point.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Pulse ring */}
                    <div
                      className={`absolute rounded-full ${point.color} opacity-25 animate-ping`}
                      style={{ width: 28, height: 28, top: -6, left: -6 }}
                    />
                    {/* Dot */}
                    <div
                      className={`w-5 h-5 rounded-full ${point.color} border-2 border-white shadow-lg relative z-10 transition-transform duration-150 ${hovered === point.id ? "scale-150" : "scale-100"}`}
                    />

                    {/* Emoji label on hover */}
                    {hovered === point.id && (
                      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 pointer-events-none z-20 animate-in fade-in duration-150">
                        <div className="bg-gray-900 text-white text-xs rounded-xl px-3 py-1.5 whitespace-nowrap shadow-2xl">
                          <span className="mr-1">{point.emoji}</span>
                          <span className="font-semibold">{point.label}</span>
                        </div>
                        <div className="w-2 h-2 bg-gray-900 rotate-45 mx-auto -mt-1" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend bar */}
            <div className="bg-white border-t border-gray-100 px-6 py-3.5 flex flex-wrap gap-5 items-center">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Leyenda</span>
              {legend.map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                  <span className="text-gray-600 text-xs">{l.label}</span>
                </div>
              ))}
              <span className="ml-auto text-gray-300 text-xs">🇸🇻 El Salvador</span>
            </div>
          </div>

          {/* Right: active point detail card */}
          <div className="lg:w-72 flex-shrink-0">
            {activePoint ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sticky top-24 transition-all duration-200">
                <div className="text-4xl mb-3">{activePoint.emoji}</div>
                <div className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${
                  activePoint.type === "gastronomia" ? "bg-orange-100 text-orange-700"
                  : activePoint.type === "cultura" ? "bg-blue-100 text-blue-700"
                  : activePoint.type === "guia" ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
                }`}>
                  {activePoint.type.toUpperCase()}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-1">{activePoint.label}</h3>
                <p className="text-gray-400 text-sm mb-3">{activePoint.sub}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{activePoint.desc}</p>
                <button className="w-full bg-gray-900 text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-700 transition-colors">
                  Ver ruta →
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-8 text-center sticky top-24">
                <div className="text-4xl mb-3">👆</div>
                <p className="text-gray-400 text-sm">
                  Haz hover sobre un punto del mapa para ver los detalles.
                </p>
              </div>
            )}

            {/* Country facts */}
            <div className="mt-4 bg-blue-50 rounded-2xl border border-blue-100 p-4">
              <h4 className="font-bold text-blue-800 text-sm mb-3">🇸🇻 El Salvador</h4>
              <div className="space-y-2">
                {[
                  ["📍", "Centroamérica"],
                  ["🗣️", "Español"],
                  ["✈️", "Vuelo: 10h desde Europa"],
                  ["🌤️", "Clima tropical"],
                ].map(([ico, text]) => (
                  <div key={text} className="flex items-center gap-2 text-blue-700 text-xs">
                    <span>{ico}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
