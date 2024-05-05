import Hero from "../../../sections/product/Hero";
import Products from "../../../sections/product/Products";

export default function CosmicCrucible() {
  return (
    <>
      <Hero title="The Cosmic Crucible" bg={"bg-hero-planet-03"} v />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
