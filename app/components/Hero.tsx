export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 overflow-hidden bg-[#F0E6D3]">
      {/* Decorative line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#c9b89a] to-transparent" />

      <div className="relative max-w-6xl mx-auto w-full pt-40">
        {/* Eyebrow */}
        <p className="text-[#7a5c3a] text-xs tracking-[0.2em] uppercase font-medium mb-8">
          Estudio &mdash; Buenos Aires
        </p>

        {/* Heading */}
        <h1 className="text-[#372010] mb-10">
          <span className="block font-[family-name:var(--font-dm-serif)] text-6xl md:text-8xl lg:text-9xl leading-none tracking-[-0.02em]">El encuadre</span>
          <span className="block font-dellamor leading-none" style={{ fontSize: "188px", color: "#00422E", marginTop: "-48px", marginBottom: "-52px" }}>perfecto</span>
          <span className="block font-[family-name:var(--font-dm-serif)] text-6xl md:text-8xl lg:text-9xl leading-none tracking-[-0.02em]">para tu marca.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#7a5c3a] text-base md:text-lg max-w-md leading-relaxed mb-14">
          Producís audiovisual, necesitás un lugar que lo entienda.
          Luz natural, ambientado, flexible. En el centro de Buenos Aires.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#7F1114] text-[#F0E6D3] text-base font-medium rounded-sm hover:bg-[#9a1518] transition-colors duration-200"
          >
            Reservar ahora
          </a>
          <a
            href="#espacio"
            className="inline-flex items-center justify-center px-10 py-5 border border-[#c9b89a] text-[#372010] text-base rounded-sm hover:bg-[#e8d9c0] transition-colors duration-200 gap-2"
          >
            Ver el espacio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 pt-8 border-t border-[#c9b89a] flex flex-wrap gap-x-12 gap-y-4">
          {[
            ["Luz natural", "Ventanas amplias"],
            ["Flexible", "Reservá por horas"],
            ["Ambientado", "Muebles incluidos"],
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="text-[#372010] text-sm font-medium">{title}</p>
              <p className="text-[#7a5c3a] text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
