import CustomPagination from "@/components/public/custom-pagination";
import ShopDisplay from "@/components/public/shop-display";
import SidebarFilter from "@/components/public/sidebar-filter";

export default function ShopPage() {
  return (
    <div className="flex gap-8">
      <SidebarFilter />

      <div className="flex-1 flex flex-col gap-6">
        <ShopDisplay />
        <CustomPagination />
      </div>
    </div>
  );
}
