import Image from "next/image";
import React from "react";

const ServicesTimeline = () => {
  const timelineData = [
    {
      title: "Quality Assurance",
      text: "Our AV equipment is maintained and regularly updated",
    },
    {
      title: "Expert Support",
      text: "Our AV equipment is maintained and regularly updated",
    },
    {
      title: "Seamless Setup",
      text: "Our AV equipment is maintained and regularly updated",
    },
    {
      title: "Backup Systems",
      text: "Our AV equipment is maintained and regularly updated",
    },
  ];
  return (
    <section className="container space-y-8 p-8">
      <div className="flex items-center justify-center md:justify-between gap-4 md:px-12 flex-col md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <strong className="inline-block text-primary-red border-b-2 border-dashed border-b-primary-red uppercase font-medium">
            Services we provide
          </strong>

          <h2 className="text-3xl lg:text-4xl font-Barlow font-bold text-center md:text-left">
            Event Services Solution
          </h2>
        </div>

        <div className="md:border-l-4 border-l-primary-red h-full md:px-4 text-center md:text-left">
          <p className="max-w-xl text-xs lg:text-sm">
            We at Laptop Rentals understand whether you&apos;re hosting a
            conference, show, or business event, having access to reliable and
            high-quality technology can make all the difference. We at Laptop
            Rentals understand whether technology can make all the difference.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-8 md:gap-0 flex-col md:flex-row items-center relative before:content-[''] before:w-[1px] md:before:w-full before:h-full md:before:h-[1px] before:bg-primary-red before:absolute before:left-[calc(5%)] md:before:left-auto md:before:top-0">
        {timelineData.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center text-center gap-2 max-w-52 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-gray-900 before:absolute before:top-auto before:left-[calc(5%-0.25em)] md:before:left-auto md:before:-top-1"
            key={index}
          >
            <Image
              src={"/leader.png"}
              alt=""
              width={75}
              height={75}
              className="mt-2"
            />
            <h6 className="text-lg font-Barlow font-bold text-center">
              {item.title}
            </h6>
            <p className="text-xs text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesTimeline;
