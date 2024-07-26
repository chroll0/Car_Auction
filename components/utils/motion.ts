import { Variants } from "framer-motion";

type AnimationDirection = "left" | "right" | "up" | "down";
type AnimationType = "spring" | "tween" | "inertia" | "keyframes";

interface TextVariantProps {
  delay?: number;
}

export const textVariant = ({ delay }: TextVariantProps): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

interface FadeInProps {
  direction?: AnimationDirection;
  type?: AnimationType;
  delay?: number;
  duration?: number;
}

export const fadeIn = ({ direction, type, delay, duration }: FadeInProps) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

interface ZoomInProps {
  delay: number;
  duration: number;
}

export const zoomIn = ({ delay, duration }: ZoomInProps) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

interface SlideInProps {
  direction: AnimationDirection;
  type: AnimationType;
  delay: number;
  duration: number;
}

export const slideIn = ({ direction, type, delay, duration }: SlideInProps) => {
  return {
    hidden: {
      display: "none",
      opacity: 0,
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      display: "flex",
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

interface StaggerContainerProps {
  staggerChildren: number;
  delayChildren?: number;
}

export const staggerContainer = ({
  staggerChildren,
  delayChildren = 0,
}: StaggerContainerProps) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};
