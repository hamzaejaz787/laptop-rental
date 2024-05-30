"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import HomepageProductSlider from "./HomepageProductSlider";

const HomepageSlider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const carouselImage = [
    { imagesrc: "/homepage-slider-1.png" },
    { imagesrc: "/homepage-slider-2.png" },
    { imagesrc: "/homepage-slider-3.png" },
  ];

  return (
    <section>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="ml-0 min-h-dvh">
          {carouselImage.map((image, index) => (
            <CarouselItem
              key={index}
              className="min-h-dvh relative pl-0 h-auto"
            >
              <Image
                src={image.imagesrc}
                alt=""
                fill={true}
                className="object-cover"
              />
              {children}
            </CarouselItem>
          ))}
        </CarouselContent>
        <HomepageProductSlider />
      </Carousel>
    </section>
  );
};

export default HomepageSlider;
