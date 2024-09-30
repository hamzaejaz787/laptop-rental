"use client";

import { FaArrowUp } from "react-icons/fa6";
import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

interface ScrollToOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

export function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop(options: ScrollToOptions) {
    if (!isBrowser()) return;
    window.scrollTo({
      top: options.top || 0,
      left: options.left || 0,
      behavior: options.behavior || "smooth",
    });
  }

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className="fixed z-50 bottom-16 right-4 p-4 bg-primary-red text-white border border-white hover:border-primary-red hover:bg-white hover:text-primary-red transition-all duration-200 rounded-full"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      aria-label="Scroll to top button"
      onClick={() => scrollToTop({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </motion.button>
  );
}
