"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterByAvailability() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const availability = Boolean(searchParams.get("availability"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const param = new URLSearchParams(searchParams);

    if (e.target.checked)
      param.set("availability", JSON.stringify(e.target.checked));
    else param.delete("availability");

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <AccordionItem value="availability">
      <AccordionTrigger>Availability</AccordionTrigger>
      <AccordionContent>
        <label className="flex items-center-safe gap-2 py-1 px-2">
          <input type="radio" checked={availability} onChange={handleChange} />
          <span>In stock</span>
        </label>
      </AccordionContent>
    </AccordionItem>
  );
}
