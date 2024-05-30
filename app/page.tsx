import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hp_icons from "@/components/hp_icons";
import Hp_form from "@/components/hp_form";
import Hp_coporateevent from "@/components/hp_coporateevent";
import Hp_events from "@/components/hp_events";
import Hp_event2 from "@/components/hp_events2";
import Hp_servicesolution from "@/components/hp_servicesolution";

import HomepageSlider from "./_components/HomepageSlider";
import HomeSliderText from "./_components/HomeSliderText";
import CtaButton from "@/components/CtaButton";
import CurvedLayoutImages from "./_components/CurvedLayoutImages";
import Hp_imgframe from "@/components/hp_imgframe";
import EventCard, { EventCardProps } from "@/components/EventCard";

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

      <section className="container p-8 flex gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-Barlow font-bold">
            Looking For Reliable IT Equipment Rental Services For Your Event
          </h2>
          <p className="text-gray-500">
            We at Laptop Rentals understand whether you&apos;re hosting a
            conference, a conference you&apos;re hosting a conference.
          </p>
        </div>

        <div className="flex gap-4 items-center overflow-x-scroll max-w-3xl p-2">
          {eventCardsData.map((data, index) => (
            <EventCard key={index} data={data} />
          ))}
        </div>
      </section>
      <Hp_coporateevent />
      <Hp_events />
      <Hp_event2 />
      <Hp_form />
      <Hp_servicesolution />
    </>
  );
}
