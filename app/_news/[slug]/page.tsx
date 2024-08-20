import React from "react";
import Banner from "@/components/Banner";
import ResourcesSidebar from "../_components/ResourcesSidebar";
import ResourceDetails from "./components/ResourceDetails";
import { EventCardProps } from "@/lib/definitions";
import EventCard from "@/components/EventCard";

const eventCardsData = [
  {
    imagesrc: "/news3.png",
    alternativeText: "",
    title: "Coporate Event",
    href: "/singleevent",
    description:
      "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    ctatext: "Read More",
  },
  {
    imagesrc: "/hp_img.png",
    alternativeText: "",
    title: "Business Event",
    href: "/singleevent",
    description:
      "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    ctatext: "Read More",
  },
  {
    imagesrc: "/news2.png",
    alternativeText: "",
    title: "Work Event",
    href: "/singleevent",
    description:
      "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    ctatext: "Read More",
  },
  {
    imagesrc: "/hp_img.png",
    alternativeText: "",
    title: "Rental Event",
    href: "/singleevent",
    description:
      "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    ctatext: "Explore Event",
  },
  {
    imagesrc: "/hp_img.png",
    alternativeText: "",
    title: "Laptop Event",
    href: "/singleevent",
    description:
      "Get in contact us to start planning your own adventure. Get in contact us to start planning your own adventure",
    ctatext: "Read More",
  },
];
function SingleBlogPage() {
  return (
    <div>
      <Banner title="Single Blog Page" text="" />

      <div className="flex items-start justify-between flex-col lg:flex-row gap-8 p-8 py-12 container">
        <ResourceDetails />
        <ResourcesSidebar />
      </div>

      <div className="container p-8 text-center space-y-4">
        <h2 className="text-4xl font-bold">Popular Blogs</h2>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
          dictum lectus at ultricies. elit. In porttitor{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {eventCardsData.slice(0, 3).map((item, index) => (
            <EventCard key={index} data={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
