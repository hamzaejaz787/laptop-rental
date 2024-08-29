import { getStrapiURL } from "@/lib/utils";
import ctabg from "../public/ctabg.png";
import CtaButton from "./CtaButton";
import Link from "next/link";
import React from "react";

export interface CtaImageProps {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}
export interface CtaProps {
  title: string;
  text: string;
  href: string;
  buttonText: string;
  bgsrc?: CtaImageProps;
}

const CTA = ({ ctaItems }: { ctaItems: CtaProps }) => {
  const baseurl = getStrapiURL();
  let imageurl = "";
  if (ctaItems.bgsrc) imageurl = baseurl + ctaItems.bgsrc.url;

  const replacePhoneNumberWithLink = (text: string) => {
    const phonePattern =
      /(\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9})/g;

    return text.split(phonePattern).map((part, index) => {
      if (phonePattern.test(part))
        return (
          <Link
            key={index}
            href={`tel:${part.replace(/[-.\s]/g, "")}`}
            className="text-white underline hover:text-primary-red duration-200 transition-all"
          >
            {part}
          </Link>
        );
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imageurl || ctabg.src})`,
      }}
      className="content-center bg-no-repeat bg-center bg-cover w-full h-dvh max-h-[550px]"
    >
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <h2 className="text-3xl xl:text-4xl text-white font-bold text-center uppercase md:max-w-4xl mx-auto">
          {ctaItems.title}
        </h2>
        <p className="text-white text-center text-sm xl:text-base font-sans md:max-w-3xl mx-auto">
          {replacePhoneNumberWithLink(ctaItems.text)}
        </p>
        {ctaItems.href && ctaItems.buttonText && (
          <CtaButton
            href={ctaItems.href}
            text={ctaItems.buttonText}
            className="py-5"
          />
        )}
      </div>
    </div>
  );
};

export default CTA;
