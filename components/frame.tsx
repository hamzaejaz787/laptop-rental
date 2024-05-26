import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

function Frame({ color }:any) {
  const items = [
    { src: "/laptop.png", text: "Laptop Rental" },
    { src: "/ipad.png", text: "Tablet Rental" },
    { src: "/iphone.png", text: "Mobile Rental" },
    { src: "/avrental.png", text: "AV Rental" },
    { src: "/screen.png", text: "Screen Rental" },
    { src: "/printer.png", text: "Printer Rental" }
  ];

  return (
      <div className="flex  justify-between items-center h-full">
        {items.map((item, index) => (
          <div key={index} className="flex-col justify-center items-center object-center">
            <div>
              <Image
                src={item.src}
                alt={item.text}
                loading="lazy"
                height={1000}
                width={1000}
                className="md:w-36 md:h-36 w-7 h-7"
              />
            </div>
            <div className="flex md:flex-col justify-center items-center gap-[2px] md:gap-0">
              <p className={`font-Barlow md:font-[400px] font-normal md:text-[20px] text-[4px] ${color} items-start text-center`}>
                {item.text}
              </p>
              <div className="bg-[#D61837] md:w-8 md:h-8 w-2 h-2 items-center md:mt-2">
                <Image src={"/drag_click.png"} alt="" height={40} width={40} className="h-2 w-3 md:h-8 md:w-8" />
              </div>
            </div>
          </div>
        ))}
      
     </div>
  );
}

export default Frame;
