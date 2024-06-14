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

const images = [
  {
    imageurl: "/ipad.png",
    href: "/ipadrental",
  },
  {
    imageurl: "/iphone.png",
    href: "/iphonerental",
  },
  { imageurl: "/laptop.png", href: "/laptoprental" },
  { imageurl: "/printer.png", href: "/printerrental" },
  { imageurl: "/screen.png", href: "/screenrental" },
  { imageurl: "/avrental.png", href: "/avrental" },
];

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
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 lg:basis-1/6 pl-0 md:pl-4 flex flex-col items-center justify-center"
            >
              <Image src={image.imageurl} alt="" width={200} height={200} />
              <Link
                href={`/techrental${image.href}`}
                className="hover:text-white text-primary-red text-2xl transition-all"
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
