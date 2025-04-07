"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollFadeIn({ children, delay = 0, glitch = false }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className={glitch ? "glitch-effect" : ""}
    >
      {children}
    </motion.div>
  );
}