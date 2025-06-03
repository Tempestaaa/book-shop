import { navbarMenu } from "@/data/common";
import { formatSearchParams } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarMenu() {
  return (
    <ul className="flex items-center-safe justify-center-safe gap-2 h-14 z-[90]">
      {navbarMenu.map((item, id) => (
        <li key={id} className="group relative">
          <Link
            href={item.href}
            className="flex items-center-safe gap-2 px-4 py-1 rounded cursor-pointer group-hover:bg-foreground group-hover:text-background duration-300"
          >
            <div>{item.name}</div>

            {item.children && (
              <ChevronDownIcon className="size-3 stroke-3 group-hover:rotate-180 duration-300" />
            )}
          </Link>

          {item.children && (
            <div className="absolute top-[calc(100%+4px)] left-0 w-100 hidden group-hover:grid grid-cols-2 rounded shadow p-2 bg-background before:absolute before:w-1/4 before:h-2 before:bg-transparent before:-top-1 before:left-0">
              {item.children.map((o) => (
                <Link
                  key={o.id}
                  href={`/shop?genre=${formatSearchParams(o.name)}`}
                  className="hover:bg-foreground hover:text-background duration-300 rounded p-2 text-sm"
                >
                  {o.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
