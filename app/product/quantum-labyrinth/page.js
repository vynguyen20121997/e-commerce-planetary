import Hero from "../../../sections/product/Hero";
import Products from "../../../sections/product/Products";

export default function QuantumLabyrinth() {
  return (
    <>
      <Hero title="Quantum Labyrinth" bg={"bg-hero-planet-04"} />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
