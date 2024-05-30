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

export interface EventCardProps {
  imagesrc: string;
  alternativeText: string;
  title: string;
  description: string;
  href: string;
  ctatext: string;
}

const EventCard = ({ data }: { data: EventCardProps }) => {
  return (
    <Card className="border-none p-4 rounded-sm flex flex-col !shadow-card-shadow">
      <CardHeader className="p-0 relative after:content-[''] after:w-full after:border after:my-2 after:border-dashed after:border-primary-red">
        <Image
          src={data.imagesrc}
          alt={data.alternativeText}
          width={200}
          height={200}
        />
      </CardHeader>
      <CardContent className="p-0">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className="text-wrap mt-2 mb-4">
          {data.description}
        </CardDescription>

        <CtaButton
          href={`/eventrental${data.href}`}
          text={data.ctatext}
          className="rounded-sm w-full"
        />
      </CardContent>
    </Card>
  );
};

export default EventCard;
