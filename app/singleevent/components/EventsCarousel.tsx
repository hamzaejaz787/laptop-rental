"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
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
var products = [
  {
    index: 1,
    image: ipad,
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
    image: ipad,
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
    image: ipad,
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
    image: ipad,
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
    image: ipad,
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
  return (
    <div className="w-[80%] m-auto mt-10 md:mt-14 lg:mt-20">
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="font-sans text-center mb-2 font-bold text-3xl">
          {title}
        </h3>
        <p className="w-[50%] font-sans text-sm text-center mb-3">{text}</p>
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
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <Image
                        src={product.image}
                        alt=""
                        width={300}
                        height={300}
                        // className="w-20 h-20"
                      />
                      <h3 className="w-full text-start text-xl font-bold">
                        {product.name}
                      </h3>
                      <p className="text-sm font-sans mb-4">
                        {product.details}
                      </p>
                      <div className="flex flex-wrap w-full justify-center items-center gap-5">
                        {product.icons.map((icon) => (
                          <div
                            key={icon.index}
                            className="flex flex-col justify-center items-center border border-gray-200 rounded-sm px-8 py-2"
                          >
                            <Image
                              src={icon.logo}
                              alt="iconspec"
                              width={20}
                              height={20}
                              className="mb-4"
                            />
                            <p className="text-sm text-center">{icon.desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="w-full flex justify-center items-center mt-8">
                        <Button
                          //   style={{ border: "5px 0 0 5px" }}
                          className="py-6 px-4 w-[80%] text-lg font-sans rounded-none bg-[#D61837] text-white"
                        >
                          Request Quote
                        </Button>
                        <Button
                          //   style={{ border: "5px 0 0 5px" }}

                          className="py-6 rounded-none px-4 flex w-[20%] flex-grow"
                        >
                          +
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-2 border-[#D61837] border-dashed rounded-full" />
          <CarouselNext className="border-2 border-[#D61837] border-dashed rounded-full" />
        </Carousel>
      </div>
    </div>
  );
};

export default EventsCarousel;
