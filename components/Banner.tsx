import Image from "next/image";
import React from "react";
import banner_bg from "../public/contactus_bg.png";
import Link from "next/link";
import { getStrapiURL } from "@/lib/utils";

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
  text: string;
  image?: BannerImageProps;
}

const Banner = ({ btn, title, text, link, image }: BannerProps) => {
  const baseurl = getStrapiURL();
  const imageurl = baseurl + image?.url;

  return (
    <div className="relative mt-10 md:mt-14 lg:mt-20 flex justify-center items-center">
      <Image
        src={imageurl || banner_bg}
        alt={image?.alternativeText || ""}
        width={image?.width}
        height={image?.height}
        className="w-full md:h-96 relative"
      />
      <div className="pb-1 absolute left-0 w-full flex flex-col justify-center items-center md:gap-5 gap-2">
        <h2 className="md:text-4xl text-3xl text-bold text-white font-bold uppercase">
          {title}
        </h2>
        <p className="md:text-base text-white font-sans text-[12px] text-center w-[60%]">
          {text}
        </p>
        {btn && link && (
          <button className="py-2 px-4 rounded-sm bg-[#D61837] text-white">
            <Link href={link}>{btn}</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
