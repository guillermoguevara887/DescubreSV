import { whoWeHelp } from "@/data";

const colorMap: Record<string, string> = {
  sky: "bg-sky-50 border-sky-100 text-sky-700",
  blue: "bg-blue-50 border-blue-100 text-blue-700",
  amber: "bg-amber-50 border-amber-100 text-amber-700",
  coral: "bg-orange-50 border-orange-100 text-orange-700",
  teal: "bg-teal-50 border-teal-100 text-teal-700",
};

export default function WhoWeHelp() {
  return (
    <section className="py-24 gradient-section" id="quienes">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Ecosistema completo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ¿A quién{" "}
            <span className="text-gradient">ayudamos?</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            DescubreSV beneficia a todos los actores del ecosistema turístico salvadoreño.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {whoWeHelp.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border p-6 card-hover bg-white ${colorMap[item.color] ?? ""}`}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
