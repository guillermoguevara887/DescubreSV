import { guides } from "@/data";

const colorMap: Record<string, string> = {
  blue: "from-blue-600 to-blue-800",
  teal: "from-teal-500 to-teal-700",
  orange: "from-orange-500 to-orange-700",
};

const badgeColor: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  teal: "bg-teal-100 text-teal-700",
  orange: "bg-orange-100 text-orange-700",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Guides() {
  return (
    <section className="py-24 gradient-section" id="guias">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-5">
          <span className="inline-block bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Red de guías verificados
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Guías{" "}
            <span className="text-gradient">locales y multilingües</span>
          </h2>
        </div>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
          Los guías verificados podrán generar ingresos conectando con turistas que necesitan
          acompañamiento cultural e idiomático.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover"
            >
              {/* Header with avatar */}
              <div className={`bg-gradient-to-br ${colorMap[guide.color]} p-6 text-white relative`}>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-black mb-3">
                  {guide.photo}
                </div>
                <h3 className="font-bold text-lg">{guide.name}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/20 mt-1 inline-block`}>
                  {guide.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                {/* Languages */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Idiomas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.languages.map((lang) => (
                      <span
                        key={lang}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor[guide.color]}`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialty */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Especialidad
                  </p>
                  <p className="text-gray-700 text-sm">{guide.specialty}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <Stars rating={guide.rating} />
                    <p className="text-xs text-gray-400 mt-0.5">{guide.reviews} reseñas</p>
                  </div>
                  <span className="text-lg font-black text-gray-900">{guide.rating}</span>
                </div>

                <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                  Contactar guía →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
