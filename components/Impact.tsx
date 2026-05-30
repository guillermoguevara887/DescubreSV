const chain = [
  {
    emoji: "✈️",
    actor: "Turista",
    role: "Descubre El Salvador",
    metric: "+40%",
    metricLabel: "satisfacción vs. tour tradicional",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-700",
  },
  {
    emoji: "🧭",
    actor: "Guía Local",
    role: "Genera ingresos dignos",
    metric: "3x",
    metricLabel: "más ingresos que sin plataforma",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-700",
  },
  {
    emoji: "🏪",
    actor: "Negocio Local",
    role: "Obtiene visibilidad global",
    metric: "+300",
    metricLabel: "negocios con presencia digital",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
  },
  {
    emoji: "🎥",
    actor: "Creador",
    role: "Conecta su contenido",
    metric: "10x",
    metricLabel: "más alcance conectado a experiencias",
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-700",
  },
  {
    emoji: "🇸🇻",
    actor: "Economía Local",
    role: "Crece con turismo real",
    metric: "$2M+",
    metricLabel: "impacto económico proyectado (año 2)",
    color: "from-blue-700 to-indigo-800",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
  },
];

export default function Impact() {
  return (
    <section className="py-16 md:py-24 bg-gray-950 text-white" id="impacto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-white/10 border border-white/20 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Impacto sistémico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Un turista activa{" "}
            <span style={{ color: "#F59E0B" }}>todo el ecosistema</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Cuando un turista llega a través de DescubreSV, crea valor en cadena para todos los actores del país.
          </p>
        </div>

        {/* Chain — desktop horizontal, mobile vertical */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0 mb-10 md:mb-16">
          {chain.map((node, i) => (
            <div key={node.actor} className="flex flex-col lg:flex-row items-center flex-1 min-w-0">
              {/* Node card */}
              <div className="flex-1 w-full min-w-0">
                <div className={`bg-gradient-to-br ${node.color} rounded-2xl p-4 md:p-5 text-white shadow-lg h-full flex flex-col`}>
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">{node.emoji}</div>
                  <h3 className="font-black text-base md:text-lg leading-tight">{node.actor}</h3>
                  <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4 flex-1">{node.role}</p>
                  <div className="bg-white/15 rounded-xl p-2.5 md:p-3 mt-auto">
                    <div className="text-xl md:text-2xl font-black">{node.metric}</div>
                    <div className="text-white/60 text-xs mt-0.5 leading-tight">{node.metricLabel}</div>
                  </div>
                </div>
              </div>

              {/* Arrow between nodes */}
              {i < chain.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0">
                  <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom impact KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "+300", label: "negocios locales visibles", emoji: "🏪" },
            { value: "+500", label: "guías con nuevos ingresos", emoji: "👥" },
            { value: "10x", label: "mejor experiencia turística", emoji: "⭐" },
            { value: "1", label: "El Salvador en el mapa global", emoji: "🌍" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{kpi.emoji}</div>
              <div className="text-3xl font-black mb-1" style={{ color: "#F59E0B" }}>{kpi.value}</div>
              <p className="text-white/50 text-xs leading-relaxed">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
