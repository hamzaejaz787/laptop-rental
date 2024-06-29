"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import review from "@/public/review.png";
var reviews = [
  {
    name: "Ali",
    index: 1,
    comment:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum.",
  },
  {
    index: 2,
    name: "Khan",
    comment:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum.",
  },
  {
    index: 3,
    name: "Mashkoor",
    comment:
      "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum.",
  },
];

export function ReviewCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-[80%] m-auto justify-center mt-10 md:mt-14 lg:mt-20 items-center flex flex-col">
      <h2 className="text-4xl mb-3 font-bold text-center">
        Top Client Reviews
      </h2>
      <Image src={review} alt="" className="w-10 h-12 mb-4 object-contain" />
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex h-40 items-center justify-center p-6">
                    <p className="font-bold italic">{review.comment}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
