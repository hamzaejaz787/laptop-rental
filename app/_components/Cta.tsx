import React from "react";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";

function Cta() {
  return (
    <div className="relative min-h-[550px] h-full content-center">
      <Image src="/frame_239.png" alt="" fill className="object-cover" />

      <div className="container relative z-20 flex flex-col lg:flex-row p-8 items-center justify-between gap-8 h-full">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-white text-center md:text-left text-4xl md:text-7xl uppercase font-Barlow font-bold relative before:bg-white md:before:block md:before:absolute before:top-0 before:bottom-0 before:w-1 before:left-0 md:pl-8">
            Event Rentals <br className="hidden md:inline" />
            <span className="md:text-6xl">Product Services</span>
          </h2>
          <p className="text-white text-center md:text-left md:max-w-lg">
            Enhance your events with premium rental products. Elevate
            experiences effortlessly. Reach out to us for seamless excellence.
            Contact us now!{" "}
          </p>

          <CtaButton
            text="Call"
            href="tel:+2199005700"
            className="bg-white text-primary-red hover:text-white focus-within:text-white"
          />
        </div>

        <div className="">
          <Image
            src={"/cta-gif.gif"}
            alt=""
            unoptimized
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Cta;
