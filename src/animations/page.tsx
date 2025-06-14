"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type VariantType = "fadeUp" | "slideRight" | "zoomIn" | "fadeIn";

const variants: Record<VariantType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60, transition: { ease: "easeOut", duration: 0.4 } },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: -60, transition: { ease: "easeOut", duration: 0.4 } },
    visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.8 } },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.95, transition: { ease: "easeOut", duration: 0.4 } },
    visible: { opacity: 1, scale: 1, transition: { ease: "easeOut", duration: 0.8 } },
  },
  fadeIn: {
    hidden: { opacity: 0, transition: { ease: "easeOut", duration: 0.6 } },
    visible: { opacity: 1, transition: { ease: "easeOut", duration: 0.9 } },
  },
};

const RevealOnScroll = ({
  children,
  variant = "fadeUp",
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: VariantType;
  delay?: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier ease
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
