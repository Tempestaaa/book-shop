import ProductList from "@/components/product/product-list";
import ShopHeader from "@/components/public/shop-header";
import SortOptions from "@/components/public/sort-options";

export default function ShopDisplay() {
  return (
    <div className="">
      <section className="flex items-end-safe gap-4 justify-between">
        <ShopHeader />
        <SortOptions />
      </section>

      <div className="mb-4 text-sm text-muted">Display 1-12 of 100 books</div>

      <ProductList />
    </div>
  );
}
