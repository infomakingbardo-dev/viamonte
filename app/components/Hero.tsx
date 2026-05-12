export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1914] via-[#0d0d0b] to-[#0d0d0b]" />

      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#2a2926] to-transparent" />
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2926] to-transparent" />

      {/* Accent dot */}
      <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-medium mb-6">
          Estudio &mdash; Buenos Aires
        </p>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-dm-serif)] text-6xl md:text-8xl lg:text-9xl text-[#f0ede8] leading-[0.95] mb-8">
          El espacio
          <br />
          <span className="text-[#c9a96e]">para crear.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#6b6860] text-base md:text-lg max-w-md leading-relaxed mb-12">
          Producís audiovisual, necesitás un lugar que lo entienda.
          Luz natural, ambientado, flexible. En el centro de Buenos Aires.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#c9a96e] text-[#0d0d0b] text-sm font-medium rounded-sm hover:bg-[#b8924a] transition-colors duration-200"
          >
            Reservar ahora
          </a>
          <a
            href="#espacio"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[#2a2926] text-[#f0ede8] text-sm rounded-sm hover:border-[#6b6860] transition-colors duration-200 gap-2"
          >
            Ver el espacio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 pt-8 border-t border-[#2a2926] flex flex-wrap gap-x-12 gap-y-4">
          {[
            ["Luz natural", "Ventanas amplias"],
            ["Flexible", "Reservá por horas"],
            ["Ambientado", "Muebles incluidos"],
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="text-[#f0ede8] text-sm font-medium">{title}</p>
              <p className="text-[#6b6860] text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
