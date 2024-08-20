import Image from "next/image";
import React from "react";

import { getStrapiURL } from "@/lib/utils";
import CtaButton from "@/components/CtaButton";

export interface BannerImageProps {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface BannerProps {
  btn?: string;
  link?: string;
  title: string;
  text?: string;
  image?: BannerImageProps;
}

const BannerWithImageUrl = ({ btn, title, text, link, image }: BannerProps) => {
  const baseurl = getStrapiURL();
  let imageurl = "";
  if (image) imageurl = baseurl + image?.url;

  return (
    <section className="relative flex justify-center items-center pt-12 lg:pt-[100px]">
      <Image
        priority
        src={imageurl || "/Technology-Rental-Header.png"}
        alt={image?.alternativeText || ""}
        width={image?.width || 1920}
        height={image?.height || 550}
        className="h-screen md:max-h-[550px] relative object-cover w-full"
      />
      <div className="py-8 px-4 sm:p-8 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black/50">
        {" "}
        <h1 className="md:text-4xl text-center text-3xl max-w-3xl text-bold text-white font-bold uppercase">
          {title}
        </h1>
        {text !== "" && (
          <p className="md:text-base text-white/85 text-center md:max-w-3xl md:mx-auto">
            {text}
          </p>
        )}
        {btn && link && <CtaButton href={link} text={btn} />}
      </div>
    </section>
  );
};

export default BannerWithImageUrl;
