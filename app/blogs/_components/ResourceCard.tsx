import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { getStrapiURL } from "@/lib/utils";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser, FaStopwatch, FaArrowRightLong } from "react-icons/fa6";
import { ResourceCardTypes } from "@/lib/definitions";

export interface ResourceProps {
  data: ResourceCardTypes[];
}

const ResourceCard = ({ data }: { data: ResourceCardTypes }) => {
  const baseUrl = getStrapiURL();

  //Format updatedAt date
  const formattedDate = format(new Date(data.updatedAt), "dd MMM, yy");
  return (
    <div className="space-y-3">
      <Image
        width={950}
        height={350}
        className="object-cover w-full h-full max-h-80 rounded-sm"
        src={baseUrl + data.MainImage.url}
        alt={data.MainImage.alternativeText}
      />
      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-2">
          <FaUser className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">{data.AuthorName}</h6>
        </div>
        <span className="text-primary-red font-bold">/</span>
        <div className="inline-flex items-center gap-2">
          <FaStopwatch className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600 capitalize">
            {data.ReadingTime} min read
          </h6>
        </div>
        <span className="text-primary-red font-bold">/</span>
        <div className="inline-flex items-center gap-2">
          <FaRegCalendarAlt className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">{formattedDate}</h6>
        </div>
      </div>

      <h2 className="text-4xl font-bold">{data.Title}</h2>
      <p className="text-gray-600 text-sm max-w-[950px]">{data.Description}</p>

      <Link
        href={`/blogs/${data.slug}`}
        className="inline-flex items-center gap-2 p-0 md:p-0 hover:text-primary-red focus-within:text-primary-red transition-all ease-in group hover:underline"
      >
        Read More
        <FaArrowRightLong
          size={16}
          className="text-primary-red group-hover:animate-bounce-right"
        />
      </Link>
    </div>
  );
};

export default ResourceCard;
