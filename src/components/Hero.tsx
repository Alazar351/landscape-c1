"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FramerContainer, FramerItem } from "./FramerAnimations";

export default function Hero() {
  return (
    <section className="relative flex h-[100vh] items-center justify-center overflow-hidden md:items-end">
      <Image
        src={"/assets/herobg.jpg"}
        alt="background"
        fill
        aria-hidden="true"
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
      />
      <div className="container flex items-center justify-center">
        <FramerContainer className="flex flex-col items-center border border-transparent md:items-start">
          <FramerItem>
            <h1 className="font-medium uppercase tracking-[4px] text-primary">
              Premium Landscaping Services
            </h1>
          </FramerItem>
          <FramerItem>
            <p className="mt-3 text-wrap text-center font-jost text-[3.125rem] font-semibold tracking-[-0.8px] text-primary-foreground md:text-left">
              Transforming Your Outdoor Spaces with Expert Landscaping
            </p>
          </FramerItem>
          <FramerItem className="mt-10 flex gap-7">
            <Button
              asChild
              className="h-[62px] w-[179px] border border-primary text-lg text-white hover:bg-transparent hover:text-primary"
            >
              <Link href="/Contact">Get A Quote</Link>
            </Button>
            <Button
              asChild
              className="h-[62px] w-[179px] border border-primary bg-transparent text-lg text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/About">Read More</Link>
            </Button>
          </FramerItem>
        </FramerContainer>
        <FramerItem className="ml-[150px] hidden border border-transparent md:block">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/assets/heroimgv.png"}
              alt="Young women with their garden crops"
              width={800}
              height={800}
              className="object-contain"
            />
          </motion.div>
        </FramerItem>
      </div>
    </section>
  );
}
