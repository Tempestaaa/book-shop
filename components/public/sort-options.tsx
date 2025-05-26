"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formattedSearchParams } from "@/lib/utils";
import { Sort } from "@/types/common.type";
import { CheckIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  sortOptions: Sort[];
};

export default function SortOptions({ sortOptions }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const name = searchParams.get("name");
  const price = searchParams.get("price");

  const handleClick = (name: string, value: string) => {
    const param = new URLSearchParams(searchParams);

    if (name && value) {
      name = formattedSearchParams(name);
      value = formattedSearchParams(value);

      param.set(name, value);
    } else param.delete(name);

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <div className="">
      <Select>
        <SelectTrigger className="w-60">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>

        <SelectContent>
          {sortOptions.map((item) => (
            <SelectGroup key={item.label}>
              <SelectLabel>{item.label}</SelectLabel>

              {item.children.map((o) => {
                const isActive = o.value === name || o.value === price;

                return (
                  <div
                    key={o.name}
                    onClick={() => handleClick(item.label, o.value)}
                    className={`flex gap-4 items-center-safe justify-between text-sm py-1.5 px-2 hover:text-background hover:bg-foreground duration-300 rounded cursor-pointer ${
                      isActive && "!text-background !bg-foreground"
                    }`}
                  >
                    <span>{o.name}</span>
                    {isActive && <CheckIcon className="size-3" />}
                  </div>
                );
              })}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
