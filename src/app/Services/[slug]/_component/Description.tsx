"use client";

import { title } from "@/data/general";
import { ServiceDetails } from "@/data/services";
import Image from "next/image";
import { useEffect } from "react";

export default function Description({ detail }: { detail: ServiceDetails }) {
  useEffect(() => {
    document.title = detail.id + ` - ${title}`;
  }, [detail]);

  return (
    <div>
      <Image
        src={detail?.img || "/assets/landscape.png"}
        fill
        alt={detail?.id + " Image"}
        placeholder="blur"
        className="w-full rounded-lg"
      />
      <h2 className="mb-[30px] mt-11 font-jost text-[34px] font-bold text-primary-foreground">
        {detail?.title}
      </h2>
      <p className="whitespace-pre-line break-words leading-7 text-[hsl(240_12%_36%)]">
        {detail?.body}
      </p>
    </div>
  );
}
