"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import apple from "@/public/apple.png";
import dragon from "@/public/dragon.png";
import hp from "@/public/hp.png";
import dell from "@/public/dell.png";
import lenovo from "@/public/lenovo.png";
import samsung from "@/public/samsung.png";

const techlogos = [apple, dragon, hp, dell, lenovo, samsung, apple, samsung];

export function TechCarousel() {
  return (
    <div className="container p-8 text-center space-y-6">
      <h4 className="font-bold text-4xl sm:text-5xl">Browse By Brands</h4>
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {techlogos.map((logo) => (
            <CarouselItem
              key={1}
              className="pb-1 basis-1/3 md:basis-1/4 lg:basis-1/6 p-0"
            >
              <div className="p-1">
                <Card className="p-0">
                  <CardContent className="flex items-center justify-center p-0">
                    <Image src={logo} alt="" width={200} height={200} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>{" "}
      </Carousel>
    </div>
  );
}
