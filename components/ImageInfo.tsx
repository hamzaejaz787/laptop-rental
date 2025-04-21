import React from "react";
import Image from "next/image";
import { BannerProps } from "@/lib/definitions";
import { getStrapiURL } from "@/lib/utils";
import ParseRichText from "./RichTextParser";

const ImageInfo = ({
  image,
  title,
  text,
  reverse = false,
  items,
  __component,
  content,
}: BannerProps) => {
  const baseurl = getStrapiURL();
  let imageurl = "";
  if (image && image.url.includes("uploads")) imageurl = baseurl + image?.url;
  return (
    <div
      className={`container p-8 lg:px-16 2xl:px-0 gap-8 lg:gap-20 flex justify-between items-center flex-col-reverse ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <Image
        src={imageurl || image?.url || "/imageframe.png"}
        alt={image?.alternativeText || ""}
        width={500}
        height={500}
        className="object-cover"
      />
      {__component !== "hero-section.rich-hero-text" ? (
        <div className="space-y-4">
          <h2 className="font-sans font-bold text-3xl lg:text-4xl text-center lg:text-left max-w-5xl">
            {title}
          </h2>
          <p className="font-sans text-sm xl:text-base text-center lg:text-left max-w-5xl">
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
      ) : (
        <div className="space-y-4">
          <ParseRichText
            linkProps="underline hover:text-primary-red"
            content={content!}
            headingProps={{
              h2: "font-sans font-bold text-3xl lg:text-4xl text-center lg:text-left max-w-5xl",
            }}
            paragraphProps="font-sans text-sm xl:text-base text-center lg:text-left max-w-5xl"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInfo;
