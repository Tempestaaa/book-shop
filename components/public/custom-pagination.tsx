"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CustomPagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const pagination = Array(10).fill(0);

  const handleClick = (p: number) => {
    const param = new URLSearchParams(searchParams);

    if (p) param.set("page", p.toString());
    else param.delete("page");

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>

        {pagination.length > 5
          ? pagination.slice(0, 4).map((_, id) => {
              const value = id + 1;
              return (
                <PaginationItem key={value} onClick={() => handleClick(value)}>
                  <PaginationLink href="#" isActive={value === page}>
                    {value}
                  </PaginationLink>
                </PaginationItem>
              );
            })
          : pagination.map((_, id) => {
              const value = id + 1;
              return (
                <PaginationItem key={value} onClick={() => handleClick(value)}>
                  <PaginationLink href="#" isActive={value === page}>
                    {value}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

        {pagination.length > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
