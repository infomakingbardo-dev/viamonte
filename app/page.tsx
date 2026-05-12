import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ElEspacio from "./components/ElEspacio";
import Espacios from "./components/Espacios";
import Tarifas from "./components/Tarifas";
import ComoReservar from "./components/ComoReservar";
import Reglas from "./components/Reglas";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ElEspacio />
        <Espacios />
        <Tarifas />
        <ComoReservar />
        <Reglas />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
