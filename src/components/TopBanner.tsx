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
import { useEffect, useState } from "react";

export default function TopBanner() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex min-h-[52px] flex-col items-center justify-between bg-transparent px-4 sm:flex-row",
        pathname !== "/" && "bg-primary text-white",
      )}
    >
      <div className="flex items-center justify-center gap-1">
        <Location className="size-3 bg-transparent fill-primary-foreground" />
        <p className="text-primary-foreground">
          2072, Pinnickkinick Street, WA 98370
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <Link
          href="/Contact"
          className="flex items-center justify-center gap-1 text-primary-foreground transition-colors duration-300 ease-in-out hover:text-primary"
        >
          <Mail className="size-4 fill-primary-foreground" />
          <p>info@website.com</p>
        </Link>
        <div className="flex items-center justify-center">
          <Link href="#" className="group pl-5">
            <Facebook className="size-4 fill-primary-foreground transition-colors duration-300 ease-in-out group-hover:fill-primary" />
          </Link>
          <Link href="#" className="group pl-5">
            <Twitter className="size-3 fill-primary-foreground stroke-primary-foreground transition-colors duration-300 ease-in-out group-hover:fill-primary group-hover:stroke-primary-foreground" />
          </Link>
          <Link href="#" className="group pl-5">
            <Google className="size-5 fill-primary-foreground transition-colors duration-300 ease-in-out group-hover:fill-primary" />
          </Link>
          <Link href="#" className="group pl-5">
            <Instagram className="size-4 fill-primary-foreground transition-colors duration-300 ease-in-out group-hover:fill-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
