import React from "react";
import Hp_icons from "@/components/hp_icons";
import Hp_events from "@/components/hp_events";
import HomepageSlider from "./_components/HomepageSlider";
import HomeSliderText from "./_components/HomeSliderText";
import CtaButton from "@/components/CtaButton";
import CurvedLayoutImages from "./_components/CurvedLayoutImages";
import CardsCarousel from "@/components/CardsCarousel";
import Cta from "./_components/Cta";
import { EventCardProps } from "@/lib/definitions";
import ServicesTimeline from "@/components/ServicesTimeline";

export default function Home() {
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
    <>
      <HomepageSlider>
        <HomeSliderText />
      </HomepageSlider>

      <section className="container space-y-4 py-8 text-center">
        <h2 className="text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
          Looking For Reliable IT Equipment Rental Services For Your Event
        </h2>
        <p className="text-gray-500 text-center max-w-lg mx-auto">
          We at Laptop Rentals understand whether you&apos;re hosting a
          conference, a conference you&apos;re hosting a conference.
        </p>

        <CtaButton href="/form" text="Get a quote" />
        <CurvedLayoutImages />
      </section>
      <section className="container space-y-8 p-8 text-center">
        <h2 className="text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
          Our Event Services
        </h2>

        <Hp_icons />
      </section>

      <section className="container p-8 flex gap-8 lg:gap-20 items-center flex-col lg:flex-row md:overflow-x-hidden">
        <div className="space-y-4">
          <h2 className="text-4xl font-Barlow font-bold text-center lg:text-left">
            Looking For Reliable IT Equipment Rental Services For Your Event
          </h2>
          <p className="text-gray-500 text-center lg:text-left">
            We at Laptop Rentals understand whether you&apos;re hosting a
            conference, a conference you&apos;re hosting a conference.
          </p>
        </div>

        <CardsCarousel data={eventCardsData} />
      </section>

      <Hp_events />
      <Cta />
      {/* <Hp_form /> */}

      <ServicesTimeline />
    </>
  );
}
