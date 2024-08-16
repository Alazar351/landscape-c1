"use client";

import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4">
      {services.map((service, idx) => (
        <li
          key={idx}
          className="flex items-center justify-between rounded-lg border border-[hsl(240_3.4%_94%)] px-10 py-7"
        >
          <Link
            href={service.href}
            className={cn(
              "peer font-medium text-[hsl(240_12%_36%)] transition-colors duration-300 ease-in hover:text-primary",
              pathname == service.href && "font-semibold text-primary",
            )}
          >
            {service.title}
          </Link>
          <ChevronRight
            strokeWidth={4}
            className={cn(
              "size-5 transition-colors duration-300 ease-in peer-hover:text-primary",
              pathname == service.href && "text-primary",
            )}
          />
        </li>
      ))}
    </ul>
  );
}
