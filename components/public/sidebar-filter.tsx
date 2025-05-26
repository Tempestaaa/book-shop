import FilterByAvailability from "@/components/public/filter-by-availability";
import FilterByFormat from "@/components/public/filter-by-format";
import FilterByGenre from "@/components/public/filter-by-genre";
import FilterByPage from "@/components/public/filter-by-page";
import FilterByPrice from "@/components/public/filter-by-price";
import FilterHeader from "@/components/public/filter-header";
import { Accordion } from "@/components/ui/accordion";

export default function SidebarFilter() {
  return (
    <aside className="w-60">
      <FilterHeader />
      <Accordion type="single" collapsible>
        <FilterByGenre />
        <FilterByPrice />
        <FilterByFormat />
        <FilterByPage />
        <FilterByAvailability />
      </Accordion>
    </aside>
  );
}
