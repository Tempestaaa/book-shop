"use client";

import { useSearchParams } from "next/navigation";

export default function ShopHeader() {
  const searchParams = useSearchParams();
  const header =
    searchParams.get("genre")?.split("-").join(" ") || "All products";

  return (
    <header className="h-14 text-3xl font-bold flex items-center-safe capitalize">
      {header}
    </header>
  );
}
