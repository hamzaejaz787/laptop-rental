import Image from "next/image";
import React from "react";
import banner_bg from "../public/contactus_bg.png";
import Link from "next/link";
const Banner = ({ btn, title, text, link }: any) => {
  return (
    <div className="relative mt-10 md:mt-14 lg:mt-20 flex justify-center items-center">
      <Image
        src={banner_bg}
        alt="aboutus_banner"
        className="w-full md:h-96  relative"
      />
      <div className="pb-1 absolute left-0 w-full flex flex-col justify-center items-center md:gap-5 gap-2">
        <h2 className="md:text-4xl text-[16px] text-bold text-white font-bold uppercase">{title}</h2>
        <p className="md:text-base text-white font-sans text-[8px] text-center w-[60%]">
          {text}
        </p>
        {btn && link &&(
          <button className="py-2 px-4 rounded-sm bg-[#D61837] text-white">
            <Link href={link}>
            {btn}
            </Link>
            
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
