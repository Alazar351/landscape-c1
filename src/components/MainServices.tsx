"use client";

import Link from "next/link";
import { FruitBox, Gloves, Sprout, Tools } from "../../public";
import { motion } from "framer-motion";

const fadeInAnimationBT = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const hoverAnimationBT = {
  y: -16,
  transition: { duration: 0.3 },
};

export default function MainServices() {
  return (
    <section className="grid grid-cols-1 items-center justify-center gap-[30px] px-4 pt-[65px] sm:grid-cols-2 lg:grid-cols-4">
      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={hoverAnimationBT}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimationBT}
        className="flex h-full overflow-hidden shadow-[0_0_15px_0_#E2E2E2]"
      >
        <div className="p-7 pr-0">
          <Tools className="size-16 fill-primary" />
        </div>
        <div className="p-7">
          <Link
            href="/Services/Landscaping"
            className="text-[20px] font-bold text-primary-foreground hover:text-primary"
          >
            <p>Landscaping Services</p>
          </Link>
          <p className="mt-4 text-primary-foreground">
            Enhance your outdoor space with our professional landscaping
            services. We create beautiful, functional gardens and landscapes
            tailored to your preferences.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={hoverAnimationBT}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimationBT}
        className="flex h-full overflow-hidden shadow-[0_0_15px_0_#E2E2E2]"
      >
        <div className="p-7 pr-0">
          <Gloves className="size-16 fill-primary" />
        </div>
        <div className="p-7">
          <Link
            href="/Services/Pruning-Plants"
            className="text-[20px] font-bold text-primary-foreground hover:text-primary"
          >
            <p className="">Plant Pruning Services</p>
          </Link>
          <p className="mt-4 text-primary-foreground">
            Keep your plants healthy and looking their best with our expert
            pruning services. We ensure proper growth and aesthetics for all
            types of plants.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={hoverAnimationBT}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimationBT}
        className="flex h-full overflow-hidden shadow-[0_0_15px_0_#E2E2E2]"
      >
        <div className="p-7 pr-0">
          <FruitBox className="size-16 fill-primary" />
        </div>
        <div className="p-7">
          <Link
            href="/Services/Lawn-Maintenance"
            className="text-[20px] font-bold text-primary-foreground hover:text-primary"
          >
            <p className="">Lawn Maintenance Services</p>
          </Link>
          <p className="mt-4 text-primary-foreground">
            Achieve a lush, green lawn with our comprehensive lawn maintenance
            services. We provide regular mowing, fertilizing, and weed control
            for a pristine yard.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={hoverAnimationBT}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimationBT}
        className="flex h-full overflow-hidden shadow-[0_0_15px_0_#E2E2E2]"
      >
        <div className="p-7 pr-0">
          <Sprout className="size-16 fill-primary" />
        </div>
        <div className="p-7">
          <Link
            href="/Services/Irrigation-and-Drainage"
            className="text-[20px] font-bold text-primary-foreground hover:text-primary"
          >
            <p className="">Irrigation and Drainage Services</p>
          </Link>
          <p className="mt-4 text-primary-foreground">
            Ensure your garden stays hydrated and free of waterlogging with our
            irrigation and drainage solutions. We design and install efficient
            systems for optimal water management.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
