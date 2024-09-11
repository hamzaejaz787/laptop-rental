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
import ProductIconTooltip from "./ProductIconTooltip";
import Link from "next/link";

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
  //Stores specs names and their corresponding icons
  const iconMap: Record<string, JSX.Element> = {
    "display resolution": (
      <LucideMonitor {...IconProps} aria-label="Display resolution" />
    ),
    "screen size": (
      <MdOutlineScreenshot {...IconProps} aria-label="Screen size" />
    ),
    ram: <IoHardwareChipOutline {...IconProps} aria-label="RAM" />,
    range: <GiRadarSweep {...IconProps} aria-label="Range" />,
    storage: <PiHardDrives {...IconProps} aria-label="Storage" />,
    "number of devices": <PiDevices {...IconProps} aria-label="Devices" />,
    bandwidth: <MdOutlineNetworkCheck {...IconProps} aria-label="Bandwidth" />,
    carrier: <TbSignalLte {...IconProps} aria-label="Carrier" />,
    frequency: <VscRadioTower {...IconProps} aria-label="Frequency" />,
  };

  const specKey = spec.Spec.toLowerCase();

  //Handle operating system icons
  if (specKey === "os") {
    if (spec.value.toLowerCase().includes("android")) {
      return (
        <ProductIconTooltip value={spec.tooltiptext || spec.Spec}>
          <AiOutlineAndroid {...IconProps} aria-label="Android OS" />
        </ProductIconTooltip>
      );
    } else if (
      spec.value.toLowerCase().includes("ios") ||
      spec.value.toLowerCase().includes("ipados") ||
      spec.value.toLowerCase().includes("ipad os")
    ) {
      return (
        <ProductIconTooltip value={spec.tooltiptext || spec.Spec}>
          <AiOutlineApple {...IconProps} aria-label="iOS/iPadOS" />
        </ProductIconTooltip>
      );
    }
  }

  if (specKey in iconMap) {
    const icon = iconMap[specKey];
    return (
      <ProductIconTooltip value={spec.tooltiptext || spec.Spec}>
        {icon}
      </ProductIconTooltip>
    );
  }

  return null;
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
        "h-full sm:max-w-xs justify-self-center flex flex-col justify-between border-2 border-dashed border-gray-400 rounded-none p-4 hover:border-red-500 group",
        className
      )}
    >
      <CardHeader className="p-0 lg:space-x-1">
        {ProductCategory?.toLowerCase() === "laptop" ? (
          <Link
            className="w-fit mx-auto"
            href={`/${
              ProductCategory?.toLowerCase() === "laptop"
                ? "laptop-hire"
                : "technology-rental"
            }/${productcategory.slug}/${slug}`}
          >
            <Image
              src={imageurl}
              alt={ProductCardImage?.alternativeText || ""}
              width={200}
              height={200}
              className="self-center group-hover:scale-105 transition-transform duration-150 ease-in"
            />
          </Link>
        ) : (
          <Image
            src={imageurl}
            alt={ProductCardImage?.alternativeText || ""}
            width={200}
            height={200}
            className="self-center group-hover:scale-105 transition-transform duration-150 ease-in"
          />
        )}
        <CardTitle>{Title}</CardTitle>
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
            className="rounded-r-none w-full px-4 md:px-4"
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
