import Image from "next/image";
import React from "react";
import { MdOutlineScreenshot, MdOutlineStorage } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Banner from "@/components/Banner";
import Link from "next/link";
import Faqs, { faqItemsProps } from "@/components/Faqs";
import ProductInfoTabs from "./_components/ProductInfoTabs";
import { PageProps, ProductInfoTabItemProps } from "@/lib/definitions";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";

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
  {
    value: "Reviews",
    content: "These are reviews from customers who have used the product.",
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

      <div className="flex pl-10  items-center md:flex-row flex-col pt-5  gap-10 md:pt-10">
        <div>
          <Image
            src="/imageframe.png"
            alt=""
            width={1280}
            height={1280}
            className="w-full h-[20%] md:h-[700px] md:w-[1000px]"
          />
        </div>
        <div className="flex flex-col gap-2 md:pl-10">
          <h2 className="font-[800] font-Barlow text-[34px]">
            DELL E5440 LATITUDE
          </h2>
          <p className="line-clamp-2 text-gray text-[15px] font-Poppins font-#595959">
            We at Laptop Rentals understand whether you are hosting a
            conference, trade show, or business event, having access to a
            conference, trade.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center font-Poppins gap-6 font-medium text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
            <div className="flex items-center gap-6 font-Poppins font-medium text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
            <div className="flex items-center gap-6 font-Poppins font-medium text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
            <div className="flex items-center gap-6 font-medium font-Poppins text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
          </div>
          <h3 className="font-extrabold text-[20px] font-Poppins">
            Luggages Include
          </h3>
          <div className="flex gap-8">
            <div className="flex flex-col h-24 w-36 border-gray-300 rounded-md border-2 items-center justify-center">
              <IoHardwareChipOutline color="D61837" size={40} />
              <p className="text-[14px] font-light font-Poppins">Charger</p>
            </div>
            <div className="flex flex-col h-24 w-36 border-gray-300 rounded-md border-2 items-center justify-center">
              <MdOutlineStorage color="D61837" size={40} />
              <p className="text-[14px] font-light font-Poppins">Laptop</p>
            </div>
            <div className="flex flex-col h-24 w-36 border-gray-300 rounded-md border-2 items-center justify-center">
              <MdOutlineScreenshot color="D61837" size={40} />
              <p className="text-[14px] font-light font-Poppins">Power Cable</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex border-gray-300 rounded-sm h-10 w-48 border-2 items-center justify-center gap-6 mt-2 mb-2">
              <FaMinus />
              <Separator orientation="vertical" color="gray" />
              <p className="font-semibold text-[16px] font-Poppins">1</p>
              <Separator orientation="vertical" />
              <FaPlus />
            </div>
            <p className="font-semibold text-[20px] pl-5 font-Barlow">Qty</p>
          </div>
          <div className="flex h-10">
            <div className="flex bg-[#D61837] rounded-l-sm font-Poppins items-center pl-10 pr-10 justify-center text-white font-medium text-[16px] w-88">
              <Link href={"/form"}>Request Quote</Link>
            </div>
            <div className="flex bg-black w-20 items-center rounded-r-sm justify-center">
              <FaPlus color="white" size={25} />
            </div>
          </div>
        </div>
      </div>

      <ProductInfoTabs TabItems={TabItems} />

      <h3 className="text-[40px] font-bold text-center font-Barlow mt-10 mb-5">
        Related Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
        {ProductCardItems.map((product, index) => (
          <ProductCard key={index} productCardItem={product} />
        ))}
      </div>
      <Faqs faqItems={FaqItemsData} />
    </>
  );
}

export default Dell_E5440;
