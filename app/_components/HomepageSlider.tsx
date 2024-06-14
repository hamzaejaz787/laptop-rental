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
import HomeSliderText from "./HomeSliderText";

interface CarouselData {
  image: string;
  text: {
    title: string;
    description: string;
  };
}

interface HomepageSliderProps {
  carouselData: CarouselData[];
}

const HomepageSlider: React.FC<HomepageSliderProps> = ({ carouselData }) => {
  return (
    <section>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="ml-0 min-h-dvh">
          {carouselData.map((data, index) => (
            <CarouselItem
              key={index}
              className="min-h-dvh relative pl-0 h-auto"
            >
              <Image
                src={data.image}
                alt=""
                fill={true}
                className="object-cover"
              />
              <HomeSliderText
                title={data.text.title}
                description={data.text.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <HomepageProductSlider />
      </Carousel>
    </section>
  );
};

export default HomepageSlider;
