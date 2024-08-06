import Image from "next/image";
import React from "react";
import CtaButton from "./CtaButton";

export interface BannerImageProps {
  alternativeText: string;
  width?: number;
  height?: number;
  url: string;
}

export interface BannerProps {
  btn?: string;
  link?: string;
  title: string;
  text?: string;
  image?: BannerImageProps;
}

const Banner = ({ btn, title, text, link, image }: BannerProps) => {
  return (
    <section className="relative flex justify-center items-center pt-12 lg:pt-[70px]">
      <Image
        src={image?.url || ""}
        alt={image?.alternativeText || title}
        width={image?.width || 1920}
        height={image?.height || 550}
        className="h-screen md:max-h-[550px] relative object-cover w-full"
      />
      <div className="py-8 px-4 sm:p-8 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black/30">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-bold text-white font-bold uppercase md:max-w-5xl mx-auto">
          {title}
        </h1>
        {text !== "" && (
          <p className="text-gray-200 text-center md:max-w-3xl md:mx-auto">
            {text}
          </p>
        )}
        {btn && link && <CtaButton href={link} text={btn} />}
      </div>
    </section>
  );
};

export default Banner;
