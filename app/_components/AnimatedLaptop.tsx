"use client";

import { useInView, Variants, motion, Spring } from "framer-motion";
import React, { useRef } from "react";

const springEffect: Spring = {
  type: "spring",
  stiffness: 100,
  damping: 12,
  mass: 2,
};

const laptopVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springEffect, staggerChildren: 0.2 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springEffect,
  },
};

const AnimatedLaptop: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <div className="w-full max-w-md" ref={ref}>
      <motion.div
        className="relative w-full"
        variants={laptopVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Laptop lid */}
        <motion.div
          className="relative bg-white rounded-t-lg shadow-lg pt-[56.25%]"
          variants={childVariants}
        >
          {/* Screen bezel */}
          <div className="absolute inset-1 bg-gray-100 rounded-lg"></div>

          {/* Screen */}
          <div className="absolute inset-2 bg-black rounded overflow-hidden">
            {/* Video */}
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/about-us-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Laptop base */}
        <motion.div
          className="relative bg-white rounded-b-lg shadow-lg h-12"
          variants={childVariants}
        >
          {/* Touchpad */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-4 bg-gray-100 rounded"></div>
        </motion.div>

        {/* Laptop hinge */}
        <motion.div
          className="absolute bottom-12 left-0 right-0 h-0.5 bg-gray-200"
          variants={childVariants}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLaptop;
