"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

function Frame({ color }: any) {
  const items = [
    { src: "/laptop.png", text: "Laptop Rental" },
    { src: "/ipad.png", text: "Tablet Rental" },
    { src: "/iphone.png", text: "Mobile Rental" },
    { src: "/avrental.png", text: "AV Rental" },
    { src: "/screen.png", text: "Screen Rental" },
    { src: "/printer.png", text: "Printer Rental" }
  ];

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div>
      {/* For larger screens */}
      <div className="justify-between items-center h-full md:px-10 px-5 md:flex hidden">
        {items.map((item, index) => (
          <div key={index} className="flex-col justify-center items-center object-center">
            <div>
              <Image
                src={item.src}
                alt={item.text}
                loading="lazy"
                height={1000}
                width={1000}
                className="md:w-36 md:h-36 w-20 h-20"
              />
            </div>
            <div className="flex md:flex-col justify-center items-center gap-[2px] md:gap-0">
              <p className={`font-Barlow md:font-[400px] font-normal md:text-[20px] text-[12px] ${color} items-start text-center`}>
                {item.text}
              </p>
              <div className="bg-[#D61837] md:w-8 md:h-8 w-6 h-6 items-center md:mt-2">
                <Image src={"/drag_click.png"} alt="" height={40} width={40} className="h-6 w-6 md:h-8 md:w-8" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* For smaller screens */}
      <div className="md:hidden flex w-full">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="flex space-x-4">
            {items.map((item, index) => (
              <CarouselItem key={index} className="flex justify-center min-w-[50%]"> {/* Adjust min-w to show multiple items */}
                <div className="flex-col justify-center items-center object-center">
                  <div>
                    <Image
                      src={item.src}
                      alt={item.text}
                      loading="lazy"
                      height={1000}
                      width={1000}
                      className="w-20 h-20"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-[2px]">
                    <p className={`font-Barlow font-normal text-[12px] ${color} items-start text-center`}>
                      {item.text}
                    </p>
                    <div className="bg-[#D61837] w-6 h-6 items-center mt-2">
                      <Image src={"/drag_click.png"} alt="" height={40} width={40} className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-2 border-[#D61837] border-dashed rounded-full absolute left-2 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="border-2 border-[#D61837] border-dashed rounded-full absolute right-2 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
}

export default Frame;






// "use client";
// import { useRef } from "react";
// import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";
// import { useRouter } from 'next/navigation';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// const EventsCarousel = ({ title, text, color }: any) => {
//   const items = [
//     { src: "/laptop.png", text: "Laptop Rental" },
//     { src: "/ipad.png", text: "Tablet Rental" },
//     { src: "/iphone.png", text: "Mobile Rental" },
//     { src: "/avrental.png", text: "AV Rental" },
//     { src: "/screen.png", text: "Screen Rental" },
//     { src: "/printer.png", text: "Printer Rental" }
//   ];
//   const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
//   const router = useRouter();

//   const handleRequestQuote = () => {
//     router.push('/form'); // Adjust the route as needed
//   };

//   return (
//     <div className="w-[80%] m-auto mt-10 md:mt-14 lg:mt-20">
//       <div className="w-full flex flex-col justify-center items-center">
//         <h3 className="font-sans text-center mb-2 font-bold text-3xl">
//           {title}
//         </h3>
//         <p className="w-[50%] font-sans text-sm text-center mb-3">{text}</p>
//         <Carousel
//           plugins={[plugin.current]}
//           onMouseEnter={plugin.current.stop}
//           onMouseLeave={plugin.current.reset}
//           opts={{
//             align: "start",
//           }}
//           className="w-full"
//         >
//           <CarouselContent>
//             <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-0">
//             <div className="flex  justify-between items-center h-full md:px-10 px-5">
//         {items.map((item, index) => (
//           <div key={index} className="flex-col justify-center items-center object-center">
//             <div>
//               <Image
//                 src={item.src}
//                 alt={item.text}
//                 loading="lazy"
//                 height={1000}
//                 width={1000}
//                 className="md:w-36 md:h-36 w-7 h-7"
//               />
//             </div>
//             <div className="flex md:flex-col justify-center items-center gap-[2px] md:gap-0">
//               <p className={`font-Barlow md:font-[400px] font-normal md:text-[20px] text-[4px] ${color} items-start text-center`}>
//                 {item.text}
//               </p>
//               <div className="bg-[#D61837] md:w-8 md:h-8 w-2 h-2 items-center md:mt-2">
//                 <Image src={"/drag_click.png"} alt="" height={40} width={40} className="h-2 w-3 md:h-8 md:w-8" />
//               </div>
//             </div>
//           </div>
//         ))}
      
//      </div>
//   );
//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious className="border-2 border-[#D61837] border-dashed rounded-full" />
//           <CarouselNext className="border-2 border-[#D61837] border-dashed rounded-full" />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default EventsCarousel;
