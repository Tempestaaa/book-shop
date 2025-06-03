"use client";

import FilterDeleteButton from "@/components/public/filter-delete-button";
import FilterWrapper from "@/components/public/filter-wrapper";
import useCreateSearchParams from "@/hooks/useCreateSearchParams";
import { bookFormatSchema } from "@/types/book.type";
import { CheckCircleIcon } from "lucide-react";

export default function FilterByFormat() {
  const value = "format";

  const { isMatchingSearchParams, changeSearchParams } =
    useCreateSearchParams();
  const isChecked = (name: string) => isMatchingSearchParams(value, name);

  return (
    <FilterWrapper value={value}>
      <ul>
        {bookFormatSchema.options.map((item) => (
          <label key={item}>
            <label
              key={item}
              className="size-full flex-center gap-5 py-1.5 px-3 has-checked:bg-foreground rounded-md cursor-pointer hover:bg-muted/30 duration-300"
            >
              <input
                type="radio"
                name={value}
                hidden
                checked={isChecked(item)}
                onChange={() => changeSearchParams(value, item)}
                className="peer"
              />

              <div className="size-2 rounded-full bg-foreground peer-checked:hidden" />

              <CheckCircleIcon className="size-3.5 peer-checked:text-background hidden peer-checked:block" />

              <div className="flex-1 peer-checked:text-background peer-checked:scale-110 peer-checked:font-bold duration-300">
                {item}
              </div>
            </label>
          </label>
        ))}
      </ul>

      <FilterDeleteButton value={value} side="left" />
    </FilterWrapper>
  );
}
