"use client";

import FilterDeleteButton from "@/components/public/filter-delete-button";
import FilterWrapper from "@/components/public/filter-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateSearchParams from "@/hooks/useCreateSearchParams";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const MIN_PRICE = 0 as const;
const MAX_PRICE = 500 as const;

export default function FilterByPrice() {
  const value = "price";

  const { getSearchParamsValue, changeSearchParams } = useCreateSearchParams();

  const minPrice =
    Number(getSearchParamsValue(value)?.split("-")[0]) || MIN_PRICE;
  const maxPrice =
    Number(getSearchParamsValue(value)?.split("-")[1]) || MAX_PRICE;

  const [price, setPrice] = useState<[number, number]>([minPrice, maxPrice]);

  return (
    <FilterWrapper value={value}>
      <div className="h-8 grid-center">
        <RangeSlider
          id="range-slider"
          value={[price[0], price[1]]}
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={10}
          onInput={setPrice}
        />
      </div>

      <div className="flex-center justify-between gap-4">
        <Input
          type="number"
          value={price[0]}
          onChange={(e) => setPrice([Number(e.target.value), maxPrice])}
          className="w-16 text-center"
        />

        <Input
          type="number"
          value={price[1]}
          onChange={(e) => setPrice([minPrice, Number(e.target.value)])}
          className="w-16 text-center"
        />
      </div>

      <div className="flex-center justify-between gap-4">
        <Button
          variant="ghost"
          onClick={() =>
            changeSearchParams(value, `${price[0] + "-" + price[1]}`)
          }
        >
          Apply
        </Button>
        <FilterDeleteButton value={value} />
      </div>
    </FilterWrapper>
  );
}
