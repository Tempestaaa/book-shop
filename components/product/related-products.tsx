import ProductCard from "@/components/product/product-card";

export default function RelatedProducts() {
  return (
    <div className="space-y-4">
      <div className="text-2xl font-bold">Related Products</div>

      <div className="grid grid-flow-col-dense gap-4 *:w-60 overflow-x-auto">
        {[...Array(8)].map((_, id) => (
          <ProductCard key={id} />
        ))}
      </div>
    </div>
  );
}
