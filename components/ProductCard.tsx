import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { IoHardwareChipOutline } from "react-icons/io5";
import { PiHardDrives } from "react-icons/pi";
import { MdOutlineScreenshot } from "react-icons/md";
import CtaButton from "./CtaButton";
import AddToCardButton from "./AddToCardButton";

export interface ProductCardItemsProps {
  image: string;
  productTitle: string;
  productDescription: string;
  ram: string;
  storage: string;
  display: string;
  category?: string;
  slug: string;
}

const ProductCard = ({
  productCardItem,
}: {
  productCardItem: ProductCardItemsProps;
}) => {
  //Destructure data
  const {
    display,
    image,
    productDescription,
    productTitle,
    ram,
    storage,
    slug,
  } = productCardItem;
  return (
    <Card className="sm:max-w-xs justify-self-center border-2 border-dashed border-gray-400 rounded-none p-4 hover:border-red-500">
      <CardHeader className="p-0 space-x-1">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="self-center"
        />
        <CardTitle>{productTitle}</CardTitle>
        <CardDescription>{productDescription} </CardDescription>
      </CardHeader>

      <CardContent className="p-0 flex gap-4 justify-between py-2">
        <div className="border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1">
          <IoHardwareChipOutline className="text-red-500 size-8" />
          <span className="text-xs text-gray-700 text-center">Ram: {ram}</span>
        </div>
        <div className="border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1">
          <PiHardDrives className="text-red-500 size-8" />
          <span className="text-xs text-gray-700 text-center">
            Storage: {storage}
          </span>
        </div>
        <div className="border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1">
          <MdOutlineScreenshot className="text-red-500 size-8" />
          <span className="text-xs text-gray-700 text-center">
            Display: {display}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-0 pt-2">
        <CtaButton
          href={`/techrental${slug}`}
          text="Learn More"
          className="w-full rounded-r-none"
        />
        <AddToCardButton />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
