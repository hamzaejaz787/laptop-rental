import React from "react";
import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import CTA from "@/components/CTA";
import { TechCarousel } from "./_components/TechCarousel";
import { Metadata } from "next";
import { EventCardProps } from "@/lib/definitions";
import EventCard from "@/components/EventCard";
import ServicesTimeline from "@/components/ServicesTimeline";

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
  const eventCardsData: EventCardProps[] = [
    // {
    //   imagesrc: "/Business Conferences & Seminars.png",
    //   alternativeText: "Business Conferences & Seminars",
    //   title: "Business Conferences & Seminars",
    //   href: "/corporate-event",
    //   description:
    //     "Maximise your business success with hassle-free laptop hire for events like conferences and seminars. Enhance productivity seamlessly.",
    //   ctatext: "Explore Event",
    // },
    {
      imagesrc: "/Exhibitions and Workshops.png",
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
  const ctaItems = {
    title:
      "Transform Your Events With The Power Of Interactive Technology Rentals!",
    text: "Contact Laptop Rental today to explore our Interactive Technology Rentals tailored for conferences, seminars, exhibitions, workshops, and more. Elevate your event experience with cutting-edge equipment and seamless support.",
    href: "/contact-us",
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
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 container">
        {eventCardsData.map((event, index) => (
          <EventCard
            key={index}
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
