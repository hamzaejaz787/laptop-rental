import React from "react";
import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import eventrental1 from "@/public/eventrental1.jpg";
import Eventslist from "./components/eventslist";
import CTA from "@/components/CTA";
import { TechCarousel } from "./components/TechCarousel";
const EventPage = () => {
  return (
    <div>
      <Banner
        title="EVENT RENTALS"
        btn="Get a Quote"
        text="We at Laptop Rentals understand whether you&lsquo;re hosting whether you&lsquo;re hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <ImageInfo
        title="Empower Your Business with Flexible and Reliable IT Equipment Rentals"
        image={eventrental1}
        text="We at Laptop Rentals understand whether you&lsquo;re hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you.understand whether you.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you."
      />
      <Eventslist />
      <CTA
        title="EVENT RENTALS"
        text="We at Laptop Rentals understand whether you&lsquo;re hosting a conference, trade show, or business event, having access"
        btn="Get a Quote"
      />
      <TechCarousel />
    </div>
  );
};

export default EventPage;
