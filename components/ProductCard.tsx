import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { LucideMonitor } from "lucide-react";
import { PiHardDrives, PiDevices } from "react-icons/pi";
import { cn, getStrapiURL } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
import { GiRadarSweep } from "react-icons/gi";
import { MdOutlineScreenshot, MdOutlineNetworkCheck } from "react-icons/md";
import { ProductSpecsProps } from "@/lib/definitions";
import { IoHardwareChipOutline } from "react-icons/io5";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import { TbSignalLte } from "react-icons/tb";
import { VscRadioTower } from "react-icons/vsc";

interface ProductCardImageProps {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface ProductCardItemsProps {
  ProductCardImage: ProductCardImageProps;
  Title: string;
  Description?: string;
  ProductCategory?: string;
  ProductSubCategory?: string;
  slug: string;
  id: number;
  Specs: ProductSpecsProps[];
  productcategory: {
    slug: string;
  };
}

//Render icons for specs base on the value
const IconProps = { className: "text-red-500", size: 24 };
const getIconForSpec = (spec: ProductSpecsProps) => {
  switch (spec.Spec.toLowerCase()) {
    case "display resolution":
      return <LucideMonitor {...IconProps} aria-label="Display resolution" />;
    case "screen size":
      return <MdOutlineScreenshot {...IconProps} aria-label="Screen size" />;
    case "ram":
      return <IoHardwareChipOutline {...IconProps} aria-label="RAM" />;
    case "range":
      return <GiRadarSweep {...IconProps} aria-label="Range" />;
    case "storage":
      return <PiHardDrives {...IconProps} aria-label="Storage" />;
    case "number of devices":
      return <PiDevices {...IconProps} aria-label="Devices" />;
    case "bandwidth":
      return <MdOutlineNetworkCheck {...IconProps} aria-label="Bandwidth" />;
    case "carrier":
      return <TbSignalLte {...IconProps} aria-label="Carrier" />;
    case "frequency":
      return <VscRadioTower {...IconProps} aria-label="Frequency" />;
    case "os":
      if (spec.value.toLowerCase().includes("android")) {
        return <AiOutlineAndroid {...IconProps} aria-label="Android OS" />;
      } else if (
        spec.value.toLowerCase().includes("ios") ||
        spec.value.toLowerCase().includes("ipados") ||
        spec.value.toLowerCase().includes("ipad os")
      ) {
        return <AiOutlineApple {...IconProps} aria-label="iOS/iPadOS" />;
      }
      return null;
    default:
      return null;
  }
};

const ProductCard = ({
  productCardItem,
  className,
}: {
  productCardItem: ProductCardItemsProps;
  className?: string;
}) => {
  //Destructure data
  const {
    ProductCardImage,
    Description,
    Title,
    Specs,
    id,
    slug,
    ProductCategory,
    ProductSubCategory,
    productcategory,
  } = productCardItem;

  const baseurl = getStrapiURL();
  let imageurl = "";
  if (ProductCardImage) imageurl = baseurl + ProductCardImage?.url;

  return (
    <Card
      className={cn(
        "h-full sm:max-w-xs justify-self-center flex flex-col justify-between border-2 border-dashed border-gray-400 rounded-none p-4 hover:border-red-500",
        className
      )}
    >
      <CardHeader className="p-0 lg:space-x-1">
        <Image
          src={imageurl}
          alt={ProductCardImage?.alternativeText || ""}
          width={200}
          height={200}
          className="self-center"
        />
        <CardTitle>{Title}</CardTitle>
        {/* <CardDescription className="line-clamp-3">
          {Description}
        </CardDescription> */}
      </CardHeader>

      <CardContent className="p-0 flex gap-4 justify-between py-2">
        {Specs.map((item) => (
          <div
            key={item.id}
            className="flex-1 min-w-min h-full border-2 p-1 rounded-sm border-gray-200 flex items-center justify-center flex-col text-center gap-1"
          >
            {getIconForSpec(item)}
            <span className="text-xs text-gray-700 text-center">
              {item.value}
            </span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-0 pt-2">
        {ProductCategory?.toLowerCase() === "laptop" && (
          <CtaButton
            href={`/${
              ProductCategory?.toLowerCase() === "laptop"
                ? "laptop-hire"
                : "technology-rental"
            }/${productcategory.slug}/${slug}`}
            text="Learn More"
            className="rounded-r-none w-full"
          />
        )}
        <AddToCartButton
          Title={Title}
          id={id}
          imageUrl={imageurl}
          ProductCategory={ProductCategory}
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
