import CtaButton from "@/components/CtaButton";
import React from "react";

const HomeSliderText = ({
  title,
  description,
  header,
  index,
}: {
  title: string;
  description: string;
  header: string;
  index: number;
}) => {
  return (
    <div className="z-10 relative text-center md:text-left space-y-3 md:space-y-4 content-center h-full px-8 md:pl-20">
      <strong className="block text-lg text-white text-center md:text-left uppercase font-normal font-Barlow tracking-[0.5em] 3xl:text-3xl max-w-xs mx-auto md:mx-0 md:max-w-full">
        {header}
      </strong>
      {index === 0 ? (
        <h1 className="text-white lg:max-w-lg text-center md:text-left text-5xl md:text-7xl 3xl:text-8xl uppercase font-Barlow font-bold relative before:bg-white md:before:block md:before:absolute before:top-0 before:bottom-0 before:w-1 before:left-0 md:pl-8">
          {title}{" "}
        </h1>
      ) : (
        <h2 className="text-white lg:max-w-lg text-center md:text-left text-5xl md:text-7xl 3xl:text-8xl uppercase font-Barlow font-bold relative before:bg-white md:before:block md:before:absolute before:top-0 before:bottom-0 before:w-1 before:left-0 md:pl-8">
          {title}{" "}
        </h2>
      )}

      <p className="text-white text-center md:text-left mx-auto md:mx-0 max-w-lg 3xl:max-w-2xl 3xl:text-xl">
        {description}{" "}
      </p>

      <CtaButton href="/get-a-quote" text="Get A Quote" className="" />
    </div>
  );
};

export default HomeSliderText;
