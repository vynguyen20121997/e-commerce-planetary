import Hero from '../../../sections/product/Hero';
import Products from '../../../sections/product/Products';

// eslint-disable-next-line react/function-component-definition
export default function QuantumLabyrinth() {
  return (
    <>
      <Hero title="Quantum Labyrinth" bg="bg-hero-planet-04" />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
