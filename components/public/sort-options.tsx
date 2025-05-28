"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, StarIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const dateSortOptions = [
  {
    name: "Newest",
    value: "desc",
  },
  {
    name: "Oldest",
    value: "asc",
  },
];

const ratingSortOptions = ["All", "5", "4", "3", "2", "1"];

export default function SortOptions() {
  const [dateOption, setDateOption] = useState(dateSortOptions[0]);
  const [ratingOption, setRatingOption] = useState(ratingSortOptions[0]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSort = (term: string, value: string) => {
    const param = new URLSearchParams(searchParams);

    if (value) param.set(term, value);
    else param.delete(term);

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <div className="flex items-end-safe gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center-safe justify-center-safe gap-2 h-10 rounded border-2 border-muted/30 px-4">
          <span>Date</span>
          <ChevronDownIcon
            className={`size-4 duration-300 ${
              dateOption.value === "asc" && "rotate-180"
            }`}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="border-2 border-muted/30">
          <DropdownMenuRadioGroup value={dateOption.value}>
            {dateSortOptions.map((item) => (
              <DropdownMenuRadioItem
                key={item.value}
                value={item.value}
                onClick={() => {
                  setDateOption(item);
                  handleSort("date", item.value);
                }}
              >
                {item.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center-safe justify-center-safe gap-2 h-10 rounded border-2 border-muted/30 px-4">
          <span>Rating</span>
          {ratingOption !== "All" && (
            <div className="flex items-center-safe gap-1">
              <span>{ratingOption}</span>
              <StarIcon className="fill-star text-transparent size-4" />
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="border-2 border-muted/30">
          <DropdownMenuRadioGroup value={ratingOption}>
            {ratingSortOptions.map((item) => (
              <DropdownMenuRadioItem
                key={item}
                value={item}
                onClick={() => {
                  setRatingOption(item);
                  handleSort("rating", item.toLowerCase());
                }}
                className="flex items-center-safe gap-2"
              >
                <span>{item}</span>
                {item !== "All" && (
                  <StarIcon className="fill-star text-transparent" />
                )}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
