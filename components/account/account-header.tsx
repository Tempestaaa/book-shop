"use client";

import { usePathname } from "next/navigation";

export default function AccountHeader() {
  const pathname = usePathname().split("/");
  const header = pathname[pathname.length - 1];

  return <div className="mb-2 capitalize text-3xl font-bold">{header}</div>;
}
