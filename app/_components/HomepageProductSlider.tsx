"use client";

"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const HomepageProductSlider = () => {
  return (
    <div className="backdrop-blur-3xl bg-gray-600 bg-opacity-20 w-full p-4 md:-mt-20">
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-4/5 mx-auto"
      >
        <CarouselContent className="ml-0">
          <CarouselItem className="sm:basis-1/2 lg:basis-1/6 pl-0 md:pl-4 flex items-center justify-center">
            <Image src={"/ipad.png"} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/6 pl-0 md:pl-4 flex items-center justify-center">
            <Image src={"/iphone.png"} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/6 pl-0 md:pl-4 flex items-center justify-center">
            <Image src={"/laptop.png"} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/6 pl-0 md:pl-4 flex items-center justify-center">
            <Image src={"/printer.png"} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/6 pl-0 md:pl-4 flex items-center justify-center">
            <Image src={"/screen.png"} alt="" width={200} height={200} />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/6 pl-0 md:pl-4 flex items-center justify-center">
            <Image src={"/avrental.png"} alt="" width={200} height={200} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomepageProductSlider;
