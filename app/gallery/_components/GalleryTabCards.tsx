"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const tabCardItems = [
  { image: "/event_img7.png", category: "Corporate Event" },
  { image: "/event_img8.png", category: "Corporate Event" },
  { image: "/event_img9.png", category: "Corporate Event" },
  { image: "/event_img9.png", category: "Corporate Event" },
  { image: "/event_img9.png", category: "Gaming Event" },
  { image: "/event_img9.png", category: "Corporate Event" },
  { image: "/event_img9.png", category: "Corporate Event" },
  { image: "/event_img7.png", category: "Rental Event" },
  { image: "/event_img8.png", category: "Rental Event" },
  { image: "/eventrental1.jpg", category: "Business Event" },
  { image: "/event_img8.png", category: "Training & Seminar" },
];

const GalleryTabCards = () => {
  const tabParams = useSearchParams();
  const tab = tabParams.get("event");
  const filteredEvents = tab
    ? tabCardItems.filter((event) => event.category?.toLowerCase() === tab)
    : tabCardItems;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {filteredEvents.map((event, index) => (
        <Image
          key={index}
          src={event.image}
          alt=""
          width={250}
          height={250}
          className="w-full"
        />
      ))}
    </div>
  );
};

export default GalleryTabCards;
