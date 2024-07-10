"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedImageTypes {
  src: string;
  index: number;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageTypes> = ({
  src,
  index,
  className,
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
      <Image src={src} alt="" width={150} height={500} className={className} />
    </motion.div>
  );
};

const CurvedLayoutImages = () => {
  const layoutImages: string[] = [
    "/hp_img1.png",
    "/hp_img2.png",
    "/hp_img3.png",
    "/hp_img4.png",
    "/hp_img5.png",
    "/hp_img6.png",
  ];

  return (
    <div className="flex items-center gap-4 justify-center px-4 md:px-10 flex-wrap lg:flex-nowrap">
      {layoutImages.map((image, index) => (
        <AnimatedImage
          key={index}
          src={image}
          index={index}
          className={cn(
            `${
              index === 1 || index === 4
                ? "lg:mt-14"
                : index === 2 || index === 3
                ? "lg:mt-32"
                : ""
            }`
            // `${index > 0 ? "hidden sm:block" : ""}`
          )}
        />
      ))}
    </div>
  );
};

export default CurvedLayoutImages;
