import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variant?: "fade" | "fade-up" | "fade-down";
  delay?: number;
}

const variants: Record<string, { hidden: any; show: any }> = {
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  },
  "fade-up": {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
};

export function Reveal({ children, variant = "fade-up", delay = 0 }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const reducedMotion = useReducedMotion();

  const style: React.CSSProperties = {};
  if (reducedMotion || !isInView) {
    style.opacity = isInView || reducedMotion ? 1 : 0;
    if (variant === "fade-up" || variant === "fade-down") {
      style.transform = isInView || reducedMotion ? "translateY(0)" : `translateY(${variant === "fade-up" ? 20 : -20}px)`;
    }
    style.transition = reducedMotion ? "none" : "opacity 0.7s ease-out, transform 0.7s ease-out";
    if (delay) style.transitionDelay = `${delay}s`;
  }

  return (
    <motion.div ref={ref} initial={variants[variant].hidden} animate={variants[variant].show} style={style} className="w-full">
      {children}
    </motion.div>
  );
}
