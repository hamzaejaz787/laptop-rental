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
    href: "/laptoprental/dell-laptop-rental",
    title: "Dell Laptops",
  },
  {
    imageurl: "/header-product-HP.png",
    href: "/laptoprental/hp-laptop-rental",
    title: "HP Laptops",
  },
  {
    imageurl: "/header-product-ipad.png",
    href: "/techrental/ipad-rental",
    title: "Ipads",
  },
  {
    imageurl: "/header-product-iphone.png",
    href: "/techrental/iphone-rental",
    title: "Iphones",
  },
  {
    imageurl: "/header-product-macbook.png",
    href: "/laptoprental/macbook-pro-rental",
    title: "Macbooks",
  },
  {
    imageurl: "/header-product-phone.png",
    href: "/techrental/mobile-phone-rental",
    title: "Mobile Phones",
  },
];

const HomepageProductSlider = () => {
  return (
    <div className="md:backdrop-blur-3xl md:bg-black/20 w-full p-4 md:-mt-20">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="md:w-4/5 mx-auto"
      >
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/6 pl-0 md:pl-4 flex flex-col items-center gap-2 justify-center"
            >
              <Image src={image.imageurl} alt="" width={150} height={150} />
              <h6 className="md:text-white font-bold">{image.title}</h6>
              <Link
                href={`${image.href}`}
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
