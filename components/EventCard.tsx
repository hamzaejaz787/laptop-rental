import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { EventCardProps } from "@/lib/definitions";
import { cn, getStrapiURL } from "@/lib/utils";

type EventCardComponentProps = {
  data: EventCardProps;
  className?: string;
};

const EventCard: React.FC<EventCardComponentProps> = ({ data, className }) => {
  const strapiUrl = getStrapiURL();
  return (
    <Card
      className={cn(
        "border-none p-4 rounded-sm flex flex-col shadow-3xl h-full",
        className
      )}
    >
      {" "}
      <CardHeader className="p-0 relative after:content-[''] after:w-full after:border after:my-2 after:border-dashed after:border-primary-red">
        <Image
          src={strapiUrl + data.FeaturedImage.url}
          alt={data.FeaturedImage.alternativeText}
          width={200}
          height={200}
          className="w-full max-h-[200px] h-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-0 h-full flex flex-col justify-between">
        <CardTitle>{data.NavMenuName}</CardTitle>
        <CardDescription className="text-wrap mt-2 mb-4 line-clamp-[7]">
          {data?.FeaturedText || data.NavMenuName}
        </CardDescription>

        <CtaButton
          href={`/event-rental/${data.slug}`}
          text="Explore More"
          className="rounded-sm w-full"
        />
      </CardContent>
    </Card>
  );
};

export default EventCard;
