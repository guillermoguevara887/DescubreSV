export default function Closing() {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-950 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-sky/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-brand-warm/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="text-6xl mb-8">🇸🇻</div>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
          Cuando un turista descubre
          <br />
          <span className="text-brand-warm">El Salvador</span>,
          <br />
          todos ganamos.
        </h2>

        <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Guías, negocios, creadores y el país entero se benefician cuando conectamos
          al mundo con lo auténtico que El Salvador tiene para ofrecer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-brand-warm hover:bg-yellow-400 text-gray-900 font-black px-10 py-5 rounded-2xl text-lg transition-all duration-200 hover:scale-105 shadow-xl">
            Ver demo de experiencia ✨
          </button>
          <button className="border border-white/30 hover:bg-white/10 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-200">
            Conectar con el equipo
          </button>
        </div>

        {/* Bottom tagline */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/30 text-sm font-medium tracking-widest uppercase">
            DescubreSV · Innovación turística · El Salvador 🌊
          </p>
        </div>
      </div>
    </section>
  );
}
