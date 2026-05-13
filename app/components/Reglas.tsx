const incluidos = [
  {
    icono: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#00422E" strokeWidth="1.2"/>
        <path d="M7 11l3 3 5-5" stroke="#00422E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titulo: "Muebles y decoración",
    texto: "Todos los ambientes están completamente amoblados y decorados. No necesitás traer nada.",
  },
  {
    icono: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#00422E" strokeWidth="1.2"/>
        <path d="M11 4v7M11 15v2" stroke="#00422E" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 7l1.5 1.5M13.5 13.5L15 15M4 11h2M16 11h2M7 15l1.5-1.5M13.5 8.5L15 7" stroke="#00422E" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    titulo: "Luz natural",
    texto: "El espacio trabaja con luz natural. Podés traer tu propia iluminación sin problema.",
  },
  {
    icono: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#00422E" strokeWidth="1.2"/>
        <path d="M7 11h8M11 7v8" stroke="#00422E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    titulo: "Reserva flexible",
    texto: "Podés reservar por la cantidad de horas que necesitás. Sin mínimos para zonas comunes.",
  },
];

const cancelacion = [
  { condicion: "Más de 72 hs antes", estado: "Cancelación sin cargo", color: "text-[#00422E]" },
  { condicion: "Menos de 72 hs antes", estado: "Seña no reembolsable", color: "text-[#7F1114]" },
  { condicion: "Cambio de fecha", estado: "Gratis con 48 hs de aviso", color: "text-[#372010]" },
];

const reglas = [
  "El tiempo de reserva comienza al ingresar al espacio.",
  "Solo podés usar las áreas incluidas en tu reserva.",
  "Si necesitás circular entre sectores simultáneamente, se cobra cada uno.",
  "Al finalizar tu tiempo, desalojás y trasladás tus equipos de inmediato.",
  "Para cerrar un sector completo, consultá precio diferencial.",
];

export default function Reglas() {
  return (
    <section id="reglas" className="py-28 px-6 bg-[#F0E6D3]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-[#7a5c3a] uppercase font-medium mb-4 tracking-[0.2em]" style={{ fontSize: "19px" }}>
            Incluido & Reglas
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl text-[#372010]">
            Todo lo que
            <br />
            necesitás saber.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <p className="text-[#372010] text-sm font-medium mb-8 uppercase tracking-widest">Qué está incluido</p>
            <div className="space-y-8">
              {incluidos.map((item) => (
                <div key={item.titulo} className="flex gap-4">
                  <div className="mt-0.5 shrink-0">{item.icono}</div>
                  <div>
                    <p className="text-[#372010] font-medium mb-1.5" style={{ fontSize: "20px" }}>{item.titulo}</p>
                    <p className="text-[#7a5c3a] leading-relaxed" style={{ fontSize: "20px" }}>{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-[#372010] text-sm font-medium mb-6 uppercase tracking-widest">Política de cancelación</p>
              <div className="space-y-3">
                {cancelacion.map((c) => (
                  <div key={c.condicion} className="flex items-center justify-between py-3 border-b border-[#c9b89a]">
                    <p className="text-[#7a5c3a]" style={{ fontSize: "20px" }}>{c.condicion}</p>
                    <p className={`font-medium ${c.color}`} style={{ fontSize: "20px" }}>{c.estado}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[#372010] text-sm font-medium mb-6 uppercase tracking-widest">Reglas de uso</p>
              <ul className="space-y-3">
                {reglas.map((r) => (
                  <li key={r} className="flex gap-3 text-[#7a5c3a] leading-relaxed" style={{ fontSize: "20px" }}>
                    <span className="text-[#c9b89a] mt-1 shrink-0">—</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
