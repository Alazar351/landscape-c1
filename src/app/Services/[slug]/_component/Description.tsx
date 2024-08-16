"use client";

import { details } from "@/data/services";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Description() {
  const pathname = usePathname();

  const lastWord = pathname.split("/").filter(Boolean).pop();

  return (
    <div>
      {details.map((detail, idx) => {
        if (lastWord === detail.id) {
          return (
            <div key={idx}>
              <Image
                src={detail.img}
                alt={detail.id + " Image"}
                placeholder="blur"
                className="w-full rounded-lg"
              />
              <h2 className="mb-[30px] mt-11 font-jost text-[34px] font-bold text-primary-foreground">
                {detail.title}
              </h2>
              <p className="whitespace-pre-line break-words leading-7 text-[hsl(240_12%_36%)]">
                {detail.body}
              </p>
            </div>
          );
        } else {
          return;
        }
      })}
    </div>
  );
}
