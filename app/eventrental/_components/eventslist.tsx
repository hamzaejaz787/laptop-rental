import React from "react";
import CardsSlider from "@/components/CardsSlider";
import EventCard from "@/components/EventCard";
import { EventCardProps } from "@/lib/definitions";

const Eventslist = () => {
  const eventCardsData: EventCardProps[] = [
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Conference Equipment Rental",
      href: "/corporate-event",
      description:
        "Laptop Rental provides conference equipment rental. From powerful servers to immersive audiovisual setups, we ensure your events are technologically advanced, fostering engagement and knowledge sharing.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Short-Term Projects",
      href: "/corporate-event",
      description:
        "For short-term projects demanding flexibility and efficiency, Laptop Rental provides a diverse range of IT equipment. Tailored solutions for the duration of your project ensure seamless operations, empowering your team to achieve optimal results.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Surveys & Market Research",
      href: "/corporate-event",
      description:
        "Drive precision in surveys and market research with Laptop Rental's technology arsenal. Our devices and networking solutions facilitate real-time data collection, ensuring accuracy and efficiency in gathering valuable insights.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Exhibitions",
      href: "/corporate-event",
      description:
        "Make a lasting impression at exhibitions with Laptop Rental's state-of-the-art equipment. Enhance your booth with high-quality displays, projectors, and interactive technology, captivating your audience and setting your exhibition apart.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Workshops",
      href: "/corporate-event",
      description:
        "Empower your workshops with the latest technology from Laptop Rental. From collaborative tools to audiovisual aids, we provide the essential event IT support Services for interactive and impactful workshop experiences.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Annual Meetings",
      href: "/corporate-event",
      description:
        "Ensure the success of your annual meetings with Laptop Rental's comprehensive IT solutions. Seamless communication tools, reliable servers, and cutting-edge presentations contribute to the efficiency and success of your yearly gatherings.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Product Launches",
      href: "/corporate-event",
      description:
        "Unveil your products in style with Laptop Rental's innovative IT Event Rentals. Our technology adds flair to product launches, offering interactive displays, audiovisual effects, and networking solutions to make your launch unforgettable.",
      ctatext: "Explore Event",
    },
  ];
  return (
    <div className="p-8 space-y-3 container">
      <h2 className="font-sans font-bold text-3xl lg:text-4xl max-w-3xl mx-auto text-center">
        Laptop Rental: Transforming Events with Innovative IT Solutions
      </h2>
      <p className="text-sm xl:text-base max-w-4xl mx-auto text-center">
        We take pride in transforming events through our innovative IT
        solutions. Our commitment goes beyond merely providing technology; we
        aim to revolutionise how events unfold.
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
