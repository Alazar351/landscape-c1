"use client";

import Image from "next/image";
import { shortCards } from "@/data/project";
import { fadeInAnimationBT } from "@/data/motions";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-[60px]">
      <div className="container grid gap-x-[30px] gap-y-6 px-4 sm:grid-cols-2">
        {shortCards.map((card, idx) => (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimationBT}
            key={idx}
          >
            <div className="group relative w-full overflow-hidden rounded-xl">
              <Image
                src={card.img}
                alt="A project completed for a client"
                width={760}
                height={500}
                placeholder="blur"
                className="w-full"
              />
              <div className="absolute inset-x-10 bottom-[10%] flex h-[122px] translate-y-[140%] items-center justify-between rounded-lg bg-white pb-6 pl-5 pr-8 pt-[30px] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <Link
                    href={card.href}
                    className="font-jost text-[1.25rem] font-bold text-primary-foreground transition-colors duration-300 ease-in-out hover:text-primary"
                  >
                    {card.title}
                  </Link>
                  <p className="mt-1 text-muted-foreground">{card.desc}</p>
                </div>
                <Button
                  asChild
                  className="size-[3.75rem] bg-background text-lg text-primary-foreground transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white"
                >
                  <Link href={card.href}>
                    <ChevronRight strokeWidth={3} />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
