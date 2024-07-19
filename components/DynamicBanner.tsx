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
    <section className="relative flex justify-center items-center pt-12 lg:pt-[75px]">
      <Image
        priority
        src={imageurl || ""}
        alt={image?.alternativeText || ""}
        width={image?.width || 1000}
        height={image?.height || 550}
        className="w-full h-screen md:max-h-[550px] relative object-cover"
      />
      <div className="p-8 absolute left-0 w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-4xl text-center text-3xl text-bold text-white font-bold uppercase">
          {title}
        </h1>
        {text !== "" && (
          <p className="md:text-base text-white/85 text-center md:max-w-xl md:mx-auto">
            {text}
          </p>
        )}
        {btn && link && <CtaButton href={link} text={btn} />}
      </div>
    </section>
  );
};

export default BannerWithImageUrl;
