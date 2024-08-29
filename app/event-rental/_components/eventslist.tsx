import React from "react";
import CardsSlider from "@/components/CardsSlider";
import EventCard from "@/components/EventCard";
import { EventCardProps } from "@/lib/definitions";
import { getEvents } from "@/data/loaders";
import { cn } from "@/lib/utils";

export type EventListTypes = {
  relatedEventsTitle?: string;
  relatedEventsText?: string;
  className?: string;
  currentEventSlug: string;
};

const Eventslist: React.FC<EventListTypes> = async ({
  relatedEventsText,
  relatedEventsTitle,
  className,
  currentEventSlug,
}) => {
  const eventCardsData = await getEvents();
  //Filter events by slug and render all events except the current
  const filteredEvents = eventCardsData.data.filter(
    (event: EventCardProps) => event.slug !== currentEventSlug
  );

  return (
    <section className={cn("p-8 pt-0 space-y-3 container", className)}>
      <h2 className="font-sans font-bold text-3xl lg:text-4xl max-w-3xl mx-auto text-center">
        {relatedEventsTitle ||
          "Laptop Rental: Transforming Events with Innovative IT Solutions"}
      </h2>
      <p className="text-sm xl:text-base md:px-10 mx-auto text-center text-gray-700">
        {relatedEventsText ||
          "We take pride in transforming events through our innovative IT solutions. Our commitment goes beyond merely providing technology; we aim to revolutionise how events unfold."}
      </p>
      <CardsSlider>
        {filteredEvents.map((event: EventCardProps) => (
          <EventCard key={event.id} data={event} />
        ))}
      </CardsSlider>
    </section>
  );
};

export default Eventslist;
