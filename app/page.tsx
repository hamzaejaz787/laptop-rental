import React from "react";

import EventDateCards from "./_components/EventDateCards";
import HomepageSlider from "./_components/HomepageSlider";
import CtaButton from "@/components/CtaButton";
import CurvedLayoutImages from "./_components/CurvedLayoutImages";
import Cta from "./_components/Cta";
import { EventCardProps } from "@/lib/definitions";
import ServicesTimeline from "@/components/ServicesTimeline";
import EventCardsCarousel from "./_components/EventCardsCarousel";
import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export default async function LaptopRental() {
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

  const homepagetext = [
    {
      header: "World's Biggest",
      title: "Event Rentals",
      description:
        "Worldwide, rent top-notch laptops and technology. Laptop Rental, your tech excellence partner, delivers tailored solutions, guaranteed.",
    },
    {
      header: "World's Biggest",
      title: "Laptop Rentals",
      description:
        "Unmatched selection, unbeatable service. Get the best devices for your events anytime, anywhere!",
    },
    {
      header: "World's Best",
      title: "Event Solutions",
      description:
        "Experience seamless, cutting-edge technology for unforgettable events every time!",
    },
  ];

  const carouselData = [
    { image: "/homepage-slider-1.png", text: homepagetext[0] },
    { image: "/homepage-slider-2.png", text: homepagetext[1] },
    { image: "/homepage-slider-3.png", text: homepagetext[2] },
  ];

  return (
    <>
      <HomepageSlider carouselData={carouselData} />

      <section className="container space-y-4 p-8 text-center">
        <h2 className="text-3xl lg:text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
          Tech Your Event Up! Laptops, iPads, & More - Australia & NZ-Wide{" "}
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto text-sm xl:text-base">
          Powering successful conferences, exhibitions, festivals & more with
          Business Laptop Rental - from the Melbourne Open to your next big
          event.
        </p>

        <CtaButton href="/contactus" text="Contact us" />
        <CurvedLayoutImages />
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

      <ServicesTimeline />
      <div className="container flex items-center flex-col lg:flex-row gap-8 justify-between p-8">
        <div className="space-y-4 flex-1 min-w-min">
          <strong className="bg-primary-red text-white text-base font-semibold uppercase rounded-sm px-2 py-1">
            Rent Event
          </strong>

          <div className="flex items-center gap-3">
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
          </div>

          <h2 className="font-bold text-4xl capitalize">
            Book Our Rental Services For Your Events
          </h2>
          <p className="text-gray-700 ">
            Host an unforgettable event by choosing our top-notch technology
            rental services. From cutting-edge IT equipment to seamless event
            management tools and services, we&apos;ve got your tech needs
            covered. Book your event with us and experience the seamless
            integration of advanced technology to elevate your gatherings.{" "}
            <br />
            <br />
            Our commitment is to provide the best in tech, ensuring your event
            is a resounding success. Explore our offerings, including short-term
            laptop rental for events or long-term, ensuring seamless tech
            solutions tailored to your needs. Let&apos;s make your event a
            tech-savvy triumph!
          </p>
        </div>
        <div className="w-full max-w-xl h-full shadow-md p-5 bg-primary-red text-white text-center space-y-4">
          <Image
            src="/logo_red.png"
            alt=""
            width={150}
            height={75}
            className="mx-auto"
          />

          <h2 className="font-bold text-3xl capitalize relative after:content-[''] after:block after:w-1/2 after:border-2 after:my-4 after:border-white after:border-dashed after:mx-auto">
            Rent your event
          </h2>
          <QuoteForm />
        </div>
      </div>

      <Cta />
    </>
  );
}
