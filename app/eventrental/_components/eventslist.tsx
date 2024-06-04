import EventCard from "@/components/EventCard";
import Hp_imgframe from "@/components/hp_imgframe";
import { EventCardProps } from "@/lib/definitions";
import React from "react";

const Eventslist = () => {
  const eventCardsData: EventCardProps[] = [
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Coporate Event",
      href: "/singleevent",
      description:
        "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Business Event",
      href: "/singleevent",
      description:
        "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Work Event",
      href: "/singleevent",
      description:
        "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Rental Event",
      href: "/singleevent",
      description:
        "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Laptop Event",
      href: "/singleevent",
      description:
        "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
      ctatext: "Explore Event",
    },
  ];
  return (
    <div className="p-8 space-y-3 container">
      <h2 className="text-3xl font-bold text-center">
        We don&lsquo;t need to take into account
      </h2>
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
        dictum lectus at ultricies. elit. In porttitor
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:pt-5 lg:grid-cols-4 items-center">
        {eventCardsData.map((event, index) => (
          <EventCard key={index} data={event} />
        ))}
      </div>
    </div>
  );
};

export default Eventslist;
