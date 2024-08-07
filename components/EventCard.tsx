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
import { cn } from "@/lib/utils";

type EventCardComponentProps = {
  data: EventCardProps;
  className?: string;
};

const EventCard: React.FC<EventCardComponentProps> = ({ data, className }) => {
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
          src={data.imagesrc}
          alt={data.alternativeText}
          width={200}
          height={200}
          className="w-full"
        />
      </CardHeader>
      <CardContent className="p-0 h-full flex flex-col justify-between">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className="text-wrap mt-2 mb-4">
          {data.description}
        </CardDescription>

        <CtaButton
          href={`/event-rental${data.href}`}
          text={data.ctatext}
          className="rounded-sm w-full"
        />
      </CardContent>
    </Card>
  );
};

export default EventCard;
