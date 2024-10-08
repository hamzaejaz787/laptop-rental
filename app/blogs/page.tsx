import Banner from "@/components/Banner";
import React from "react";
import ResourcesSidebar from "./_components/ResourcesSidebar";
import ResourceCard, { ResourceProps } from "./_components/ResourceCard";
import { getBlogs, getRecentBlogs } from "@/data/loaders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Blogs",
  description: "Meta description for Laptop Rental Blogs",
  keywords: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/blogs",
  },
  other: { title: "Laptop Rental For Events | Blogs" },
};

const Blogs = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const query = searchParams?.search?.toString();

  const [blogsData, recentBlogs]: [ResourceProps, ResourceProps] =
    await Promise.all([getBlogs(query), getRecentBlogs()]);

  return (
    <>
      <Banner
        title="Blogs"
        image={{
          url: "/Dell-banner.png",
          alternativeText:
            "We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand",
        }}
        text="We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />

      <div className="flex items-start justify-between flex-col-reverse lg:flex-row gap-8 px-6 py-8 md:py-12 container">
        <div className="space-y-8 w-fit">
          {blogsData.data.map((card, index) => (
            <ResourceCard key={index} data={card} />
          ))}
        </div>
        <ResourcesSidebar blogsData={blogsData} recentBlogs={recentBlogs} />
      </div>
    </>
  );
};

export default Blogs;
