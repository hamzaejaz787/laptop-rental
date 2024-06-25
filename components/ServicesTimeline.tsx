import Image from "next/image";
import React from "react";

const ServicesTimeline = ({ description }: { description?: string }) => {
  const timelineData = [
    {
      title: "24/7 Assistance",
      text: "On-site and Remotely",
    },
    {
      title: "Global Reach",
      text: "Australia, New Zealand & Worldwide",
    },
    {
      title: "Worldwide Delivery",
      text: "Several Depots",
    },
    {
      title: "Flexible Rental Period",
      text: "Day, Week, Month, Any Length",
    },
    {
      title: "Diverse Products",
      text: "A Wide Range of Options",
    },
  ];
  return (
    <section className="container space-y-8 p-8">
      <div className="flex items-center justify-center md:justify-between gap-4 md:px-12 flex-col md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <strong className="inline-block text-primary-red border-b-2 border-dashed border-b-primary-red uppercase font-medium">
            Your Event, Our Expertise
          </strong>

          <h2 className="text-3xl lg:text-4xl font-Barlow font-bold text-center md:text-left">
            Reasons We Stand Out
          </h2>
        </div>

        <div className="md:border-l-4 border-l-primary-red h-full md:px-4 text-center md:text-left">
          <p className="max-w-xl text-xs lg:text-sm">
            {description && description !== ""
              ? description
              : "Laptop Rental Australia steps in as your trusted Dell laptop rental partner. We empower your event with cutting-edge technology and unparalleled service, ensuring every moment is an opportunity to impress. Supported by dedicated teams, enjoy 24/7 technical and customer support for seamless corporate events. Contact our experts and rent Dell laptops for corporate events in Australia, New Zealand and Worldwide."}
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
