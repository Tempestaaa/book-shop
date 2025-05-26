"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const MIN_VALUE = 0;
const MAX_VALUE = 200;

export default function FilterByPrice() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const minPrice = Number(searchParams.get("minPrice")) || MIN_VALUE;
  const maxPrice = Number(searchParams.get("maxPrice")) || MAX_VALUE;
  const [value, setValue] = useState<[number, number]>([minPrice, maxPrice]);

  const handleChange = () => {
    const param = new URLSearchParams(searchParams);

    param.set("minPrice", value[0].toString());
    param.set("maxPrice", value[1].toString());

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <AccordionItem value="price">
      <AccordionTrigger>Price</AccordionTrigger>
      <AccordionContent>
        <div className="min-h-14">
          <div className="h-10 flex items-center-safe justify-center-safe relative">
            <RangeSlider
              id="range-slider"
              rangeSlideDisabled
              min={MIN_VALUE}
              max={MAX_VALUE}
              defaultValue={[MIN_VALUE, MAX_VALUE]}
              value={value}
              step={10}
              onInput={setValue}
              onThumbDragEnd={() => console.log("im done dragging")}
            />

            <div className="absolute -bottom-3 left-1">{value[0]}</div>
            <div className="absolute -bottom-3 right-1">{value[1]}</div>
          </div>

          <button
            onClick={handleChange}
            className="mt-4 w-fit hover:underline underline-offset-2"
          >
            <span>Apply</span>
          </button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
