"use client";
import React from "react";
import Image from "next/image";

const eventsData = [
  {
    title: "Check-in & Registration",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/CHECK-IN_&_REGISTRATION_V.png",
    mobileImage: "/CHECK-IN_&_REGISTRATION_H.png",
  },
  {
    title: "Event & Festival Wi-Fi",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/EVENT&FESTIVALWI-FI_V.png",
    mobileImage: "/EVENT&FESTIVALWI-FI_H.png",
  },
  {
    title: "Event Apps & Software",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/EVENTAPPS&SOFTWARE_V.png",
    mobileImage: "/EVENTAPPS&SOFTWARE_H.png",
  },
  {
    title: "Gaming Tournaments",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/GLOBALFULFILMENT_V.png",
    mobileImage: "/GLOBALFULFILMENT_H.png",
  },
  {
    title: "Educational Sector",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/CUSTOMER_SUPPORT-V.png",
    mobileImage: "/CUSTOMER_SUPPORT_H.png",
  },
];

function EventDateCards() {
  return (
    <section className="container space-y-4 p-8 text-center">
      <h2 className="text-3xl lg:text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
        Hello to Event Organisers and Attendees in Australia
      </h2>
      <p className="text-gray-500 text-center max-w-3xl mx-auto text-sm lg:text-base">
        Effortless check-in & registration, seamless event Wi-Fi, cutting-edge
        event apps, nationwide fulfillment, and dedicated customer support - we
        help Australian events with unparalleled services for organisers and
        attendees alike.{" "}
      </p>

      <div className="flex items-center gap-8 justify-center h-full w-full flex-col md:flex-row">
        {eventsData.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-full w-full md:max-w-[200px] overflow-hidden ${
              index === 2
                ? "h-[175px] md:h-[550px] 2xl:h-[650px]"
                : index === 1 || index === 3
                ? "h-[175px] md:h-[450px] 2xl:h-[550px]"
                : "h-[175px] md:h-[350px] 2xl:h-[400px]"
            } md:hover:h-[550px] 2xl:hover:h-[650px] transition-all ease-in duration-300`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={item.mobileImage} />
              <source media="(min-width: 769px)" srcSet={item.image} />
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={650}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </picture>
            <div className="p-4 w-full h-full absolute top-0 left-0 group flex  justify-center items-center text-center gap-4">
              <h6
                className={`text-lg lg:text-xl xl:text-2xl font-Exo ${
                  index !== 2
                    ? "md:text-nowrap md:group-hover:text-wrap md:-rotate-90 md:group-hover:rotate-0 transition-all duration-300 ease-in"
                    : ""
                } uppercase font-semibold text-white`}
              >
                {item.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventDateCards;
