"use client";

import { containerVariants, itemVariants } from "@/data/motions";
import { cn } from "@/lib/utils";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { ComponentProps } from "react";

interface FramerFadeProps extends HTMLMotionProps<"div"> {
  variant: Variants;
  className?: string;
}

export default function FramerFade({
  children,
  variant,
  className,
  ...rest
}: FramerFadeProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={variant}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type FramerChildProps = ComponentProps<typeof motion.div>;

export function FramerContainer({
  children,
  className,
  ...rest
}: FramerChildProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function FramerItem({ children, className, ...rest }: FramerChildProps) {
  return (
    <motion.div variants={itemVariants} className={cn("", className)} {...rest}>
      {children}
    </motion.div>
  );
}
