import Image from "next/image";
import React from "react";
import { MdOutlineScreenshot, MdOutlineStorage } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Banner from "@/components/Banner";
import Link from "next/link";
import Faqs, { faqItemsProps } from "@/components/Faqs";
import ProductInfoTabs from "./_components/ProductInfoTabs";
import { PageProps, ProductInfoTabItemProps } from "@/lib/definitions";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";
import { PiHardDrives } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const FaqItemsData: faqItemsProps[] = [
  {
    id: 1,
    Question: "Is it accessible?",
    Answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    Question: "Is it styled?",
    Answer:
      "Yes. It comes with default styles that matches the other components aesthetic.",
  },
];

const TabItems: ProductInfoTabItemProps[] = [
  {
    value: "Description",
    content:
      "We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.",
  },
  {
    value: "Product Guide",
    content: "This is a guide on how to use the product.",
  },
];

const ProductCardItems: ProductCardItemsProps[] = [
  {
    image: "/ipad.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "16GB",
    storage: "512GB",
    display: "10.5",
  },
  {
    image: "/screen.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
  },
  {
    image: "/iphone.png",
    productTitle: "iPhone 14",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "7.5",
  },
  {
    image: "/printer.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
  },
];

async function Dell_E5440({ params }: PageProps) {
  return (
    <>
      <Banner title="DELL ES5440 LATITUDE" text="" />
      <section className="container p-8 flex items-center gap-10 justify-between flex-col-reverse lg:flex-row">
        <Image
          src="/imageframe.png"
          alt=""
          width={650}
          height={650}
          className="xl:min-w-min flex-1"
        />

        <div className="xl:min-w-min flex-1 flex flex-col items-center lg:items-start justify-between  gap-4">
          <h3 className="font-sans font-bold text-3xl text-center lg:text-left">
            Dell E5440 Latitude
          </h3>
          <p className="font-sans text-center lg:text-left">
            We at Laptop Rentals understand whether you&apos;re hosting a
            conference, trade show, or business event, having access to a
            conference, trade.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <SiTicktick className="text-primary-red" />
              We at Laptop Rentals understand
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <SiTicktick className="text-primary-red" />
              We at Laptop Rentals understand
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <SiTicktick className="text-primary-red" />
              We at Laptop Rentals understand
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-800">
              <SiTicktick className="text-primary-red" />
              We at Laptop Rentals understand
            </li>
          </ul>

          <h5 className="font-bold text-lg text-center lg:text-left">
            Specifications
          </h5>
          <div className="flex gap-2 flex-wrap mx-auto lg:mx-0 max-w-sm">
            <div className="min-w-min flex-1 border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1">
              <IoHardwareChipOutline className="text-red-500 size-8" />
              <span className="text-xs text-gray-700 text-center">
                Ram: 16 GB
              </span>
            </div>
            <div className="min-w-min flex-1 border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1">
              <PiHardDrives className="text-red-500 size-8" />
              <span className="text-xs text-gray-700 text-center">
                Storage: 512 GB
              </span>
            </div>
            <div className="min-w-min flex-1 border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1">
              <MdOutlineScreenshot className="text-red-500 size-8" />
              <span className="text-xs text-gray-700 text-center">
                Display: 16&quot;
              </span>
            </div>
          </div>
          <Button
            className="bg-primary-red text-white px-10 hover:bg-red-500"
            asChild
          >
            <Link href={"/form"}>Request Quote</Link>
          </Button>
        </div>
      </section>

      <ProductInfoTabs TabItems={TabItems} />
      <section className="container">
        <h3 className="text-[40px] font-bold text-center font-Barlow mt-10 mb-5">
          Related Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
          {ProductCardItems.map((product, index) => (
            <ProductCard key={index} productCardItem={product} />
          ))}
        </div>
      </section>
      <Faqs faqItems={FaqItemsData} />
    </>
  );
}

export default Dell_E5440;
