import Image from "next/image";
import React from "react";
import banner_bg from "../public/contactus_bg.png";
const Banner = ({ btn, title, text }: any) => {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        src={banner_bg}
        alt="aboutus_banner"
        className="w-full h-96 relative"
      />
      <div className="pb-1 absolute left-0 w-full flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold">{title}</h2>
        <p className="text-base text-white text-center w-[60%]">{text}</p>
        <button className="py-2 px-4 rounded-sm bg-[#D61837] text-white">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Banner;
