import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface RecentBlogCardTypes {
  image: string;
  date: string;
  title: string;
  href: string;
}

const recentCardData: RecentBlogCardTypes[] = [
  {
    title: "Some title for news 1",
    date: "05 June, 2024",
    href: "/news/blogs",
    image: "/apple.png",
  },
  {
    title: "Some title for news 2",
    date: "05 December, 2023",
    href: "/news/blogs",
    image: "/dell.png",
  },
  {
    title: "Some title for news 3",
    date: "25 May, 2024",
    href: "/news/blogs",
    image: "/dragon.png",
  },
  {
    title: "Some title for news 4",
    date: "05 June, 2024",
    href: "/news/blogs",
    image: "/hp.png",
  },
];

const ResourcesSidebar = () => {
  return (
    <div className="space-y-8">
      <div className="md:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
        <h2 className="text-lg font-semibold relative pl-2">
          Search Here
          <div className="h-full w-[2px] bg-primary-red absolute top-0 left-0" />
        </h2>

        <Input
          placeholder="Search Here..."
          className="focus-visible:ring-primary-red transition-all ease-in rounded-sm"
        />
      </div>
      <RecentResources />
      <PopularTags />
    </div>
  );
};

const RecentResources = () => {
  return (
    <div className="md:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
      <h2 className="text-lg font-semibold relative pl-2">
        Recent Blogs
        <div className="h-full w-[2px] bg-primary-red absolute top-0 left-0" />
      </h2>

      {recentCardData.slice(0, 3).map((item) => (
        <RecentBlogCard key={item.title} cardData={item} />
      ))}
    </div>
  );
};

const RecentBlogCard = ({ cardData }: { cardData: RecentBlogCardTypes }) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={cardData.image}
        alt={cardData.title}
        width={100}
        height={100}
        className="rounded"
      />

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt size={20} className="text-primary-red" />
          <span className="text-gray-500 text-sm">{cardData.date}</span>
        </div>

        <Link
          href={cardData.href}
          className="block text-xl font-bold cursor-pointer capitalize hover:text-primary-red focus-within:text-primary-red transition-all duration-200 ease-in"
        >
          {cardData.title}
        </Link>
      </div>
    </div>
  );
};

const tags = [
  "Event Planning",
  "Tech",
  "Rental Planning",
  "Rentals",
  "Tech Rental Events",
  "Tech Products",
];

const PopularTags = () => {
  return (
    <div className="md:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
      <h2 className="text-lg font-semibold relative pl-2">
        Popular Tags
        <div className="h-full w-[2px] bg-primary-red absolute top-0 left-0" />
      </h2>

      <div className="flex items-center gap-3 flex-wrap">
        {tags.map((tag, index) => (
          <Button
            key={index}
            className="bg-primary-red text-white font-semibold rounded-sm hover:bg-red-500 focus-within:bg-red-500 transition-all ease-in p-4 md:p-4"
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSidebar;
