"use client";

import Image from "next/image";
import Bg from "../../public/assets/herobg.jpg";
import { Button } from "./ui/button";
import Link from "next/link";
import Img from "../../public/assets/heroimgv.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative flex h-[100vh] items-center justify-center overflow-hidden md:items-end">
      <Image
        src={Bg}
        alt="background"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
      />
      <div className="container flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center border border-transparent md:items-start"
        >
          <motion.h1
            variants={itemVariants}
            className="font-medium uppercase tracking-[4px] text-primary"
          >
            Premium Landscaping Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-3 text-wrap text-center font-jost text-[50px] font-semibold tracking-[-0.8px] text-primary-foreground md:text-left"
          >
            Transforming Your Outdoor Spaces with Expert Landscaping
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex gap-7">
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
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="ml-[150px] hidden border border-transparent md:block"
        >
          <Image
            src={Img}
            alt="Young women with their garden crops"
            width={800}
            height={800}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
