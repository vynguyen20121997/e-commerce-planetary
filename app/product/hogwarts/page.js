import Hero from "../../../sections/product/Hero";
import Products from "../../../sections/product/Products";

export default function Hogwarts() {
  return (
    <>
      <Hero title="The Hogwarts" bg={"bg-hero-planet-01"} />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
