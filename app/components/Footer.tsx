export default function Footer() {
  return (
    <footer className="border-t border-[#c9b89a] bg-[#F0E6D3] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-dm-serif)] text-lg text-[#372010]">
          Encuadre Studio
        </span>
        <p className="text-sm text-[#7a5c3a]">
          Viamonte 540, Buenos Aires &mdash; +54 9 11 5505-8300
        </p>
        <p className="text-xs text-[#c9b89a]">
          &copy; {new Date().getFullYear()} Encuadre Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
