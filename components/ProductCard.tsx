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
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import { PiHardDrives } from "react-icons/pi";
import { MdOutlineScreenshot } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import CtaButton from "./CtaButton";
import AddToCartButton from "./AddToCartButton";
import { getStrapiURL } from "@/lib/utils";

interface ProductCardImageProps {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

interface ProductSpecsProps {
  value: string;
  id: number;
}

export interface ProductCardItemsProps {
  ProductImage: ProductCardImageProps;
  Title: string;
  Description: string;
  ProductCategory?: string;
  ProductSubCategory?: string;
  id: number;
  Specs: ProductSpecsProps[];
}

const getIconForSpec = (specValue: string) => {
  if (specValue.toLowerCase().includes("ram")) {
    return <IoHardwareChipOutline className="text-red-500 size-8" />;
  } else if (specValue.toLowerCase().includes("storage")) {
    return <PiHardDrives className="text-red-500 size-8" />;
  } else if (specValue.toLowerCase().includes("display")) {
    return <MdOutlineScreenshot className="text-red-500 size-8" />;
  } else if (specValue.toLowerCase().includes("android")) {
    return <AiOutlineAndroid className="text-red-500 size-8" />;
  } else if (
    specValue.toLowerCase().includes("ios") ||
    specValue.toLowerCase().includes("ipados")
  ) {
    return <AiOutlineApple className="text-red-500 size-8" />;
  } else if (
    specValue.toLowerCase().includes("res") ||
    specValue.toLowerCase().includes("size")
  ) {
    return <SlSizeFullscreen className="text-red-500 size-6" />;
  }
  return null;
};

const ProductCard = ({
  productCardItem,
}: {
  productCardItem: ProductCardItemsProps;
}) => {
  //Destructure data
  const { ProductImage, Description, Title, Specs, id } = productCardItem;

  const baseurl = getStrapiURL();
  let imageurl = "";
  if (ProductImage) imageurl = baseurl + ProductImage?.url;

  return (
    <Card className="h-full sm:max-w-xs justify-self-center flex flex-col justify-between border-2 border-dashed border-gray-400 rounded-none p-4 hover:border-red-500">
      <CardHeader className="p-0 lg:space-x-1">
        <Image
          src={imageurl}
          alt={ProductImage?.alternativeText || ""}
          width={200}
          height={200}
          className="self-center"
        />
        <CardTitle>{Title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {Description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 flex gap-4 justify-between py-2">
        {Specs.map((item) => (
          <div
            key={item.id}
            className="border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1"
          >
            {getIconForSpec(item.value)}{" "}
            <span className="text-xs text-gray-700 text-center">
              {item.value}
            </span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-0 pt-2">
        {/* <CtaButton
          href={`/get-a-quote`}
          text="Get A Quote"
          className="w-full rounded-r-none"
        /> */}
        <AddToCartButton Title={Title} id={id} imageUrl={imageurl} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
