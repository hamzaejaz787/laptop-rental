import CtaButton from "@/components/CtaButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomeSliderText = () => {
  return (
    <div className="z-10 relative text-center md:text-left space-y-3 md:space-y-4 content-center h-full px-8 md:pl-20">
      <strong className="block text-lg text-white text-center md:text-left uppercase font-normal font-Barlow tracking-[0.5em]">
        World&apos;s Biggest
      </strong>
      <h1 className="text-white text-center md:text-left text-5xl md:text-7xl uppercase font-Barlow font-bold relative before:bg-white md:before:block md:before:absolute before:top-0 before:bottom-0 before:w-1 before:left-0 md:pl-8">
        Event <br className="hidden md:inline" /> Rentals
      </h1>

      <p className="text-white text-center md:text-left md:max-w-lg">
        We at Laptop Rentals understand whether you&apos;re hosting a
        conference, a conference you&apos;re hosting a conference.
      </p>

      <CtaButton href="/techrental" text="Tect rental" />
    </div>
  );
};

export default HomeSliderText;
