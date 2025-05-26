import ProductCard from "@/components/product/product-card";

export default function ProductList() {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {[...Array(12)].map((_, id) => (
        <ProductCard key={id} />
      ))}
    </section>
  );
}
