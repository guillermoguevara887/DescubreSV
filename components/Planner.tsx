"use client";

import { useState } from "react";
import { plannerDays } from "@/data";

const colorMap: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  orange: "border-orange-200 bg-orange-50 text-orange-700",
  green: "border-green-200 bg-green-50 text-green-700",
  sky: "border-sky-200 bg-sky-50 text-sky-700",
  purple: "border-purple-200 bg-purple-50 text-purple-700",
};

const dotColor: Record<string, string> = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  sky: "bg-sky-400",
  purple: "bg-purple-500",
};

export default function Planner() {
  const [generated, setGenerated] = useState(false);

  return (
    <section className="py-24 bg-gray-950 text-white" id="planificador">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 border border-white/20 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            ✨ Planificador inteligente (demo)
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Tu itinerario,{" "}
            <span className="text-brand-warm">personalizado</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Dinos quién eres y cuánto tiempo tienes. Nosotros armamos el viaje perfecto.
          </p>
        </div>

        {/* Fake input terminal */}
        <div className="bg-gray-900 rounded-2xl border border-white/10 overflow-hidden mb-8">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-white/40 text-xs">Planificador DescubreSV</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <p className="text-green-400 mb-1">{">"} Mi perfil de viaje:</p>
            <p className="text-white/80 ml-4 mb-4">
              "Soy francesa, estaré 5 días en El Salvador, me gusta la gastronomía, la historia y la playa."
            </p>
            <button
              onClick={() => setGenerated(true)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                generated
                  ? "bg-green-600 text-white"
                  : "bg-brand-warm text-gray-900 hover:bg-yellow-400"
              }`}
            >
              {generated ? "✓ Itinerario generado" : "✨ Generar itinerario"}
            </button>
          </div>
        </div>

        {/* Generated plan */}
        {generated && (
          <div className="grid gap-4 animate-pulse-once">
            {plannerDays.map((day) => (
              <div
                key={day.day}
                className="flex items-start gap-4 bg-gray-900 rounded-2xl border border-white/10 p-5"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border ${
                    colorMap[day.color]
                  }`}
                >
                  {day.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-white/40 text-xs font-mono">Día {day.day}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colorMap[day.color]}`}
                    >
                      {day.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{day.title}</h4>
                  <p className="text-white/50 text-sm mt-0.5">{day.description}</p>
                </div>
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dotColor[day.color]}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
