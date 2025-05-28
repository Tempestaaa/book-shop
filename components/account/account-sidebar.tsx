"use client";

import { Separator } from "@/components/ui/separator";
import { userMenu } from "@/data/common";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <aside className="w-60">
      <menu className="rounded p-2 shadow-md">
        {userMenu.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center-safe gap-4 py-2 px-4 hover:bg-muted/30 duration-300 rounded ${
                  isActive(item.href) && "text-background !bg-foreground"
                }`}
              >
                <Icon className="size-4" />
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}

        <Separator className="my-2" />

        <li className="text-destructive rounded py-2 px-4 cursor-pointer hover:bg-destructive hover:text-background duration-300">
          Delete account
        </li>
      </menu>
    </aside>
  );
}
