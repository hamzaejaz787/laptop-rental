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
  let imageurl = "";
  if (image) imageurl = baseurl + image?.url;

  return (
    <div className="relative mt-10 md:mt-14 lg:mt-20 flex justify-center items-center">
      <Image
        src={imageurl || banner_bg}
        alt={image?.alternativeText || ""}
        width={image?.width || 1000}
        height={image?.height || 550}
        className="w-full h-screen md:max-h-[550px] relative"
      />
      <div className="p-8 absolute left-0 w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-4xl text-center text-3xl text-bold text-white font-bold uppercase">
          {title}
        </h1>
        <p className="md:text-base text-white/85 font-sans text-center md:max-w-xl md:mx-auto">
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
