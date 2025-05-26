import ProductList from "@/components/product/product-list";
import ShopHeader from "@/components/public/shop-header";
import SortOptions from "@/components/public/sort-options";
import { shopSortOptions } from "@/data/common";

export default function ShopDisplay() {
  return (
    <div className="">
      <section className="flex items-center-safe gap-4 justify-between">
        <ShopHeader />
        <SortOptions sortOptions={shopSortOptions} />
      </section>

      <ProductList />
    </div>
  );
}
