import Hero from "../../../sections/product/Hero";
import Products from "../../../sections/product/Products";

export default function AndromedaNexus() {
  return (
    <>
      <Hero title="Andromeda Nexus" bg={"bg-hero-planet-02"} />
      <div className="relative">
        <Products />
      </div>
    </>
  );
}
