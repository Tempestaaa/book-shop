"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import genres from "@/data/genre";
import { formattedSearchParams } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterByGenre() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const genre = searchParams.get("genre");

  const handleChange = (term: string) => {
    const param = new URLSearchParams(searchParams);

    if (term) param.set("genre", term);
    else param.delete("genre");

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <AccordionItem value="genre">
      <AccordionTrigger>Genre</AccordionTrigger>
      <AccordionContent>
        <ScrollArea className="h-60 pr-2">
          <ul>
            {genres.map((item) => {
              const format = formattedSearchParams(item.name);

              return (
                <li
                  key={item.id}
                  className={`hover:bg-muted duration-300 ${
                    format === genre &&
                    "text-background bg-foreground hover:!bg-foreground"
                  }`}
                >
                  <label className="flex items-center-safe gap-2 py-1.5 px-2 cursor-pointer">
                    <input
                      type="radio"
                      name="genre"
                      checked={format === genre}
                      onChange={() => handleChange(format)}
                    />
                    <span>{item.name}</span>
                  </label>
                </li>
              );
            })}
          </ul>

          <ScrollBar />
        </ScrollArea>
      </AccordionContent>
    </AccordionItem>
  );
}
