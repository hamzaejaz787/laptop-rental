"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdAdsClick } from "react-icons/md";

const events = [
  { size: "md:h-[180px] md:w-[120px] h-[50px] w-[50px]", textSize: "md:text-[9px] text-[4px]", date: null, link: "/singleevent" },
  { size: "md:h-[250px] md:w-[120px] h-[70px] w-[70px]", textSize: "md:text-[9px] text-[4px]", date: null, link: "/singleevent" },
  { size: "md:h-[300px] md:w-[120px] h-[80px] w-[80px]", textSize: "md:text-[14px] text-[5px]", date: "15th\nDec", link: "/singleevent" },
  { size: "md:h-[250px] md:w-[120px] h-[70px] w-[70px]", textSize: "md:text-[9px] text-[4px]", date: null, link: "/singleevent" },
  { size: "md:h-[180px] md:w-[120px] h-[50px] w-[50px]", textSize: "md:text-[9px] text-[4px]", date: null, link: "/singleevent" }
];

function Hp_events() {
  return (
    <div className="md:pl-20 md:pr-10 pl-5 pr-5 pb-2 md:pb-0 flex-col items-center justify-center">
      <p className="md:font-[800] font-bold line-clamp-2 font-Barlow md:text-[34px] text-[14px] text-center md:pt-16 pt-5 md:pb-5">
        We don&apos;t need to take into account age and past failures
      </p>
      <p className="line-clamp-2 text-gray md:text-[15px] text-[8px] font-Poppins font-#595959 text-center md:pb-5 pb-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quam architecto, hic beatae consequuntur
      </p>
      <div className="md:gap-8 gap-4 items-center justify-center px-4 md:flex hidden">
        {events.map((event, index) => (
          <Link href={event.link} key={index} className={`border rounded-full overflow-hidden relative ${event.size}`}>
            <div className="absolute inset-0 bg-black opacity-50" />
            <Image
              src="/img8.png"
              alt="Corporate Event"
              layout="fill"
              objectFit="cover"
              className="object-cover object-center brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <p className={`font-bold font-Poppins uppercase ${event.textSize} ${event.date ? '' : '-rotate-90'}`}>
                  Corporate Event
                </p>
                {event.date && (
                  <div className="flex flex-col items-center">
                    <p className="font-Exo md:font-bold uppercase md:text-[20px] text-[5px] md:pt-4 whitespace-pre-line">{event.date}</p>
                    <MdAdsClick className="flex justify-center ml-[13px] w-[10px] h-[10px] md:w-[25px] md:h-[25px]" size={25} />
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hp_events;
