const journey = [
  {
    icon: "🇫🇷",
    label: "Janeth",
    sub: "Paris, Francia",
    color: "from-blue-500 to-indigo-600",
    problem: "Quiere conocer El Salvador auténtico pero no sabe por dónde empezar.",
  },
  {
    icon: "📱",
    label: "DescubreSV",
    sub: "Plataforma digital",
    color: "from-sky-500 to-blue-600",
    problem: "Encuentra guías, rutas y negocios adaptados a sus intereses.",
  },
  {
    icon: "🧭",
    label: "Guía local",
    sub: "Juan — habla francés",
    color: "from-teal-500 to-emerald-600",
    problem: "Juan la acompaña con contexto cultural que ningún tour tiene.",
  },
  {
    icon: "🍽️",
    label: "Gastronomía",
    sub: "Mercado San Miguelito",
    color: "from-amber-500 to-orange-600",
    problem: "Prueba pupusas, sopa de pata y jugo de nance en el Mercado.",
  },
  {
    icon: "🏄",
    label: "El Tunco",
    sub: "Playa · Surf · Atardecer",
    color: "from-orange-500 to-red-600",
    problem: "Vive el atardecer en la playa más vibrante de El Salvador.",
  },
  {
    icon: "💌",
    label: "Recomienda",
    sub: "3 amigos planean su viaje",
    color: "from-purple-500 to-pink-600",
    problem: "Regresa a Francia y recomienda El Salvador a toda su red.",
  },
];

export default function Story() {
  return (
    <section className="py-24 bg-white" id="historia">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Historia real (simulada)
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            El viaje de{" "}
            <span className="text-gradient">Janeth</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Una turista francesa que quería conocer El Salvador auténtico — y lo encontró.
          </p>
        </div>

        {/* Problem card */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-14 max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-3">😟</div>
          <h3 className="font-bold text-red-800 text-lg mb-2">El problema</h3>
          <p className="text-red-700 leading-relaxed">
            Janeth vive en Francia. Ha visto videos sobre El Salvador y quiere visitarlo, pero
            no sabe qué lugares descubrir, dónde probar comida auténtica ni cómo encontrar
            un guía que hable francés.
          </p>
        </div>

        {/* Journey flow — desktop horizontal, mobile vertical */}
        <div className="relative">

          {/* Desktop flow */}
          <div className="hidden lg:flex items-start gap-0">
            {journey.map((step, i) => (
              <div key={step.label} className="flex items-start flex-1 min-w-0">
                {/* Card */}
                <div className="flex-1 min-w-0">
                  <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-4 text-white shadow-lg mb-3`}>
                    <div className="text-3xl mb-2">{step.icon}</div>
                    <div className="font-black text-sm leading-tight">{step.label}</div>
                    <div className="text-white/65 text-xs mt-0.5">{step.sub}</div>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed px-1">{step.problem}</p>
                </div>

                {/* Arrow connector (not after last item) */}
                {i < journey.length - 1 && (
                  <div className="flex items-center justify-center w-8 flex-shrink-0 pt-6">
                    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow — vertical timeline */}
          <div className="lg:hidden space-y-0">
            {journey.map((step, i) => (
              <div key={step.label} className="relative flex gap-4">
                {/* Left: icon + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-md z-10`}>
                    {step.icon}
                  </div>
                  {i < journey.length - 1 && (
                    <div className="w-0.5 flex-1 mt-1 mb-1 bg-gradient-to-b from-gray-200 to-gray-100" style={{ minHeight: 32 }} />
                  )}
                </div>

                {/* Right: content */}
                <div className={`pb-6 ${i === journey.length - 1 ? "" : ""}`}>
                  <h3 className="font-bold text-gray-900 text-base">{step.label}</h3>
                  <p className="text-gray-400 text-xs mb-1">{step.sub}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.problem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white text-center">
          <div className="text-3xl mb-3">🎉</div>
          <h3 className="font-black text-xl mb-2">Resultado</h3>
          <p className="text-white/80 max-w-xl mx-auto">
            Janeth regresa a Francia con experiencias que no se compran en un catálogo.
            Publica en redes, recomienda la plataforma y <strong className="text-white">tres amigos ya están planeando su viaje</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
