"use client";

import FilterDeleteButton from "@/components/public/filter-delete-button";
import FilterWrapper from "@/components/public/filter-wrapper";
import useCreateSearchParams from "@/hooks/useCreateSearchParams";
import { CheckCircleIcon } from "lucide-react";

export default function FilterByAvailability() {
  const value = "availability";

  const { getSearchParamsValue, changeSearchParams, deleteSearchParamsURL } =
    useCreateSearchParams();
  const isChecked = Boolean(getSearchParamsValue(value));

  return (
    <FilterWrapper value={value}>
      <label className="flex-center gap-5 py-1.5 px-3 has-checked:bg-foreground rounded-md cursor-pointer hover:bg-muted/30 duration-300">
        <input
          type="checkbox"
          hidden
          checked={isChecked}
          onChange={(e) => {
            if (e.target.checked)
              changeSearchParams(value, String(e.target.checked));
            else deleteSearchParamsURL(value);
          }}
          className="peer"
        />

        <div className="size-2 rounded-full bg-foreground peer-checked:hidden" />

        <CheckCircleIcon className="size-3.5 peer-checked:text-background hidden peer-checked:block" />

        <div className="flex-1 peer-checked:text-background peer-checked:scale-110 peer-checked:font-bold duration-300">
          In stock
        </div>
      </label>

      <FilterDeleteButton value={value} side="left" />
    </FilterWrapper>
  );
}
