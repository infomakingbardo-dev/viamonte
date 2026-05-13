"use client";

import { useState } from "react";

const espacios = [
  { nombre: "Living de ingreso + Galería", precio: 86000 },
  { nombre: "Salón principal + Patio", precio: 86000 },
  { nombre: "Habitación privada", precio: 46000 },
  { nombre: "Habitación con baño", precio: 63500 },
];

const descuentos: Record<number, number> = {
  1: 0,
  2: 0,
  3: 0.15,
  4: 0.20,
  5: 0.25,
};

function formatPeso(n: number) {
  return "$" + n.toLocaleString("es-AR");
}

export default function CalculadoraTarifas() {
  const [espacioIdx, setEspacioIdx] = useState(0);
  const [horas, setHoras] = useState(1);

  const espacio = espacios[espacioIdx];
  const descuento = descuentos[horas];
  const precioBase = espacio.precio * horas;
  const precioFinal = Math.round(precioBase * (1 - descuento));
  const ahorro = precioBase - precioFinal;

  return (
    <div className="mt-12 bg-[#e8d9c0] border border-[#c9b89a] rounded-sm p-8 md:p-10">
      <p className="text-[#7a5c3a] uppercase font-medium mb-8 tracking-[0.2em]" style={{ fontSize: "19px" }}>
        Calculadora de tarifa
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Espacio */}
        <div>
          <p className="text-[#372010] text-sm font-medium mb-3 uppercase tracking-widest">Espacio</p>
          <div className="space-y-2">
            {espacios.map((e, i) => (
              <button
                key={e.nombre}
                onClick={() => setEspacioIdx(i)}
                className={`w-full text-left px-4 py-3 rounded-sm border text-sm transition-all duration-150 ${
                  espacioIdx === i
                    ? "bg-[#372010] text-[#F0E6D3] border-[#372010]"
                    : "bg-transparent text-[#372010] border-[#c9b89a] hover:border-[#7a5c3a]"
                }`}
              >
                {e.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Horas */}
        <div>
          <p className="text-[#372010] text-sm font-medium mb-3 uppercase tracking-widest">Horas</p>
          <div className="grid grid-cols-5 gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((h) => (
              <button
                key={h}
                onClick={() => setHoras(h)}
                className={`py-4 rounded-sm border text-lg font-[family-name:var(--font-dm-serif)] transition-all duration-150 ${
                  horas === h
                    ? "bg-[#372010] text-[#F0E6D3] border-[#372010]"
                    : "bg-transparent text-[#372010] border-[#c9b89a] hover:border-[#7a5c3a]"
                }`}
              >
                {h}h
              </button>
            ))}
          </div>

          {/* Descuentos info */}
          <div className="space-y-1.5">
            {[3, 4, 5].map((h) => (
              <div key={h} className={`flex justify-between text-sm py-1 border-b border-[#c9b89a] ${horas === h ? "text-[#372010] font-medium" : "text-[#7a5c3a]"}`}>
                <span>{h} horas</span>
                <span className={horas === h ? "text-[#00422E] font-semibold" : ""}>{descuentos[h] * 100}% OFF</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resultado */}
      <div className="bg-[#372010] rounded-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-[#c9a96e] text-sm mb-1">{espacio.nombre} · {horas} {horas === 1 ? "hora" : "horas"}</p>
          {descuento > 0 && (
            <p className="text-[#5a3318] text-sm line-through">{formatPeso(precioBase)}</p>
          )}
          <p className="font-[family-name:var(--font-dm-serif)] text-[#F0E6D3] mt-1" style={{ fontSize: "40px" }}>
            {formatPeso(precioFinal)}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          {descuento > 0 && (
            <span className="inline-flex items-center px-3 py-1.5 bg-[#00422E] text-[#7dbf9e] text-sm font-medium rounded-sm">
              {descuento * 100}% de descuento · Ahorrás {formatPeso(ahorro)}
            </span>
          )}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7F1114] text-[#F0E6D3] text-sm font-medium rounded-sm hover:bg-[#9a1518] transition-colors"
          >
            Reservar este horario
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
