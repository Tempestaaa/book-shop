"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function FilterHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const showFilters = useMemo(() => {
    const keys = Array.from(searchParams.keys());
    const notHasPage = keys.filter((k) => k !== "page");

    return {
      length: notHasPage.length,
      show: notHasPage.length > 0,
    };
  }, [searchParams]);

  const handleDeleteSearchParams = () => replace(pathname, { scroll: false });

  return (
    <header className="flex items-center-safe gap-2 justify-between h-14">
      <h6 className="font-bold text-2xl">
        Filters {showFilters.show && `(${showFilters.length})`}
      </h6>

      {showFilters.show && (
        <Button variant="destructive" onClick={handleDeleteSearchParams}>
          Clear
        </Button>
      )}
    </header>
  );
}
