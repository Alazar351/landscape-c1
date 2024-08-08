export const fadeInAnimationBT = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInAnimationLR = {
  initial: {
    opacity: 0,
    x: -25,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  initial: { opacity: 0, y: "100%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
