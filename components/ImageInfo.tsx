import Image from "next/image";
import React from "react";

const ImageInfo = ({ image, title, text, reverse }: any) => {
  return (
    <div
      className={`w-[80%] gap-4 md:mt-14 lg:mt-20 flex justify-between items-center flex-col mt-10 m-auto md:flex-row lg:flex-row ${
        reverse ? "md:flex-row-reverse lg:flex-row-reverse" : ""
      }`}
    >
      <Image
        src={image}
        alt="rentalImage"
        className="w-100% lg:w-[48%] md:w-[48%]"
      />
      <div className="w-full lg:w-[48%] md:w-[48%]">
        <h3 className="font-sans mb-2 font-bold text-3xl">{title}</h3>
        <p className="font-sans text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ImageInfo;
