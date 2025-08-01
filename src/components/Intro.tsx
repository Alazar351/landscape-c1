"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Intro() {
  const pathname = usePathname();

  const lastWord = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.split("-")
    .join(" ");

  return (
    <section className="h-[400px]">
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-clip text-white">
        <Image
          src={"/assets/landscape.png"}
          alt="background"
          fill
          priority
          aria-hidden="true"
          sizes="100vw"
          className="absolute -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-primary-foreground/60"></div>
        <h1 className="text-[2.5rem] font-bold uppercase">{lastWord}</h1>
        <div className="flex gap-2 text-lg">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <p>{lastWord}</p>
        </div>
      </div>
    </section>
  );
}
