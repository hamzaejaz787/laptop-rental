import React from "react";
import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import Eventslist from "./_components/eventslist";
import CTA from "@/components/CTA";
import { TechCarousel } from "./_components/TechCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Event Rental",
  description:
    "Enhance events with Laptop Rental's specialised IT event rentals. Cutting-edge technology for conferences, seminars, exhibitions, and more.",
  keywords: [
    "IT Event Rentals",
    "IT Rental Solutions for Events",
    "Conference Equipment Rental",
    "Interactive Technology Rentals",
    "Hire Event Production Technology",
    "IT Hardware Rental Services",
    "Event IT Support Services",
    "IT Rental Solutions for Conventions",
  ],
  alternates: {
    canonical: "https://laptop-rental.com.au/event-rental",
  },
};

const EventPage = async () => {
  const ctaItems = {
    title:
      "Transform Your Events With The Power Of Interactive Technology Rentals!",
    text: "Contact Laptop Rental today to explore our Interactive Technology Rentals tailored for conferences, seminars, exhibitions, workshops, and more. Elevate your event experience with cutting-edge equipment and seamless support.",
    href: "/contactus",
    buttonText: "Contact us now",
  };

  return (
    <>
      <Banner
        title="IT Event Rental"
        text="Laptop Rental offers a comprehensive suite of cutting-edge IT Event Rentals tailored for events of all scales and types in Australia, New Zealand and Worldwide."
        btn="Request a Quote"
        link="/get-a-quote"
        image={{
          url: "/event-rental-banner.jpg",
          alternativeText: "IT Event Rental",
        }}
      />
      <ImageInfo
        reverse={true}
        image={{
          url: "/Empower Your Business with IT Rental Solutions for Events.jpg",
          alternativeText:
            "Empower Your Business with IT Rental Solutions for Events",
        }}
        title="Empower Your Business with IT Rental Solutions for Events"
        text="Laptop Rental specialises in IT event rentals beyond just laptops. We offer a comprehensive range of high-end IT rentalsolutions for events, including servers, projectors, audiovisual systems, networking devices, and more. Our services are designed to empower events with the latest technology, enhancing productivity and leaving a lasting impression."
      />
      <div className="pt-8">
        <Eventslist />
      </div>

      <CTA ctaItems={ctaItems} />
      <TechCarousel />
    </>
  );
};

export default EventPage;
