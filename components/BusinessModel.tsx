import { businessModel } from "@/data";

export default function BusinessModel() {
  return (
    <section className="py-24 bg-white" id="modelo">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Modelo de negocio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ¿Cómo{" "}
            <span className="text-gradient">generamos valor</span>?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Cuatro fuentes de ingreso sostenibles que crecen con el ecosistema turístico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {businessModel.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 rounded-2xl p-6 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-3xl flex-shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
