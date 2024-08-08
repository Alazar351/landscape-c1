"use client";

import {
  Location,
  Mail,
  Facebook,
  Twitter,
  Google,
  Instagram,
} from "../../public";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { address, email } from "@/data/general";

export default function TopBanner() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex min-h-[52px] flex-col items-center justify-between bg-transparent fill-primary-foreground px-4 text-primary-foreground sm:flex-row",
        pathname !== "/" &&
          "space-y-2 bg-primary fill-white py-4 text-white sm:space-y-0",
      )}
    >
      <div className="flex items-center justify-center gap-1">
        <Location className="size-3" />
        <p>{address}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
        <Link
          href="/Contact"
          className={cn(
            "flex items-center justify-center gap-1 transition-colors duration-300 ease-in-out hover:text-primary",
            pathname !== "/" && "hover:text-primary-foreground",
          )}
        >
          <Mail className="size-4 fill-current" />
          <p>{email}</p>
        </Link>
        <div className="flex items-center justify-center">
          <Link href="#" className="group pl-5">
            <Facebook
              className={cn(
                "size-4 fill-current transition-colors duration-300 ease-in-out group-hover:fill-primary",
                pathname !== "/" && "group-hover:fill-primary-foreground",
              )}
            />
          </Link>
          <Link href="#" className="group pl-5">
            <Twitter
              className={cn(
                "size-3 fill-current stroke-current transition-colors duration-300 ease-in-out group-hover:fill-primary group-hover:stroke-primary",
                pathname !== "/" &&
                  "group-hover:fill-primary-foreground group-hover:stroke-primary-foreground",
              )}
            />
          </Link>
          <Link href="#" className="group pl-5">
            <Google
              className={cn(
                "size-5 fill-current transition-colors duration-300 ease-in-out group-hover:fill-primary group-hover:stroke-primary",
                pathname !== "/" && "group-hover:fill-primary-foreground",
              )}
            />
          </Link>
          <Link href="#" className="group pl-5">
            <Instagram
              className={cn(
                "size-4 fill-current transition-colors duration-300 ease-in-out group-hover:fill-primary",
                pathname !== "/" && "group-hover:fill-primary-foreground",
              )}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
