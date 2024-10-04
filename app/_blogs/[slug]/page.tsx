import React from "react";
import Banner from "@/components/Banner";
import ResourcesSidebar from "../_components/ResourcesSidebar";
import { PageProps, ResourceCardTypes } from "@/lib/definitions";
import { getBlogBySlug } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import { Metadata } from "next";
import ParseRichText from "@/components/RichTextParser";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaStopwatch, FaUser } from "react-icons/fa6";
import { format } from "date-fns";

const getBlogData = async (slug: string): Promise<ResourceCardTypes> => {
  const data: ResourceCardTypes = await getBlogBySlug(slug);
  return data;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const slug = params.slug;
  const data: ResourceCardTypes = await getBlogData(slug);

  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.MetaKeywords,
    alternates: {
      canonical: `https://laptop-rental.com.au/blogs/${data.slug}`,
    },
    other: { title: data.MetaTitle },
  };
};

const SingleBlogPage = async ({ params }: { params: PageProps["params"] }) => {
  const slug = params.slug;
  const baseurl = getStrapiURL();
  const blogData: ResourceCardTypes = await getBlogData(slug);
  const formattedDate = format(new Date(blogData.updatedAt), "dd MMM, yy");

  return (
    <div>
      <Banner
        title={blogData.Title}
        image={{
          url: baseurl + blogData.HeaderImage.url,
          alternativeText: blogData.HeaderImage.alternativeText,
        }}
      />

      <div className="flex items-start justify-between flex-col lg:flex-row gap-8 p-8 md:py-12 container">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">{blogData.IntroText} </h2>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2">
              <FaUser className="text-primary-red" size={18} />

              <h6 className="text-sm text-gray-600">
                {`${blogData.updatedBy.firstname} ${blogData.updatedBy.lastname}`}
              </h6>
            </div>
            <span className="text-primary-red font-bold">/</span>
            <div className="inline-flex items-center gap-2">
              <FaStopwatch className="text-primary-red" size={18} />

              <h6 className="text-sm text-gray-600">
                {blogData.ReadingTime} min read
              </h6>
            </div>
            <span className="text-primary-red font-bold">/</span>
            <div className="inline-flex items-center gap-2">
              <FaRegCalendarAlt className="text-primary-red" size={18} />

              <h6 className="text-sm text-gray-600">{formattedDate}</h6>
            </div>
          </div>

          <ParseRichText
            content={blogData.BlogContent}
            paragraphProps="max-w-[950px] text-gray-600"
            headingProps={{ h2: "text-4xl font-bold" }}
            linkProps="text-primary-red hover:underline"
          />
        </div>

        <ResourcesSidebar searchBarClass="hidden" />
      </div>

      <div className="container p-8 pt-0 text-center space-y-4">
        <h2 className="text-4xl font-bold">Recent Blogs</h2>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center">
          Read some of our recent blogs
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
