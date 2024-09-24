"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaAnglesDown } from "react-icons/fa6";

interface GalleryItemProps {
  id: number;
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

interface ImagesLoaderProps {
  images: GalleryItemProps[];
  baseurl: string;
}

const ImagesLoader: React.FC<ImagesLoaderProps> = ({ images, baseurl }) => {
  const [visibleImages, setVisibleImages] = React.useState(12);
  const imagesToShow = images.slice(0, visibleImages);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleLoadMore = () => setVisibleImages((prev) => prev + 8);
  //Shimmer effect for image placeholder while it loads
  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <>
      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        ref={ref}
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
      >
        {imagesToShow.map((item, index) => (
          <motion.div
            key={item.id}
            className="h-full object-cover rounded-sm hover:scale-105 transition-transform hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <Dialog key={item.id}>
              <DialogTrigger className="h-full">
                <Image
                  src={`${baseurl}${item.url}`}
                  alt={item.alternativeText}
                  width={500}
                  height={500}
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(500, 500)
                  )}`}
                  className="h-full object-cover rounded-sm"
                />
              </DialogTrigger>
              <DialogContent>
                <Image
                  src={`${baseurl}${item.url}`}
                  alt={item.alternativeText}
                  width={item.width}
                  height={item.height}
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(item.width, item.height)
                  )}`}
                  className="h-full w-full object-cover"
                />
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </motion.div>

      {visibleImages < images.length && (
        <div className="w-full text-center">
          <Button
            onClick={handleLoadMore}
            className="bg-primary-red hover:bg-red-500 rounded-sm text-lg px-8 md:px-8 gap-2 items-center group"
          >
            Load More{" "}
            <FaAnglesDown
              size={20}
              className="transition-transform group-hover:rotate-[360deg] duration-300"
            />
          </Button>
        </div>
      )}
    </>
  );
};

export default ImagesLoader;
