"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { cn, getStrapiURL } from "@/lib/utils";
import { ResourceProps } from "./ResourceCard";
import { format } from "date-fns";

export interface RecentBlogCardTypes {
  BlogThumbnail: {
    url: string;
    alternativeText: string;
  };
  updatedAt: string;
  createdAt: string;
  Title: string;
  slug: string;
}

interface BlogTagTypes {
  id: number;
  tag: string;
}

const baseUrl = getStrapiURL();

const ResourcesSidebar = ({
  searchBarClass,
  recentBlogs,
  blogTags,
}: {
  searchBarClass?: string;
  recentBlogs: ResourceProps;
  blogTags?: BlogTagTypes[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("search", query.toLowerCase());
    } else {
      params.delete("search");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="flex flex-col gap-8 w-full lg:w-auto lg:min-w-[300px]">
      <div
        className={cn(
          searchBarClass,
          "lg:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4"
        )}
      >
        <h2 className="text-lg font-semibold relative pl-2">
          Search Blogs
          <div className="h-full w-[2px] bg-primary-red absolute top-0 left-0" />
        </h2>

        <Input
          placeholder="Search Here..."
          className="focus-visible:ring-primary-red transition-all ease-in rounded-sm"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
      </div>
      <RecentResources recentBlogs={recentBlogs} />
      {blogTags ? <PopularTags blogTags={blogTags} /> : ""}
    </div>
  );
};

const RecentResources = ({ recentBlogs }: { recentBlogs: ResourceProps }) => {
  return (
    <div className="lg:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
      <h2 className="text-lg font-semibold relative pl-2">
        Recent Blogs
        <div className="h-full w-[2px] bg-primary-red absolute top-0 left-0" />
      </h2>

      {recentBlogs.data.slice(0, 3).map((item) => (
        <RecentBlogCard key={item.id} cardData={item} />
      ))}
    </div>
  );
};

const RecentBlogCard = ({ cardData }: { cardData: RecentBlogCardTypes }) => {
  const formattedDate = format(new Date(cardData.createdAt), "dd MMM, yy");

  return (
    <div className="flex items-center gap-4">
      <Image
        src={baseUrl + cardData.BlogThumbnail.url}
        alt={cardData.BlogThumbnail.alternativeText}
        width={150}
        height={150}
        className="object-cover rounded h-20 w-20"
      />

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt size={20} className="text-primary-red" />
          <span className="text-gray-500 text-sm">{formattedDate}</span>
        </div>

        <Link
          href={`/blogs/${cardData.slug}`}
          className="text-lg font-bold cursor-pointer capitalize hover:text-primary-red focus-within:text-primary-red transition-all duration-200 ease-in line-clamp-2"
        >
          {cardData.Title}
        </Link>
      </div>
    </div>
  );
};

const PopularTags = ({ blogTags }: { blogTags: BlogTagTypes[] }) => {
  return (
    <div className="lg:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
      <h2 className="text-lg font-semibold relative pl-2">
        Tags
        <div className="h-full w-[2px] bg-primary-red absolute top-0 left-0" />
      </h2>

      <div className="flex items-center gap-3 flex-wrap">
        {blogTags.map((item) => (
          <Button
            key={item.id}
            className="bg-primary-red text-white font-semibold capitalize rounded-sm hover:bg-red-500 focus-within:bg-red-500 transition-all ease-in p-4 md:p-4"
          >
            {item.tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSidebar;
