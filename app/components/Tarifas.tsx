const filas = [
  {
    espacio: "Living de ingreso + Galería",
    h1: "86.000", h2: "155.000", h3: "220.000", h4: "276.000",
    highlight: false,
  },
  {
    espacio: "Salón principal + Patio",
    h1: "86.000", h2: "155.000", h3: "220.000", h4: "276.000",
    highlight: false,
  },
  {
    espacio: "Habitación privada",
    h1: "46.000", h2: "83.000", h3: "117.000", h4: "147.000",
    highlight: false,
  },
  {
    espacio: "Habitación con baño",
    h1: "63.500", h2: "114.000", h3: "161.000", h4: "202.000",
    highlight: true,
  },
];

export default function Tarifas() {
  return (
    <section id="tarifas" className="py-28 px-6 bg-[#F0E6D3]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#7a5c3a] text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Tarifas
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl text-[#372010]">
            Precios claros,
            <br />
            sin sorpresas.
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden border border-[#c9b89a] rounded-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#c9b89a] bg-[#e8d9c0]">
                <th className="text-left px-6 py-4 text-[#7a5c3a] text-xs tracking-widest uppercase font-medium">
                  Espacio
                </th>
                {["1 hora", "2 horas", "3 horas", "4 horas"].map((h) => (
                  <th key={h} className="text-right px-6 py-4 text-[#7a5c3a] text-xs tracking-widest uppercase font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f) => (
                <tr
                  key={f.espacio}
                  className={`border-b border-[#c9b89a] last:border-b-0 ${
                    f.highlight ? "bg-[#e8d9c0]" : ""
                  } hover:bg-[#e8d9c0] transition-colors duration-150`}
                >
                  <td className="px-6 py-5 text-[#372010] text-sm">{f.espacio}</td>
                  <td className="px-6 py-5 text-right text-[#372010] text-sm tabular-nums">${f.h1}</td>
                  <td className="px-6 py-5 text-right text-[#372010] text-sm tabular-nums">${f.h2}</td>
                  <td className="px-6 py-5 text-right text-[#372010] text-sm tabular-nums">${f.h3}</td>
                  <td className="px-6 py-5 text-right text-[#7F1114] text-sm tabular-nums font-semibold">${f.h4}</td>
                </tr>
              ))}
              <tr className="bg-[#e8d9c0]">
                <td className="px-6 py-5 text-[#7a5c3a] text-sm">
                  Cocina / Baño <span className="text-xs text-[#c9b89a]">(adicional)</span>
                </td>
                <td className="px-6 py-5 text-right text-[#7a5c3a] text-sm tabular-nums">$46.000</td>
                <td colSpan={3} className="px-6 py-5 text-right text-[#c9b89a] text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {filas.map((f) => (
            <div key={f.espacio} className="border border-[#c9b89a] rounded-sm p-5 bg-[#e8d9c0]">
              <p className="text-[#372010] text-sm font-medium mb-4">{f.espacio}</p>
              <div className="grid grid-cols-2 gap-3">
                {[["1 hora", f.h1], ["2 horas", f.h2], ["3 horas", f.h3], ["4 horas", f.h4]].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-[#c9b89a] text-xs mb-0.5">{label}</p>
                    <p className="text-[#372010] text-sm tabular-nums">${val}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="border border-[#c9b89a] rounded-sm p-5">
            <p className="text-[#7a5c3a] text-sm font-medium">
              Cocina / Baño <span className="text-xs text-[#c9b89a]">(adicional)</span>
            </p>
            <p className="text-[#372010] text-sm mt-2">$46.000 / hora</p>
          </div>
        </div>

        <p className="mt-6 text-[#c9b89a] text-xs">
          * Precios en pesos argentinos. El pago se realiza en forma anticipada.
        </p>
      </div>
    </section>
  );
}
