"use client";

import FilterDeleteButton from "@/components/public/filter-delete-button";
import FilterWrapper from "@/components/public/filter-wrapper";
import { pageFilter } from "@/data/common";
import useCreateSearchParams from "@/hooks/useCreateSearchParams";
import { CheckCircleIcon } from "lucide-react";

export default function FilterByPage() {
  const value = "page";

  const { getSearchParamsValue, changeSearchParams } = useCreateSearchParams();

  const minPage = Number(getSearchParamsValue(value)?.split("-")[0]);
  const maxPage = Number(getSearchParamsValue(value)?.split("-")[1]);

  const isChecked = (min: number, max: number) =>
    minPage >= min && maxPage <= max ? true : false;

  return (
    <FilterWrapper value={value}>
      <ul>
        {pageFilter.map(({ label, min, max }) => (
          <label
            key={min + "-" + max}
            className="size-full flex-center gap-5 py-1.5 px-3 has-checked:bg-foreground rounded-md cursor-pointer hover:bg-muted/30 duration-300"
          >
            <input
              type="radio"
              name={value}
              hidden
              checked={isChecked(min, max)}
              onChange={() => changeSearchParams(value, `${min + "-" + max}`)}
              className="peer"
            />
            <div className="size-2 rounded-full bg-foreground peer-checked:hidden" />
            <CheckCircleIcon className="size-3.5 peer-checked:text-background hidden peer-checked:block" />
            <div className="flex-1 peer-checked:text-background peer-checked:scale-110 peer-checked:font-bold duration-300">
              {label}
            </div>
          </label>
        ))}
      </ul>

      <FilterDeleteButton value={value} side="left" />
    </FilterWrapper>
  );
}
