import Hero from '../../../sections/product/Hero';
import Products from '../../../sections/product/Products';

// eslint-disable-next-line react/function-component-definition
export default function AndromedaNexus() {
  return (
    <>
      <Hero title="Andromeda Nexus" bg="bg-hero-planet-02" />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
