"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedImageTypes {
  src: string;
  index: number;
  className?: string;
  alternativeText: string;
}

interface LayoutImageTypes {
  src: string;
  alternativeText: string;
}

const AnimatedImage: React.FC<AnimatedImageTypes> = ({
  src,
  index,
  className,
  alternativeText,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Image
        src={src}
        alt={alternativeText}
        width={150}
        height={500}
        className={className}
      />
    </motion.div>
  );
};

const CurvedLayoutImages = () => {
  const layoutImages: LayoutImageTypes[] = [
    { src: "/Intro-1.png", alternativeText: "gaming event" },
    { src: "/Intro-2.png", alternativeText: "lenovo laptops" },
    { src: "/Intro-3.png", alternativeText: "hire laptops for event" },
    { src: "/Intro-4.png", alternativeText: "hire laptops for exams" },
    { src: "/Intro-5.png", alternativeText: "hire laptops for conference" },
    { src: "/Intro-6.png", alternativeText: "hire msi laptops" },
  ];

  return (
    <div className="hidden sm:flex items-center md:items-start gap-4 justify-center px-4 md:px-10 flex-nowrap">
      {layoutImages.map((image, index) => (
        <AnimatedImage
          key={index}
          src={image.src}
          alternativeText={image.alternativeText}
          index={index}
          className={cn(
            `${
              index === 1 || index === 4
                ? "mt-14"
                : index === 2 || index === 3
                ? "mt-32"
                : ""
            }`
          )}
        />
      ))}
    </div>
  );
};

export default CurvedLayoutImages;
