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

interface CardsSliderProps {
  children: React.ReactNode;
}

const CardsSlider: React.FC<CardsSliderProps> = ({ children }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full px-8"
    >
      <CarouselContent className="p-1">
        {React.Children.map(children, (child) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
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
