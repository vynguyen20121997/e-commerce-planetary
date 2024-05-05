import Hero from '../../../sections/product/Hero';
import Products from '../../../sections/product/Products';

// eslint-disable-next-line react/function-component-definition
export default function Hogwarts() {
  return (
    <>
      <Hero title="The Hogwarts" bg="bg-hero-planet-01" />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
