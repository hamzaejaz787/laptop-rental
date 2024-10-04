import React from "react";

import Image from "next/image";
import Cta from "./_components/Cta";
import { getEvents } from "@/data/loaders";
import { IoStarSharp } from "react-icons/io5";
import QuoteForm from "@/components/QuoteForm";
import CtaButton from "@/components/CtaButton";
import EventDateCards from "./_components/EventDateCards";
import HomepageSlider from "./_components/HomepageSlider";
import ServicesTimeline from "@/components/ServicesTimeline";
import EventCardsCarousel from "./_components/EventCardsCarousel";
import CurvedLayoutImages from "./_components/CurvedLayoutImages";

export default async function LaptopRental() {
  const homepagetext = [
    {
      header: "Australia's Biggest",
      title: "Laptop Rentals",
      description:
        "Unmatched selection, unbeatable service. Get the ideal laptop rental solutions for your events anytime, anywhere!",
    },
    {
      header: "Australia's Biggest",
      title: "Event Rentals",
      description:
        "Nationwide, rent top-notch laptops and technology. Laptop Rental, your tech excellence partner, delivers tailored solutions, guaranteed.",
    },
    {
      header: "Australia's Best",
      title: "Event Solutions",
      description:
        "Experience seamless, cutting-edge technology for unforgettable events every time!",
    },
  ];
  const carouselData = [
    { image: "/Header-1.webp", text: homepagetext[0] },
    { image: "/Header-2.webp", text: homepagetext[1] },
    { image: "/Header-3.webp", text: homepagetext[2] },
  ];
  const eventCardData = await getEvents();

  return (
    <>
      <HomepageSlider carouselData={carouselData} />

      <section className="container space-y-4 py-8 px-4 md:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl max-w-4xl mx-auto text-center font-Barlow font-bold">
          Transform Your Event with MacBook, HP, Dell, & More - Available in
          Australia & New Zealand{" "}
        </h2>
        <p className="text-gray-500 text-center max-w-3xl mx-auto text-sm xl:text-base">
          Powering successful conferences, exhibitions, festivals, and more with
          Business Laptop Rental - from the Melbourne Open to your next big
          event. Choose Laptop Rental for seamless and efficient technology
          solutions.
        </p>

        <CtaButton href="/contact-us" text="Contact us" />
        <CurvedLayoutImages />
      </section>

      <section className="container py-8 px-4 md:px-8 flex gap-8 lg:gap-20 items-center flex-col lg:flex-row md:overflow-x-hidden">
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
            providing top-notch technology and event services, we specialise in
            Check-in and registration systems, Event and festival Wi-Fi, Event
            Apps and software, and Global Fulfilment solutions.
          </p>
        </div>

        <EventCardsCarousel data={eventCardData.data} />
      </section>

      <EventDateCards />
      <Cta />
      <ServicesTimeline description="Laptop Rental Australia steps in as your trusted laptop rental partner. We empower your event with cutting-edge technology and unparalleled service, ensuring every moment is an opportunity to impress. Supported by dedicated teams, enjoy 24/7 technical and customer support for seamless corporate events. Contact our experts and rent laptops for corporate events in Australia & New Zealand." />

      <div className="container flex items-center flex-col lg:flex-row gap-8 justify-between py-8 px-4 md:px-8">
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
          <p className="text-gray-700">
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
        <div className="w-full max-w-xl h-full shadow-md p-5 bg-primary-red text-white text-center space-y-4 rounded-md">
          <Image
            src="/logo_red.png"
            alt=""
            width={150}
            height={75}
            className="mx-auto"
          />
          <h2 className="font-bold text-3xl capitalize relative after:content-[''] after:block after:w-1/2 after:border-x-2 after:border after:my-4 after:border-white after:border-dashed after:mx-auto">
            Rent your event
          </h2>
          <QuoteForm />
        </div>
      </div>
    </>
  );
}
