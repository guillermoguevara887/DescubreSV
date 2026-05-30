import { creators } from "@/data";

export default function Creators() {
  return (
    <section className="py-24 bg-gray-950 text-white" id="creadores">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-block bg-white/10 border border-white/20 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            🎥 Contenido que inspira viajes
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Creadores de{" "}
            <span className="text-brand-warm">contenido</span>
          </h2>
        </div>

        <p className="text-center text-white/50 max-w-2xl mx-auto mb-14 text-lg">
          Los creadores ayudan a inspirar viajes y la plataforma les da más visibilidad
          conectando sus videos con experiencias reales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creators.map((c) => (
            <div
              key={c.id}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-white/10 card-hover"
            >
              {/* Thumbnail */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
                <span className="text-6xl">{c.thumbnail}</span>
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-mono px-2 py-0.5 rounded">
                  {c.duration}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-1">{c.title}</h3>
                <p className="text-white/40 text-sm mb-3">{c.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                      {c.creator[1]}
                    </div>
                    <span className="text-white/60 text-xs">{c.creator}</span>
                  </div>
                  <span className="text-white/40 text-xs">{c.views}</span>
                </div>

                <button className="mt-4 w-full border border-white/20 hover:bg-white/10 text-white/80 text-sm font-semibold py-2.5 rounded-xl transition-colors">
                  Ver video →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
