"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IoMdQuote } from "react-icons/io";
import { EmblaCarouselType } from "embla-carousel";

const reviewData = [
  "Rented laptops for a conference, and the experience was great. Devices were in excellent condition, and support was responsive. Highly recommend.",
  "Used Laptop Rental for a product launch. Top-notch laptops, prompt delivery, and excellent setup. Will use again.",
  "Needed laptops for a project; the process was smooth. High-quality, reliable devices and excellent customer service. Great overall.",
  "Rented multiple laptops for a festival. All performed flawlessly. Professional team and flexible rental periods. Highly recommend.",
];

const ReviewCarousel = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const embla = (carouselRef.current as any).embla;
      if (embla) {
        setApi(embla);
      }
    }
  }, []);

  return (
    <section className="container p-8 md:py-10 md:px-20 space-y-4 text-center">
      <h2 className="text-4xl font-bold">Top Client Reviews</h2>
      <IoMdQuote size={30} className="text-primary-red mx-auto" />

      <Carousel
        ref={carouselRef}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-lg mx-auto"
      >
        <CarouselContent>
          {reviewData.map((review, index) => (
            <CarouselItem key={index} className="">
              <p className="italic text-center">{review}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselPagination api={api} />
    </section>
  );
};

interface CarouselPaginationProps {
  api: EmblaCarouselType | null;
}

const CarouselPagination: React.FC<CarouselPaginationProps> = ({ api }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  if (!api) return null;

  return (
    <div className="flex justify-center gap-2 mt-4">
      {reviewData.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === selectedIndex ? "bg-primary-red" : "bg-gray-300"
          }`}
          onClick={() => api.scrollTo(index)}
        />
      ))}
    </div>
  );
};

export default ReviewCarousel;
