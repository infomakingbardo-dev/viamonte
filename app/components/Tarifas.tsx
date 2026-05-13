import CalculadoraTarifas from "./CalculadoraTarifas";

const filas = [
  { espacio: "Living de ingreso + Galería", h1: "86.000", h2: "172.000", h3: "219.300", h4: "275.200", h5: "322.500" },
  { espacio: "Salón principal + Patio",     h1: "86.000", h2: "172.000", h3: "219.300", h4: "275.200", h5: "322.500" },
  { espacio: "Habitación privada",          h1: "46.000", h2: "92.000",  h3: "117.300", h4: "147.200", h5: "172.500" },
  { espacio: "Habitación con baño",         h1: "63.500", h2: "127.000", h3: "161.925", h4: "203.200", h5: "238.125" },
];

const descuentos = [
  { horas: "1 hora",  desc: null },
  { horas: "2 horas", desc: null },
  { horas: "3 horas", desc: "15% OFF" },
  { horas: "4 horas", desc: "20% OFF" },
  { horas: "5 horas", desc: "25% OFF" },
];

export default function Tarifas() {
  return (
    <section id="tarifas" className="py-28 px-6 bg-[#F0E6D3]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-[#7a5c3a] uppercase font-medium mb-4 tracking-[0.2em]" style={{ fontSize: "19px" }}>
            Tarifas
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl text-[#372010]">
            Precios claros
            <br />
            sin sorpresas.
          </h2>
          <p className="text-[#7a5c3a] mt-4" style={{ fontSize: "20px" }}>
            Cuanto más horas reservás, mayor es el descuento.
          </p>
        </div>

        {/* Discount badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {descuentos.filter(d => d.desc !== null).map(d => (
            <span key={d.horas} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00422E] text-[#7dbf9e] text-sm rounded-sm">
              <span className="text-[#F0E6D3] font-medium">{d.horas}</span>
              <span>{d.desc}</span>
            </span>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden border border-[#c9b89a] rounded-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#c9b89a] bg-[#e8d9c0]">
                <th className="text-left px-6 py-4 text-[#7a5c3a] text-xs tracking-widest uppercase font-medium">Espacio</th>
                {descuentos.map(d => (
                  <th key={d.horas} className="text-right px-4 py-4 text-[#7a5c3a] text-xs uppercase font-medium">
                    <span className="block tracking-widest">{d.horas}</span>
                    {d.desc && <span className="block text-[#00422E] font-semibold mt-0.5">{d.desc}</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f) => (
                <tr key={f.espacio} className="border-b border-[#c9b89a] last:border-b-0 hover:bg-[#e8d9c0] transition-colors duration-150">
                  <td className="px-6 py-5 text-[#372010] text-sm">{f.espacio}</td>
                  <td className="px-4 py-5 text-right text-[#372010] text-sm tabular-nums">${f.h1}</td>
                  <td className="px-4 py-5 text-right text-[#372010] text-sm tabular-nums">${f.h2}</td>
                  <td className="px-4 py-5 text-right text-[#372010] text-sm tabular-nums">${f.h3}</td>
                  <td className="px-4 py-5 text-right text-[#372010] text-sm tabular-nums">${f.h4}</td>
                  <td className="px-4 py-5 text-right text-[#7F1114] text-sm tabular-nums font-semibold">${f.h5}</td>
                </tr>
              ))}
              <tr className="bg-[#e8d9c0]">
                <td className="px-6 py-5 text-[#7a5c3a] text-sm">Cocina / Baño <span className="text-xs text-[#c9b89a]">(adicional)</span></td>
                <td className="px-4 py-5 text-right text-[#7a5c3a] text-sm tabular-nums">$46.000</td>
                <td colSpan={4} className="px-4 py-5 text-right text-[#c9b89a] text-xs">—</td>
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
                {[["1 hora", f.h1, null], ["2 horas", f.h2, "10%"], ["3 horas", f.h3, "15%"], ["4 horas", f.h4, "20%"], ["5 horas", f.h5, "25%"]].map(([label, val, desc]) => (
                  <div key={String(label)}>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="text-[#c9b89a] text-xs">{label}</p>
                      {desc && <span className="text-[#00422E] text-xs font-semibold">{desc} OFF</span>}
                    </div>
                    <p className="text-[#372010] text-sm tabular-nums">${val}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[#c9b89a] text-xs">* Precios en pesos argentinos. El pago se realiza en forma anticipada.</p>

        <CalculadoraTarifas />

        {/* +5hs card */}
        <a
          href="https://wa.me/5491155058300?text=Hola%2C%20necesito%20m%C3%A1s%20de%205%20horas%20en%20Encuadre%20Studio.%20%C2%BFPodr%C3%ADan%20darme%20un%20presupuesto%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#372010] rounded-sm p-7 hover:bg-[#4a2a14] transition-colors duration-200 group"
        >
          <div>
            <p className="font-[family-name:var(--font-dm-serif)] text-[#F0E6D3] text-2xl mb-1">
              ¿Necesitás más de 5 horas?
            </p>
            <p className="text-[#c9a96e]" style={{ fontSize: "20px" }}>
              Armamos un precio a medida para producciones largas.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#00422E] text-[#F0E6D3] text-sm font-medium rounded-sm group-hover:bg-[#005a3e] transition-colors whitespace-nowrap">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.35.36 2.61.99 3.69L1.5 16.5l3.93-1.02A7.46 7.46 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
            Hablanos
          </span>
        </a>
      </div>
    </section>
  );
}
