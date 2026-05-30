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
    sub: "Encuentra guías, rutas y negocios",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: "🧭",
    label: "Conecta con Juan",
    sub: "Guía local que habla francés",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: "🍽️",
    label: "San Miguelito",
    sub: "Pupusas, sopa de pata, nance",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: "🏄",
    label: "El Tunco",
    sub: "Surf, playa y atardecer",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: "💌",
    label: "Recomienda",
    sub: "3 amigos planean su viaje",
    color: "from-purple-500 to-pink-600",
  },
];

export default function Story() {
  return (
    <section className="py-16 md:py-24 bg-white" id="historia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full mb-5">
            Historia real (simulada)
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            El viaje de <span className="text-gradient">Janeth</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-xl mx-auto">
            Una turista francesa que quería descubrir El Salvador auténtico.
          </p>
        </div>

        {/* Journey cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          {journey.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Number */}
              <div className="text-2xl md:text-3xl font-black text-gray-200 mb-2 leading-none">
                {numbers[i]}
              </div>
              {/* Card */}
              <div className={`w-full bg-gradient-to-br ${step.color} rounded-2xl p-4 md:p-5 flex flex-col items-center text-white shadow-lg flex-1`}>
                <div className="text-3xl md:text-5xl mb-2 md:mb-4">{step.icon}</div>
                <h3 className="text-sm sm:text-base md:text-xl font-black leading-tight mb-1 md:mb-2">{step.label}</h3>
                <p className="text-white/70 text-xs leading-snug hidden sm:block">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact card */}
        <div className="bg-gray-950 rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center max-w-2xl mx-auto">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">✨</div>
          <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-5">Impacto</div>

          <div className="flex flex-col items-center gap-1">
            {[
              { icon: "✈️", text: "1 turista satisfecha" },
              { icon: "🧭", text: "1 guía genera ingresos" },
              { icon: "🏪", text: "1 negocio recibe clientes" },
              { icon: "🎥", text: "1 creador gana visibilidad" },
            ].map((row, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-3.5 w-full max-w-xs sm:max-w-sm">
                  <span className="text-xl sm:text-2xl">{row.icon}</span>
                  <span className="text-sm sm:text-xl font-bold">{row.text}</span>
                </div>
                <div className="text-white/30 text-xl my-1">↓</div>
              </div>
            ))}

            {/* Final */}
            <div
              className="flex items-center gap-3 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 w-full max-w-xs sm:max-w-sm border-2"
              style={{ background: "#F59E0B", borderColor: "#F59E0B" }}
            >
              <span className="text-xl sm:text-2xl">🌍</span>
              <span className="text-sm sm:text-xl font-black text-gray-900">3 nuevos turistas potenciales</span>
            </div>
          </div>

          <p className="text-white/40 text-xs sm:text-sm mt-6 md:mt-8">
            Cuando un turista descubre El Salvador —{" "}
            <strong className="text-white/70">todos ganamos.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
