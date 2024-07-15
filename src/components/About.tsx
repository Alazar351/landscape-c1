"use client";

import Image from "next/image";
import Img from "../../public/assets/about1.png";
import Img2 from "../../public/assets/about2.png";
import AnimatedCounter from "./AnimatedCounter";
import { Gear, Stats } from "../../public";
import Link from "next/link";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section className="py-[120px]">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 lg:flex-row lg:justify-between lg:gap-10">
        <div className="relative flex w-full flex-col items-center justify-center">
          <Image
            src={Img}
            alt="Professional gardener inspecting vibrant red flowers and potted plants in a greenhouse for a landscaping project."
            className="z-0 aspect-square rounded-full"
          />
          <div className="relative bottom-10 z-10 flex w-fit items-center justify-center rounded-md bg-primary p-3">
            <div className="flex h-[68px] w-[201px] items-center justify-center gap-2 rounded-md border border-white px-4 py-3 text-white">
              <p className="text-[52px] font-medium">
                <AnimatedCounter from={0} to={20} />
              </p>
              <p className="text-wrap text-[18px]">Years of experience</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="mb-14">
            <p className="uppercase tracking-[3.8px] text-primary">About us</p>
            <p className="my-5 text-[46px] font-medium tracking-[-1px] text-[#181818]">
              Your Trusted Landscaping Partner
            </p>
            <p className="text-muted-foreground">
              With over two decades of expertise in the landscaping industry, we
              are dedicated to transforming your outdoor spaces into beautiful,
              functional, and sustainable environments. From garden design to
              lawn maintenance, our skilled professionals ensure exceptional
              quality and service.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-center gap-6">
                <Gear className="size-[70px] fill-primary" />
                <div>
                  <Link
                    href="/Services"
                    className="font-jost text-[20px] font-bold text-primary-foreground hover:text-primary"
                  >
                    Expert Landscaping Services
                  </Link>
                  <p className="text-muted-foreground">
                    Tailored solutions for every project
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6">
                <Stats className="size-[70px] fill-primary" />
                <div>
                  <Link
                    href="/Services"
                    className="font-jost text-[20px] font-bold text-primary-foreground hover:text-primary"
                  >
                    Proven Track Record
                  </Link>
                  <p className="text-muted-foreground">
                    Delivering excellence in every project
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={Img2}
              alt="Beautiful garden of flowers"
              width={250}
              height={200}
            />
          </div>
          <Button
            asChild
            className="mx-auto mt-16 h-[58px] w-[179px] border border-primary text-lg text-white hover:bg-transparent hover:text-primary sm:mx-0"
          >
            <Link href="/Contact">Get A Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
