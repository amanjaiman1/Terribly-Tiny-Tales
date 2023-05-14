export const transition = { type: "spring", duration: 1.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 900 : direction === "down" ? -100 : 0,
      opacity: 1,
      transition: { ...transition, delay: .5 },
    },
    animate: {
      x: 0,
      y: 200,
      opacity: 1,
      transition: { ...transition, delay: 1 },
    },
  };
};