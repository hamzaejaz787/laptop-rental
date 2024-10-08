"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MdAdsClick } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    imageurl: "/header-product-dell.png",
    href: "/laptop-hire/dell-laptop-rental",
    title: "Dell Laptops",
  },
  {
    imageurl: "/header-product-hp.png",
    href: "/laptop-hire/hp-laptop-rental",
    title: "HP Laptops",
  },
  {
    imageurl: "/header-product-gaming-laptop.png",
    href: "/laptop-hire/gaming-laptop-rental",
    title: "Gaming Laptops",
  },
  {
    imageurl: "/header-product-lenovo-laptop.png",
    href: "/laptop-hire/lenovo-laptop-rental",
    title: "Lenovo Laptops",
  },
  {
    imageurl: "/header-product-macbook.png",
    href: "/laptop-hire/macbook-pro-rental",
    title: "Macbooks",
  },
  {
    imageurl: "/header-product-microsoft-surface-pro.png",
    href: "/laptop-hire/microsoft-surface-pro-rental",
    title: "Microsoft Laptops",
  },
];

const HomepageProductSlider = () => {
  return (
    <div className="w-full p-4 relative z-30">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="md:w-11/12 mx-auto"
      >
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/6 pl-0 md:pl-4 flex flex-col items-center gap-2 justify-center"
            >
              <Image
                src={image.imageurl}
                alt={image.title}
                width={150}
                height={150}
              />
              <h6 className="text-primary-red font-bold text-center">
                {image.title}
              </h6>
              <Link
                href={`${image.href}`}
                aria-label={image.title}
                className="hover:text-primary-red text-2xl transition-all"
              >
                <MdAdsClick />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomepageProductSlider;
