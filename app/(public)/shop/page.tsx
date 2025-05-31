import ShopDisplay from "@/components/public/shop-display";
import FilterSidebar from "@/components/public/filter-sidebar";
import Pagination from "@/components/ui/pagination";

export default function ShopPage() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <FilterSidebar />

      <div className="col-span-9 flex flex-col gap-4">
        <ShopDisplay />
        <Pagination />
      </div>
    </div>
  );
}
