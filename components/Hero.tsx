"use client";

const badges = [
  "🚀 Innovación turística",
  "💼 Economía local",
  "🌍 Guías multilingües",
  "🍽️ Gastronomía salvadoreña",
];

const destinations = [
  {
    emoji: "🌊",
    name: "El Tunco",
    tag: "SURF",
    desc: "Olas perfectas al atardecer",
    gradient: "from-sky-500 to-blue-700",
    rotate: "-2deg",
  },
  {
    emoji: "🏛️",
    name: "Centro Histórico",
    tag: "CULTURA",
    desc: "Arquitectura colonial viva",
    gradient: "from-amber-500 to-orange-700",
    rotate: "1.5deg",
  },
  {
    emoji: "🌸",
    name: "Ruta de las Flores",
    tag: "NATURALEZA",
    desc: "Pueblos mágicos y café",
    gradient: "from-emerald-500 to-teal-700",
    rotate: "-1deg",
  },
  {
    emoji: "🌋",
    name: "Volcán Izalco",
    tag: "AVENTURA",
    desc: "El Faro del Pacífico",
    gradient: "from-orange-500 to-red-700",
    rotate: "2deg",
  },
];

const stats = [
  { value: "300+", label: "Experiencias" },
  { value: "50+", label: "Guías locales" },
  { value: "4.9★", label: "Satisfacción" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #001F6B 0%, #1E3A8A 35%, #0D6E6E 70%, #0EA5E9 100%)" }}>

      {/* Flag watermark — 3 horizontal bands at ~6% opacity */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1" style={{ background: "#003DA5", opacity: 0.06 }} />
          <div className="flex-1" style={{ background: "#FFFFFF", opacity: 0.04 }} />
          <div className="flex-1" style={{ background: "#003DA5", opacity: 0.06 }} />
        </div>
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-white text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F59E0B" }} />
              Demo MVP · Competencia de Emprendimiento 2025
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 tracking-tight">
              Descubre el
              <br />
              <span className="relative inline-block">
                <span style={{ color: "#F59E0B" }}>El Salvador</span>
              </span>
              <br />
              <span className="text-white/90">auténtico</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/75 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Conectamos turistas con guías locales, rutas culturales, gastronomía
              auténtica y creadores de contenido que muestran lo mejor del país.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button
                className="font-bold px-8 py-4 rounded-2xl text-gray-900 text-base transition-all duration-200 hover:scale-105 shadow-xl"
                style={{ background: "#F59E0B" }}
              >
                ✈️ Planear mi viaje
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-200">
                Explorar experiencias →
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black" style={{ color: "#F59E0B" }}>{s.value}</div>
                  <div className="text-white/50 text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs font-medium text-white/85"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Destination cards ── */}
          <div className="hidden lg:flex flex-shrink-0 w-[420px] xl:w-[480px]">
            <div className="relative w-full">
              <div className="grid grid-cols-2 gap-4">
                {destinations.map((dest, i) => (
                  <div
                    key={dest.name}
                    className={`rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 relative ${i === 0 ? "mt-4" : ""} ${i === 1 ? "mt-0" : ""} ${i === 2 ? "-mt-2" : ""} ${i === 3 ? "mt-6" : ""}`}
                    style={{ transform: `rotate(${dest.rotate})`, transformOrigin: "center" }}
                  >
                    <div className={`bg-gradient-to-br ${dest.gradient} p-5`}>
                      <div className="text-4xl mb-2">{dest.emoji}</div>
                      <div className="text-white/60 text-xs font-bold tracking-widest mb-1">{dest.tag}</div>
                      <h3 className="text-white font-black text-base leading-tight">{dest.name}</h3>
                      <p className="text-white/70 text-xs mt-1">{dest.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-3 text-center whitespace-nowrap">
                <div className="text-xs text-gray-400 font-medium">Powered by</div>
                <div className="font-black text-gray-900 text-sm">
                  🇸🇻 Descubre<span style={{ color: "#1D4ED8" }}>SV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 50L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
