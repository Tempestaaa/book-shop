"use client";

import ProductList from "@/components/product/product-list";
import CustomPagination from "@/components/public/custom-pagination";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SortAscIcon, SortDescIcon } from "lucide-react";
import { useState } from "react";

const sortOptions = ["newest", "oldest"];

export default function WishListPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(sortOptions[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-end-safe justify-between">
        <label className="flex flex-col gap-1">
          <span className="font-bold text-sm">Search</span>
          <Input
            placeholder="Search"
            className="w-xs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              {sort === sortOptions[0] ? <SortDescIcon /> : <SortAscIcon />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
              {sortOptions.map((item) => (
                <DropdownMenuRadioItem
                  key={item}
                  value={item}
                  className="capitalize cursor-pointer"
                >
                  {item}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ProductList />

      <div className="mt-4">
        <CustomPagination />
      </div>
    </div>
  );
}
