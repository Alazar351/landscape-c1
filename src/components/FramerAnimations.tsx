"use client";

import { containerVariants, itemVariants } from "@/data/motions";
import { cn } from "@/lib/utils";
import { motion, MotionProps, Variants } from "framer-motion";

interface FramerFadeProps extends MotionProps {
  children: React.ReactNode;
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

export function FramerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FramerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
