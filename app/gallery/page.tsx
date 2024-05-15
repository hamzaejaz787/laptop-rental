"use client"
import Event_image from "@/components/event_image";
import MasonryGrid from '@/components/masonry';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import Image from "next/image";

function Gallery() {
    const [activeButton, setActiveButton] = useState(0);
    const handleButtonClick = (index: any) => {
        setActiveButton(index);
    };

    const ContentImages = [
        <Event_image key="event_image" />,
        "lorem",
        "lorem",
        "lorem"
    ];
    
    return (
        <div className="pb-10">
            <div className="relative">

                <Image src="/gallery_bg.png" alt="" height={1000} width={1000} className="w-full object-cover pt-16 md:h-[400px] lg:h-[500px]" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="font-[800] text-white text-[40px] font-Barlow md:text-3xl lg:text-5xl">GALLERY</p>
                    <div className="flex text-white items-center font-Poppins text-[14px] line-clamp-2 text-center pr-72 pl-72 ">
                        We at Laptop Rentals understand whether you&apos;re hosting whether you&apos;re hosting We at Laptop Rentals understand at Laptop Rentals understand
                    </div>
                </div>
            </div>
            <div className=" pl-10 pr-10">
                <p className="font-[800] font-Barlow text-[34px] text-center pt-16">OUR GALLERY</p>
                <p className="line-clamp-2 text-gray text-[15px] font-Poppins font-#595959 text-center pb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
                </p>
                <MasonryGrid />
            </div>
            <div className=" pl-10 pr-10">
                <p className="font-[800] font-Barlow text-[34px] text-center pt-16">PAST EVENTS WE RENT</p>
                <p className="line-clamp-2 text-gray text-[15px] font-Poppins font-#595959 text-center pb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores adipisci consequatur aliquam. Ipsa, a!
                </p>
            </div>
            <div className="grid grid-cols-[30%,70%] pl-10 pr-10">
                <div className="pr-40">
                    <div className="relative">
                        <p className="inline-block relative">
                            <span className="relative z-10 font-Barlow text-[20px] font-bold">Past Events</span>
                            <span className="absolute bottom-0 left-0 w-1/2 h-px bg-red-500"></span>
                            <span className="absolute bottom-0 right-0 w-1/2 h-px bg-black"></span>
                        </p>
                    </div>
                    <ScrollArea className="h-64 w-48 rounded-md border-none">
                        <div className="">
                            {["Corporate Event", "Business Event", "Business Event", "Business Event", "Exam Event", "Training & Seminar", "Festival Event"].map((label, index) => (
                                <Button
                                    key={index}
                                    variant="link"
                                    className={`${activeButton === index ? "text-black" : "text-gray-500"
                                        } flex`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    <SiTicktick className="mr-2" color="D61837" size={10} /> {label}
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className=" flex pl-5 pt-5 justify-center">
                        <Button className='font-Poppins border w-80 border-none bg-[#D61837]'>Rent Event</Button>
                    </div>

                </div>
                <div className="pb-10">
                    {ContentImages[activeButton]}
                </div>
            </div>

        </div>
    )
}
export default Gallery