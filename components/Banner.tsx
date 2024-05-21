import Image from "next/image";
import React from "react";
import banner_bg from "../public/contactus_bg.png";
const Banner = ({ btn, title, text }: any) => {
  return (
    <div className="relative mt-10 md:mt-14 lg:mt-20 flex justify-center items-center">
      <Image
        src={banner_bg}
        alt="aboutus_banner"
        className="w-full md:h-96  relative"
      />
      <div className="pb-1 absolute left-0 w-full flex flex-col justify-center items-center">
        <h2 className="md:text-4xl text-[14px] text-bold text-white font-bold md:mb-4 uppercase">{title}</h2>
        <p className="md:text-sm text-white font-sans text-[5px] text-center w-[60%]">
          {text}
        </p>
        {btn && (
          <button className="py-2 px-4 rounded-sm bg-[#D61837] text-white">
            {btn}
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
