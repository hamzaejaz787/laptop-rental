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
import EventCard from "../../components/EventCard";
import { EventCardProps } from "@/lib/definitions";

const EventCardsCarousel = ({ data }: { data: EventCardProps[] }) => {
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
      className="w-full max-w-3xl h-full"
    >
      <CarouselContent className="m-4">
        {data.map((data, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 xl:basis-1/3">
            <EventCard data={data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-4 mt-4">
        <CarouselPrevious className="static bg-primary-red text-white transition-all duration-200 hover:bg-red-400 focus-within:bg-red-400 border-none hover:text-white focus-within:text-white" />
        <CarouselNext className="static bg-primary-red text-white transition-all duration-200 hover:bg-red-400 focus-within:bg-red-400 border-none hover:text-white focus-within:text-white" />
      </div>
    </Carousel>
  );
};

export default EventCardsCarousel;
