"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const filterThese = ["genre", "price", "format", "page", "availability"];

export default function FilterHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const showFilters = useMemo(() => {
    const keys = Array.from(searchParams.keys());
    const onlyFilters = keys.filter((k) => filterThese.includes(k));

    return {
      length: onlyFilters.length,
      show: onlyFilters.length > 0,
    };
  }, [searchParams]);

  const handleDeleteSearchParams = () => replace(pathname, { scroll: false });

  return (
    <header className="flex items-center-safe gap-2 justify-between h-14">
      <h6 className="font-bold text-2xl">
        Filters {showFilters.show && `(${showFilters.length})`}
      </h6>

      {showFilters.show && (
        <button
          className="text-sm text-destructive font-bold hover:underline underline-offset-2"
          onClick={handleDeleteSearchParams}
        >
          Clear all
        </button>
      )}
    </header>
  );
}
