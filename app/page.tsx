import React from "react";

import EventDateCards from "./_components/EventDateCards";
import HomepageSlider from "./_components/HomepageSlider";
import HomeSliderText from "./_components/HomeSliderText";
import CtaButton from "@/components/CtaButton";
import CurvedLayoutImages from "./_components/CurvedLayoutImages";
import Cta from "./_components/Cta";
import { EventCardProps } from "@/lib/definitions";
import ServicesTimeline from "@/components/ServicesTimeline";
import ServicesIcons from "@/components/ServicesIcons";
import EventCardsCarousel from "./_components/EventCardsCarousel";

export default function Home() {
  const eventCardsData: EventCardProps[] = [
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Business Conferences & Seminars",
      href: "/corporate-event",
      description:
        "Maximize your business success with hassle-free laptop hire for events like conferences and seminars. Enhance productivity seamlessly.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Exhibitions and Workshops",
      href: "/corporate-event",
      description:
        "Optimize your corporate events with our rental services. Ideal for business exhibitions and workshops. Hire laptops for corporate events.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Product Launches",
      href: "/corporate-event",
      description:
        "Enhance your product launches effortlessly with our top-notch rental services. Rent laptops for business success, delivering seamless presentations and connectivity.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Trade Shows",
      href: "/corporate-event",
      description:
        "Maximize your trade show impact with our business laptop rental solutions. Elevate your events with our reliable and cost-effective services.",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Festivals",
      href: "/corporate-event",
      description:
        "Optimize your festival experience with our short-term laptop rental for events. Seamlessly enhance connectivity and productivity Down Under!",
      ctatext: "Explore Event",
    },
    {
      imagesrc: "/hp_img.png",
      alternativeText: "",
      title: "Gaming Events",
      href: "/corporate-event",
      description:
        "Optimize your gaming events with hassle-free laptop rental for events. Seamless tech solutions for epic gaming experiences.",
      ctatext: "Explore Event",
    },
  ];
  return (
    <>
      <HomepageSlider>
        <HomeSliderText />
      </HomepageSlider>

      <section className="container space-y-4 p-8 text-center">
        <h2 className="text-3xl lg:text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
          Tech Your Event Up! Laptops, iPads, & More - Australia & NZ-Wide{" "}
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto text-sm xl:text-base">
          Powering successful conferences, exhibitions, festivals & more with
          Business Laptop Rental - from the Melbourne Open to your next
          masterpiece.{" "}
        </p>

        <CtaButton href="/contactus" text="Contact us" />
        <CurvedLayoutImages />
      </section>
      <section className="container space-y-8 p-8 text-center">
        <h2 className="text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
          Our Event Services
        </h2>

        <ServicesIcons />
      </section>

      <section className="container p-8 flex gap-8 lg:gap-20 items-center flex-col lg:flex-row md:overflow-x-hidden">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-Barlow font-bold text-center lg:text-left">
            Enhance Your Events With Our Rental Solutions
          </h2>
          <p className="text-gray-500 text-center lg:text-left text-sm lg:text-base">
            Laptop Rental in Australia is your trusted partner for successful
            business and corporate events. Our rental services cater to a
            diverse range of occasions, including Trade Shows, Training
            sessions, Festivals, Conferences and Seminars, Short-Term Projects,
            Surveys and Market Research, Exhibitions and workshops, Annual
            Meetings, Product Launches, and Gaming Events. With a focus on
            providing top-notch technology and event services, we specialize in
            Check-in and registration systems, Event and festival Wi-Fi, Event
            Apps and software, and Global Fulfilment solutions.
          </p>
        </div>

        <EventCardsCarousel data={eventCardsData} />
      </section>

      <EventDateCards />
      <Cta />
      <ServicesTimeline />
    </>
  );
}
