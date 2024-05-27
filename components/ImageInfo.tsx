import Image from "next/image";
import React from "react";

const ImageInfo = ({ image, title, text, reverse, items }: any) => {
  return (
    <div
      className={`w-[80%] gap-4 md:mt-14 lg:mt-20 flex justify-between items-center flex-col mt-10 m-auto md:flex-row lg:flex-row md:mb-10 md-5 ${
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
        <p className="font-sans text-sm md:pb-5">{text}</p>
        {items?.length > 0 && items.map((item: any, index: number) => (
          <div className="flex items-center mt-2" key={index}>
            {item.icon && (
              <div className="md:p-2 border rounded-sm bg-[#D61837] flex items-center justify-center">
                <item.icon color="white" size={20} />
              </div>
            )}
            {item.desc && (
              <p className="font-sans text-sm ml-2">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageInfo;
