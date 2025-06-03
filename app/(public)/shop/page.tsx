import ShopDisplay from "@/components/public/shop-display";
import FilterSidebar from "@/components/public/filter-sidebar";

export default function ShopPage() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <FilterSidebar />
      </div>

      <div className="col-span-9 flex flex-col gap-4">
        <ShopDisplay />
      </div>
    </div>
  );
}
