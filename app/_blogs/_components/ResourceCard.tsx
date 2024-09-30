import Image from "next/image";
import React from "react";
import { FaUser, FaStopwatch, FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ResourceCardTypes {
  image: string;
  title: string;
  description: string;
  href: string;
  author: string;
  readtime: string;
  date: string;
}

const ResourceCard = ({ data }: { data: ResourceCardTypes }) => {
  return (
    <div className="space-y-3">
      <Image width={950} height={550} src={data.image} alt="" />
      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-2">
          <FaUser className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">{data.author}</h6>
        </div>
        <span className="text-primary-red font-bold">/</span>
        <div className="inline-flex items-center gap-2">
          <FaStopwatch className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">
            Reading time {data.readtime} read
          </h6>
        </div>
        <span className="text-primary-red font-bold">/</span>
        <div className="inline-flex items-center gap-2">
          <FaRegCalendarAlt className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">{data.date}</h6>
        </div>
      </div>

      <h2 className="text-4xl font-bold">{data.title}</h2>
      <p className="text-gray-600 text-sm max-w-[950px]">{data.description}</p>

      <Button
        className="flex items-center gap-2 p-0 md:p-0 hover:text-primary-red focus-within:text-primary-red transition-all ease-in group"
        variant="link"
      >
        <Link href={data.href} className="text-base">
          Read More
        </Link>
        <FaArrowRightLong
          size={16}
          className="text-primary-red group-hover:animate-bounce-right"
        />
      </Button>
    </div>
  );
};

export default ResourceCard;
