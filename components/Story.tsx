const numbers = ["①", "②", "③", "④", "⑤", "⑥"];

const journey = [
  {
    icon: "🇫🇷",
    label: "Janeth llega",
    sub: "Turista francesa, 5 días en El Salvador",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "📱",
    label: "Abre DescubreSV",
    sub: "Encuentra guías, rutas y negocios en minutos",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: "🧭",
    label: "Conecta con Juan",
    sub: "Guía local certificado que habla francés",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: "🍽️",
    label: "Mercado San Miguelito",
    sub: "Pupusas, sopa de pata, jugo de nance",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: "🏄",
    label: "El Tunco al atardecer",
    sub: "Surf, playa y la mejor puesta de sol",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: "💌",
    label: "Recomienda El Salvador",
    sub: "3 amigos de Francia ya están planeando",
    color: "from-purple-500 to-pink-600",
  },
];

export default function Story() {
  return (
    <section className="py-24 bg-white" id="historia">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full mb-5">
            Historia real (simulada)
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            El viaje de <span className="text-gradient">Janeth</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Una turista francesa que quería descubrir El Salvador auténtico.
          </p>
        </div>

        {/* Journey cards — horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {journey.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Number badge */}
              <div className="text-3xl font-black text-gray-200 mb-3 leading-none">
                {numbers[i]}
              </div>

              {/* Card */}
              <div className={`w-full bg-gradient-to-br ${step.color} rounded-2xl p-5 flex flex-col items-center text-white shadow-lg flex-1`}>
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-black leading-tight mb-2">{step.label}</h3>
                <p className="text-white/70 text-sm leading-snug">{step.sub}</p>
              </div>

              {/* Arrow — hidden on last item, only on desktop row */}
              {i < journey.length - 1 && (
                <div className="hidden lg:block absolute" />
              )}
            </div>
          ))}
        </div>

        {/* Arrows between cards — desktop only, separate row */}
        <div className="hidden lg:flex justify-center items-center gap-4 mb-14 -mt-10 pointer-events-none">
          {journey.map((_, i) =>
            i < journey.length - 1 ? (
              <div key={i} className="flex-1 flex justify-end pr-2">
                <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ) : (
              <div key={i} className="flex-1" />
            )
          )}
        </div>

        {/* Impact card */}
        <div className="bg-gray-950 rounded-3xl p-8 md:p-12 text-white text-center max-w-3xl mx-auto">
          <div className="text-4xl mb-4">✨</div>
          <div className="text-sm font-bold tracking-widest text-white/40 uppercase mb-6">Impacto</div>

          <div className="flex flex-col items-center gap-1">
            {[
              { icon: "✈️", text: "1 turista satisfecha" },
              { icon: "🧭", text: "1 guía genera ingresos" },
              { icon: "🏪", text: "1 negocio local recibe clientes" },
              { icon: "🎥", text: "1 creador obtiene visibilidad" },
            ].map((row, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-3.5 w-full max-w-sm">
                  <span className="text-2xl">{row.icon}</span>
                  <span className="text-xl font-bold">{row.text}</span>
                </div>
                <div className="text-white/30 text-2xl my-1">↓</div>
              </div>
            ))}

            {/* Final result */}
            <div className="flex items-center gap-3 rounded-2xl px-6 py-4 w-full max-w-sm border-2" style={{ background: "#F59E0B", borderColor: "#F59E0B" }}>
              <span className="text-2xl">🌍</span>
              <span className="text-xl font-black text-gray-900">3 nuevos turistas potenciales</span>
            </div>
          </div>

          <p className="text-white/40 text-sm mt-8">
            Cuando un turista descubre El Salvador — <strong className="text-white/70">todos ganamos.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
