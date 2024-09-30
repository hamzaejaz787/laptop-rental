import Banner from "@/components/Banner";
import React from "react";
import blog1 from "@/public/blog1.png";
import ResourcesSidebar from "./_components/ResourcesSidebar";
import ResourceCard, { ResourceCardTypes } from "./_components/ResourceCard";

const resourceCardsData: ResourceCardTypes[] = [
  {
    image: "/blog1.png",
    author: "Name",
    readtime: "3 Minute Read",
    date: "11 Jan, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus.",
    href: "/blogs/1",
  },
  {
    image: "/blog2.png",
    author: "John",
    readtime: "5 Minute Read",
    date: "11 Feb, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus.",
    href: "/blogs/2",
  },
  {
    image: "/blog1.png",
    author: "John",
    readtime: "5 Minute Read",
    date: "15 Feb, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus atLorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus.",
    href: "/blogs/3",
  },
];

const Blogs = () => {
  return (
    <>
      <Banner
        title="News"
        text="We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />

      <div className="flex items-start justify-between flex-col lg:flex-row gap-8 p-8 py-12 container">
        <div className="space-y-8 w-fit">
          {resourceCardsData.map((card, index) => (
            <ResourceCard key={index} data={card} />
          ))}
        </div>
        <ResourcesSidebar />
      </div>
    </>
  );
};

export default Blogs;
