"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formattedSearchParams } from "@/lib/utils";
import { FORMATS } from "@/types/book.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterByFormat() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const format = searchParams.get("format");

  const handleChange = (term: string) => {
    const param = new URLSearchParams(searchParams);

    if (term) param.set("format", term);
    else param.delete("format");

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <AccordionItem value="format">
      <AccordionTrigger>Format</AccordionTrigger>
      <AccordionContent>
        <ul className="grid grid-cols-2 gap-2">
          {FORMATS.map((item) => {
            const formatItem = formattedSearchParams(item);

            return (
              <li
                key={item}
                className={`hover:bg-muted duration-300 ${
                  formatItem === format &&
                  "text-background bg-foreground hover:!bg-foreground"
                }`}
              >
                <label className="flex items-center-safe gap-2 py-1.5 px-2 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    checked={formatItem === format}
                    onChange={() => handleChange(formatItem)}
                  />
                  <span>{item}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
