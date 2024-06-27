import React from "react";
import { getStrapiURL } from "@/lib/utils";
import ctabg from "@/public/ctabg.png";
import { CtaProps } from "@/components/CTA";
import CtaDialog from "./CtaDialog";

const CtaWithModal = ({ ctaItems }: { ctaItems: CtaProps }) => {
  const baseurl = getStrapiURL();
  let imageurl = "";
  if (ctaItems.bgsrc) imageurl = baseurl + ctaItems.bgsrc.url;

  return (
    <div
      style={{
        backgroundImage: `url(${imageurl || ctabg.src})`,
      }}
      className="content-center  bg-no-repeat bg-center bg-cover w-full h-dvh max-h-[350px]"
    >
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <h2 className="text-3xl xl:text-4xl text-white font-bold text-center uppercase">
          {ctaItems.title}
        </h2>
        <p className="text-white text-center text-sm xl:text-base font-sans md:max-w-3xl mx-auto">
          {ctaItems.text}
        </p>

        <CtaDialog />
      </div>
    </div>
  );
};

export default CtaWithModal;
