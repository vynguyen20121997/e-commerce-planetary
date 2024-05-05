import Hero from '../../../sections/product/Hero';
import Products from '../../../sections/product/Products';

// eslint-disable-next-line react/function-component-definition
export default function CosmicCrucible() {
  return (
    <>
      <Hero title="The Cosmic Crucible" bg="bg-hero-planet-03" v />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
