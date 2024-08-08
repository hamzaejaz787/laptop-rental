import React from "react";
import CardsSlider from "@/components/CardsSlider";
import EventCard from "@/components/EventCard";
import { EventCardProps } from "@/lib/definitions";

export type EventListTypes = {
  relatedEventsTitle?: string;
  relatedEventsText?: string;
};

const Eventslist: React.FC<EventListTypes> = ({
  relatedEventsText,
  relatedEventsTitle,
}) => {
  const eventCardsData: EventCardProps[] = [
    {
      imagesrc: "/Exhibition&Workshop.png",
      alternativeText: "Exhibitions and Workshops",
      title: "Exhibitions and Workshops",
      href: "/corporate-event",
      description:
        "Optimise your corporate events with our rental services. Ideal for business exhibitions and workshops. Hire laptops for corporate events.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/Product Launches.png",
      alternativeText: "Product Launches",
      title: "Product Launches",
      href: "/corporate-event",
      description:
        "Enhance your product launches effortlessly with our top-notch rental services. Rent laptops for business success, delivering seamless presentations and connectivity.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/Trade Shows.png",
      alternativeText: "Trade Shows",
      title: "Trade Shows",
      href: "/corporate-event",
      description:
        "Maximise your trade show impact with our business laptop rental solutions. Elevate your events with our reliable and cost-effective services.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/Business Conferences & Seminars.png",
      alternativeText: "Corporate Event",
      title: "Corporate Event",
      href: "/corporate-event",
      description:
        "Transform your corporate events with premium technology from Laptop Rental. Serving Australia, New Zealand, and worldwide, we provide top-tier IT rental solutions for seamless, impactful experiences.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/Festivals.png",
      alternativeText: "Festivals",
      title: "Festivals",
      href: "/corporate-event",
      description:
        "Optimise your festival experience with our short-term laptop rental for events. Seamlessly enhance connectivity and productivity Down Under!",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/Gaming Events.png",
      alternativeText: "Gaming Events",
      title: "Gaming Events",
      href: "/corporate-event",
      description:
        "Optimise your gaming events with hassle-free laptop rental for events. Seamless tech solutions for epic gaming experiences.",
      ctatext: "Explore Event",
    },
  ];
  return (
    <div className="p-8 pt-0 space-y-3 container">
      <h2 className="font-sans font-bold text-3xl lg:text-4xl max-w-3xl mx-auto text-center">
        {relatedEventsTitle ||
          "Laptop Rental: Transforming Events with Innovative IT Solutions"}
      </h2>
      <p className="text-sm xl:text-base md:px-10 mx-auto text-center text-gray-700">
        {relatedEventsText ||
          "We take pride in transforming events through our innovative IT solutions. Our commitment goes beyond merely providing technology; we aim to revolutionise how events unfold."}
      </p>
      <CardsSlider>
        {eventCardsData.map((event, index) => (
          <EventCard key={index} data={event} />
        ))}
      </CardsSlider>
    </div>
  );
};

export default Eventslist;
