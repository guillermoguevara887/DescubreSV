import { businesses } from "@/data";

export default function LocalBusiness() {
  return (
    <section className="py-24 bg-white" id="negocios">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-50 text-amber-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Negocios del territorio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Negocios{" "}
            <span className="text-gradient">locales</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Cada negocio tiene su historia. DescubreSV los conecta con turistas del mundo entero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businesses.map((biz) => (
            <div
              key={biz.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden"
            >
              {/* Visual header */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex items-center justify-center">
                <span className="text-6xl">{biz.emoji}</span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{biz.name}</h3>
                  <span className="flex-shrink-0 text-xs bg-green-50 text-green-700 font-semibold px-2.5 py-1 rounded-full">
                    {biz.tag}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-xs font-semibold bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full">
                    {biz.type}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">{biz.description}</p>

                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {biz.location}
                </div>

                <div className="flex items-center gap-2 bg-blue-50 rounded-xl p-3">
                  <span className="text-blue-500 text-sm">✓</span>
                  <p className="text-blue-700 text-xs font-medium">Aparece en rutas recomendadas</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
