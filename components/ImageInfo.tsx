import React from "react";
import Image from "next/image";
import { BannerProps } from "@/lib/definitions";
import { getStrapiURL } from "@/lib/utils";

const ImageInfo = ({
  image,
  title,
  text,
  reverse = false,
  items,
}: BannerProps) => {
  const baseurl = getStrapiURL();
  let imageurl = "";
  if (image && image.url.includes("uploads")) imageurl = baseurl + image?.url;
  return (
    <div
      className={`container p-8 lg:px-16 gap-20 flex justify-center items-center flex-col-reverse ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <Image
        src={imageurl || image?.url || "/imageframe.png"}
        alt={image?.alternativeText || ""}
        width={500}
        height={500}
        className=""
      />
      <div className="space-y-4">
        <h2 className="font-sans font-bold text-3xl lg:text-4xl text-center lg:text-left max-w-2xl">
          {title}
        </h2>
        <p className="font-sans text-sm xl:text-base text-center lg:text-left max-w-2xl">
          {text}
        </p>

        {items && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items?.map((item: any, index: number) => (
              <div className="flex items-center" key={index}>
                {item.icon && (
                  <div className="p-2 rounded-sm bg-primary-red flex items-center justify-center ">
                    <item.icon color="white" size={20} />
                  </div>
                )}
                {item.desc && (
                  <p className="font-sans text-sm ml-2 text-center lg:text-left">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInfo;
