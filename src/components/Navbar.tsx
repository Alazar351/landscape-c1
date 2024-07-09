"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TopBanner from "./TopBanner";
import Image from "next/image";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/About",
    },
    {
      title: "Services",
      href: "/Services",
    },
    {
      title: "Portfolio",
      href: "/Portfolio",
    },
    {
      title: "Contact",
      href: "/Contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const pathname = usePathname();

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className={cn("", pathname == "/" && "container px-4")}>
      <TopBanner />
      <div
        className={cn(
          "relative flex h-[100px] items-center justify-between rounded-md bg-white px-4",
          pathname !== "/" && "sticky rounded-none",
        )}
      >
        <Link href="/">
          <Image src="/assets/Logo.png" alt="Logo" width={174} height={58} />
        </Link>
        <div className="hidden items-center justify-between md:flex">
          <ul className="flex gap-6">
            {links.map((link, idx) => (
              <li key={idx} className="h-[50px]">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={cn(
                    "underline-effect flex h-full items-center justify-start font-medium text-primary-foreground hover:text-primary",
                    pathname == link.href && "text-primary after:scale-100",
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button
          asChild
          className="hidden h-[62px] w-[179px] border border-primary text-lg text-white hover:bg-transparent hover:text-primary md:flex"
        >
          <Link href="/Contact">Get A Quote</Link>
        </Button>
        <div ref={ref} className="md:hidden">
          <Hamburger
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            label="Show menu"
            toggled={isOpen}
            toggle={setIsOpen}
            size={25}
            color="hsl(var(--primary))"
          />

          <div
            id="mobile-menu"
            className={cn(
              "pointer-events-none absolute left-0 right-0 top-[100px] max-h-0 overflow-clip bg-background px-4 transition-all duration-300 ease-in-out",
              isOpen && "pointer-events-auto max-h-[400px] py-2",
            )}
          >
            <ul className="grid">
              {links.map((link, idx) => (
                <li key={idx} className="h-[50px]">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={cn(
                      "flex h-full items-center justify-start font-medium text-primary-foreground hover:text-primary",
                      pathname == link.href && "text-primary",
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
