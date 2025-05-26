"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterByPage() {
  const pages: { name: string; minValue?: number; maxValue?: number }[] = [
    {
      name: "<100",
      maxValue: 99,
    },
    {
      name: "100-300",
      minValue: 100,
      maxValue: 299,
    },
    {
      name: "300-500",
      minValue: 300,
      maxValue: 499,
    },
    {
      name: ">500",
      minValue: 500,
    },
  ];

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const minPage = Number(searchParams.get("minPage"));
  const maxPage = Number(searchParams.get("maxPage"));

  const handleChange = (minValue?: number, maxValue?: number) => {
    const param = new URLSearchParams(searchParams);

    if (minValue) param.set("minPage", minValue.toString());
    else param.delete("minPage");
    if (maxValue) param.set("maxPage", maxValue.toString());
    else param.delete("maxPage");

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <AccordionItem value="page">
      <AccordionTrigger>Page</AccordionTrigger>
      <AccordionContent>
        <ul className="grid grid-cols-2 gap-2">
          {pages.map((item) => {
            return (
              <li key={item.name} className={`hover:bg-muted duration-300`}>
                <label className="flex items-center-safe gap-2 py-1.5 px-2 cursor-pointer">
                  <input
                    type="radio"
                    name="page"
                    checked={
                      minPage === item.minValue || maxPage === item.maxValue
                    }
                    onChange={() => handleChange(item.minValue, item.maxValue)}
                  />
                  <span>{item.name}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
