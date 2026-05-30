"use client";

import { useState } from "react";
import Image from "next/image";

const categoryStyle: Record<string, { bg: string; text: string; label: string }> = {
  gastronomia: { bg: "#F97316", text: "text-orange-600", label: "Gastronomía" },
  cultura:     { bg: "#7C3AED", text: "text-purple-600", label: "Cultura" },
  naturaleza:  { bg: "#22C55E", text: "text-green-600",  label: "Naturaleza" },
  guia:        { bg: "#EAB308", text: "text-yellow-600", label: "Guía Local" },
};

const mapPoints = [
  {
    id: 1,
    label: "Centro Histórico",
    sub: "San Salvador",
    desc: "Arquitectura colonial, murales y el corazón político del país.",
    type: "cultura",
    emoji: "🏛️",
    // Dept San Salvador, zona central-izquierda del mapa
    x: "37%",
    y: "46%",
  },
  {
    id: 2,
    label: "Mercado San Miguelito",
    sub: "San Salvador",
    desc: "Pupusas, sopa de pata y jugos naturales auténticos.",
    type: "gastronomia",
    emoji: "🍲",
    // Muy cerca del Centro Histórico, mismo departamento
    x: "40%",
    y: "49%",
  },
  {
    id: 3,
    label: "El Tunco",
    sub: "La Libertad — Pacífico",
    desc: "Surf, atardeceres y la playa más vibrante del país.",
    type: "naturaleza",
    emoji: "🏄",
    // Punta sur de La Libertad, sobre la costa del Pacífico
    x: "30%",
    y: "83%",
  },
  {
    id: 4,
    label: "Ruta de las Flores",
    sub: "Ahuachapán · Sonsonate",
    desc: "Pueblos coloniales, café de origen y artesanías nahuat.",
    type: "naturaleza",
    emoji: "🌿",
    // Zona montañosa occidental, Ahuachapán/Sonsonate
    x: "13%",
    y: "51%",
  },
  {
    id: 5,
    label: "Suchitoto",
    sub: "Cuscatlán — Centro-norte",
    desc: "Ciudad colonial, laguna Suchitlán y cultura viva.",
    type: "cultura",
    emoji: "🏛️",
    // Norte del dpto de Cuscatlán, cerca del lago Suchitlán
    x: "45%",
    y: "27%",
  },
  {
    id: 6,
    label: "Volcán Santa Ana",
    sub: "Santa Ana — Occidente",
    desc: "El volcán activo más alto de El Salvador.",
    type: "naturaleza",
    emoji: "🌿",
    // Dpto Santa Ana, zona noroccidental
    x: "19%",
    y: "40%",
  },
  {
    id: 7,
    label: "Juan Hernández",
    sub: "Guía · Francés · Inglés",
    desc: "Top guía local. Especialista en cultura colonial.",
    type: "guia",
    emoji: "🧑‍💼",
    // San Salvador, ligeramente al norte del Centro Histórico
    x: "34%",
    y: "43%",
  },
];

const legend = [
  { type: "gastronomia", emoji: "🍲" },
  { type: "cultura",     emoji: "🏛️" },
  { type: "naturaleza",  emoji: "🌿" },
  { type: "guia",        emoji: "🧑‍💼" },
];

export default function MapSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const activePoint = mapPoints.find((p) => p.id === hovered);

  return (
    <section className="py-24 bg-white" id="mapa">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-50 text-green-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            🗺️ Mapa interactivo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Experiencias distribuidas por{" "}
            <span className="text-gradient">todo El Salvador</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Gastronomía, cultura, naturaleza y guías locales conectados en una sola plataforma.
          </p>
        </div>

        <div className="flex flex-col gap-8">

          {/* Map — full width */}
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
            <div className="relative w-full">

              {/* Map image — desaturated so markers pop */}
              <Image
                src="/mapa.png"
                alt="Mapa de El Salvador"
                width={1200}
                height={800}
                className="w-full h-auto block"
                priority
                style={{ filter: "saturate(0.35) brightness(1.1)", opacity: 0.9 }}
              />

              {/* Subtle overlay to push markers forward */}
              <div className="absolute inset-0 bg-white/10 pointer-events-none" />

              {/* Markers */}
              {mapPoints.map((point) => {
                const cat = categoryStyle[point.type];
                const isHovered = hovered === point.id;

                return (
                  <div
                    key={point.id}
                    className="absolute cursor-pointer z-10"
                    style={{ left: point.x, top: point.y, transform: "translate(-50%, -50%)" }}
                    onMouseEnter={() => setHovered(point.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setHovered(hovered === point.id ? null : point.id)}
                  >
                    {/* Pulse ring */}
                    <div
                      className="absolute rounded-full animate-ping"
                      style={{
                        background: cat.bg,
                        opacity: 0.3,
                        width: 44,
                        height: 44,
                        top: -6,
                        left: -6,
                      }}
                    />

                    {/* Marker */}
                    <div
                      className="relative z-10 flex items-center justify-center rounded-full border-2 border-white shadow-lg transition-transform duration-150 text-base"
                      style={{
                        background: cat.bg,
                        width: 32,
                        height: 32,
                        transform: isHovered ? "scale(1.4)" : "scale(1)",
                        boxShadow: isHovered
                          ? `0 0 0 3px white, 0 0 0 5px ${cat.bg}, 0 8px 24px rgba(0,0,0,0.25)`
                          : "0 2px 8px rgba(0,0,0,0.25)",
                      }}
                    >
                      <span style={{ fontSize: 14, lineHeight: 1 }}>{point.emoji}</span>
                    </div>

                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-40 sm:w-48">
                        <div className="bg-gray-900 text-white rounded-xl px-3 py-2.5 shadow-2xl">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-base">{point.emoji}</span>
                            <span className="font-bold text-xs leading-tight">{point.label}</span>
                          </div>
                          <span
                            className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1.5"
                            style={{ background: cat.bg, color: "white" }}
                          >
                            {cat.label}
                          </span>
                          <p className="text-white/60 text-xs leading-snug hidden sm:block">{point.desc}</p>
                        </div>
                        <div
                          className="w-2.5 h-2.5 mx-auto rotate-45 -mt-1.5"
                          style={{ background: "#111827" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend bar */}
            <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Categorías</span>
              <div className="flex flex-wrap gap-4">
                {legend.map((l) => {
                  const cat = categoryStyle[l.type];
                  return (
                    <div key={l.type} className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow"
                        style={{ background: cat.bg, fontSize: 11 }}
                      >
                        {l.emoji}
                      </div>
                      <span className="text-gray-600 text-xs font-medium">{cat.label}</span>
                    </div>
                  );
                })}
              </div>
              <span className="text-gray-300 text-xs">🇸🇻 El Salvador</span>
            </div>
          </div>

          {/* Bottom card — full width, below the map */}
          <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-blue-100">

            {/* Header — gradient azul bandera */}
            <div
              className="px-8 py-6"
              style={{ background: "linear-gradient(135deg, #001F6B 0%, #003DA5 50%, #1D4ED8 100%)" }}
            >
              <h3 className="font-black text-white text-2xl md:text-3xl leading-tight mb-2">
                ¿Por qué visitar El Salvador?
              </h3>
              <p className="text-white/65 text-sm md:text-base max-w-2xl leading-relaxed">
                Un país donde cultura, gastronomía, naturaleza y hospitalidad se unen para crear experiencias únicas.
              </p>
            </div>

            {/* Items — grid 2 col mobile, 5 col desktop */}
            <div className="bg-white px-8 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  emoji: "🌎",
                  title: "Destino en crecimiento",
                  desc: "Uno de los más dinámicos de la región con proyección internacional.",
                },
                {
                  emoji: "🗣️",
                  title: "Guías multilingües",
                  desc: "Inglés, francés, alemán y más idiomas disponibles.",
                },
                {
                  emoji: "🍲",
                  title: "Gastronomía auténtica",
                  desc: "Pupusas, mercados, cafés de origen y sabores únicos.",
                },
                {
                  emoji: "🏄",
                  title: "Naturaleza y aventura",
                  desc: "Playas, volcanes, montañas y pueblos turísticos.",
                },
                {
                  emoji: "🤝",
                  title: "Impacto local real",
                  desc: "Cada visita genera ingresos para guías, negocios y creadores.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)" }}
                  >
                    {item.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-tight mb-1">{item.title}</p>
                    <p className="text-gray-400 text-xs leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-400 font-medium">
                Cuando un turista descubre El Salvador —{" "}
                <span className="font-black text-gray-800">todos ganamos.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
