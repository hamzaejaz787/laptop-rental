"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { getStrapiURL } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { ProductImageCarouselProps } from "@/lib/definitions";

const ProductCarousel: React.FC<ProductImageCarouselProps> = ({ data }) => {
  const baseurl = getStrapiURL();
  return (
    <Carousel
      className="w-full flex-1"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((image) => (
          <CarouselItem key={image.id}>
            <Image
              src={`${baseurl}${image.url}`}
              alt={image.alternativeText || ""}
              width={500}
              height={500}
              className=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProductCarousel;
