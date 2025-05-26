"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function CustomBreadcrumb() {
  const pathname = usePathname();
  let breadcrumbs = pathname.split("/");
  breadcrumbs.shift();

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-muted">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <div className="flex items-center-safe gap-4">
          {breadcrumbs.map((item, id) => (
            <div key={id} className="capitalize flex items-center-safe gap-3">
              {id === breadcrumbs.length - 1 ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${item}`} className="text-muted">
                    {item}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}

              {id !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
