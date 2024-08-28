import Banner from "@/components/Banner";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { useCart } from "@/providers/CartContext";
import { Metadata } from "next";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Get A Quote",
  description: "",
  keywords: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/get-a-quote",
  },
};

export default function GetAQuote() {
  return (
    <>
      <Banner
        title="Get A Quote"
        text=""
        image={{
          url: "/get-a-quote-banner.jpg",
          alternativeText: "Get A Quote",
        }}
      />
      <Breadcrumbs className="sr-only" currentPage="Get A Quote" />

      <div className="container flex items-center flex-col lg:flex-row gap-8 justify-between p-8">
        <div className="space-y-4 flex-1 min-w-min">
          <strong className="bg-primary-red text-white text-base font-semibold uppercase rounded-sm px-2 py-1">
            Rent Event
          </strong>

          <div className="flex items-center gap-3">
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
          </div>

          <h2 className="font-bold text-4xl capitalize">
            Book an Event with us to Rent a tech
          </h2>
          <p className="text-gray-700 ">
            Host an unforgettable event by choosing our top-notch technology
            rental services. From cutting-edge IT equipment to seamless event
            management tools and services, we&apos;ve got your tech needs
            covered. Book your event with us and experience the seamless
            integration of advanced technology to elevate your gatherings.
            <br />
            <br />
            Our commitment is to provide the best in tech, ensuring your event
            is a resounding success. Explore our offerings, including short-term
            laptop rental for events or long-term, ensuring seamless tech
            solutions tailored to your needs. Let&apos;s make your event a
            tech-savvy triumph!
          </p>
        </div>
        <div className="w-full max-w-xl h-full shadow-md p-5 bg-primary-red text-white text-center space-y-4">
          <Image
            src="/logo_red.png"
            alt=""
            width={150}
            height={75}
            className="mx-auto"
          />

          <h2 className="font-bold text-3xl capitalize relative after:content-[''] after:block after:w-1/2 after:border-2 after:my-4 after:border-white after:border-dashed after:mx-auto">
            Rent your event
          </h2>

          <QuoteForm />
        </div>
      </div>
    </>
  );
}
