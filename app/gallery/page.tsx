"use client";
import Event_image from "@/components/event_image";
import MasonryGrid from "@/components/masonry";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Gallery() {
  const [activeButton, setActiveButton] = useState(0);
  const router = useRouter();
  const handleButtonClick = (index: any) => {
    setActiveButton(index);
  };

  const ContentImages = [
    <Event_image key="event_image" />,
    "lorem",
    "lorem",
    "lorem",
  ];

  const handleRequestQuote = () => {
    // Navigate to the desired page when "Request Quote" button is clicked
    router.push("/form"); // Adjust the route as needed
  };

  return (
    <div className="pb-10">
      <div className="relative">
        <Image
          src="/gallery_bg.png"
          alt=""
          height={1000}
          width={1000}
          className="w-full object-cover md:pt-16 md:h-[400px] "
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-[800] text-white md:text-[54px] text-[20px] pt-14 md:pt-0 font-Barlow ">
            GALLERY
          </p>
          <div className="flex text-white items-center font-Poppins md:text-[16px] text-[9px] pt-0 line-clamp-2 text-center md:pr-72 md:pl-72 pr-10 pl-10">
            We at Laptop Rentals understand whether you&apos;re hosting whether
            you&apos;re hosting
          </div>
        </div>
      </div>
      <div className=" md:pl-10 md:pr-10 pl-5 pr-5">
        <p className="font-[800]  font-Barlow md:text-[34px] text-[20px] text-center md:pt-16 pt-5">
          OUR GALLERY
        </p>
        <p className="line-clamp-2 text-gray md:text-[15px] text-[9px] font-Poppins font-#595959 text-center md:pb-5 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
        </p>
        <MasonryGrid />
      </div>
      <div className=" pl-10 pr-10">
        <p className="font-[800]  font-Barlow md:text-[34px] text-[20px] text-center md:pt-16 pt-5">
          PAST EVENTS WE RENT
        </p>
        <p className="line-clamp-2 text-gray md:text-[15px] text-[9px] font-Poppins font-#595959 text-center md:pb-5 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
        </p>
      </div>
      <div className="grid md:grid-cols-[30%,70%] grid-rows justify-center pl-10 pr-10">
        <div className="md:pr-40 items-center flex-col">
          <div className="relative flex items-center justify-center md:pl-0 pt-3">
            <p className="inline-block relative ">
              <span className="relative md:z-10 font-Barlow md:text-[20px] font-bold">
                Past Events
              </span>
              <span className="absolute bottom-0 left-0 w-1/2 h-px bg-red-500"></span>
              <span className="absolute bottom-0 right-0 w-1/2 h-px bg-black"></span>
            </p>
          </div>
          <div className="flex justify-center gap-0">
            <ScrollArea className="md:h-64 w-48 h-52   rounded-md border-none flex justify-center">
              <div className="flex-col justify-center">
                {[
                  "Corporate Event",
                  "Business Event",
                  "Business Event",
                  "Business Event",
                  "Exam Event",
                  "Training & Seminar",
                  "Festival Event",
                ].map((label, index) => (
                  <Button
                    key={index}
                    variant="link"
                    className={`${
                      activeButton === index ? "text-black" : "text-gray-500"
                    } flex justify-center`}
                    onClick={() => handleButtonClick(index)}
                  >
                    <SiTicktick
                      className="md:mr-2 mr-3"
                      color="D61837"
                      size={10}
                    />{" "}
                    {label}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className=" flex pl-5 pt-5 justify-center">
            <Button
              className="font-Poppins border md:w-80 w-60 border-none bg-[#D61837]"
              onClick={() => handleRequestQuote()}
            >
              Rent Event
            </Button>
          </div>
        </div>
        <div className="flex pt-5">{ContentImages[activeButton]}</div>
      </div>
    </div>
  );
}
export default Gallery;
