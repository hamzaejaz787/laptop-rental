"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdAdsClick } from "react-icons/md";

const eventsData = [
  {
    title: "Corporate Event",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img1.png",
  },
  {
    title: "Business Event",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img2.png",
  },
  {
    title: "Work Event",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img3.png",
  },
  {
    title: "Rental Event",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img4.png",
  },
  {
    title: "Laptop Event",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img5.png",
  },
];

function Hp_events() {
  return (
    <section className="container space-y-4 p-8 text-center">
      <h2 className="text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
        We don&apos;t need to take into account age and past failures{" "}
      </h2>
      <p className="text-gray-500 text-center max-w-lg mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quam
        architecto, hic beatae consequuntur{" "}
      </p>

      <div className="flex items-center gap-8 justify-center h-full flex-col lg:flex-row">
        {eventsData.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-full overflow-hidden bg-cover w-full ${
              index === 2
                ? "lg:h-[500px]"
                : index === 1 || index === 3
                ? "lg:h-[400px]"
                : "lg:h-[250px]"
            } hover:h-[500px] transition-all duration-300 ease-in group`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="relative z-20 h-full w-full text-center bg-black/50 p-4 flex flex-col justify-center items-center gap-1 md:gap-4">
              <h6 className="text-xl uppercase font-semibold text-wrap whitespace-pre-wrap text-white">
                {item.title}
              </h6>

              <strong
                className={`text-white text-3xl text-wrap whitespace-pre-wrap ${
                  index === 2 ? "opacity-100" : "lg:opacity-0"
                } group-hover:opacity-100 transition-all duration-300 ease-in`}
              >
                {item.eventdate}
              </strong>

              <Link
                href={item.href}
                className={`cursor-pointer text-white self-center ${
                  index === 2 ? "opacity-100" : "lg:opacity-0"
                } group-hover:opacity-100 transition-all duration-300 ease-in hover:text-primary-red focus-within:text-primary-red`}
              >
                <MdAdsClick size={30} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hp_events;
