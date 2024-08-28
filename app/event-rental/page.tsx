import React from "react";
import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import CTA from "@/components/CTA";
import { Metadata } from "next";
import { EventCardProps } from "@/lib/definitions";
import EventCard from "@/components/EventCard";
import ServicesTimeline from "@/components/ServicesTimeline";
import { getEvents } from "@/data/loaders";
import Breadcrumbs from "@/components/Breadcrumbs";

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
    href: "/contact-us",
    buttonText: "Contact us now",
  };

  const events = await getEvents();

  return (
    <>
      <Banner
        title="IT Event Rental"
        text="Laptop Rental offers a comprehensive suite of cutting-edge IT Event Rentals tailored for events of all scales and types in Australia, New Zealand and Worldwide."
        btn="Request a Quote"
        link="/get-a-quote"
        image={{
          url: "/eventrental-header.png",
          alternativeText: "IT Event Rental",
        }}
      />
      <Breadcrumbs className="sr-only" currentPage="Event Rental" />

      <ImageInfo
        reverse={true}
        image={{
          url: "/Event-Intro.jpg",
          alternativeText:
            "Empower Your Business with IT Rental Solutions for Events",
        }}
        title="Empower Your Business with IT Rental Solutions for Events"
        text="Laptop Rental specialises in IT event rentals beyond just laptops. We offer a comprehensive range of high-end IT rentalsolutions for events, including servers, projectors, audiovisual systems, networking devices, and more. Our services are designed to empower events with the latest technology, enhancing productivity and leaving a lasting impression."
      />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 container">
        {events.data.map((event: EventCardProps) => (
          <EventCard
            key={event.id}
            data={event}
            className="max-w-sm justify-self-center"
          />
        ))}
      </div>

      <CTA ctaItems={ctaItems} />
      <ServicesTimeline description="Laptop Rental Australia steps in as your trusted laptop rental partner. We empower your event with cutting-edge technology and unparalleled service, ensuring every moment is an opportunity to impress. Supported by dedicated teams, enjoy 24/7 technical and customer support for seamless corporate events. Contact our experts and rent Dell laptops for corporate events in Australia, New Zealand and Worldwide." />
    </>
  );
};

export default EventPage;
