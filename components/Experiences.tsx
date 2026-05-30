import { experiences } from "@/data";

const colorMap: Record<string, { bg: string; text: string; btn: string }> = {
  orange: { bg: "bg-orange-50", text: "text-orange-700", btn: "bg-orange-500 hover:bg-orange-600" },
  blue: { bg: "bg-blue-50", text: "text-blue-700", btn: "bg-blue-600 hover:bg-blue-700" },
  green: { bg: "bg-green-50", text: "text-green-700", btn: "bg-green-600 hover:bg-green-700" },
  sky: { bg: "bg-sky-50", text: "text-sky-700", btn: "bg-sky-500 hover:bg-sky-600" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", btn: "bg-amber-500 hover:bg-amber-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", btn: "bg-purple-600 hover:bg-purple-700" },
};

export default function Experiences() {
  return (
    <section className="py-24 bg-white" id="experiencias">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-50 text-orange-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Catálogo de experiencias
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Explora{" "}
            <span className="text-gradient">El Salvador</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Desde volcanes y playas hasta mercados y fincas de café. Cada ruta está curada por guías locales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => {
            const c = colorMap[exp.color] ?? colorMap.blue;
            return (
              <div
                key={exp.id}
                className={`rounded-2xl p-6 card-hover border border-gray-100 ${c.bg}`}
              >
                <div className="text-5xl mb-4">{exp.emoji}</div>
                <h3 className={`font-bold text-xl mb-2 ${c.text}`}>{exp.category}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{exp.description}</p>
                <button
                  className={`text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors ${c.btn}`}
                >
                  Ver ruta →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
