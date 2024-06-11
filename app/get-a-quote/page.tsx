import Banner from "@/components/Banner";
import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export default function GetAQuote() {
  return (
    <>
      <Banner title="Get A Quote" text="" />

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
            We at Laptop Rentals understand whether you&apos;re hosting a
            conference, trade show, or business event, having access to reliable
            and high-quality technology can make all.We at Laptop Rentals
            understand whether you&apos;.reliable and high-quality technology
            can make all.We at Laptop Rentals understand whether
            you&apos;.understand whether you&apos;.reliable and high-quality
            technology can make all.We at Laptop Rentals understand whether
            you&apos;.
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
