"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface CardsSliderProps {
  children: React.ReactNode;
  className?: string;
}

const CardsSlider: React.FC<CardsSliderProps> = ({ children, className }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className={cn("w-full lg:px-8", className)}
    >
      <CarouselContent className="m-4 lg:mx-0">
        {React.Children.map(children, (child) => (
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 px-2">
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center w-full justify-center gap-4 mt-4">
        <CarouselPrevious className="static translate-y-0 border-primary-red border-2 text-primary-red bg-white hover:bg-primary-red hover:text-white" />
        <CarouselNext className="static translate-y-0 border-primary-red border-2 text-primary-red bg-white hover:bg-primary-red hover:text-white" />
      </div>
    </Carousel>
  );
};

export default CardsSlider;
