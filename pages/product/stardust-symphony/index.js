import Hero from '../../../sections/product/Hero';
import Products from '../../../sections/product/Products';

// eslint-disable-next-line react/function-component-definition
export default function UpsideDown() {
  return (
    <>
      <Hero title="Stardust Symphony" bg="bg-hero-planet-05" />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
