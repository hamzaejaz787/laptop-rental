"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ipad from "@/public/ipad.png";
import ram from "@/public/ram.png";
import storage from "@/public/storage.png";
import display from "@/public/display.png";
import { Button } from "@/components/ui/button";
import Laptop_card from "@/components/Laptop_card";
var products = [
  {
    index: 1,
    image: "/ipad.png",
    name: "iPad Wifi 10.5 Cellular",
    details: "Upgrade your technology experience with the advanced features.",
    icons: [
      {
        index: 1,
        logo: ram,
        desc: "Ram: 16GB",
      },
      {
        index: 2,
        logo: storage,
        desc: "Storage: 512GB",
      },
      {
        index: 3,
        logo: display,
        desc: "Display: 10.5",
      },
    ],
  },
  {
    index: 2,
    image: "/ipad.png",
    name: "iPad Wifi 10.5 Cellular 2",
    details: "Upgrade your technology experience with the advanced features.",
    icons: [
      {
        index: 1,
        logo: ram,
        desc: "Ram: 16GB",
      },
      {
        index: 2,
        logo: storage,
        desc: "Storage: 512GB",
      },
      {
        index: 3,
        logo: display,
        desc: "Display: 10.5",
      },
    ],
  },
  {
    index: 3,
    image: "/ipad.png",
    name: "iPad Wifi 10.5 Cellular 3",
    details: "Upgrade your technology experience with the advanced features.",
    icons: [
      {
        index: 1,
        logo: ram,
        desc: "Ram: 16GB",
      },
      {
        index: 2,
        logo: storage,
        desc: "Storage: 512GB",
      },
      {
        index: 3,
        logo: display,
        desc: "Display: 10.5",
      },
    ],
  },
  {
    index: 4,
    image: "/ipad.png",
    name: "iPad Wifi 10.5 Cellular 4",
    details: "Upgrade your technology experience with the advanced features.",
    icons: [
      {
        index: 1,
        logo: ram,
        desc: "Ram: 16GB",
      },
      {
        index: 2,
        logo: storage,
        desc: "Storage: 512GB",
      },
      {
        index: 3,
        logo: display,
        desc: "Display: 10.5",
      },
    ],
  },
  {
    index: 5,
    image: "/ipad.png",
    name: "iPad Wifi 10.5 Cellular 5",
    details: "Upgrade your technology experience with the advanced features.",
    icons: [
      {
        index: 1,
        logo: ram,
        desc: "Ram: 16GB",
      },
      {
        index: 2,
        logo: storage,
        desc: "Storage: 512GB",
      },
      {
        index: 3,
        logo: display,
        desc: "Display: 10.5",
      },
    ],
  },
];
const EventsCarousel = ({ title, text }: any) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  // Assuming you have defined these variables and functions elsewhere
  const clickedCards: boolean[] = [];
  const handleCardClick = (index: number) => {};
  const router = useRouter();
  const handleRequestQuote = () => {
    // Navigate to the desired page when "Request Quote" button is clicked
    router.push("/form"); // Adjust the route as needed
  };

  return (
    <div className="w-[80%] m-auto mt-10 md:mt-14 lg:mt-20">
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="font-bold font-Barlow text-xl text-center md:pt-16 pt-5">
          {title}{" "}
        </h3>
        <p className="text-gray-400 font-Poppins text-center md:pb-5 pb-2">
          {text}
        </p>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.index}
                className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-0"
              >
                <div className="p-1">
                  <Card className="p-8">
                    <Laptop_card
                      onRequestQuote={handleRequestQuote}
                      key={product.index} // Assuming product index is unique
                      clicked={clickedCards[product.index]}
                      onClick={() => handleCardClick(product.index)}
                      src={product.image}
                      text={product.name}
                      description={product.details}
                      ram="16GB" // Example ram value
                      storage="512GB" // Example storage value
                      display="10.5" // Example display value
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="hidden md:block border-2 border-[#D61837] border-dashed rounded-full"
            color="black"
          />
          <CarouselNext
            className="hidden md:block border-2 border-[#D61837] border-dashed rounded-full"
            color="black"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default EventsCarousel;
